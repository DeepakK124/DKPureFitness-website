import { MapPin, Phone, Clock, Instagram, Calendar, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  ADDRESS,
  MAPS_URL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  HOURS,
} from '@/lib/constants';

const BOOKING_EMBED_URL = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ25q1A6wZbNelFWrSDJuBDTJRZ77Cn8zUF1dBBtSwPINIPP7j-KOsMU9d1QKyZjtzbEwb5kXb_v?gv=true";
const BOOKING_DIRECT_URL = "https://calendar.app.google/Mr8fB6MGaj42GeUS9";

export default function ContactSection() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F97316]/30 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Info */}
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-[#F97316] uppercase block mb-3">
              07 — Control Center
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground uppercase leading-[0.95] mb-6">
              Book a Free Demo<br />— Try Before You Commit
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mb-8">
              Not sure if we're the right fit? Book a free demo and experience 
              DK Pure Fitness for yourself. You'll get a 24-hour pass to visit 
              us during your booked slot — explore the equipment, meet the trainer, 
              and feel the vibe. No commitment, no pressure.
            </p>

            <div className="space-y-6">
              {/* Location */}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group cursor-pointer">
                
                <div className="w-10 h-10 flex items-center justify-center bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-colors flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground block mb-1">
                    LOCATION
                  </span>
                  <span className="text-foreground text-sm group-hover:text-primary transition-colors underline underline-offset-2 decoration-primary/30">
                    {ADDRESS}
                  </span>
                </div>
              </a>

              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center bg-primary/10 border border-primary/20 flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground block mb-1">DIRECT LINE</span>
                  <a href={CONTACT_PHONE_HREF} className="text-foreground text-sm hover:text-primary transition-colors">
                    {CONTACT_PHONE}
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-colors flex-shrink-0">
                  <Instagram className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground block mb-1">INSTAGRAM</span>
                  <span className="text-foreground text-sm group-hover:text-primary transition-colors">
                    {INSTAGRAM_HANDLE}
                  </span>
                </div>
              </a>

              {/* Hours */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center bg-primary/10 border border-primary/20 flex-shrink-0">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground block mb-1">WORKING HOURS</span>
                  <span className="text-foreground text-sm">
                    {HOURS.morning.days}: {HOURS.morning.open} – {HOURS.morning.close}<br />{HOURS.evening.days}: {HOURS.evening.open} – {HOURS.evening.close}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Booking Embed */}
          <div className="bg-card border border-border p-2 md:p-4 shadow-sm h-[650px] flex flex-col relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!showCalendar ? (
                <motion.div 
                  key="cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-card z-10 text-center border-2 border-transparent hover:border-primary/20 transition-all duration-500 cursor-pointer"
                  onClick={() => setShowCalendar(true)}
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Calendar className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl uppercase mb-3 text-foreground">
                    Book Your Free Trial
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base max-w-sm mb-8">
                    Select a convenient time for your 24-hour pass and consultation. No strings attached.
                  </p>
                  <button 
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-mono text-sm tracking-widest hover:bg-primary/80 transition-all duration-300"
                  >
                    CHECK AVAILABILITY <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ) : (
                <motion.div 
                  key="calendar"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="w-full h-full flex flex-col z-20 bg-card"
                >
                  <div className="flex-1 min-h-0 relative">
                    {/* Skeleton Loader */}
                    {!iframeLoaded && (
                      <div className="absolute inset-0 p-4 md:p-8 flex flex-col items-center justify-center bg-card z-10 pointer-events-none">
                        <div className="flex flex-col items-center justify-center w-full max-w-sm">
                          <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-6" />
                          <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase text-center mb-8 animate-pulse">
                            Loading Available Slots...
                          </p>
                          <div className="w-full space-y-3 animate-pulse opacity-70">
                            <div className="h-14 bg-muted/40 rounded-sm w-full" />
                            <div className="h-14 bg-muted/30 rounded-sm w-full" />
                            <div className="h-14 bg-muted/20 rounded-sm w-full" />
                            <div className="h-14 bg-muted/10 rounded-sm w-full" />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <iframe 
                      src={BOOKING_EMBED_URL}
                      onLoad={() => setIframeLoaded(true)}
                      className={`w-full h-full border-0 rounded-sm relative z-20 transition-opacity duration-700 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
                      title="Book a Free Demo"
                    />
                  </div>
                  <div className="mt-4 pt-2 border-t border-border/50 text-center flex-shrink-0">
                    <a 
                      href={BOOKING_DIRECT_URL} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-xs font-mono text-primary hover:text-primary/80 transition-colors py-1"
                    >
                      <span>Having trouble loading the calendar? Open in a new tab ↗</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}