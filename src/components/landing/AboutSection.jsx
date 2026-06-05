import { motion } from 'framer-motion';
import { Dumbbell, Activity, Music, HeartPulse, Youtube } from 'lucide-react';

import content from '@/content/about.json';

const iconMap = {
  "WEIGHT TRAINING": Dumbbell,
  "BODYBUILDING": Activity,
  "ZUMBA": Music,
  "YOGA": HeartPulse
};

const HIGHLIGHTS = content.highlights.map(h => ({
  icon: iconMap[h.title] || Dumbbell,
  title: h.title,
  description: h.description
}));

const GALLERY = content.gallery;

export default function AboutSection() {
  return (
    <section id="about" className="relative py-16 sm:py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="mb-8 sm:mb-12 md:mb-16 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs tracking-[0.3em] text-primary uppercase block mb-3"
          >
            {content.label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-foreground uppercase leading-[0.95] mb-4 sm:mb-6"
          >
            {content.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed"
          >
            {content.description}
          </motion.p>
          <motion.div
             initial={{ opacity: 0, y: 15 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="mt-4 sm:mt-6 flex items-start gap-3 text-xs sm:text-sm text-muted-foreground bg-card border border-border p-3 sm:p-4 max-w-2xl shadow-sm"
          >
            <Youtube className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>{content.youtube_callout_strong}</strong> {content.youtube_callout_text} <a href={content.youtube_link_url} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors underline underline-offset-4">{content.youtube_link_text}</a>.
            </p>
          </motion.div>
        </div>

        {/* Asymmetric Gallery Mosaic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-1.5 sm:gap-2 md:gap-3 mb-10 sm:mb-16 md:mb-20"
        >
          {GALLERY.map((img, idx) => (
            <div
              key={idx}
              className={`${img.span} relative overflow-hidden border border-border group`}
            >
              <div className="relative w-full h-full min-h-[140px] sm:min-h-[180px] md:min-h-[240px]">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </motion.div>

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
