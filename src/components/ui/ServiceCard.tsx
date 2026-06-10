import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealOnScroll from './RevealOnScroll';

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
  delay?: number;
  items?: string[];
}

export default function ServiceCard({ icon: Icon, title, description, link = '/services', delay = 0, items }: Props) {
  return (
    <RevealOnScroll delay={delay} direction="up">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        className="group relative p-7 h-full flex flex-col overflow-hidden shadow-lg border border-gray-500/20 rounded-md  transition-shadow duration-300 "
      >
        {/* Left gold accent line */}
        <div className="absolute left-0 top-6 bottom-6 w-0.75 bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top rounded-full" />

        {/* Icon */}
        <div className="relative w-12 h-12 rounded-full bg-gold flex items-center justify-center mb-5 group-hover:bg-gold/18 transition-colors duration-300 border border-gray-500/25 shadow-lg">
          <Icon size={20} className="text-white" strokeWidth={1.5} />
        </div>

        <h3 className="text-[15px] font-bold tex t-deep mb-2 leading-snug">{title}</h3>
        <p className="text-deep text-[13px] leading-relaxed mb-5 grow">{description}</p>

        {items && items.length > 0 && (
          <ul className="space-y-1.5 mb-5">
            {items.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-[12px] text-deep/65">
                <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        )}

        <Link
          to={link}
          className="inline-flex items-center gap-2 text-[12px] font-semibold text-gold group-hover:gap-3 transition-all duration-300"
        >
          En savoir plus
          <ArrowRight size={13} />
        </Link>
      </motion.div>
    </RevealOnScroll>
  );
}
