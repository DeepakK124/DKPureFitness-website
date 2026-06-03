import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const REVIEWS = [
  { name: 'GOKU GAMING YT', review: "Awesome gym, I like the air quality in the gym, it's completely built with nature." },
  { name: 'MAHENDER', review: "The instructors are extremely knowledgeable, highly motivated, and awesome people to be around. I've never been in a gym with a better vibe. Classes are interesting — a must see!" },
  { name: 'KAMAL TEJA', review: "One of the best gyms I have ever seen, feels like home. Very friendly and humble owner Mr. Deepak. DK Pure Fitness helped me a lot to figure out my body. Best equipment and nature-friendly environment. Thanks Deepak bro! 🤞👍" },
  { name: 'KARIMELA ABHILASH', review: "Training is like a brotherhood and they take great care — the best choice to improve your body." },
  { name: 'BHARATHI RAJULAPATI', review: "DK Pure Fitness is a great gym. It has all the state of the art equipment for cardio and weight training, plus all the associated facilities required for a good fitness setup." },
  { name: 'SUNNY', review: "Awesome gym experience I ever had in my life. Very nice and super place for gym." },
  { name: 'DHATRIK BANNU', review: "Wow nice gym actually... I'm impressed with those certified trainers ❤️" },
  { name: 'LAKSHMIKANTH AKULA', review: "Pure Fitness is truly an awesome and pleasant place to work out with the whole family. Welcoming atmosphere, friendly staff, top-notch facilities with a wide range of equipment. Highly recommended!" },
  { name: 'CHIMALA RAJU', review: "Well maintained gym with professional, well-mannered coaches. Love this place with modern equipment, good and pleasant location." },
  { name: 'K. PAWANJAYANTH REDDY', review: "Perfect for doing gym — nature embedded with unique features and very friendly vibes." },
  { name: 'NAGARAJU', review: "Good in all gym machines." },
  { name: 'SHASHANK', review: "Very excellent gym. Friendly owner 🙌" },
  { name: 'KIRTHAN REDDY', review: "Nice place to work out, great environment." },
  { name: 'ADEPU SAI TEJA', review: "Very nice gym." },
  { name: 'PRAMOD MAHAJAN', review: "Beautiful gym." },
];

// Duplicate for seamless loop
const DOUBLED = [...REVIEWS, ...REVIEWS];

function ReviewCard({ review }) {
  return (
    <div className="flex-shrink-0 w-64 md:w-80 bg-card border border-border hover:border-primary/20 transition-all duration-500 p-4 md:p-6 flex flex-col shadow-sm">
      <div className="flex gap-1 mb-3 md:mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-3 h-3 md:w-3.5 md:h-3.5 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-foreground/85 text-xs md:text-sm leading-relaxed flex-1 mb-4 md:mb-5">
        "{review.review}"
      </p>
      <div className="pt-3 border-t border-border">
        <span className="font-display text-[10px] md:text-xs text-primary uppercase tracking-wide">
          {review.name}
        </span>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  const trackWidth = REVIEWS.length * (320 + 16); // card width + gap

  return (
    <section id="reviews" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-14">
        <div>
          <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase block mb-3">
            06 — Community Voice
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground uppercase leading-[0.95]">
            What Our Members Say<br />— 
          </h2>
        </div>
      </div>

      {/* Endless scroll track */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-background/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-background/80 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4"
          animate={{ x: [-trackWidth, 0] }}
          transition={{
            repeat: Infinity,
            duration: REVIEWS.length * 4,
            ease: 'linear',
          }}
          style={{ width: `${trackWidth * 2}px` }}
        >
          {DOUBLED.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}