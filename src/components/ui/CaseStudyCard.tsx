import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealOnScroll from './RevealOnScroll';

interface Props {
  company: string;
  tag: string;
  title: string;
  result: string;
  delay?: number;
  index?: number;
}

const backgrounds = ['bg-gold/8', 'bg-deep/[0.03] ', 'bg-gold/5'];

export default function CaseStudyCard({ company, tag, title, result, delay = 0, index = 0 }: Props) {
  return (
    <RevealOnScroll delay={delay} direction="up">
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.28 }}
        className={`group relative rounded-md p-9 h-full flex flex-col overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 ${backgrounds[index % 3]}`}
      >
        {/* Gold top line on hover */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        {/* Decorative circles */}
        <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full transition-colors duration-400 pointer-events-none bg-gold" />
        <div className="absolute -bottom-4 -right-4 w-14 h-14 rounded-full bg-gold pointer-events-none" />

        <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-gold mb-3.5">{tag}</span>
        <h3 className="text-[15px] font-bold text-deep mb-1.5 leading-snug">{title}</h3>
        <p className="text-[12px] text-deep mb-5">{company}</p>

        <div className="mt-auto flex items-center justify-between">
          <div className="bg-gold/12 rounded-full px-3.5 py-1.5">
            <span className="text-gold font-bold text-[12px]">{result}</span>
          </div>
          <Link
            to="/cases"
            className="flex items-center gap-1.5 text-[12px] font-semibold text-deep group-hover:text-gold transition-colors duration-300"
          >
            Voir
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-300" />
          </Link>
        </div>
      </motion.div>
    </RevealOnScroll>
  );
}
