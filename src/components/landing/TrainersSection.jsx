import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

const TRAINERS = [
{
  id: 't1',
  name: 'DEEPAK KUMAR',
  specialty: 'Transformation & Bodybuilding',
  bio: 'Founder of DK Pure Fitness. As a dedicated athlete and competitive cricketer, Deepak understands the discipline required to excel. He applies this same rigorous mindset to help members transform their bodies and achieve their ultimate fitness goals.',
  image_url: "/trainers/deepak-kumar.png",
  social_url: "https://www.instagram.com/imdeepakkrr/"
},
{
  id: 't2',
  name: '---',
  specialty: '---',
  bio: '---',
  image_url: ""
},
{
  id: 't3',
  name: '---',
  specialty: '---',
  bio: '---',
  image_url: ""
}];

export default function TrainersSection() {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  return (
    <section id="trainers" className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F97316]/30 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-[#F97316] uppercase block mb-3">
              03 — The Architects
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground uppercase leading-[0.95] mb-6">
              Expert Trainers.<br />Personalised Plans.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
              Our certified personal trainers in Hyderabad don't hand you a PDF 
              and wish you luck. They assess your baseline, design a program around 
              your schedule and goals, and coach you rep by rep — whether you're 
              after fat loss, muscle gain, or sport-specific conditioning.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:grid md:grid-cols-3 gap-4 md:gap-6">
          {TRAINERS.map((trainer, idx) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => {
                if (window.innerWidth < 768) {
                  setSelectedTrainer(trainer);
                }
              }}
              className="w-[calc(50%-0.5rem)] md:w-auto group relative bg-card border border-border hover:border-primary/30 transition-all duration-500 overflow-hidden cursor-pointer md:cursor-default flex flex-col shadow-sm"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden flex-shrink-0">
                {trainer.image_url ? (
                  <img
                    src={trainer.image_url}
                    alt={`Personal trainer ${trainer.name} at DK Pure Fitness gym Hyderabad`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                ) : (
                  <div className="w-full h-full bg-secondary flex items-center justify-center">
                    <span className="font-display text-6xl text-primary/20">
                      {(trainer.name || '?')[0]}
                    </span>
                  </div>
                )}
                
                {/* Scanning line effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute left-0 right-0 h-px bg-primary/60 animate-pulse" style={{ top: '50%' }} />
                </div>
              </div>

              {/* Info */}
              <div className="p-3 md:p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap items-center gap-1.5 md:gap-2 mb-2">
                  <h3 className="font-display text-sm md:text-lg text-foreground uppercase">
                    {trainer.name}
                  </h3>
                  {idx === 0 && (
                    <span className="font-mono text-[8px] md:text-[10px] tracking-widest text-primary-foreground bg-primary px-1.5 py-0.5 flex-shrink-0">
                      OWNER
                    </span>
                  )}
                </div>
                <p className="font-mono text-[8px] md:text-xs tracking-widest text-primary mb-2 md:mb-3 leading-tight">
                  {trainer.specialty?.toUpperCase()}
                </p>
                
                <div className="flex flex-col flex-grow justify-between">
                  <p className="text-muted-foreground text-[10px] md:text-sm leading-relaxed line-clamp-3 md:line-clamp-none transition-all duration-300">
                    {trainer.bio}
                  </p>
                  
                  {/* Mobile hint */}
                  <div className="md:hidden mt-2 pt-2 border-t border-border/50 flex justify-between items-center">
                    <span className="font-mono text-[7px] tracking-widest text-primary/70 uppercase font-medium">
                      Click to expand
                    </span>
                  </div>
                  
                  {trainer.social_url && (
                    <div className="mt-3 pt-3 border-t border-border hidden md:block">
                      <a 
                        href={trainer.social_url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-mono text-[8px] md:text-[10px] tracking-widest text-primary hover:text-foreground underline underline-offset-4 decoration-primary/40 hover:decoration-foreground transition-all uppercase"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Visit Profile
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Popup Modal */}
      <AnimatePresence>
        {selectedTrainer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-6 md:hidden"
            onClick={() => setSelectedTrainer(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-sm bg-card border border-border flex flex-col shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedTrainer(null)}
                className="absolute -top-12 right-0 p-2 text-muted-foreground hover:text-primary transition-colors bg-secondary/50 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Header */}
              <div className="relative aspect-square overflow-hidden border-b border-border">
                {selectedTrainer.image_url ? (
                  <img
                    src={selectedTrainer.image_url}
                    alt={`Personal trainer ${selectedTrainer.name} at DK Pure Fitness gym Hyderabad`}
                    className="w-full h-full object-cover" 
                  />
                ) : (
                  <div className="w-full h-full bg-secondary flex items-center justify-center">
                    <span className="font-display text-6xl text-primary/20">
                      {(selectedTrainer.name || '?')[0]}
                    </span>
                  </div>
                )}
              </div>

              {/* Modal Info */}
              <div className="p-6 flex flex-col gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-display text-xl text-foreground uppercase">
                      {selectedTrainer.name}
                    </h3>
                    {selectedTrainer.id === 't1' && (
                      <span className="font-mono text-[10px] tracking-widest text-primary-foreground bg-primary px-1.5 py-0.5 flex-shrink-0">
                        OWNER
                      </span>
                    )}
                  </div>
                  <p className="font-mono text-[10px] tracking-widest text-primary">
                    {selectedTrainer.specialty?.toUpperCase()}
                  </p>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {selectedTrainer.bio}
                </p>

                {selectedTrainer.social_url && (
                  <div className="pt-4 mt-2 border-t border-border">
                    <a 
                      href={selectedTrainer.social_url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex font-mono text-xs tracking-widest text-primary hover:text-foreground underline underline-offset-4 decoration-primary/40 hover:decoration-foreground transition-all uppercase"
                    >
                      Visit Profile
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
