import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

import testimonialsData from '@/content/testimonials.json';
import pageData from '@/content/page-content.json';

const content = pageData.transformations;
const TESTIMONIALS = testimonialsData.items;

export default function TransformationsSection() {
  return (
    <section id="transformations" className="relative py-16 sm:py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="mb-10 sm:mb-16 md:mb-20">
          <span className="font-mono text-xs tracking-[0.3em] text-[#F97316] uppercase block mb-3 text-center">
            {content.label}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-foreground uppercase leading-[0.95] mb-4 sm:mb-6 text-center">
            {content.title}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-center">
            {content.description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:grid md:grid-cols-3 gap-4 md:gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="w-[calc(50%-0.5rem)] md:w-auto relative bg-card border border-border p-4 md:p-10 group hover:border-primary/20 transition-all duration-500 shadow-sm"
            >
              {/* Quote icon */}
              <Quote className="w-5 h-5 md:w-8 md:h-8 text-primary mb-3 md:mb-6" />

              {/* Transformation tag */}
              {t.transformation && (
                <span className="inline-block font-mono text-[8px] md:text-[10px] tracking-widest text-primary border border-primary/20 px-2 py-0.5 md:px-3 md:py-1 mb-3 md:mb-6 leading-tight">
                  {t.transformation.toUpperCase()}
                </span>
              )}

              <p className="text-foreground/90 text-[10px] md:text-base leading-relaxed mb-4 md:mb-8">
                "{t.quote}"
              </p>

              <div className="flex flex-wrap items-center justify-between pt-3 md:pt-6 border-t border-border gap-2">
                <span className="font-display text-[10px] md:text-sm text-foreground uppercase">
                  {t.member_name}
                </span>
                {t.rating && (
                  <div className="flex gap-0.5 md:gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 md:w-3 md:h-3 fill-primary text-primary" />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}