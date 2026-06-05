import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { X } from 'lucide-react';


import content from '@/content/gallery.json';

const GALLERY_ITEMS = content.items;

const SHAPE_MAP = {
  'Portrait': { css: 'w-[200px] md:w-[350px]', mWidth: 200, dWidth: 350 },
  'Square': { css: 'w-[220px] md:w-[550px]', mWidth: 220, dWidth: 550 },
  'Landscape': { css: 'w-[280px] md:w-[650px]', mWidth: 280, dWidth: 650 },
  'Ultra Wide': { css: 'w-[320px] md:w-[850px]', mWidth: 320, dWidth: 850 },
};

const TRIPLED = [...GALLERY_ITEMS, ...GALLERY_ITEMS, ...GALLERY_ITEMS];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollRef = useRef(null);

  // Calculate total track width for one set of items + gaps
  const gap = 16; // gap-4
  const totalMobileWidth = GALLERY_ITEMS.reduce((acc, item) => acc + (SHAPE_MAP[item.shape || 'Landscape'].mWidth) + gap, 0);
  const totalDesktopWidth = GALLERY_ITEMS.reduce((acc, item) => acc + (SHAPE_MAP[item.shape || 'Landscape'].dWidth) + gap, 0);

  const [trackWidth, setTrackWidth] = useState(totalDesktopWidth);

  useEffect(() => {
    const handleResize = () => {
      setTrackWidth(window.innerWidth < 768 ? totalMobileWidth : totalDesktopWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [totalMobileWidth, totalDesktopWidth]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || trackWidth === 0) return;

    // Initialize to middle track to allow scrolling left or right
    if (el.scrollLeft === 0) {
      el.scrollLeft = trackWidth;
    }

    let animationFrameId;
    let lastTime = performance.now();
    const speed = 0.05; // Pixels per millisecond

    const animate = (currentTime) => {
      const delta = currentTime - lastTime;
      el.scrollLeft -= delta * speed;
      
      // Handle bounds for infinite scroll in both directions
      if (el.scrollLeft <= 0) {
        el.scrollLeft += trackWidth;
      } else if (el.scrollLeft >= trackWidth * 2) {
        el.scrollLeft -= trackWidth;
      }
      
      lastTime = currentTime;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [trackWidth]);

  return (
    <section id="gallery" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F97316]/30 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 mb-8 sm:mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
          <div className="flex-1">
            <span className="font-mono text-xs tracking-[0.3em] text-[#F97316] uppercase block mb-3 text-center md:text-left">
              {content.label}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-foreground uppercase leading-[0.95] mb-4 sm:mb-6 text-center md:text-left">
              {content.title}
            </h2>
          </div>
          
          <div className="flex flex-col gap-4 md:items-end">
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl text-center md:text-right">
              {content.description}
            </p>
          </div>
        </div>
      </div>

      {/* Endless Scroll Container */}
      <div 
        className="relative overflow-x-auto [&::-webkit-scrollbar]:hidden" 
        style={{ scrollbarWidth: 'none' }}
        ref={scrollRef}
      >
        <div 
          className="flex gap-4 w-max"
        >
          {TRIPLED.map((column, colIdx) => (
            <div key={colIdx} className={`flex-none h-[220px] sm:h-[280px] md:h-[550px] ${SHAPE_MAP[column.shape || 'Landscape'].css}`}>
              {column.type === 'wide' ? (
                <div 
                  onClick={() => setSelectedImage(column)}
                  className="w-full h-full relative overflow-hidden group/item cursor-pointer border border-border hover:border-primary/30 transition-colors duration-500"
                >
                  <img
                    src={column.src}
                    alt={column.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-105"
                  />
                </div>
              ) : (
                <div className="flex flex-col gap-4 h-full w-full">
                  {column.images.map((img, imgIdx) => (
                    <div 
                      key={imgIdx}
                      onClick={() => setSelectedImage(img)}
                      className="flex-1 relative overflow-hidden group/item cursor-pointer border border-border hover:border-primary/30 transition-colors duration-500"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-105"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button - Top Left Outside */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 left-0 md:-left-12 p-2 text-muted-foreground hover:text-primary transition-colors bg-secondary/50 md:bg-transparent rounded-full md:rounded-none"
              >
                <X className="w-8 h-8" />
              </button>

              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-auto h-auto max-w-full max-h-[85vh] object-contain border border-border"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}