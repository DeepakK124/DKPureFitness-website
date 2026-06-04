import { motion } from 'framer-motion';
import { Dumbbell, Activity, Music, HeartPulse, Youtube } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: Dumbbell,
    title: 'WEIGHT TRAINING',
    description: 'Build functional strength and power with our extensive range of free weights and modern machines.',
  },
  {
    icon: Activity,
    title: 'BODYBUILDING',
    description: 'Sculpt and define your physique with targeted equipment and expert guidance from our trainers.',
  },
  {
    icon: Music,
    title: 'ZUMBA',
    description: 'Burn calories and have fun with our high-energy, rhythmic dance workouts led by certified instructors.',
  },
  {
    icon: HeartPulse,
    title: 'YOGA',
    description: 'Improve flexibility, balance, and core strength in our calming open-air stretching and yoga sessions.',
  },
];

const GALLERY = [
  { src: '/DKPF Pics/outside lawn.webp', alt: 'Open-air lawn training area at DK Pure Fitness gym Hyderabad', span: 'col-span-2 row-span-2' },
  { src: '/DKPF Pics/outside lawn 1.webp', alt: 'Nature-surrounded outdoor workout space near Kuntloor Hyderabad', span: 'col-span-1 row-span-1' },
  { src: '/DKPF Pics/yoga session.webp', alt: 'Yoga session in the open-air area of DK Pure Fitness', span: 'col-span-1 row-span-1' },
  { src: '/DKPF Pics/unnamed.webp', alt: 'Spacious gym interior with natural ventilation in Hyderabad', span: 'col-span-2 row-span-1' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-12 md:mb-16 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs tracking-[0.3em] text-primary uppercase block mb-3"
          >
            01 — About Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground uppercase leading-[0.95] mb-6"
          >
            Not Your Typical<br />Gym.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed"
          >
            Since 2023, we have helped hundreds of members achieve their fitness goals through expert coaching, modern equipment, and a supportive community. Whether you’re a beginner or an experienced athlete, our team is committed to helping you become stronger, healthier, and more confident.
          </motion.p>
          <motion.div
             initial={{ opacity: 0, y: 15 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="mt-6 flex items-start gap-3 text-sm text-muted-foreground bg-card border border-border p-4 max-w-2xl shadow-sm"
          >
            <Youtube className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Beyond the gym:</strong> We're also highly active in the local sports community! Watch our gym's team compete in local cricket tournaments on our <a href="https://www.youtube.com/@Sports_ct" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors underline underline-offset-4">YouTube channel</a>.
            </p>
          </motion.div>
        </div>

        {/* Asymmetric Gallery Mosaic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-16 md:mb-20"
        >
          {GALLERY.map((img, idx) => (
            <div
              key={idx}
              className={`${img.span} relative overflow-hidden border border-border group`}
            >
              <div className="relative w-full h-full min-h-[180px] md:min-h-[240px]">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Highlights Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {HIGHLIGHTS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`group p-6 md:p-8 border-t border-border ${
                idx < HIGHLIGHTS.length - 1 ? 'lg:border-r' : ''
              } ${idx % 2 === 0 ? 'sm:border-r lg:border-r' : 'sm:border-r-0 lg:border-r'} ${
                idx === HIGHLIGHTS.length - 1 ? 'lg:border-r-0' : ''
              } hover:bg-card transition-colors duration-500`}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-colors flex-shrink-0">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-sm text-foreground uppercase mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
