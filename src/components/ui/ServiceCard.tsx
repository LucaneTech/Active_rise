import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealOnScroll from './RevealOnScroll';

interface Props {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  description: string;
  link?: string;
  linkLabel?: string;
  delay?: number;
  items?: string[];
  image?: string;
}

export default function ServiceCard({ 
  icon: Icon, 
  title, 
  subtitle, 
  description, 
  link = '/services', 
  linkLabel, 
  delay = 0, 
  items, 
  image 
}: Props) {
  return (
    <RevealOnScroll delay={delay} direction="up">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        className="group relative p-7 h-full flex flex-col overflow-hidden shadow-lg border border-gray-500/20 rounded-md transition-shadow duration-300 bg-gradient-to-br from-black/60 to-black"
      >
        {/* Image de fond optimisée */}
        {image && (
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img 
              src={image} 
              alt={`${title} illustration`}
              className="w-full h-full object-cover opacity-20 group-hover:opacity-50 transition-opacity duration-500"
              loading="lazy"
            />
            {/* Overlay pour lisibilité */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/20  to-transparent" />
          </div>
        )}

        {/* Left gold accent line */}
        <div className="absolute z-10 left-0 top-6 bottom-6 w-0.75 bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top rounded-full" />

        {/* Icon */}
        <div className="relative z-10 w-12 h-12 rounded-full bg-gold flex items-center justify-center mb-5 group-hover:bg-gold/18 transition-colors duration-300 border border-gray-500/25 shadow-lg">
          <Icon size={20} className="text-white" strokeWidth={1.5} />
        </div>

        {/* Contenu avec z-index pour être au-dessus de l'image */}
        <h3 className="relative z-10 text-[15px] font-bold text-white mb-2 leading-snug">
          {title}
        </h3>
        
        {subtitle && (
          <p className="relative z-10 text-[13px] text-gold mb-3">
            {subtitle}
          </p>
        )}
        
        <p className="relative z-10 text-white text-[13px] leading-relaxed mb-5 grow">
          {description}
        </p>

        {items && items.length > 0 && (
          <ul className="relative z-40 space-y-1.5 mb-5">
            {items.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-[12px] text-deep/65">
                <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        )}
        
        {linkLabel && (
          <Link
            to={link}
            className="relative z-10 inline-flex items-center gap-2 text-[12px] font-semibold text-gold group-hover:gap-3 transition-all duration-300"
          >
            {linkLabel || 'Learn more'}
            <ArrowRight size={13} />
          </Link>
        )}
      </motion.div>
    </RevealOnScroll>
  );
}