import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Dumbbell, Activity, HeartPulse, Youtube, Leaf } from 'lucide-react';

import content from '@/content/about.json';

const iconMap = {
  "OPEN-AIR TRAINING": Leaf,
  "WEIGHT TRAINING": Dumbbell,
  "BODYBUILDING": Activity,
  "YOGA": HeartPulse,
};

const HIGHLIGHTS = content.highlights.map(h => ({
  icon: iconMap[h.title] || Dumbbell,
  title: h.title,
  description: h.description
}));

const GALLERY = content.gallery;

export default function AboutSection() {
  const [[currentIndex, direction], setPage] = useState([0, 1]);
  const [slideshowReady, setSlideshowReady] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = setInterval(() => {
      setPage([((currentIndex + 1) % GALLERY.length), 1]);
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex, shouldReduceMotion]);

  return (
    <section id="about" className="relative py-16 sm:py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center mb-10 sm:mb-16 md:mb-20">

          {/* Left: Slideshow */}
          <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden border border-border group bg-muted/20 flex-shrink-0">
            {/* Skeleton — shown until first image fires onLoad */}
            {!slideshowReady && (
              <div className="absolute inset-0 bg-muted animate-pulse z-0" />
            )}
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={currentIndex}
                src={GALLERY[currentIndex].src}
                alt={GALLERY[currentIndex].alt}
                custom={direction}
                variants={{
                  enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%" }),
                  center: { zIndex: 1, x: 0 },
                  exit: (dir) => ({ zIndex: 0, x: dir < 0 ? "100%" : "-100%" }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }
                }
                onLoad={() => setSlideshowReady(true)}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Nature badge overlay */}
            <div className="absolute top-4 left-4 z-20">
              <span className="inline-flex items-center gap-1.5 font-mono text-[9px] tracking-widest text-primary-foreground bg-primary/80 backdrop-blur-sm px-3 py-1.5 uppercase">
                <Leaf className="w-2.5 h-2.5" />
                Open-Air Facility
              </span>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
              {GALLERY.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setPage([idx, idx > currentIndex ? 1 : -1])}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-primary w-6 sm:w-8' : 'bg-white/50 hover:bg-white/80 w-1.5 sm:w-2'}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Header Content */}
          <div className="w-full lg:w-1/2 max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-xs tracking-[0.3em] text-[#F97316] uppercase block mb-3"
            >
              {content.label}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground uppercase leading-[0.95] mb-4 sm:mb-6"
            >
              {content.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-5"
            >
              {content.description}
            </motion.p>

            {/* Environment badges */}
            {content.environment_badges && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-2 mb-5"
              >
                {content.environment_badges.map((badge, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-primary border border-primary/30 bg-primary/5 px-3 py-1.5 uppercase"
                  >
                    <Leaf className="w-2.5 h-2.5 flex-shrink-0" />
                    {badge}
                  </span>
                ))}
              </motion.div>
            )}

            {/* YouTube callout */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground bg-card border border-border p-3 sm:p-4 max-w-2xl shadow-sm"
            >
              <Youtube className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>{content.youtube_callout_strong}</strong>{' '}
                {content.youtube_callout_text}{' '}
                <a
                  href={content.youtube_link_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors underline underline-offset-4"
                >
                  {content.youtube_link_text}
                </a>.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Highlights Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {HIGHLIGHTS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`group p-4 sm:p-6 md:p-8 border-t border-border ${
                idx < HIGHLIGHTS.length - 1 ? 'lg:border-r' : ''
              } ${idx % 2 === 0 ? 'sm:border-r lg:border-r' : 'sm:border-r-0 lg:border-r'} ${
                idx === HIGHLIGHTS.length - 1 ? 'lg:border-r-0' : ''
              } hover:bg-card transition-colors duration-500`}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-colors flex-shrink-0">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-sm text-foreground uppercase mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
