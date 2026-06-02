import { motion } from 'framer-motion';
import { Activity, Users, Flame, Clock } from 'lucide-react';

const TICKER_ITEMS = [
  { icon: Activity, text: 'GYM STATUS: OPERATIONAL' },
  { icon: Users, text: 'CURRENT CAPACITY: 47%' },
  { icon: Clock, text: 'OPENS 6:00AM — CLOSES 11:00PM' },
  { icon: Clock, text: 'OPENS 4:30AM — CLOSES 9:00PM' },
  { icon: Activity, text: 'TODAY\'S SESSIONS: 12 COMPLETED' },
  { icon: Users, text: 'MEMBERS ACTIVE: 127' },
];

export default function DataTicker() {
  return (
    <div className="fixed top-16 md:top-20 left-0 right-0 z-40 bg-[#1a1a1c]/60 backdrop-blur-sm border-b border-white/5 overflow-hidden h-8 flex items-center">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: [0, -1200] }}
        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
      >
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <div key={i} className="flex items-center gap-2 flex-shrink-0">
            <item.icon className="w-3 h-3 text-[#F97316]" />
            <span className="font-mono text-[10px] tracking-widest text-[#9CA3AF]">
              {item.text}
            </span>
            <span className="text-[#2D5BFF]/30 mx-4">|</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}