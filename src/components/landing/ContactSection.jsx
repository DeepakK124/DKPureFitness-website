import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Clock, ArrowUpRight, Instagram } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const MAPS_URL = 'https://maps.google.com/?q=8JCG%2BF7V,+Laxma+Reddy+Palem+Colony,+Hyderabad,+Telangana+501513';
const INSTAGRAM_URL = 'https://www.instagram.com/dk_purefitness/';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', interest: 'general' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    
    // Mock sending delay
    setTimeout(() => {
      setSending(false);
      setSent(true);
      toast.success("Message received. We'll contact you within 24 hours.");
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#0A0A0B]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F97316]/30 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Info */}
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-[#F97316] uppercase block mb-3">
              07 — Control Center
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-[#F3F4F6] uppercase leading-[0.95] mb-8">
              CONTACT<br />US
            </h2>
            


            

            <div className="space-y-6">
              {/* Location — clickable to Google Maps */}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group cursor-pointer">
                
                <div className="w-10 h-10 flex items-center justify-center bg-[#111113] border border-white/5 group-hover:border-[#F97316]/40 transition-colors flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[#F97316]" />
                </div>
                <div>
                  <span className="font-mono text-[10px] tracking-widest text-[#9CA3AF] block mb-1">
                    LOCATION
                  </span>
                  <span className="text-[#F3F4F6] text-sm group-hover:text-[#F97316] transition-colors underline underline-offset-2 decoration-[#F97316]/30">
                    8JCG+F7V, Laxma Reddy Palem Colony,<br />Hyderabad, Telangana 501513
                  </span>
                </div>
              </a>

              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center bg-[#111113] border border-white/5 flex-shrink-0">
                  <Phone className="w-4 h-4 text-[#F97316]" />
                </div>
                <div>
                  <span className="font-mono text-[10px] tracking-widest text-[#9CA3AF] block mb-1">DIRECT LINE</span>
                  <a href="tel:+918188827888" className="text-[#F3F4F6] text-sm hover:text-[#F97316] transition-colors">
                    +91 8188827888
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
                <div className="w-10 h-10 flex items-center justify-center bg-[#111113] border border-white/5 group-hover:border-[#F97316]/40 transition-colors flex-shrink-0">
                  <Instagram className="w-4 h-4 text-[#F97316]" />
                </div>
                <div>
                  <span className="font-mono text-[10px] tracking-widest text-[#9CA3AF] block mb-1">INSTAGRAM</span>
                  <span className="text-[#F3F4F6] text-sm group-hover:text-[#F97316] transition-colors">
                    @dk_purefitness
                  </span>
                </div>
              </a>

              {/* Hours */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center bg-[#111113] border border-white/5 flex-shrink-0">
                  <Clock className="w-4 h-4 text-[#F97316]" />
                </div>
                <div>
                  <span className="font-mono text-[10px] tracking-widest text-[#9CA3AF] block mb-1">OPERATING HOURS</span>
                  <span className="text-[#F3F4F6] text-sm">
                    MON–SUN: 6:00 AM – 11:00 AM<br />MON–SAT: 4:30 PM – 9:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-[#111113] border border-white/5 p-8 md:p-10">
            {sent ?
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
              
                <div className="w-16 h-16 bg-[#F97316]/10 border border-[#F97316]/30 flex items-center justify-center mb-6">
                  <Send className="w-6 h-6 text-[#F97316]" />
                </div>
                <h3 className="font-display text-xl text-[#F3F4F6] uppercase mb-2">
                  MESSAGE RECEIVED
                </h3>
                <p className="font-mono text-xs text-[#9CA3AF] tracking-widest">
                  OUR TEAM WILL RESPOND WITHIN 24H
                </p>
              </motion.div> :

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="mb-6">
                  <h3 className="font-display text-lg text-[#F3F4F6] uppercase mb-1">
                    SEND EMAIL
                  </h3>
                  <p className="font-mono text-[10px] text-[#9CA3AF] tracking-widest">
                    ALL FIELDS REQUIRED
                  </p>
                </div>

                <div>
                  <label className="font-mono text-[10px] tracking-widest text-[#9CA3AF] block mb-2">NAME</label>
                  <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="bg-[#0A0A0B] border-white/10 text-[#F3F4F6] font-mono text-sm focus:border-[#F97316] rounded-none h-12"
                  placeholder="Your full name" />
                
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[10px] tracking-widest text-[#9CA3AF] block mb-2">EMAIL</label>
                    <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="bg-[#0A0A0B] border-white/10 text-[#F3F4F6] font-mono text-sm focus:border-[#F97316] rounded-none h-12"
                    placeholder="you@email.com" />
                  
                  </div>
                  <div>
                    <label className="font-mono text-[10px] tracking-widest text-[#9CA3AF] block mb-2">PHONE</label>
                    <Input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="bg-[#0A0A0B] border-white/10 text-[#F3F4F6] font-mono text-sm focus:border-[#F97316] rounded-none h-12"
                    placeholder="Your phone number" />
                  
                  </div>
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-widest text-[#9CA3AF] block mb-2">INTEREST</label>
                  <Select value={form.interest} onValueChange={(v) => setForm({ ...form, interest: v })}>
                    <SelectTrigger className="bg-[#0A0A0B] border-white/10 text-[#F3F4F6] font-mono text-sm rounded-none h-12">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#111113] border-white/10">
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="membership">Membership</SelectItem>
                      <SelectItem value="personal_training">Personal Training</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-widest text-[#9CA3AF] block mb-2">MESSAGE</label>
                  <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={4}
                  className="bg-[#0A0A0B] border-white/10 text-[#F3F4F6] font-mono text-sm focus:border-[#F97316] rounded-none resize-none"
                  placeholder="Tell us about your goals..." />
                
                </div>
                <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 py-4 bg-[#F97316] text-white font-mono text-xs tracking-widest hover:bg-[#F97316]/80 disabled:opacity-50 transition-all duration-300">
                
                  {sending ? 'SENDING...' : 'SEND EMAIL'}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </form>
            }
          </div>
        </div>
      </div>
    </section>);

}