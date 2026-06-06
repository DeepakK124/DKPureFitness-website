import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { ChevronDown, Zap, Users, Clock } from 'lucide-react';

import content from '@/content/hero.json';

const HERO_IMG = content.background_image;

const iconMap = {
  "SESSIONS COMPLETED": Zap,
  "ACTIVE MEMBERS": Users,
  "DAILY ACCESS": Clock
};

import Magnet from '@/components/Magnet/Magnet';



const stats = content.stats.map(s => ({
  icon: iconMap[s.label] || Zap,
  value: s.value,
  label: s.label
}));

function AnimatedCounter({ value }) {
  // Extract number and suffix (e.g. "125+" -> 125 and "+")
  const numericMatch = value.match(/(\d+)(.*)/);
  if (!numericMatch) return <span>{value}</span>;
  
  const target = parseInt(numericMatch[1], 10);
  const suffix = numericMatch[2];
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, count, target]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMG}
          alt="Strength training at DK Pure Fitness gym near Kuntloor Hyderabad"
          fetchpriority="high"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      {/* Split watermark text */}
      <motion.span
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute top-8 left-8 font-display text-[5rem] sm:text-[8rem] md:text-[14rem] leading-none text-primary select-none pointer-events-none">
        
        {content.watermark1}
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute bottom-36 sm:bottom-24 right-8 font-display text-[5rem] sm:text-[8rem] md:text-[14rem] leading-none text-primary select-none pointer-events-none">
        
        {content.watermark2}
      </motion.span>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 pb-20 sm:pb-28 md:pb-24 pt-28 sm:pt-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4">
            
            <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              {content.label}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-foreground uppercase leading-[0.9] mb-4 sm:mb-6">
            
            {content.title_part1}
            <br />
            <span className="text-primary">{content.title_highlight}</span>
            <br />
            {content.title_part2}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mb-6 sm:mb-8">
            
            {content.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-16">
            
            <Magnet padding={50} disabled={false} magnetStrength={10}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-1.5 sm:px-8 sm:py-2 bg-primary text-primary-foreground font-mono text-xs sm:text-sm tracking-widest hover:bg-primary/80 transition-all duration-300">
                
                {content.cta1_text}
              </a>
            </Magnet>
            <Magnet padding={50} disabled={false} magnetStrength={10}>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-1.5 sm:px-8 sm:py-2 border border-primary text-primary font-mono text-xs sm:text-sm tracking-widest hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                
                {content.cta2_text}
              </a>
            </Magnet>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-wrap gap-6 sm:gap-8 md:gap-16">
            
            {stats.map((stat) =>
            <div key={stat.label} className="flex items-center gap-2 sm:gap-3">
                <stat.icon className="w-4 h-4 text-primary shrink-0" />
                <div>
                  <div className="font-display text-lg sm:text-xl md:text-2xl text-foreground">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="font-mono text-[9px] sm:text-[10px] tracking-widest text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden sm:flex">
          
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}>
            
            <ChevronDown className="w-4 h-4 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>);

}
