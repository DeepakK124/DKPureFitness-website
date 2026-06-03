import { motion } from 'framer-motion';
import { Dumbbell, Users, Clock, MapPin, Trophy } from 'lucide-react';
import { HOURS } from '@/lib/constants';

const TICKER_ITEMS = [
  { icon: Dumbbell, text: 'STRENGTH-FIRST TRAINING' },
  { icon: Users, text: '200+ ACTIVE MEMBERS' },
  { icon: Clock, text: `MORNING: ${HOURS.morning.open} – ${HOURS.morning.close}` },
  { icon: Clock, text: `EVENING: ${HOURS.evening.open} – ${HOURS.evening.close} (${HOURS.evening.days})` },
  { icon: Trophy, text: 'EXPERT CERTIFIED TRAINERS' },
  { icon: MapPin, text: 'NEAR KUNTLOOR & PEDDAMBERPET, HYDERABAD' },
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