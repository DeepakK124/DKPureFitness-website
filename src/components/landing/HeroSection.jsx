import { motion } from 'framer-motion';
import { ChevronDown, Zap, Users, Clock } from 'lucide-react';

const HERO_IMG = '/Users/sampathbageyawadi/Desktop/DKPF Pics/flag.webp';

const stats = [
{ icon: Zap, value: "6K+", label: 'SESSIONS' },
{ icon: Users, value: "150+", label: 'MEMBERS' },
{ icon: Clock, value: "10H", label: 'DAILY ACCESS' }];


export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Athlete performing deadlift in cinematic lighting"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/70 to-[#0A0A0B]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B]/80 to-transparent" />
      </div>

      {/* Split watermark text */}
      <motion.span
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 0.05, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute top-8 left-8 font-display text-[8rem] md:text-[14rem] leading-none text-[#F97316] select-none pointer-events-none">
        
        DK
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.05, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute bottom-24 right-8 font-display text-[8rem] md:text-[14rem] leading-none text-[#F97316] select-none pointer-events-none">
        
        FIT
      </motion.span>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4">
            
            <span className="font-mono text-xs tracking-[0.3em] text-[#F97316] uppercase">
              Your Fitness Companion — Hyderabad
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-[#F3F4F6] uppercase leading-[0.9] mb-6">
            
            WHERE
            <br />
            <span className="text-[#F97316]">LIMITS</span>
            <br />
            DISSOLVE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-[#9CA3AF] text-base md:text-lg leading-relaxed max-w-lg mb-8">
            
            Step into DK Pure Fitness. A nature-friendly training environment
            built for those who measure progress in personal records, not
            participation trophies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 mb-16">
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#F97316] text-white font-mono text-sm tracking-widest hover:bg-[#F97316]/80 transition-all duration-300">
              
              CONTACT US
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex gap-8 md:gap-16">
            
            {stats.map((stat) =>
            <div key={stat.label} className="flex items-center gap-3">
                <stat.icon className="w-4 h-4 text-[#F97316]" />
                <div>
                  <div className="font-display text-xl md:text-2xl text-[#F3F4F6]">{stat.value}</div>
                  <div className="font-mono text-[10px] tracking-widest text-[#9CA3AF]">{stat.label}</div>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          
          <span className="font-mono text-[10px] tracking-widest text-[#9CA3AF]">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}>
            
            <ChevronDown className="w-4 h-4 text-[#F97316]" />
          </motion.div>
        </motion.div>
      </div>
    </section>);

}