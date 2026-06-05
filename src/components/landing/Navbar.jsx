import { useState, useEffect } from 'react';
import PillNav from '@/components/PillNav/PillNav';
import Magnet from '@/components/Magnet/Magnet';
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
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-background/80 backdrop-blur-sm border-b border-primary/20' : 'bg-background/60 backdrop-blur-[2px] border-b border-primary/10'}`
    }>
      <div className="max-w-[1440px] mx-auto flex items-center justify-center px-4 sm:px-6 md:px-12 py-3">
        <PillNav
          logo="/logo.png"
          logoAlt="DK Pure Fitness"
          items={NAV_LINKS}
          activeHref={activeSection ? `#${activeSection}` : ''}
          baseColor="transparent"
          pillColor="#F97316"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#120F17"
          className="w-full flex justify-between items-center"
          rightNode={
            <Magnet padding={50} disabled={false} magnetStrength={10}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-primary-foreground font-mono text-xs tracking-widest hover:bg-primary/80 transition-all duration-300 rounded-full">
                {content.cta1_text}
              </a>
            </Magnet>
          }
        />
      </div>
    </div>
  );
}