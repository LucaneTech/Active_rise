import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

interface Props {
  text: string;
  name: string;
  role: string;
  delay?: number;
}

export default function TestimonialCard({ text, name, role, delay = 0 }: Props) {
  return (
    <RevealOnScroll delay={delay} direction="up">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.28 }}
        className="relative glass-card rounded-md p-7 h-full flex flex-col overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.18)] hover:shadow-[0_4px_32px_rgba(211,170,42,0.10)] transition-shadow duration-300 border border-beige/[0.07]"
      >
        {/* Stars */}
        <div className="flex gap-0.5 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={11} className="text-gold fill-yellow-500" />
          ))}
        </div>

        <Quote size={22} className="text-gold mb-3" strokeWidth={1.5} />
        <p className="text-beige leading-relaxed grow mb-6 text-[13px]">{text}</p>

        <div className="flex items-center gap-3 pt-4 border-t border-gray-600/30">
          <div className="relative w-8 h-8 shrink-0">
            <div className="absolute inset-0 rounded-full border border-gold scale-110" />
            <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
              <span className="text-gold font-bold text-[11px]">{name.charAt(0)}</span>
            </div>
          </div>
          <div>
            <p className="font-bold text-beige text-[13px]">{name}</p>
            <p className="text-beige text-[11px]">{role}</p>
          </div>
        </div>
      </motion.div>
    </RevealOnScroll>
  );
}
