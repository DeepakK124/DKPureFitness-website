import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { PrivacyDialog } from './LegalDialogs';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted cookies
    const hasAccepted = localStorage.getItem('dkpf_cookie_consent');
    if (!hasAccepted) {
      // Small delay so it doesn't pop up immediately on load
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('dkpf_cookie_consent', 'true');
    setIsVisible(false);
  };

  return (
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
              <h4 className="font-display text-sm md:text-base text-[#F3F4F6] uppercase mb-1">
                Cookie & Privacy Notice
              </h4>
              <p className="text-[#9CA3AF] text-xs leading-relaxed">
                We use cookies and similar technologies to enhance your experience, analyze site traffic, and for our marketing efforts. By continuing to use our site, you consent to our data practices as outlined in our{' '}
                <PrivacyDialog>
                  <button type="button" className="text-[#F97316] hover:underline underline-offset-2">Privacy Policy</button>
                </PrivacyDialog>.
              </p>
            </div>
            
            <div className="flex items-center gap-3 self-end md:self-auto flex-shrink-0">
              <button
                onClick={() => setIsVisible(false)}
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
  );
}
