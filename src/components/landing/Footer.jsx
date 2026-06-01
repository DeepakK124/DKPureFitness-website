import { ArrowUp } from 'lucide-react';
import { TermsDialog, PrivacyDialog } from '../LegalDialogs';

const LOGO_URL = 'https://media.base44.com/images/public/user_6a1c84cce3fcc41c73e07a86/a5b999a71_DKPureFitness.jpg';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-[#1a1008] border-t border-[#F97316]/15">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="https://media.base44.com/images/public/6a1c84fb5207dc3bbf07d439/e813b83b9_DK_Pure_Fitness-removebg-preview.png" 
              alt="DK Pure Fitness" 
              className="h-28 md:h-36 w-auto object-contain [filter:invert(1)_hue-rotate(180deg)]" 
            />
            <p className="font-mono text-[10px] tracking-widest text-[#9CA3AF] -mt-2 md:-mt-4">
              YOUR FITNESS COMPANION
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 md:gap-8">
            {['TRANSFORMATIONS', 'TRAINERS', 'EQUIPMENT', 'GALLERY', 'REVIEWS', 'CONTACT'].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-mono text-xs tracking-widest text-[#9CA3AF] hover:text-[#F97316] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F97316] text-white font-mono text-xs tracking-widest hover:bg-[#F97316]/80 transition-all duration-300 group"
          >
            BACK TO TOP
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-[#F97316]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] tracking-widest text-[#9CA3AF]/60">
              © 2026 DK PURE FITNESS. ALL RIGHTS RESERVED.
            </span>
            <span className="text-[#9CA3AF]/40 text-[10px] max-w-xl">
              Disclaimer: Consult a physician before starting any fitness program. The information on this website is for educational purposes only. Individual results may vary.
            </span>
          </div>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <PrivacyDialog>
              <button className="font-mono text-[10px] tracking-widest text-[#9CA3AF]/60 hover:text-[#9CA3AF] transition-colors uppercase">
                PRIVACY POLICY
              </button>
            </PrivacyDialog>
            <TermsDialog>
              <button className="font-mono text-[10px] tracking-widest text-[#9CA3AF]/60 hover:text-[#9CA3AF] transition-colors uppercase">
                TERMS OF SERVICE
              </button>
            </TermsDialog>
          </div>
        </div>
      </div>
    </footer>
  );
}
