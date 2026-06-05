import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import content from '@/content/ticker.json';

const TICKER_ITEMS = content.items.map(item => ({
  icon: Icons[item.icon] || Icons.Dumbbell,
  text: item.text
}));

export default function DataTicker() {
  return (
    <div className="w-full bg-primary py-4 sm:py-6 overflow-hidden flex items-center border-y border-border relative z-20">
      <motion.div
        className="flex gap-8 sm:gap-16 whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        {/* We repeat the array more times to ensure it fills the wide screen during scrolling */}
        {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <div key={i} className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
            <span className="font-display text-xl sm:text-3xl text-primary-foreground uppercase tracking-wider">
              {item.text}
            </span>
            <span className="text-primary-foreground/30 text-xl sm:text-3xl mx-2">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}