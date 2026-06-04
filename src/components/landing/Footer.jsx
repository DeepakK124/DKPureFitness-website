import { ArrowUp } from 'lucide-react';
import { TermsDialog, PrivacyDialog } from '../LegalDialogs';
import { ADDRESS, LOGO_PATH } from '@/lib/constants';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-primary/15 bg-secondary/40 backdrop-blur-[2px]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-6 md:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
          <div className="flex flex-col items-center md:items-start max-w-sm">
            <div className="h-16 md:h-20 flex items-center md:items-start mb-2 md:mb-4">
              <img 
                src={LOGO_PATH} 
                alt="DK Pure Fitness - Gym in Hyderabad" 
                className="h-full w-auto object-contain scale-[1.8] md:scale-[2.2] origin-center md:origin-left" 
              />
            </div>
            <p className="font-mono text-[10px] tracking-widest text-muted-foreground mb-3 text-center md:text-left">
              YOUR FITNESS COMPANION. <br />HYDERABAD'S STRENGTH-FIRST GYM  
            </p>
            <p className="font-mono text-[10px] md:text-xs text-muted-foreground/80 leading-relaxed text-center md:text-left">
              📍 {ADDRESS}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8">
            {['TRANSFORMATIONS', 'TRAINERS', 'EQUIPMENT', 'GALLERY', 'REVIEWS', 'CONTACT'].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-mono text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <div className="w-full md:w-auto flex justify-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-mono text-xs tracking-widest hover:bg-primary/80 transition-all duration-300 group"
            >
              BACK TO TOP
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground/60">
              © 2026 DK PURE FITNESS. ALL RIGHTS RESERVED.
            </span>
            <span className="text-muted-foreground/40 text-[10px] max-w-xl">
              Disclaimer: Consult a physician before starting any fitness program. The information on this website is for educational purposes only. Individual results may vary.
            </span>
          </div>
          
          <div className="flex justify-center md:justify-start gap-6 mt-4 md:mt-0">
            <PrivacyDialog>
              <button className="font-mono text-[10px] tracking-widest text-muted-foreground/60 hover:text-foreground transition-colors uppercase">
                PRIVACY POLICY
              </button>
            </PrivacyDialog>
            <TermsDialog>
              <button className="font-mono text-[10px] tracking-widest text-muted-foreground/60 hover:text-foreground transition-colors uppercase">
                TERMS OF SERVICE
              </button>
            </TermsDialog>
          </div>
        </div>
      </div>
    </footer>
  );
}
