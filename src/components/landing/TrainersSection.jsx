import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import content from '@/content/trainers.json';

const TRAINERS = content.items;

function TrainerCard({ trainer, idx, onMobileClick }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: shouldReduceMotion ? 0 : idx * 0.1 }}
      onClick={() => {
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
          onMobileClick(trainer);
        }
      }}
      className="w-full max-w-sm md:max-w-5xl flex-shrink-0 group relative bg-card border border-border hover:border-primary/30 transition-all duration-500 overflow-hidden flex flex-col md:flex-row shadow-sm cursor-pointer md:cursor-default md:min-h-[400px]"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] md:aspect-auto md:w-[360px] lg:w-[440px] overflow-hidden flex-shrink-0">
        {/* Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse z-10" />
        )}
        <img
          src={trainer.image_url}
          alt={`Personal trainer ${trainer.name} at DK Pure Fitness gym Hyderabad`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        {/* Scanning line effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20">
          <div className="absolute left-0 right-0 h-px bg-primary/60 animate-pulse" style={{ top: '50%' }} />
        </div>
      </div>

      {/* Info */}
      <div className="p-4 md:p-8 lg:p-12 flex flex-col flex-grow justify-center">
        <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-2 md:mb-4">
          <h3 className="font-display text-xl sm:text-2xl md:text-4xl text-foreground uppercase">
            {trainer.name}
          </h3>
          {idx === 0 && (
            <span className="font-mono text-[10px] md:text-sm tracking-widest text-primary-foreground bg-primary px-2 py-1 md:px-3 md:py-1.5 flex-shrink-0">
              OWNER
            </span>
          )}
        </div>
        <p className="font-mono text-xs md:text-base tracking-widest text-primary mb-4 md:mb-6 leading-tight">
          {trainer.specialty.toUpperCase()}
        </p>

        <p className="hidden md:block text-muted-foreground text-sm md:text-base leading-relaxed mb-8 max-w-3xl">
          {trainer.bio}
        </p>

        <div className="hidden md:flex border-t border-border pt-6 mt-auto">
          <a
            href={trainer.social_url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest text-primary hover:text-foreground underline underline-offset-4 decoration-primary/40 hover:decoration-foreground transition-all uppercase inline-block"
          >
            Visit Profile
          </a>
        </div>

        <div className="mt-4 pt-3 border-t border-border/50 md:hidden flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">Tap for bio</span>
          <span className="text-primary text-base leading-none">→</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function TrainersSection() {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  return (
    <section id="trainers" className="relative py-16 sm:py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F97316]/30 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-16">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-[#F97316] uppercase block mb-3">
              {content.label}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-foreground uppercase leading-[0.95] mb-4 sm:mb-6">
              {content.title}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              {content.description}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 md:gap-6 justify-start">
          {TRAINERS.map((trainer, idx) => (
            <TrainerCard
              key={trainer.name}
              trainer={trainer}
              idx={idx}
              onMobileClick={setSelectedTrainer}
            />
          ))}

          {/* Mobile Popup */}
          <Dialog open={!!selectedTrainer} onOpenChange={(open) => !open && setSelectedTrainer(null)}>
            <DialogContent className="w-[90vw] max-w-sm bg-card border-border p-6 shadow-xl text-left">
              {selectedTrainer && (
                <>
                  <DialogTitle className="font-display text-lg text-foreground uppercase mb-1">
                    {selectedTrainer.name}
                  </DialogTitle>
                  <p className="font-mono text-[10px] tracking-widest text-primary mb-4 leading-tight">
                    {selectedTrainer.specialty.toUpperCase()}
                  </p>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-6">
                    {selectedTrainer.bio}
                  </p>
                  <div className="border-t border-border pt-4">
                    <a
                      href={selectedTrainer.social_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] tracking-widest text-primary hover:text-foreground underline underline-offset-4 decoration-primary/40 hover:decoration-foreground transition-all uppercase inline-block"
                    >
                      Visit Profile
                    </a>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
