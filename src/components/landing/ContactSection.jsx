import { MapPin, Phone, Clock, Instagram, Calendar, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VariableProximity from '@/components/VariableProximity/VariableProximity';
import {
  CONTACT_PHONE_HREF,
  MAPS_URL,
  INSTAGRAM_URL,
} from '@/lib/constants';
import content from '@/content/contact.json';

const BOOKING_EMBED_URL = content.booking_embed_url;
const BOOKING_DIRECT_URL = content.booking_direct_url;

export default function ContactSection() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section ref={containerRef} id="contact" className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F97316]/30 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20">
          
          {/* 1. Header & Text (Top on both) */}
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            <span className="font-mono text-xs tracking-[0.3em] text-[#F97316] uppercase block mb-3">
              {content.label}
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl uppercase leading-[0.95] mb-6">
              <VariableProximity
                label={content.title}
                className="text-foreground"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff='linear'
              />
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
              {content.description}
            </p>
          </div>

          {/* 2. Contact Info (Bottom on mobile, Bottom-Left on PC) */}
          <div className="order-3 lg:col-start-1 lg:row-start-2 space-y-6">
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
                  {content.address_title}
                </span>
                <span className="text-foreground text-sm group-hover:text-primary transition-colors underline underline-offset-2 decoration-primary/30">
                  {content.address_text}
                </span>
              </div>
            </a>

            {/* Phone */}
            <div className="flex items-start gap-4 group">
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 border border-primary/20 flex-shrink-0">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <div>
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground block mb-1">{content.phone_title}</span>
                <a href={CONTACT_PHONE_HREF} className="text-foreground text-sm hover:text-primary transition-colors">
                  {content.phone_text}
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
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground block mb-1">{content.instagram_title}</span>
                <span className="text-foreground text-sm group-hover:text-primary transition-colors">
                  {content.instagram_text}
                </span>
              </div>
            </a>

            {/* Hours */}
            <div className="flex items-start gap-4 group">
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 border border-primary/20 flex-shrink-0">
                <Clock className="w-4 h-4 text-primary" />
              </div>
              <div>
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground block mb-1">{content.working_hours_title}</span>
                <div className="text-foreground text-sm space-y-1">
                  <p>{content.working_hours_text_1}</p>
                  <p>{content.working_hours_text_2}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Booking Embed (Middle on mobile, Right on PC) */}
          <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 bg-card border border-border p-2 md:p-4 shadow-sm h-[380px] sm:h-[450px] lg:h-full lg:min-h-[500px] flex flex-col relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!showCalendar ? (
                <motion.div 
                  key="cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-8 bg-card z-10 text-center border-2 border-transparent hover:border-primary/20 transition-all duration-500 cursor-pointer"
                  onClick={() => {
                    if (isMobile) {
                      window.open(BOOKING_DIRECT_URL, '_blank', 'noopener,noreferrer');
                    } else {
                      setShowCalendar(true);
                    }
                  }}
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Calendar className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl uppercase mb-3 text-foreground">
                    Book Your Free Trial
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base max-w-sm mb-8">
                    Select a convenient 1-hour slot for your visit and consultation. No strings attached.
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