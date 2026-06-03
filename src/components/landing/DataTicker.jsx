import { motion } from 'framer-motion';
import { Activity, Users, Flame, Clock } from 'lucide-react';

const TICKER_ITEMS = [
  { icon: Activity, text: 'GYM STATUS: OPERATIONAL' },
  { icon: Users, text: 'CURRENT CAPACITY: 47%' },
  { icon: Clock, text: 'OPENS 5:00AM — CLOSES 11:00PM' },
  { icon: Clock, text: 'OPENS 4:30AM — CLOSES 9:30PM' },
  { icon: Activity, text: 'TODAY\'S SESSIONS: 12 COMPLETED' },
  { icon: Users, text: 'MEMBERS ACTIVE: 127' },
];

export default function DataTicker() {
  return (
    <div className="fixed top-16 md:top-20 left-0 right-0 z-40 bg-background/60 backdrop-blur-[2px] border-b border-border overflow-hidden h-8 flex items-center">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: [0, -1200] }}
        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
      >
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <div key={i} className="flex items-center gap-2 flex-shrink-0">
            <item.icon className="w-3 h-3 text-primary" />
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
              {item.text}
            </span>
            <span className="text-primary/50 mx-4">|</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}