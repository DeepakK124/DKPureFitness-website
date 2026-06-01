import { motion } from 'framer-motion';

const TRAINERS = [
{
  id: 't1',
  name: 'DEEPAK KUMAR',
  specialty: 'Transformation & Bodybuilding',
  bio: 'Founder of DK Pure Fitness. As a dedicated athlete and competitive cricketer, Deepak understands the discipline required to excel. He applies this same rigorous mindset to help members transform their bodies and achieve their ultimate fitness goals.',
  image_url: "/trainers/deepak-kumar.png"
},
{
  id: 't2',
  name: '---',
  specialty: '---',
  bio: '---',
  image_url: "/trainers/trainer-unavailable.png"
},
{
  id: 't3',
  name: '---',
  specialty: '---',
  bio: '---',
  image_url: "/trainers/trainer-unavailable.png"
}];


export default function TrainersSection() {
  return (
    <section id="trainers" className="relative py-24 md:py-32 bg-[#0A0A0B]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F97316]/30 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-[#F97316] uppercase block mb-3">
              03 — The Architects
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-[#F3F4F6] uppercase leading-[0.95]">
              YOUR<br />TRAINERS
            </h2>
          </div>
          

          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {TRAINERS.map((trainer, idx) =>
          <motion.div
            key={trainer.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative bg-[#111113] border border-white/5 hover:border-[#F97316]/30 transition-all duration-500 overflow-hidden">
            
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                {trainer.image_url ?
              <img
                src={trainer.image_url}
                alt={trainer.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" /> :


              <div className="w-full h-full bg-[#1a1a1d] flex items-center justify-center">
                    <span className="font-display text-6xl text-[#F97316]/20">
                      {(trainer.name || '?')[0]}
                    </span>
                  </div>
              }
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent" />

                {/* Scanning line effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute left-0 right-0 h-px bg-[#F97316]/60 animate-pulse" style={{ top: '50%' }} />
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-display text-lg text-[#F3F4F6] uppercase">
                    {trainer.name}
                  </h3>
                  {idx === 0 && (
                    <span className="font-mono text-[10px] tracking-widest text-white bg-blue-600 px-2 py-0.5 flex-shrink-0">
                      OWNER
                    </span>
                  )}
                </div>
                <p className="font-mono text-xs tracking-widest text-[#F97316] mb-3">
                  {trainer.specialty?.toUpperCase()}
                </p>
                <p className="text-[#9CA3AF] text-sm leading-relaxed line-clamp-3">
                  {trainer.bio}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}