import { useTranslation } from 'react-i18next';
import { motion, cubicBezier } from 'framer-motion';
import {ArrowUpRight } from 'lucide-react';

import ProcessSection from '../components/ui/ProcessSection';
import CTASection from '../components/ui/CTASection';
import { useState } from 'react';
import ServicesSection from '../components/sections/ServicesSection';

const customEase = cubicBezier(0.22, 1, 0.36, 1);

const HeroServicesSection: React.FC = () => {
  const { t } = useTranslation();

  // Récupération dynamique du tableau de tags depuis le JSON
  const strategicTags = t('services.hero.tags', { returnObjects: true }) as string[];

  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-deep overflow-hidden pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80"
          alt="Background Texture"
          className="w-full h-full object-cover opacity-40 filter blur-md scale-110 pointer-events-none select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-yellow-500/10" />
      </div>

      {/* ARRIÈRE-PLAN AVEC MOTIFS GÉOMÉTRIQUES FINNES */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `linear-gradient(rgba(211, 170, 42, 0.1) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(211, 170, 42, 0.1) 1px, transparent 1px)`,
            backgroundSize: '120px 120px',
          }}
        />
        <svg
          className="absolute top-0 right-0 w-1/2 h-full opacity-10 text-gold"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <line
            x1="0"
            y1="0"
            x2="100"
            y2="100"
            stroke="currentColor"
            strokeWidth="0.1"
            strokeDasharray="1"
          />
          <line
            x1="100"
            y1="0"
            x2="0"
            y2="100"
            stroke="currentColor"
            strokeWidth="0.1"
            strokeDasharray="1"
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[160px]" />
      </div>

      {/* CORPS PRINCIPAL : SPLIT IMAGE À GAUCHE / TEXTE À DROITE */}
      <div className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 my-auto">
        {/* BLOC GAUCHE : IMAGE AVEC OVERLAY DROITE -> GAUCHE */}
        <div className="lg:col-span-5 order-2 lg:order-1 relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: customEase }}
            className="relative rounded-2xl overflow-hidden aspect-4/3 lg:aspect-[4/5] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] group border border-white/5"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
              alt="ActiveRise Strategy Workspace"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-[#0B0F19]/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          </motion.div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-yellow-500 pointer-events-none rounded-bl-xl hidden lg:block" />
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-yellow-500 pointer-events-none rounded-tr-xl hidden lg:block" />
        </div>

        {/* BLOC DROITE : TEXTE DEPUIS LE JSON */}
        <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: customEase }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold">
              {t('services.hero.badge')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: customEase }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-white uppercase mb-8"
          >
            {t('services.hero.title')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-500 to-gold">
              {t('services.hero.title2')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
            className="text-white/70 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl border-l border-white/10 pl-6"
          >
            {t('services.hero.text')}
          </motion.p>
        </div>
      </div>

      {/* ZONE INFÉRIEURE : TAGS MAPÉS DYNAMIQUEMENT */}
      {Array.isArray(strategicTags) && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: customEase }}
          className="w-full max-w-4xl mx-auto text-center z-10 pt-12 lg:pt-16"
        >
          <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/30 block mb-5">
            {t('services.hero.infer')}
          </span>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {strategicTags.map((tag, index) => (
              <div
                key={index}
                className="px-5 py-3 rounded-xl bg-white/[0.02] border border-yellow-500/10 text-yellow-500/80 text-xs md:text-sm font-semibold tracking-wide backdrop-blur-md transition-all duration-300 hover:border-gold/40 hover:text-white hover:shadow-[0_0_20px_rgba(211,170,42,0.1)] cursor-default"
              >
                {tag}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
};

interface ResultItem {
  id: string;
  titleKey: string;
  descKey: string;
}

const DeliverablesSection: React.FC = () => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const resultsData: ResultItem[] = [
    {
      id: '01',
      titleKey: 'services.deliverables.item1.title',
      descKey: 'services.deliverables.item1.desc',
    },
    {
      id: '02',
      titleKey: 'services.deliverables.item2.title',
      descKey: 'services.deliverables.item2.desc',
    },
    {
      id: '03',
      titleKey: 'services.deliverables.item3.title',
      descKey: 'services.deliverables.item3.desc',
    },
    {
      id: '04',
      titleKey: 'services.deliverables.item4.title',
      descKey: 'services.deliverables.item4.desc',
    },
  ];

  return (
    <section className="relative w-full bg-[#0B0F19] text-white py-24 lg:py-40 overflow-hidden border-t border-white/5">
      {/* Halo de lumière d'ambiance en arrière-plan */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-xl max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          {/* BLOC GAUCHE : TITRE FIXE ET COMPTEUR */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div>
              <span className="text-xs font-bold tracking-[0.4em] uppercase text-gold block mb-4">
                {t('services.deliverables.badge')}
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase leading-[1.1] text-white">
                {t('services.deliverables.section_title', 'Ce que vous obtiendrez')}
              </h2>

              {/* Indicateur d'état dynamique discret */}
              <div className="mt-12 hidden lg:flex items-center gap-4 text-white/20 font-mono text-sm">
                <span className="text-gold font-bold">
                  {hoveredIndex !== null ? `0${hoveredIndex + 1}` : '00'}
                </span>
                <div className="h-[1px] w-12 bg-white/10 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gold"
                    initial={{ x: '-100%' }}
                    animate={{ x: hoveredIndex !== null ? '0%' : '-100%' }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <span>04</span>
              </div>
            </div>
          </div>

          {/* BLOC DROIT : LES BANDES TYPOGRAPHIQUES INTERACTIVES */}
          <div className="lg:col-span-8 border-t border-white/10">
            {resultsData.map((item, index) => (
              <div
                key={item.id}
                className="relative border-b border-white/10 py-8 lg:py-10 cursor-pointer group transition-all duration-300"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Ligne d'accentuation dorée s'activant au survol */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-gold via-[#FFE89C] to-transparent z-20"
                  initial={{ width: 0 }}
                  animate={{ width: hoveredIndex === index ? '100%' : '0%' }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />

                <div className="flex items-start justify-between gap-6">
                  <div className="flex-grow">
                    {/* En-tête de la ligne : Numéro + Titre Giga Typo */}
                    <div className="flex items-baseline gap-6 sm:gap-10">
                      <span className="font-mono text-xs sm:text-sm font-bold text-white/30 group-hover:text-gold transition-colors duration-300">
                        {item.id}
                      </span>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white/80 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-2">
                        {t(item.titleKey)}
                      </h3>
                    </div>

                    {/* Zone de description animée (Hauteur fluide) */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: hoveredIndex === index ? 'auto' : 0,
                        opacity: hoveredIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden pl-12 sm:pl-16"
                    >
                      <p className="pt-4 text-white/60 text-base sm:text-lg max-w-2xl leading-relaxed font-medium">
                        {t(item.descKey)}
                      </p>
                    </motion.div>
                  </div>

                  {/* Flèche icône minimaliste qui pivote au survol */}
                  <div className="text-white/20 group-hover:text-gold transition-all duration-300 transform group-hover:rotate-45 pt-1 hidden sm:block">
                    <ArrowUpRight size={24} strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Services() {
  const { t } = useTranslation();

  

  const processSteps = [
    {
      number: '01',
      title: t('services.process.p1'),
      description: t('services.process.p1_desc'),
    },
    {
      number: '02',
      title: t('services.process.p2'),
      description: t('services.process.p2_desc'),
    },
    {
      number: '03',
      title: t('services.process.p3'),
      description: t('services.process.p3_desc'),
    },
    {
      number: '04',
      title: t('services.process.p4'),
      description: t('services.process.p4_desc'),
    },
  ];

  return (
    <div className="bg-beige overflow-hidden">
      <HeroServicesSection />
      <div className="section-separator" />

      <ServicesSection/>

      <div className="section-separator" />

      <DeliverablesSection />

      <div className="section-separator" />

      <section className="section-padding bg-beige">
        <ProcessSection
          badge={t('services.process.badge')}
          title={t('services.process.title')}
          titleGold={t('services.process.title2')}
          steps={processSteps}
          dark={false}
        />
      </section>

      <div className="section-separator" />

      <CTASection
        title={t('services.cta.title')}
        titleGold={t('services.cta.title2')}
        text={t('services.cta.text')}
        btnPrimary={t('services.cta.btn')}
        dark={true}
        desStyle
      />
    </div>
  );
}