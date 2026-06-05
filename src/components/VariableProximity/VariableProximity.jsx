import { forwardRef, useMemo, useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './VariableProximity.css';

function useMousePositionRef(containerRef) {
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (x, y) => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        positionRef.current = { x: x - rect.left, y: y - rect.top };
      } else {
        positionRef.current = { x, y };
      }
    };

    const handleMouseMove = (ev) => {
      updatePosition(ev.clientX, ev.clientY);
    };

    const handleTouchMove = (ev) => {
      const touch = ev.touches[0];
      updatePosition(touch.clientX, touch.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [containerRef]);

  return positionRef;
}

const VariableProximity = forwardRef((props, ref) => {
  const {
    label,
    fromFontVariationSettings,
    toFontVariationSettings,
    containerRef,
    radius = 50,
    falloff = 'linear',
    className = '',
    onClick,
    ...restProps
  } = props;

  const letterRefs = useRef([]);
  const [interpolatedSettings, setInterpolatedSettings] = useState([]);
  const mousePositionRef = useMousePositionRef(containerRef);

  // Parse font variation settings
  const parsedSettings = useMemo(() => {
    const parseSettings = (settingsStr) => {
      const settings = new Map();
      const regex = /'([^']+)'\s*([\d.]+)/g;
      let match;
      while ((match = regex.exec(settingsStr)) !== null) {
        settings.set(match[1], parseFloat(match[2]));
      }
      return settings;
    };
    return {
      from: parseSettings(fromFontVariationSettings),
      to: parseSettings(toFontVariationSettings),
    };
  }, [fromFontVariationSettings, toFontVariationSettings]);

  const calculateDistance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  const calculateFalloff = (distance) => {
    const normalizedDistance = Math.min(Math.max(1 - distance / radius, 0), 1);
    switch (falloff) {
      case 'exponential':
        return Math.pow(normalizedDistance, 2);
      case 'gaussian':
        return Math.exp(-Math.pow(distance / (radius / 2), 2) / 2);
      case 'linear':
      default:
        return normalizedDistance;
    }
  };

  useEffect(() => {
    let frameId;
    const updateInterpolations = () => {
      const mouseX = mousePositionRef.current.x;
      const mouseY = mousePositionRef.current.y;

      const newSettings = letterRefs.current.map((letterRef) => {
        if (!letterRef) return fromFontVariationSettings;

        const rect = letterRef.getBoundingClientRect();
        const containerRect = containerRef?.current?.getBoundingClientRect() || { left: 0, top: 0 };
        const letterCenterX = rect.left - containerRect.left + rect.width / 2;
        const letterCenterY = rect.top - containerRect.top + rect.height / 2;

        const distance = calculateDistance(mouseX, mouseY, letterCenterX, letterCenterY);
        if (distance >= radius) {
          return fromFontVariationSettings;
        }

        const falloffValue = calculateFalloff(distance);
        const newVariationSettings = Array.from(parsedSettings.from.entries())
          .map(([axis, fromValue]) => {
            const toValue = parsedSettings.to.get(axis) || fromValue;
            const interpolatedValue = fromValue + (toValue - fromValue) * falloffValue;
            return `'${axis}' ${interpolatedValue}`;
          })
          .join(', ');

        return newVariationSettings;
      });

      setInterpolatedSettings(newSettings);
      frameId = requestAnimationFrame(updateInterpolations);
    };

    frameId = requestAnimationFrame(updateInterpolations);
    return () => cancelAnimationFrame(frameId);
  }, [containerRef, radius, falloff, parsedSettings, mousePositionRef, fromFontVariationSettings]);

  const words = label.split(' ');
  let letterIndex = 0;

  return (
    <span
      ref={ref}
      className={`variable-proximity ${className}`}
      onClick={onClick}
      {...restProps}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split('').map((letter) => {
            const currentLetterIndex = letterIndex++;
            return (
              <motion.span
                key={currentLetterIndex}
                ref={(el) => {
                  letterRefs.current[currentLetterIndex] = el;
                }}
                style={{
                  fontVariationSettings:
                    interpolatedSettings[currentLetterIndex] || fromFontVariationSettings,
                  display: 'inline-block',
                }}
                aria-hidden="true"
              >
                {letter}
              </motion.span>
            );
          })}
          {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
      <span className="sr-only">{label}</span>
    </span>
  );
});

VariableProximity.displayName = 'VariableProximity';
export default VariableProximity;
