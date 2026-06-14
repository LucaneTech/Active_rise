import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle2, MapPin, User, Tag, Briefcase } from 'lucide-react';

export default function CaseStudiesPage() {
  const { t } = useTranslation();

  const cases = [
    {
      id: '01',
      tag: t('portfolio.case1.tag'),
      title: t('portfolio.case1.title'),
      manager: t('portfolio.case1.manager'),
      sector: t('portfolio.case1.sector'),
      location: t('portfolio.case1.location'),
      context: t('portfolio.case1.context'),
      challenge: t('portfolio.case1.challenge'),
      intervention: [
        t('portfolio.case1.int1'),
        t('portfolio.case1.int2'),
        t('portfolio.case1.int3'),
        t('portfolio.case1.int4'),
        t('portfolio.case1.int5'),
      ],
      management: t('portfolio.case1.management'),
      results: [
        t('portfolio.case1.res1'),
        t('portfolio.case1.res2'),
        t('portfolio.case1.res3'),
        t('portfolio.case1.res4'),
      ],
      note: t('portfolio.case1.note'),
    },
    {
      id: '02',
      tag: t('portfolio.case2.tag'),
      title: t('portfolio.case2.title'),
      manager: t('portfolio.case2.manager'),
      sector: t('portfolio.case2.sector'),
      location: t('portfolio.case2.location'),
      context: t('portfolio.case2.context'),
      challenge: t('portfolio.case2.challenge'),
      intervention: [
        t('portfolio.case2.int1'),
        t('portfolio.case2.int2'),
        t('portfolio.case2.int3'),
        t('portfolio.case2.int4'),
        t('portfolio.case2.int5'),
        t('portfolio.case2.int6'),
      ],
      management: null,
      results: [
        t('portfolio.case2.res1'),
        t('portfolio.case2.res2'),
        t('portfolio.case2.res3'),
      ],
      note: t('portfolio.case2.note'),
    },
  ];

  return (
    <div className="min-h-screen bg-deep text-white overflow-hidden">

   
      {/* ─── HERO SECTION IMMERSIVE CENTRÉE ─── */}
      <section className="relative pt-44 pb-32 md:pt-52 md:pb-40 border-b border-white/5 flex items-center justify-center min-h-[60vh] overflow-hidden">

        {/* Image d'arrière-plan */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80')" }} // Remplace par le chemin réel de ton image
        />

        <img src="images/icon.png" alt="icon active_rise" className='absolute -left-30 -bottom-5 max-w-3/12 h-auto z-1 opacity-50' />

        {/* Overlay sombre progressif (du bas vers le haut) et lueur dorée diffuse */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/80 to-[#0B0F19]/40 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(211,170,42,0.1),transparent)]" />
        </div>

        {/* Contenu textuel centré */}
        <div className="container-xl max-w-[1200px] mx-auto px-4 sm:px-8 relative z-10 text-center flex flex-col items-center ">

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold tracking-[0.4em] text-gold uppercase mb-6"
          >
             {t('portfolio.hero.badge')}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] uppercase mb-8 max-w-4xl"
          >
            {t('portfolio.hero.title')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-500 to-gold">
              {t('portfolio.hero.titleGold')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/70 max-w-2xl text-lg md:text-xl leading-relaxed font-medium"
          >
            {t('portfolio.hero.description')}
          </motion.p>

        </div>
      </section>

      {/* ─── CAS REELS : DISPOSITIF IMMERSIF CHIRURGICAL ─── */}
      <section className="py-24 lg:py-40 relative z-10">
        <div className="container-xl max-w-[1400px] mx-auto px-4 sm:px-8 space-y-32 lg:space-y-48">
          {cases.map((item, index) => (
            <div key={item.id} className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start border-t border-white/5 pt-12 relative">

              {/* Infos Clés Ancrées Latéralement à gauche */}
              <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
                <div className="flex items-center gap-3 font-mono text-xs text-gold tracking-widest font-bold">
                  <span>[{item.id}]</span>
                  <span className='uppercase'> {t('portfolio.case')}</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-none">
                  {item.title}
                </h2>

                <div className="pt-6 space-y-4 text-sm border-t border-white/5">
                  <div className="flex items-start gap-3">
                    <Tag size={16} className="text-gold/50 mt-0.5 flex-shrink-0" />
                    <span className="text-white/40"><strong className="text-white/70 font-semibold">{t('portfolio.infos.mission')}:</strong> {item.tag}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <User size={16} className="text-gold/50 mt-0.5 flex-shrink-0" />
                    <span className="text-white/40"><strong className="text-white/70 font-semibold">{t('portfolio.infos.responsable')}:</strong> {item.manager}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Briefcase size={16} className="text-gold/50 mt-0.5 flex-shrink-0" />
                    <span className="text-white/40"><strong className="text-white/70 font-semibold">{t('portfolio.infos.sector')}:</strong> {item.sector}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-gold/50 mt-0.5 flex-shrink-0" />
                    <span className="text-white/40"><strong className="text-white/70 font-semibold">{t('portfolio.infos.adress')}:</strong> {item.location}</span>
                  </div>
                </div>
              </div>

              {/* Contenu Déroulant & Résultats (Bruts, sans carte, focus textuel) */}
              <div className="lg:col-span-8 space-y-10 lg:pl-8 border-l border-white/5">

                {/* Contexte & Défi */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-3"> {t('portfolio.infos.contexte')}</h4>
                    <p className="text-white/60 text-base leading-relaxed font-medium">{item.context}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-3"> {t('portfolio.infos.challenge')}</h4>
                    <p className="text-white/60 text-base leading-relaxed font-medium">{item.challenge}</p>
                  </div>
                </div>

                {/* Notre Intervention */}
                <div className="pt-8 border-t border-white/5">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-6">{t('portfolio.infos.intervention')}</h4>
                  <ul className="space-y-3.5">
                    {item.intervention.map((int, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80 text-base font-medium">
                        <span className="text-gold font-mono text-sm mt-0.5">0{i + 1}.</span>
                        <span>{int}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Gestion Continue (Si existant) */}
                {item.management && (
                  <div className="pt-8 border-t border-white/5">
                    <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-3"> {t('portfolio.infos.management')}</h4>
                    <p className="text-white/70 text-base leading-relaxed font-medium">{item.management}</p>
                  </div>
                )}

                {/* Les Résultats Réels */}
                <div className="pt-8 border-t border-white/5 bg-gradient-to-r from-gold/[0.02] to-transparent p-6 rounded-md border-l-2 border-gold">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-6">{t('portfolio.infos.result')}</h4>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {item.results.map((res, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-gold mt-1 flex-shrink-0" />
                        <span className="text-white text-base font-bold leading-tight">{res}</span>
                      </div>
                    ))}
                  </div>
                  {item.note && (
                    <p className="text-white/40 text-xs italic mt-6 pt-4 border-t border-white/5">
                      * {item.note}
                    </p>
                  )}
                </div>

              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA FINAL : TRANSITION INTER-DOMAINE NETTE (SAME TAB) ─── */}
      <section className="py-28 lg:py-40 bg-white relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="container-xl max-w-[1000px] mx-auto px-4 sm:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-deep uppercase tracking-tight mb-6 leading-tight max-w-2xl mx-auto">
            {t('portfolio.cta.title')}
          </h2>

          <p className="text-deep text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-medium mb-12">
            {t('portfolio.cta.subtitle')}
          </p>

          <div>
            <a
              href="https://portfolio.activerise.pro"
              className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-gold border border-gold/30 hover:border-gold bg-gold/5 hover:bg-gold/10 px-8 py-5 rounded-md transition-all duration-300 group"
            >
              {t('portfolio.cta.action')}
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}