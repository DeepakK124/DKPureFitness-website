import { motion } from 'framer-motion';
import { Dumbbell } from 'lucide-react';

// Edit this list to update the equipment displayed on the site
const EQUIPMENT = [
  { name: 'Olympic Barbell', category: 'Free Weights' },
  { name: 'Power Rack / Squat Rack', category: 'Strength' },
  { name: 'Adjustable Dumbbells (2–50 kg)', category: 'Free Weights' },
  { name: 'Flat / Incline / Decline Bench', category: 'Strength' },
  { name: 'Cable Crossover Machine', category: 'Cable & Pulley' },
  { name: 'Lat Pulldown Machine', category: 'Cable & Pulley' },
  { name: 'Leg Press Machine', category: 'Machines' },
  { name: 'Smith Machine', category: 'Strength' },
  { name: 'Chest Press Machine', category: 'Machines' },
  { name: 'Shoulder Press Machine', category: 'Machines' },
  { name: 'Leg Curl / Leg Extension', category: 'Machines' },
  { name: 'Treadmill', category: 'Cardio' },
  { name: 'Stationary Cycle', category: 'Cardio' },
  { name: 'Rowing Machine', category: 'Cardio' },
  { name: 'Elliptical Trainer', category: 'Cardio' },
  { name: 'Heavy Punching Bag', category: 'Combat' },
  { name: 'Kettlebells', category: 'Free Weights' },
  { name: 'Resistance Bands', category: 'Accessories' },
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
  return (
    <section id="equipment" className="relative py-24 md:py-32 bg-[#0A0A0B]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F97316]/30 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-[#F97316] uppercase block mb-3">
              04 — Arsenal
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-[#F3F4F6] uppercase leading-[0.95]">
              THE<br />EQUIPMENT
            </h2>
          </div>
          <p className="text-[#9CA3AF] text-sm md:text-base max-w-sm leading-relaxed">
            State-of-the-art machines and free weights — everything you need to hit every goal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {EQUIPMENT.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 8) * 0.05 }}
              className="group flex items-start gap-3 bg-[#111113] border border-white/5 hover:border-[#F97316]/25 transition-all duration-300 p-4"
            >
              <div
                className="w-1 self-stretch flex-shrink-0 mt-0.5 rounded-full"
                style={{ backgroundColor: categoryColor[item.category] || '#F97316' }}
              />
              <div className="min-w-0">
                <p className="text-[#F3F4F6] text-sm font-medium leading-snug">{item.name}</p>
                <span
                  className="font-mono text-[9px] tracking-widest mt-1 inline-block"
                  style={{ color: categoryColor[item.category] || '#9CA3AF' }}
                >
                  {item.category.toUpperCase()}
                </span>
              </div>
              <Dumbbell className="w-3.5 h-3.5 text-[#9CA3AF]/30 group-hover:text-[#F97316]/50 transition-colors flex-shrink-0 ml-auto mt-0.5" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}