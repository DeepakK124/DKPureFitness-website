import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Wind, Sun, TreePine } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: Leaf,
    title: 'NATURE-INTEGRATED',
    description: 'Surrounded by greenery, our gym blends the intensity of iron with the calm of nature — so every session feels refreshing, not suffocating.',
  },
  {
    icon: Wind,
    title: 'NATURALLY VENTILATED',
    description: 'No recycled AC air. Our open-air design lets fresh breeze flow through every training zone, keeping you cool and energised through every rep.',
  },
  {
    icon: Sun,
    title: 'OPEN-AIR TRAINING',
    description: 'Step outside into our lawn training area for functional workouts, stretching, and yoga bathed in natural light and open skies.',
  },
  {
    icon: TreePine,
    title: 'SPACIOUS LAYOUT',
    description: 'No cramped corners or overcrowded floors. Every piece of equipment has room to breathe — and so do you.',
  },
];

const ABOUT_IMAGES = [
  '/DKPF Pics/outside lawn.webp',
  '/DKPF Pics/outside lawn 1.webp',
  '/DKPF Pics/unnamed.webp',
  '/DKPF Pics/yoga session.webp'
];

export default function AboutSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % ABOUT_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase block mb-3">
            01 — About Us
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground uppercase leading-[0.95] mb-6">
            Not Your Typical<br />Gym.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
            DK Pure Fitness isn't built behind sealed walls and artificial lighting.
            We designed our space around an open-air philosophy — where fresh air,
            natural light, and green surroundings are as much a part of your
            workout as the iron itself. Train hard, breathe easy.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Slideshow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] overflow-hidden border border-border bg-muted/20"
          >
            <AnimatePresence mode="popLayout">
              <motion.img
                key={currentImageIndex}
                src={ABOUT_IMAGES[currentImageIndex]}
                alt="Gym facilities at DK Pure Fitness Hyderabad"
                loading="lazy"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            
            {/* Slideshow indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {ABOUT_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex ? 'bg-primary w-4' : 'bg-primary/40 hover:bg-primary/60'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {HIGHLIGHTS.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group p-5 bg-card border border-border hover:border-primary/25 transition-all duration-500 shadow-sm"
              >
                <div className="w-9 h-9 flex items-center justify-center bg-primary/10 border border-primary/20 mb-4 group-hover:border-primary/40 transition-colors">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-display text-sm text-foreground uppercase mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
