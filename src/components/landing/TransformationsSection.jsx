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
    <section id="transformations" className="relative py-24 md:py-32 bg-[#0A0A0B]">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative bg-[#111113] border border-white/5 p-8 md:p-10 group hover:border-[#2D5BFF]/20 transition-all duration-500"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-[#2D5BFF]/20 mb-6" />

              {/* Transformation tag */}
              {t.transformation && (
                <span className="inline-block font-mono text-[10px] tracking-widest text-[#2D5BFF] border border-[#2D5BFF]/20 px-3 py-1 mb-6">
                  {t.transformation.toUpperCase()}
                </span>
              )}

              <p className="text-[#F3F4F6]/90 text-sm md:text-base leading-relaxed mb-8">
                "{t.quote}"
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <span className="font-display text-sm text-[#F3F4F6] uppercase">
                  {t.member_name}
                </span>
                {t.rating && (
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#2D5BFF] text-[#2D5BFF]" />
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