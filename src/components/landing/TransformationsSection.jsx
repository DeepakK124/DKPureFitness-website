import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 'tt1',
    member_name: 'RAHUL R.',
    quote: 'DK Pure Fitness completely rewired my approach to fitness. The trainers don\'t just coach—they architect your transformation from the ground up. Down 25kg and stronger than ever.',
    transformation: 'Lost 25kg in 8 months',
    rating: 5,
  },
  {
    id: 'tt2',
    member_name: 'PRIYA K.',
    quote: 'The precision of the programming here is unmatched. Every session feels purposeful. I went from struggling with bodyweight movements to competing in powerlifting.',
    transformation: 'Beginner to competitor in 12 months',
    rating: 5,
  },
  {
    id: 'tt3',
    member_name: 'ANONYMOUS',
    quote: 'The environment at DK Pure Fitness is what sets it apart. No egos, just focused athletes pushing each other. The facilities and recovery zone are world-class.',
    transformation: 'Gained 12kg lean muscle',
    rating: 5,
  },
];

export default function TransformationsSection() {
  return (
    <section id="transformations" className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2D5BFF]/30 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-20">
          <span className="font-mono text-xs tracking-[0.3em] text-[#2D5BFF] uppercase block mb-3">
            02 — Proof of Performance
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-[#F3F4F6] uppercase leading-[0.95] mb-4">
            TRANS-<br />FORMATIONS
          </h2>
        </div>

        <div className="flex flex-wrap justify-center md:grid md:grid-cols-3 gap-4 md:gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="w-[calc(50%-0.5rem)] md:w-auto relative bg-[#111113] border border-white/5 p-4 md:p-10 group hover:border-[#2D5BFF]/20 transition-all duration-500"
            >
              {/* Quote icon */}
              <Quote className="w-5 h-5 md:w-8 md:h-8 text-[#2D5BFF]/20 mb-3 md:mb-6" />

              {/* Transformation tag */}
              {t.transformation && (
                <span className="inline-block font-mono text-[8px] md:text-[10px] tracking-widest text-[#2D5BFF] border border-[#2D5BFF]/20 px-2 py-0.5 md:px-3 md:py-1 mb-3 md:mb-6 leading-tight">
                  {t.transformation.toUpperCase()}
                </span>
              )}

              <p className="text-[#F3F4F6]/90 text-[10px] md:text-base leading-relaxed mb-4 md:mb-8">
                "{t.quote}"
              </p>

              <div className="flex flex-wrap items-center justify-between pt-3 md:pt-6 border-t border-white/5 gap-2">
                <span className="font-display text-[10px] md:text-sm text-[#F3F4F6] uppercase">
                  {t.member_name}
                </span>
                {t.rating && (
                  <div className="flex gap-0.5 md:gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 md:w-3 md:h-3 fill-[#2D5BFF] text-[#2D5BFF]" />
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