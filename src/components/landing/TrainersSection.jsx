import { motion } from 'framer-motion';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import trainersData from '@/content/trainers.json';
import pageData from '@/content/page-content.json';

const content = pageData.trainers;
const TRAINERS = trainersData.items;

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
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedTrainer(trainer)}
              className="w-[calc(50%-0.5rem)] sm:w-[220px] md:w-[260px] flex-shrink-0 group relative bg-card border border-border hover:border-primary/30 transition-all duration-500 overflow-hidden flex flex-col shadow-sm cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden flex-shrink-0">
                <img
                  src={trainer.image_url}
                  alt={`Personal trainer ${trainer.name} at DK Pure Fitness gym Hyderabad`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Scanning line effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute left-0 right-0 h-px bg-primary/60 animate-pulse" style={{ top: '50%' }} />
                </div>
              </div>

              {/* Info */}
              <div className="p-3 md:p-4 flex flex-col flex-grow">
                <div className="flex flex-wrap items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                  <h3 className="font-display text-xs sm:text-sm text-foreground uppercase">
                    {trainer.name}
                  </h3>
                  {idx === 0 && (
                    <span className="font-mono text-[8px] md:text-[9px] tracking-widest text-primary-foreground bg-primary px-1 md:px-1.5 py-0.5 flex-shrink-0">
                      OWNER
                    </span>
                  )}
                </div>
                <p className="font-mono text-[9px] md:text-[10px] tracking-widest text-primary mb-2 md:mb-3 leading-tight">
                  {trainer.specialty.toUpperCase()}
                </p>

                <div className="flex flex-col flex-grow justify-end">
                  <p className="text-[8px] md:text-[10px] text-muted-foreground/70 mt-1 italic group-hover:text-primary transition-colors">
                    Click for details
                  </p>
                </div>
              </div>
            </motion.div>
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
