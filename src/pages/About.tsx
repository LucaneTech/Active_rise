import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase, Compass, Layers, Eye, HeartHandshake, ShieldCheck } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import CTASection from '../components/ui/CTASection';
import type React from 'react';
import ServiceCard from '../components/ui/ServiceCard';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-130 md:min-h-150 lg:min-h-screen flex items-center justify-center bg-[#0B0F19] overflow-hidden px-4 pt-12 md:pt-4 sm:px-6 lg:px-8">
      {/* BACKGROUND & HERO IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80"
          alt="ActiveRise Team Background"
          className="w-full h-full object-cover object-center transform scale-105 select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/70 to-[#0B0F19]/10" />
      </div>

      {/* FORMES GEOMETRIQUES CIRCULAIRES & GLOWS (MODERNE / PRO) */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-yellow-500/60 blur-[120px]" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 right-[10%] w-[450px] h-[450px] rounded-full border border-yellow-500/30 border-dashed flex items-center justify-center hidden md:flex"
        >
          <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-yellow-500/20 to-transparent backdrop-blur-[2px] border border-yellow-500/10" />
        </motion.div>
        <div className="absolute bottom-10 left-[15%] w-72 h-72 rounded-full border border-yellow-500/5 bg-gradient-to-tr from-yellow-500/10 to-transparent backdrop-blur-[2px] hidden lg:block" />
      </div>

      {/* CONTENU CENTRÉ ET TYPOGRAPHIE */}
      <div className="relative z-20 w-full max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] py-8"
        >
          {t('about.hero.title')}{' '}
          <span className="block mt-2 text-gold text-transparent drop-shadow-sm">
            {t('about.hero.title2')}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl font-medium leading-relaxed mb-10"
        >
          {t('about.hero.text')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {[t('about.vision.title'), t('about.vision.title2'), t('about.vision.title3')].map(
            (item, index) => (
              <span
                key={index}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-gold bg-white/5 hover:bg-white/10 border border-yellow-500/10 rounded-xl backdrop-blur-md transition-all duration-300 cursor-default hover:border-gold/30 hover:shadow-[0_0_15px_rgba(211,170,42,0.1)]"
              >
                {item}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

const StorySection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[#0B0F19] py-12 md:py-20 overflow-hidden">
      {/* IMAGE EN ARRIÈRE-PLAN GLOBAL (EFFET FLOU CRÉATIF) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80"
          alt="Background Texture"
          className="w-full h-full object-cover opacity-40 filter blur-md scale-110 pointer-events-none select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/50 via-transparent to-yellow-500/10" />
      </div>

      {/* LA GRANDE CARD DE CENTRALISATION (90% DE LARGEUR) */}
      <div className="relative z-10 w-[95%] lg:w-[90%] max-w-[1400px] rounded-xl rounded-tl-[60px] lg:rounded-tl-[100px] rounded-br-[100px] bg-black/70 backdrop-blur-2xl border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden p-6 md:p-12 lg:p-16 flex flex-col justify-between min-h-[85vh]">
        {/* HAUT DE CARD : MINI EN-TÊTE DE SECTION */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between pb-8 mb-8 border-b border-white/5 gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-white/90">
              {t('about.story.badge')}
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs font-medium tracking-widest text-white/60 uppercase">
            <span className="hover:text-gold transition-colors duration-300 cursor-pointer">
              Vision
            </span>
            <span className="hover:text-gold transition-colors duration-300 cursor-pointer">
              Approche
            </span>
          </div>
        </div>

        {/* CORPS DE CARD : CONTENU TEXTUEL CENTRÉ ET STRUCTURÉ */}
        <div className="flex-grow flex flex-col justify-center max-w-4xl mx-auto text-center py-10 md:py-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] mb-8">
            {t('about.story.title')}{' '}
            <span className="bg-gradient-to-r from-gold via-yellow-500 to-gold bg-clip-text text-transparent block sm:inline">
              {t('about.story.title2')}
            </span>
          </h2>

          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
              {t('about.story.text1')}
            </p>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed">
              {t('about.story.text2')}
            </p>
          </div>
        </div>

        {/* BAS DE CARD : GRID DE L'APPROCHE (DESIGN PRO ET MODERNE) */}
        <div className="w-full mt-auto pt-8 border-t border-white/5 z-10">
          <div className="grid md:grid-cols-2 gap-8 items-start bg-white/[0.02] backdrop-blur-md border border-white/5 p-6 md:p-8 rounded-2xl">
            <div>
              <h4 className="text-xs font-bold tracking-wider text-gold uppercase mb-2">
                Notre Stratégie
              </h4>
              <p className="text-white text-base sm:text-lg font-medium leading-relaxed">
                {t('about.approach.text')}
              </p>
            </div>
            <div className="flex flex-col gap-3 text-white/60 text-xs sm:text-sm leading-relaxed border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
              <p> {t('about.story.para1')}</p>
              <p> {t('about.story.para2')}</p>
            </div>
          </div>
        </div>
        <img
          src="images/icon.png"
          alt="icon active_rise"
          className="w-35 md:w-40 lg:w-80 h-35 md:h-40 lg:h-80 absolute -bottom-0 -right-0 z-4 opacity-90"
        />
      </div>
    </section>
  );
};

const VisionMissionSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full bg-deep text-white py-24 lg:py-36 overflow-hidden">
      {/* Filigrane décoratif en arrière-plan - Lignes épurées */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1400px] border-x border-white/[0.03] pointer-events-none z-0" />

      <div className="container-xl relative z-10 px-4 sm:px-8 max-w-[1400px] mx-auto">
        {/* EN-TÊTE : DEUX COLONNES ASYMÉTRIQUES (VISION) */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-16 lg:pb-24 border-b border-white/10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold">
                01 . {t('about.vision.badge')}
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-[0.95]">
              {t('about.vision.title')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-500 to-gold">
                {t('about.vision.title2')}
              </span>
              <span className="text-xs block font-light tracking-widest text-white/40 mt-2 normal-case">
                {t('about.vision.title3')}
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-12">
            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-2xl border-l-2 border-gold/30 pl-6 md:pl-8">
              {t('about.vision.text')}
            </p>
          </div>
        </div>

        {/* MILIEU : STRUCTURE INVERSÉE ET ÉPUREÉ (MISSION) */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start pt-16 lg:pt-24 pb-20 lg:pb-32">
          <div className="lg:col-span-5 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold">
                02 . {t('about.mission.badge')}
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase leading-none">
              {t('about.mission.title')}{' '}
              <div className="inline-flex gap-3">
                <span className="text-white/40 font-medium text-3xl md:text-4xl normal-case mt-2">
                  {t('about.mission.title2')}
                </span>
                <span className="text-white/40 font-medium text-3xl md:text-4xl normal-case mt-2">
                  {t('about.mission.title3')}
                </span>
              </div>
            </h3>
          </div>

          <div className="lg:col-span-7 lg:order-1 space-y-6">
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
              {t('about.mission.text')}
            </p>
          </div>
        </div>
      </div>

      {/* APOTHÉOSE : LA CITATION SUR FOND DORÉ (SANS CARD, SPLIT TOUTE LARGEUR) */}
      <div className="w-full py-16 lg:py-24 relative overflow-hidden select-none">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white block mb-4">
            {t('about.mission.philoTitle')}
          </span>
          <blockquote className="text-3xl text-gold sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-5xl mx-auto uppercase">
            {t('about.mission.philosophie')}
          </blockquote>
          <cite className="block mt-6 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white/50 not-italic">
            {t('about.mission.signature')}
          </cite>
        </div>
      </div>
    </section>
  );
};

interface ValueItem {
  icon: React.ComponentType<any>;
  titleKey: string;
  descKey: string;
}

const valuesData: ValueItem[] = [
  {
    icon: ShieldCheck,
    titleKey: 'about.values.items.0.title',
    descKey: 'about.values.items.0.description',
  },
  {
    icon: HeartHandshake,
    titleKey: 'about.values.items.1.title',
    descKey: 'about.values.items.1.description',
  },
  {
    icon: Eye,
    titleKey: 'about.values.items.2.title',
    descKey: 'about.values.items.2.description',
  },
];

export const ValuesTimelineSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full bg-deep text-white py-24 lg:py-36 overflow-hidden">
      {/* Éléments de design géométriques subtils en arrière-plan */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-xl max-w-[1200px] mx-auto px-4 sm:px-8 relative z-10">
        {/* En-tête de section minimaliste */}
        <div className="mb-24 lg:mb-32 max-w-2xl">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold block mb-4">
            {t('about.values.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-[1.1]">
            {t('about.values.title')}{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-500 to-gold">
              {t('about.values.title2')}
            </span>
          </h2>
        </div>

        {/* Structure en Stepper Linéaire Asymétrique (Sans cartes) */}
        <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-20 lg:space-y-28">
          {valuesData.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="relative pl-8 md:pl-16 group">
                {/* Point d'ancrage sur la ligne temporelle */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#0B0F19] border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:border-gold group-hover:shadow-[0_0_15px_rgba(211,170,42,0.4)]">
                  <div className="w-2 h-2 rounded-full bg-white/40 transition-all duration-500 group-hover:bg-gold group-hover:scale-125" />
                </div>

                {/* Indicateur numérique absolu (visible sur desktop) */}
                <span className="absolute left-0 -translate-x-24 top-0 hidden md:block text-sm font-mono font-bold text-white/20 group-hover:text-gold transition-colors duration-300">
                  [ 0{i + 1} ]
                </span>

                {/* Layout du contenu de la valeur */}
                <div className="grid lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                  {/* Titre + Icône alignés sur la gauche */}
                  <div className="lg:col-span-5 flex items-center gap-4">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/60 group-hover:text-gold group-hover:border-gold/30 group-hover:bg-gold/5 transition-all duration-300">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white/90 group-hover:text-white transition-colors duration-300">
                      {t(v.titleKey)}
                    </h3>
                  </div>

                  {/* Description textuelle décalée sur la droite */}
                  <div className="lg:col-span-7 lg:pt-1">
                    <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-xl group-hover:text-white/80 transition-colors duration-300">
                      {t(v.descKey)}
                    </p>
                  </div>
                </div>

                {/* Ligne séparatrice horizontale fluide sous chaque bloc sauf le dernier */}
                {i !== valuesData.length - 1 && (
                  <div className="mt-12 lg:mt-16 h-[1px] w-full bg-gradient-to-r from-white/5 via-white/[0.02] to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default function About() {
  const { t } = useTranslation();

  const differentiators = [
    {
      id: '01',
      icon: Compass,
      titleKey: 'about.differentiation.items.0.title',
      subtitleKey: 'about.differentiation.items.0.subtitle',
      descKey: 'about.differentiation.items.0.description',
    },
    {
      id: '02',
      icon: Layers,
      titleKey: 'about.differentiation.items.1.title',
      subtitleKey: 'about.differentiation.items.1.subtitle',
      descKey: 'about.differentiation.items.1.description',
    },
    {
      id: '03',
      icon: Briefcase,
      titleKey: 'about.differentiation.items.2.title',
      subtitleKey: 'about.differentiation.items.2.subtitle',
      descKey: 'about.differentiation.items.2.description',
    },
  ];

  return (
    <div className="bg-beige overflow-hidden">
      <HeroSection />

      <div className="section-separator" />

      {/* STORY */}
      <StorySection />

      <div className="section-separator" />

      {/* VISION & MISSION */}
      <VisionMissionSection />

      <div className="section-separator" />

      {/* DIFFERENTIATION */}
      <section className="section-padding bg-gray-50">
        <div className="container-xl">
          <SectionTitle
            badge={t('about.differentiation.badge')}
            title={t('about.differentiation.title')}
            titleGold={t('about.differentiation.title2')}
            subtitle={t('about.differentiation.intro')}
          />
          <div className="grid md:grid-cols-2 gap-5 mt-10">
            {differentiators.map((d, i) => (
              <ServiceCard
                key={i}
                icon={d.icon}
                title={t(d.titleKey)}
                subtitle={t(d.subtitleKey)}
                description={t(d.descKey)}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="section-separator" />

      {/* VALUES */}
      <ValuesTimelineSection />

      <CTASection
        title={t('about.cta.title')}
        titleGold={t('about.cta.title2')}
        text={t('about.cta.text')}
        btnPrimary={t('about.cta.btn')}
        dark={true}
        desStyle
      />
    </div>
  );
}