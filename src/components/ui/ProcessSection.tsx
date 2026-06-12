import React, { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

interface Step {
  icon?: LucideIcon;
  number?: string;
  title: string;
  description: string;
}

interface Props {
  badge?: string;
  title: string;
  titleGold?: string;
  steps: Step[];
  dark?: boolean;
}

export default function ProcessSection({ badge, title, titleGold, steps, dark = true }: Props) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Thémisation dynamique et chirurgicale (sans cartes)
  const bgSection = dark ? 'bg-deep' : 'bg-[#F9F6F0]';
  const textTitleColor = dark ? 'text-white' : 'text-[#0B0F19]';
  const textDescColor = dark ? 'text-white/60' : 'text-slate-600';
  const activeDescColor = dark ? 'text-white/90' : 'text-slate-900';
  const borderColor = dark ? 'border-white/10' : 'border-slate-200';
  const lineIndicatorColor = dark ? 'bg-white/5' : 'bg-slate-200';

  // Calcul automatique des degrés de rotation selon le nombre d'étapes reçu
  const getDegree = (index: number) => {
    if (steps.length === 0) return 0;
    return (360 / steps.length) * index;
  };

  return (
    <section className={`relative w-full ${bgSection} py-24 overflow-hidden transition-colors duration-500`}>
      
      {/* Halo lumineux d'ambiance directionnel (visible en mode sombre) */}
      {dark && (
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      )}

      <div className="container-xl max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">
        
        {/* ─── EN-TÊTE DE SECTION DYNAMIQUE ─── */}
        <div className="mb-20 lg:mb-28 max-w-3xl">
          {badge && (
            <RevealOnScroll direction="left">
              <span className="text-xs font-bold tracking-[0.4em] uppercase text-gold block mb-4">
                {badge}
              </span>
            </RevealOnScroll>
          )}
          <RevealOnScroll direction="left" delay={0.1}>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-[1.1] ${textTitleColor}`}>
              {title}{' '}
              {titleGold && (
                <span className="block lg:inline text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-500 to-transparent">
                  {titleGold}
                </span>
              )}
            </h2>
          </RevealOnScroll>
        </div>

        {/* ─── STRUCTURE SPLIT ASYMÉTRIQUE ─── */}
        <div className="grid lg:grid-cols-12 gap-16 items-center ">
          
          {/* CÔTÉ GAUCHE : L'ORBITE COMPASS CINÉTIQUE (SANS CARTE) */}
          <div className="lg:col-span-5 hidden lg:flex justify-center relative">
            <div className={`relative w-[320px] h-[320px] rounded-full border ${borderColor} flex items-center justify-center`}>
              
              {/* Ligne rotative interne pilotée par l'index actif */}
              <motion.div 
                className="absolute inset-2 rounded-full border border-dashed border-gold/20"
                animate={{ rotate: getDegree(activeIndex) }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Tête magnétique lumineuse */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold shadow-[0_0_15px_rgba(211,170,42,0.8)]" />
              </motion.div>

              {/* Affichage de l'icône ou du numéro de l'étape centrale */}
              <div className="text-center flex flex-col items-center justify-center p-6">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className={`text-7xl font-mono font-black ${textTitleColor}`} 
                >
                  {steps[activeIndex]?.number || String(activeIndex + 1).padStart(2, '0')}
                </motion.div>
                
                {steps[activeIndex]?.icon && (
                  <motion.div
                    key={`icon-${activeIndex}`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-gold mt-2"
                  >
                    {React.createElement(steps[activeIndex].icon!, { size: 24, strokeWidth: 1.5 })}
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* CÔTÉ DROIT : CONTENUS BRUTS INTERACTIFS */}
          <div className={`lg:col-span-7 space-y-10 lg:space-y-12 relative border-l-3 ${lineIndicatorColor} pl-6 lg:pl-12 py-8 rounded-tr-md rounded-br-md shadow-xl`}>
            {steps.map((step, i) => {
              const isSelected = activeIndex === i;
              const StepIcon = step.icon;

              return (
                <div
                  key={i}
                  className="relative cursor-pointer group"
                  onMouseEnter={() => setActiveIndex(i)}
                >
                  {/* Curseur vertical luminescent connecté à la bordure de gauche */}
                  <motion.div 
                    className="absolute rounded-full -left-[26px] lg:-left-[50px] top-0 w-[5px] bg-gold h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isSelected ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Numéro + Titre de l'étape */}
                  <div className="flex items-center gap-4 mb-3">
                    <span className={`font-mono text-xs sm:text-sm font-bold transition-colors duration-300 ${isSelected ? 'text-gold' : 'text-gold/40 group-hover:text-gold/70'}`}>
                      [{step.number || String(i + 1).padStart(2, '0')}]
                    </span>
                    
                    {StepIcon && (
                      <div className={`transition-colors duration-300 ${isSelected ? 'text-gold' : 'text-slate-400'}`}>
                        <StepIcon size={16} strokeWidth={2} />
                      </div>
                    )}

                    <h3 className={`text-xl sm:text-2xl font-black uppercase tracking-tight transition-colors duration-300 ${isSelected ? textTitleColor : 'text-slate-400 group-hover:text-slate-400/70'}`}>
                      {step.title}
                    </h3>
                  </div>

                  {/* Description textuelle */}
                  <div className="pl-0 transition-opacity duration-300">
                    <p className={`text-sm sm:text-base md:text-lg leading-relaxed font-medium transition-colors duration-300 ${isSelected ? activeDescColor : textDescColor}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}