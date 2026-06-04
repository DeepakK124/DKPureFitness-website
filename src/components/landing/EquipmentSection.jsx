import { motion, AnimatePresence } from 'framer-motion';
import { Dumbbell, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';

// Edit this list to update the equipment displayed on the site
const EQUIPMENT = [
  { name: 'Olympic Barbell', category: 'Free Weights' },
  { name: 'Olympic Curl Barbell', category: 'Free Weights' },
  { name: 'Power Rack / Squat Rack', category: 'Strength' },
  { name: 'Variable Weight Dumbbells (2.5–35 kg)', category: 'Free Weights' },
  { name: 'Flat / Incline / Decline Bench', category: 'Strength' },
  { name: 'Cable Crossover Machine', category: 'Cable & Pulley' },
  { name: 'Lat Pulldown Machine', category: 'Cable & Pulley' },
  { name: 'Leg Press Machine', category: 'Machines' },
  { name: 'Smith Machine', category: 'Strength' },
  { name: 'Chest Press Machine', category: 'Machines' },
  { name: 'Pec Deck Fly Machine', category: 'Machines' },
  { name: 'Shoulder Press Machine', category: 'Machines' },
  { name: 'Leg Curl / Leg Extension', category: 'Machines' },
  { name: 'Treadmill', category: 'Cardio' },
  { name: 'Stationary Cycle', category: 'Cardio' },
  { name: 'Rowing Machine', category: 'Cardio' },
  { name: 'Elliptical Trainer', category: 'Cardio' },
  { name: 'Standing Punching Bag', category: 'Combat' },
  { name: 'Kettlebells', category: 'Free Weights' },
  { name: 'Pull-Up / Dip Station', category: 'Bodyweight' },
  { name: 'Foam Rollers & Mats', category: 'Recovery' },
];

const CATEGORIES = [...new Set(EQUIPMENT.map(e => e.category))];

const categoryColor = {
  'Free Weights': '#F97316',
  'Strength': '#F97316',
  'Cable & Pulley': '#9CA3AF',
  'Machines': '#9CA3AF',
  'Cardio': '#10B981',
  'Combat': '#8B5CF6',
  'Accessories': '#9CA3AF',
  'Bodyweight': '#9CA3AF',
  'Recovery': '#06B6D4',
};

export default function EquipmentSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile: 5 items (5 rows of 1 column)
  // Desktop: 12 items (3 rows of 4 columns)
  const initialLimit = isMobile ? 5 : 12;

  const displayedEquipment = isExpanded ? EQUIPMENT : EQUIPMENT.slice(0, initialLimit);
  const hasMore = EQUIPMENT.length > initialLimit;

  return (
    <section id="equipment" className="relative py-16 sm:py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F97316]/30 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-16">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-[#F97316] uppercase block mb-3">
              04 — Arsenal
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-foreground uppercase leading-[0.95] mb-4 sm:mb-6">
              Commercial-Grade<br />Equipment. Zero Excuses.
            </h2>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
            From Olympic barbells and power racks to cable stations, cardio
            machines, and functional training zones — DK Pure Fitness is
            equipped for every training style. Strength athletes, bodybuilders,
            and weight loss beginners all find what they need under one roof.
          </p>
        </div>

        <motion.div layout className="flex flex-wrap justify-center gap-2 sm:gap-3">
          <AnimatePresence>
            {displayedEquipment.map((item, idx) => (
              <motion.div
                layout
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="w-full sm:w-[calc(50%-0.375rem)] lg:w-[calc(25%-0.5625rem)] group flex items-start gap-3 bg-card border border-border hover:border-primary/25 transition-colors duration-300 p-3 sm:p-4 shadow-sm"
              >
                <div
                  className="w-1 self-stretch flex-shrink-0 mt-0.5 rounded-full"
                  style={{ backgroundColor: categoryColor[item.category] || 'hsl(var(--primary))' }}
                />
                <div className="min-w-0">
                  <p className="text-foreground text-sm font-medium leading-snug">{item.name}</p>
                  <span
                    className="font-mono text-[9px] tracking-widest mt-1 inline-block"
                    style={{ color: categoryColor[item.category] || 'hsl(var(--muted-foreground))' }}
                  >
                    {item.category.toUpperCase()}
                  </span>
                </div>
                <Dumbbell className="w-3.5 h-3.5 text-primary/40 group-hover:text-primary transition-colors flex-shrink-0 ml-auto mt-0.5" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 px-6 py-3 border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground font-mono text-xs tracking-widest transition-all duration-300 group"
            >
              {isExpanded ? 'VIEW LESS' : 'VIEW MORE'}
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              ) : (
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
