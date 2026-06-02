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
  image_url: "/trainers/trainer-unavailable.png"
},
{
  id: 't3',
  name: '---',
  specialty: '---',
  bio: '---',
  image_url: "/trainers/trainer-unavailable.png"
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
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-[#F3F4F6] uppercase leading-[0.95]">
              YOUR<br />TRAINERS
            </h2>
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
              className="w-[calc(50%-0.5rem)] md:w-auto group relative bg-[#111113] border border-white/5 hover:border-[#F97316]/30 transition-all duration-500 overflow-hidden cursor-pointer md:cursor-default flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden flex-shrink-0">
                {trainer.image_url ? (
                  <img
                    src={trainer.image_url}
                    alt={trainer.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                ) : (
                  <div className="w-full h-full bg-[#1a1a1d] flex items-center justify-center">
                    <span className="font-display text-6xl text-[#F97316]/20">
                      {(trainer.name || '?')[0]}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent" />

                {/* Scanning line effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute left-0 right-0 h-px bg-[#F97316]/60 animate-pulse" style={{ top: '50%' }} />
                </div>
              </div>

              {/* Info */}
              <div className="p-3 md:p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap items-center gap-1.5 md:gap-2 mb-2">
                  <h3 className="font-display text-sm md:text-lg text-[#F3F4F6] uppercase">
                    {trainer.name}
                  </h3>
                  {idx === 0 && (
                    <span className="font-mono text-[8px] md:text-[10px] tracking-widest text-white bg-blue-600 px-1.5 py-0.5 flex-shrink-0">
                      OWNER
                    </span>
                  )}
                </div>
                <p className="font-mono text-[8px] md:text-xs tracking-widest text-[#F97316] mb-2 md:mb-3 leading-tight">
                  {trainer.specialty?.toUpperCase()}
                </p>
                
                <div className="flex flex-col flex-grow justify-between">
                  <p className="text-[#9CA3AF] text-[10px] md:text-sm leading-relaxed line-clamp-3 md:line-clamp-none transition-all duration-300">
                    {trainer.bio}
                  </p>
                  
                  {trainer.social_url && (
                    <div className="mt-3 pt-3 border-t border-white/5 hidden md:block">
                      <a 
                        href={trainer.social_url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-mono text-[8px] md:text-[10px] tracking-widest text-[#F97316] hover:text-[#F3F4F6] underline underline-offset-4 decoration-[#F97316]/40 hover:decoration-[#F3F4F6] transition-all uppercase"
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-6 md:hidden"
            onClick={() => setSelectedTrainer(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-sm bg-[#111113] border border-white/10 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedTrainer(null)}
                className="absolute -top-12 right-0 p-2 text-white/50 hover:text-[#F97316] transition-colors bg-white/5 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Header */}
              <div className="relative aspect-square overflow-hidden border-b border-white/10">
                {selectedTrainer.image_url ? (
                  <img
                    src={selectedTrainer.image_url}
                    alt={selectedTrainer.name}
                    className="w-full h-full object-cover" 
                  />
                ) : (
                  <div className="w-full h-full bg-[#1a1a1d] flex items-center justify-center">
                    <span className="font-display text-6xl text-[#F97316]/20">
                      {(selectedTrainer.name || '?')[0]}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-transparent to-transparent" />
              </div>

              {/* Modal Info */}
              <div className="p-6 flex flex-col gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-display text-xl text-[#F3F4F6] uppercase">
                      {selectedTrainer.name}
                    </h3>
                    {selectedTrainer.id === 't1' && (
                      <span className="font-mono text-[10px] tracking-widest text-white bg-blue-600 px-1.5 py-0.5 flex-shrink-0">
                        OWNER
                      </span>
                    )}
                  </div>
                  <p className="font-mono text-[10px] tracking-widest text-[#F97316]">
                    {selectedTrainer.specialty?.toUpperCase()}
                  </p>
                </div>
                
                <p className="text-[#9CA3AF] text-sm leading-relaxed">
                  {selectedTrainer.bio}
                </p>

                {selectedTrainer.social_url && (
                  <div className="pt-4 mt-2 border-t border-white/5">
                    <a 
                      href={selectedTrainer.social_url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex font-mono text-xs tracking-widest text-[#F97316] hover:text-[#F3F4F6] underline underline-offset-4 decoration-[#F97316]/40 hover:decoration-[#F3F4F6] transition-all uppercase"
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
