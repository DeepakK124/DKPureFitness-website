import * as Icons from 'lucide-react';
import { useReducedMotion } from 'framer-motion';
import content from '@/content/ticker.json';

const TICKER_ITEMS = content.items.map(item => ({
  icon: Icons[item.icon] || Icons.Dumbbell,
  text: item.text
}));

function TickerSet() {
  return (
    <div className="flex items-center flex-shrink-0">
      {TICKER_ITEMS.map((item, i) => (
        <div key={i} className="flex items-center gap-3 sm:gap-5 px-5 sm:px-8">
          <span className="font-display text-lg sm:text-2xl text-primary-foreground uppercase tracking-wider whitespace-nowrap">
            {item.text}
          </span>
          <span className="text-primary-foreground/30 text-lg sm:text-2xl select-none">•</span>
        </div>
      ))}
    </div>
  );
}

export default function DataTicker() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full bg-primary py-4 sm:py-5 overflow-hidden flex items-center border-y border-border relative z-20">
      <div className={`flex will-change-transform ${shouldReduceMotion ? '' : 'animate-ticker'}`}>
        <TickerSet />
        <TickerSet />
      </div>
    </div>
  );
}
