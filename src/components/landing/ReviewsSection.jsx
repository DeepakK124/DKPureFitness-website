import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

import content from '@/content/reviews.json';

const REVIEWS = content.items;

// Duplicate for seamless loop
const DOUBLED = [...REVIEWS, ...REVIEWS];

function ReviewCard({ review }) {
  return (
    <div className="flex-shrink-0 w-56 sm:w-64 md:w-80 bg-card border border-border hover:border-primary/20 transition-all duration-500 p-3 sm:p-4 md:p-6 flex flex-col shadow-sm">
      <div className="flex gap-1 mb-3 md:mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-3 h-3 md:w-3.5 md:h-3.5 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-foreground/85 text-xs md:text-sm leading-relaxed flex-1 mb-4 md:mb-5">
        "{review.review}"
      </p>
      <div className="pt-3 border-t border-border">
        <span className="font-display text-[10px] md:text-xs text-primary uppercase tracking-wide">
          {review.name}
        </span>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  const trackWidth = REVIEWS.length * (320 + 16); // card width + gap

  return (
    <section id="reviews" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 mb-8 sm:mb-14">
        <div>
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
      </div>

      {/* Edge-to-edge Endless scroll track */}
      <div className="relative w-full overflow-hidden mt-8 sm:mt-12">
        {/* Subtle Fade edges (optional, removed if they want pure edge-to-edge without fade) */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 sm:gap-6"
          animate={{ x: [0, -trackWidth] }}
          transition={{
            repeat: Infinity,
            duration: REVIEWS.length * 5,
            ease: 'linear',
          }}
          style={{ width: `${trackWidth * 2}px` }}
        >
          {DOUBLED.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}