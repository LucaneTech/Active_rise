import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Globe, FileText, Megaphone, Users } from 'lucide-react';
import CTASection from '../../components/ui/CTASection';
import React from 'react';


export default function Communication() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
const autoplayRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const services = [
    { icon: Globe, title: t('services.communication_branding.s1'), description: t('services.communication_branding.s1_desc'), id: '01' },
    { icon: FileText, title: t('services.communication_branding.s2'), description: t('services.communication_branding.s2_desc'), id: '02' },
    { icon: Megaphone, title: t('services.communication_branding.s3'), description: t('services.communication_branding.s3_desc'), id: '03' },
    { icon: Users, title: t('services.communication_branding.s4'), description: t('services.communication_branding.s4_desc'), id: '04' },
  ];

  // Gestion du lecteur automatique (Autoplay) et de la barre de progression
  useEffect(() => {
    setProgress(0);
    
    const duration = 6000; // 6 secondes par service
    const intervalTime = 100;
    const steps = duration / intervalTime;
    
    let currentStep = 0;

    autoplayRef.current = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);

      if (currentStep >= steps) {
        setActiveIndex((prev) => (prev + 1) % services.length);
      }
    }, intervalTime);

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [activeIndex, services.length]);

  return (
    <div className="min-h-screen bg-deep text-white overflow-hidden">
       
      {/* ─── EXPERT INTERACTIVE ROW CONTAINER ─── */}
      <section className="relative min-h-[90vh] lg:min-h-screen w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-32 pb-16 flex flex-col justify-between">
         
        {/* BOUTON RETOUR MINIMALISTE */}
        {/* <div className="absolute top-12 left-4 sm:left-8 lg:left-12 z-20">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] text-white/50 hover:text-gold uppercase transition-colors group"
          >
            <ArrowLeft size={14} className="transform group-hover:-translate-x-1 transition-transform" />
            {t('common.back', 'Retour')}
          </Link>
        </div> */}
     
        {/* EN-TÊTE FIXE */}
        <div className="max-w-3xl mb-12 lg:mb-0">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-sm font-bold tracking-[0.4em] text-white uppercase mb-4"
          >
            {t('services.communication_branding.title')}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-500 to-gold">
              {t('services.communication_branding.title2')}
            </span>
          </motion.h1>
        </div>

        {/* CONTENU PRINCIPAL SCINDÉ DYNAMIQUE */}
        <div className="grid lg:grid-cols-12 gap-8 items-center my-auto w-full">
          
          {/* ZONE DE SÉLECTION & TIMELINE (INTERACTIF & INTUITIF) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {services.map((item, index) => {
              const isCurrent = activeIndex === index;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className="w-full text-left focus:outline-none relative py-4 px-6 rounded-md transition-all duration-300 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03]"
                >
                  {/* Fond indicateur d'activation */}
                  {isCurrent && (
                    <motion.div 
                      layoutId="activeTabBg" 
                      className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent border-l-2 border-gold rounded-md pointer-events-none" 
                    />
                  )}

                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-xs font-bold ${isCurrent ? 'text-gold' : 'text-white/30'}`}>
                        {item.id}
                      </span>
                      <span className={`text-sm font-bold uppercase tracking-wider transition-colors ${isCurrent ? 'text-white' : 'text-white/40'}`}>
                        {item.title}
                      </span>
                    </div>
                  </div>

                  {/* La mini-barre de progression active (Style Instagram Story) */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 overflow-hidden">
                    {isCurrent && (
                      <motion.div 
                        className="h-full bg-gold" 
                        style={{ width: `${progress}%` }}
                        transition={{ ease: 'linear' }}
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* THÉÂTRE D'AFFICHAGE DU SERVICE ACTIF */}
          <div className="lg:col-span-8 lg:pl-16 relative min-h-[320px] flex flex-col justify-center">
            
            {/* Icône filigrane en arrière-plan */}
            <div className="absolute right-0 text-yellow-500/5 pointer-events-none select-none hidden md:block">
              {React.createElement(services[activeIndex].icon, { size: 280, strokeWidth: 0.5 })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10"
              >
                <div className="flex items-center gap-3 text-gold mb-6">
                  {React.createElement(services[activeIndex].icon, { size: 22, strokeWidth: 1.5 })}
                  <span className="font-mono text-xs tracking-widest font-bold">ACTIVE'RISE</span>
                </div>

                <p className="text-white/80 text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed max-w-3xl mb-8">
                  {services[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* INTRODUCTION COMPLÉMENTAIRE BASSE INFRA-TEXTE */}
        <div className="flex pt-8 border-t border-white/5 text-white/40 text-sm max-w-2xl">
          {t('services.page.communication.text')}
        </div>

      </section>

      {/* ─── ZONE DE CONVERSION ACCÉLÉRÉE ─── */}
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