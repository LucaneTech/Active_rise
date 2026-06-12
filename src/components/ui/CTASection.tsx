import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

interface Props {
  badge?: string;
  title: string;
  titleGold?: string;
  text?: string;
  btnPrimary: string;
  btnPrimaryLink?: string;
  btnSecondary?: string;
  btnSecondaryLink?: string;
  dark?: boolean;
  desStyle?: boolean;
}

export default function CTASection({
  badge, title, titleGold, text, btnPrimary, btnPrimaryLink = '/contact',
  btnSecondary, btnSecondaryLink = '/services', dark = true, desStyle,
}: Props) {
  const bg = dark ? 'bg-deep' : 'bg-beige';
  const titleColor = dark ? 'text-beige' : 'text-deep';
  const textColor = desStyle ? 'text-beige' : 'text-deep';

  return (
    <section className={`${bg} section-padding relative overflow-hidden`}>
      {/* Decorative circles */}
      <div className="hidden md:flex absolute left-0 w-96 h-96 rounded-full  pointer-events-none bg-amber-300/15
       blur-2xl" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/3 w-56 h-56 rounded-full pointer-events-none bg-white/20 blur-2xl" />
      <div className="hidden md:flex absolute right-10 w-80 h-80 rounded-full border border-gold pointer-events-none bg-white/20 blur-2xl" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-48 h-48 rounded-full  pointer-events-none bg-amber-300/15 blur-2xl" />
      {/* Small accent dot — top center */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold pointer-events-none " />

      <div className="container-xl relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {badge && (
            <RevealOnScroll delay={0}>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-md mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                {badge}
              </span>
            </RevealOnScroll>
          )}
          <RevealOnScroll delay={0.1}>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.08] mb-5 ${titleColor}`}>
              {title}
              {titleGold && <> <span className="text-gold">{titleGold}</span></>}
            </h2>
          </RevealOnScroll>
          {text && (
            <RevealOnScroll delay={0.2}>
              <p className={`text-base leading-relaxed mb-9 ${textColor}`}>{text}</p>
            </RevealOnScroll>
          )}
          <RevealOnScroll delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to={btnPrimaryLink}
                  className="inline-flex items-center gap-2.5 bg-gold text-deep font-bold px-9 py-3 rounded-md hover:bg-gold/90 transition-all duration-300 text-[13px] tracking-wide"
                >
                  {btnPrimary}
                </Link>
              </motion.div>
              {btnSecondary && (
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to={btnSecondaryLink}
                    className={`inline-flex items-center gap-2.5 font-bold px-9 py-3 rounded-md transition-all duration-300 text-[13px] tracking-wide hover:text-gold ${
                      dark
                        ? 'text-beige shadow-[0_0_0_1px_rgba(252,248,238,0.15)] hover:shadow-[0_0_0_1px_rgba(211,170,42,0.5)]'
                        : 'text-deep/70 shadow-btn-ghost hover:shadow-[0_0_0_1px_rgba(211,170,42,0.5)]'
                    }`}
                  >
                    {btnSecondary}
                  </Link>
                </motion.div>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
