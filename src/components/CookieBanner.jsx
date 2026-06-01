import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie } from 'lucide-react';
import { PrivacyDialog } from './LegalDialogs';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [hasAccepted, setHasAccepted] = useState(true); // Default to true to prevent flash

  useEffect(() => {
    const accepted = localStorage.getItem('dkpf_cookie_consent') === 'true';
    setHasAccepted(accepted);
    
    if (!accepted) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('dkpf_cookie_consent', 'true');
    setHasAccepted(true);
    setIsVisible(false);
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  // If accepted, render nothing
  if (hasAccepted) return null;

  return (
    <>
      {/* Floating Cookie Icon (shows when banner is dismissed but not accepted) */}
      <AnimatePresence>
        {isDismissed && !isVisible && (
          <motion.button
            initial={{ scale: 0, opacity: 0, rotate: -90 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, rotate: 90 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsVisible(true)}
            className="fixed bottom-6 right-6 z-[90] w-12 h-12 bg-[#111113] border border-[#F97316]/30 rounded-full flex items-center justify-center shadow-lg shadow-black/50 group cursor-pointer"
            aria-label="Cookie Preferences"
          >
            <Cookie className="w-5 h-5 text-[#F97316] group-hover:text-white transition-colors" />
            
            {/* Ping animation behind icon */}
            <div className="absolute inset-0 rounded-full border border-[#F97316]/30 animate-ping opacity-20 pointer-events-none" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main Cookie Banner */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none flex justify-center"
          >
            <div className="bg-[#111113] border border-[#F97316]/20 shadow-2xl p-4 md:p-6 w-full max-w-4xl pointer-events-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Cookie className="w-4 h-4 text-[#F97316]" />
                  <h4 className="font-display text-sm md:text-base text-[#F3F4F6] uppercase">
                    Cookie & Privacy Notice
                  </h4>
                </div>
                <p className="text-[#9CA3AF] text-xs leading-relaxed mt-2">
                  We use cookies and similar technologies to enhance your experience, analyze site traffic, and for our marketing efforts. By continuing to use our site, you consent to our data practices as outlined in our{' '}
                  <PrivacyDialog>
                    <button type="button" className="text-[#F97316] hover:underline underline-offset-2 pointer-events-auto">Privacy Policy</button>
                  </PrivacyDialog>.
                </p>
              </div>
              
              <div className="flex items-center gap-3 self-end md:self-auto flex-shrink-0">
                <button
                  onClick={handleDismiss}
                  className="p-2 text-[#9CA3AF] hover:text-[#F3F4F6] transition-colors"
                  aria-label="Dismiss"
                >
                  <X className="w-5 h-5" />
                </button>
                <button
                  onClick={handleAccept}
                  className="px-6 py-2.5 bg-[#F97316] text-white font-mono text-[10px] md:text-xs tracking-widest hover:bg-[#F97316]/80 transition-all duration-300"
                >
                  ACCEPT & CLOSE
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
