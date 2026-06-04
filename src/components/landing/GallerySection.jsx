import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { X } from 'lucide-react';

const GALLERY_ITEMS = [
  {
    type: 'wide',
    src: '/DKPF Pics/outside lawn.webp',
    alt: 'Outside lawn and functional training area at DK Pure Fitness gym Hyderabad',
    width: 'w-[280px] md:w-[650px]',
    mWidth: 280,
    dWidth: 650,
  },
  {
    type: 'stacked',
    images: [
      { src: '/DKPF Pics/yoga session.webp', alt: 'Yoga and stretching session at DK Pure Fitness fitness center Hyderabad' },
      { src: '/DKPF Pics/outside lawn 1.webp', alt: 'Outdoor training zone at DK Pure Fitness gym near Kuntloor' },
    ],
    width: 'w-[200px] md:w-[380px]',
    mWidth: 200,
    dWidth: 380,
  },
  {
    type: 'wide',
    src: '/DKPF Pics/DKPF banner.webp',
    alt: 'DK Pure Fitness gym branding and entrance Hyderabad',
    width: 'w-[320px] md:w-[800px]',
    mWidth: 320,
    dWidth: 800,
  },
  {
    type: 'stacked',
    images: [
      { src: '/DKPF Pics/trophy.webp', alt: 'Success and achievements at DK Pure Fitness Hyderabad' },
      { src: '/DKPF Pics/flag.webp', alt: 'DK Pure Fitness gym flag representing strength and discipline' },
    ],
    width: 'w-[160px] md:w-[320px]',
    mWidth: 160,
    dWidth: 320,
  },
  {
    type: 'wide',
    src: '/DKPF Pics/unnamed.webp',
    alt: 'Wide angle view of commercial-grade equipment at DK Pure Fitness gym Hyderabad',
    width: 'w-[350px] md:w-[950px]',
    mWidth: 350,
    dWidth: 950,
  },
  {
    type: 'wide',
    src: '/DKPF Pics/Squat Rack.jpeg',
    alt: 'Premium squat rack and weight training area at DK Pure Fitness gym near Peddamberpet',
    width: 'w-[280px] md:w-[650px]',
    mWidth: 280,
    dWidth: 650,
  },
];

// Double for seamless loop
const DOUBLED = [...GALLERY_ITEMS, ...GALLERY_ITEMS];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Calculate total track width for one set of items + gaps
  const gap = 16; // gap-4
  const totalMobileWidth = GALLERY_ITEMS.reduce((acc, item) => acc + item.mWidth + gap, 0);
  const totalDesktopWidth = GALLERY_ITEMS.reduce((acc, item) => acc + item.dWidth + gap, 0);

  const [trackWidth, setTrackWidth] = useState(totalDesktopWidth);

  useEffect(() => {
    const handleResize = () => {
      setTrackWidth(window.innerWidth < 768 ? totalMobileWidth : totalDesktopWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [totalMobileWidth, totalDesktopWidth]);

  return (
    <section id="gallery" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F97316]/30 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 mb-8 sm:mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
          <div className="flex-1">
            <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase block mb-3">
              05 — The Arena
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-foreground uppercase leading-[0.95]">
              Inside DK Pure Fitness<br />— Hyderabad
            </h2>
          </div>
          
          <div className="flex flex-col gap-4 md:items-end">
            <p className="text-muted-foreground text-sm md:text-base max-w-sm leading-relaxed md:text-right">
              Precision-engineered spaces designed for maximum performance output.
            </p>
          </div>
        </div>
      </div>

      {/* Endless Scroll Container */}
      <div className="relative">
        <motion.div 
          className="flex gap-4"
          animate={{ x: [-trackWidth, 0] }}
          transition={{
            repeat: Infinity,
            duration: 50,
            ease: 'linear',
          }}
          style={{ width: `${trackWidth * 2}px` }}
        >
          {DOUBLED.map((column, colIdx) => (
            <div key={colIdx} className={`flex-none h-[220px] sm:h-[280px] md:h-[550px] ${column.width}`}>
              {column.type === 'wide' ? (
                <div 
                  onClick={() => setSelectedImage(column)}
                  className="w-full h-full relative overflow-hidden group/item cursor-pointer border border-border hover:border-primary/30 transition-colors duration-500"
                >
                  <img
                    src={column.src}
                    alt={column.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-105"
                  />
                </div>
              ) : (
                <div className="flex flex-col gap-4 h-full w-full">
                  {column.images.map((img, imgIdx) => (
                    <div 
                      key={imgIdx}
                      onClick={() => setSelectedImage(img)}
                      className="flex-1 relative overflow-hidden group/item cursor-pointer border border-border hover:border-primary/30 transition-colors duration-500"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-105"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button - Top Left Outside */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 left-0 md:-left-12 p-2 text-muted-foreground hover:text-primary transition-colors bg-secondary/50 md:bg-transparent rounded-full md:rounded-none"
              >
                <X className="w-8 h-8" />
              </button>

              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-auto h-auto max-w-full max-h-[85vh] object-contain border border-border"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}