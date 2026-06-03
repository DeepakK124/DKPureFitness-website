import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

const TRAINER = {
  id: 't1',
  name: 'DEEPAK KUMAR',
  specialty: 'Transformation & Bodybuilding',
  bio: 'Founder of DK Pure Fitness. As a dedicated athlete and competitive cricketer, Deepak understands the discipline required to excel. He applies this same rigorous mindset to help members transform their bodies and achieve their ultimate fitness goals.',
  image_url: "/trainers/deepak-kumar.png",
  social_url: "https://www.instagram.com/imdeepakkrr/"
};

export default function TrainersSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="trainers" className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F97316]/30 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-[#F97316] uppercase block mb-3">
              03 — The Architect
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground uppercase leading-[0.95] mb-6">
              Expert Trainer.<br />Personalised Plans.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
              Our certified personal trainer in Hyderabad doesn't hand you a PDF 
              and wish you luck. He assesses your baseline, designs a program around 
              your schedule and goals, and coaches you rep by rep — whether you're 
              after fat loss, muscle gain, or sport-specific conditioning.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => setIsOpen(true)}
            className="w-[calc(50%-0.5rem)] sm:w-full sm:max-w-xs md:max-w-sm group relative bg-card border border-border hover:border-primary/30 transition-all duration-500 overflow-hidden flex flex-col shadow-sm mx-auto md:mx-0 cursor-pointer"
          >
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden flex-shrink-0">
              <img
                src={TRAINER.image_url}
                alt={`Personal trainer ${TRAINER.name} at DK Pure Fitness gym Hyderabad`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              
              {/* Scanning line effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute left-0 right-0 h-px bg-primary/60 animate-pulse" style={{ top: '50%' }} />
              </div>
            </div>

            {/* Info */}
            <div className="p-4 md:p-6 flex flex-col flex-grow">
              <div className="flex flex-wrap items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                <h3 className="font-display text-xs sm:text-sm md:text-lg text-foreground uppercase">
                  {TRAINER.name}
                </h3>
                <span className="font-mono text-[8px] md:text-[10px] tracking-widest text-primary-foreground bg-primary px-1 md:px-1.5 py-0.5 flex-shrink-0">
                  OWNER
                </span>
              </div>
              <p className="font-mono text-[9px] md:text-xs tracking-widest text-primary mb-2 md:mb-3 leading-tight">
                {TRAINER.specialty.toUpperCase()}
              </p>
              
              <div className="flex flex-col flex-grow justify-end">
                <p className="text-[8px] md:text-[10px] text-muted-foreground/70 mt-1 italic group-hover:text-primary transition-colors">
                  Click for details
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mobile Popup */}
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="w-[90vw] max-w-sm bg-card border-border p-6 shadow-xl text-left">
              <DialogTitle className="font-display text-lg text-foreground uppercase mb-1">
                {TRAINER.name}
              </DialogTitle>
              <p className="font-mono text-[10px] tracking-widest text-primary mb-4 leading-tight">
                {TRAINER.specialty.toUpperCase()}
              </p>
              <p className="text-muted-foreground text-xs leading-relaxed mb-6">
                {TRAINER.bio}
              </p>
              <div className="border-t border-border pt-4">
                <a 
                  href={TRAINER.social_url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-mono text-[10px] tracking-widest text-primary hover:text-foreground underline underline-offset-4 decoration-primary/40 hover:decoration-foreground transition-all uppercase inline-block"
                >
                  Visit Profile
                </a>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
