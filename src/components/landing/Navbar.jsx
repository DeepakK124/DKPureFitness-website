import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import content from '@/content/hero.json';

const NAV_LINKS = [
{ label: 'TRANSFORMATIONS', href: '#transformations', id: 'transformations' },
{ label: 'TRAINERS', href: '#trainers', id: 'trainers' },
{ label: 'EQUIPMENT', href: '#equipment', id: 'equipment' },
{ label: 'GALLERY', href: '#gallery', id: 'gallery' },
{ label: 'REVIEWS', href: '#reviews', id: 'reviews' },
{ label: 'CONTACT', href: '#contact', id: 'contact' }];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scrollspy logic
      const sections = NAV_LINKS.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
      
      // Clear active section if at the very top
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-background/80 backdrop-blur-sm border-b border-primary/20' : 'bg-background/60 backdrop-blur-[2px] border-b border-primary/10'}`
      }>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center h-full">
            <img 
              src="/logo.png" 
              alt="DK Pure Fitness" 
              className="h-full w-auto object-contain scale-[1.8] md:scale-[2.2] origin-left" 
            />
          </a>

          <div className="hidden lg:flex items-center gap-8 relative">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative font-mono text-xs tracking-widest transition-colors duration-300 py-2 ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  {link.label}
                  
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground font-mono text-xs tracking-widest hover:bg-primary/80 transition-all duration-300">
              
              {content.cta1_text}
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-foreground p-2">
              
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen &&
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed inset-0 z-[60] bg-background flex flex-col">
          
            <div className="flex items-center justify-between px-6 h-16">
              <img 
                src="/logo.png" 
                alt="DK Pure Fitness" 
                className="h-20 w-auto object-contain" 
              />
              <button onClick={() => setMenuOpen(false)} className="text-foreground p-2">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-12 gap-8">
              {NAV_LINKS.map((link, i) =>
            <motion.a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="font-display text-3xl md:text-5xl text-foreground hover:text-primary transition-colors">
              
                  {link.label}
                </motion.a>
            )}
            </div>
            <div className="px-12 pb-12">
              <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center py-4 bg-primary text-primary-foreground font-mono text-sm tracking-widest">
              
                {content.cta1_text}
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}