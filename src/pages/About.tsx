import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Shield, Star, Globe, BarChart3 } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import CTASection from '../components/ui/CTASection';
import type React from 'react';


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }
  })
}

const HeroSection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0B0F19] overflow-hidden px-4 sm:px-6 lg:px-8">
      
      {/* ─── BACKGROUND & HERO IMAGE ─── */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80"
          alt="ActiveRise Team Background"
          className="w-full h-full object-cover object-center transform scale-105 select-none pointer-events-none"
        />
        {/* Overlay Gradient orienté du bas vers le haut + assombrissement pour le contraste textuel */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/70 to-[#0B0F19]/10" />
      </div>

      {/* ─── FORMES GEOMETRIQUES CIRCULAIRES & GLOWS (MODERNE / PRO) ─── */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {/* Cercle Lumineux Top Gauche */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-yellow-500/60 blur-[120px]" />
        
        {/* Orbite Vectorielle Moderne Centre-Droit */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-[10%] w-[450px] h-[450px] rounded-full border border-yellow-500/30 border-dashed flex items-center justify-center hidden md:flex"
        >
          {/* Cercle plein interne avec effet de flou */}
          <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-yellow-500/20 to-transparent backdrop-blur-[2px] border border-yellow-500/10" />
        </motion.div>

        {/* Deuxième cercle décoratif discret */}
        <div className="absolute bottom-10 left-[15%] w-72 h-72 rounded-full border border-yellow-500/5 bg-gradient-to-tr from-yellow-500/10 to-transparent backdrop-blur-[2px]  hidden lg:block" />
      </div>

      {/* ─── CONTENU CENTRÉ ET TYPOGRAPHIE ─── */}
      <div className="relative z-20 w-full max-w-4xl mx-auto text-center flex flex-col items-center">
       

        {/* Titre Principal H1 */}
        <motion.h1
          custom={0.4}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] mb-6"
        >
          {t('about.hero.title')}{' '}
          <span className="block mt-2 text-gold text-transparent drop-shadow-sm">
            {t('about.hero.title2')}
          </span>
        </motion.h1>

        {/* Description / Paragraphe */}
        <motion.p
          custom={0.6}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl font-medium leading-relaxed mb-10"
        >
          {t('about.hero.text')}
        </motion.p>

        {/* Tags / Vision Spans */}
        <motion.div
          custom={0.8}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {[
            t('about.vision.title'),
            t('about.vision.title2'),
            t('about.vision.title3'),
          ].map((item, index) => (
            <span
              key={index}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-gold bg-white/5 hover:bg-white/10 border border-yellow-500/10 rounded-xl backdrop-blur-md transition-all duration-300 cursor-default hover:border-gold/30 hover:shadow-[0_0_15px_rgba(211,170,42,0.1)]"
            >
              {item}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  )
}



export default function About() {
  const { t } = useTranslation();

  const values = [
    { icon: Star, titleKey: 'about.values.v1_title', descKey: 'about.values.v1_desc' },
    { icon: Shield, titleKey: 'about.values.v2_title', descKey: 'about.values.v2_desc' },
    { icon: Lightbulb, titleKey: 'about.values.v3_title', descKey: 'about.values.v3_desc' },
  ];

  const differentiators = [
    { icon: Globe, titleKey: 'about.differentiation.d1_title', descKey: 'about.differentiation.d1_desc' },
    { icon: BarChart3, titleKey: 'about.differentiation.d2_title', descKey: 'about.differentiation.d2_desc' },
    { icon: Target, titleKey: 'about.differentiation.d3_title', descKey: 'about.differentiation.d3_desc' },
  ];

  return (
    <div className="bg-beige overflow-hidden">

      <HeroSection/>

      <div className="section-separator" />

      {/* ─── STORY ─── */}
      <section className="section-padding bg-beige">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <RevealOnScroll>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-md mb-6">
                  <span className="w-1 h-1 rounded-md bg-gold" />
                  {t('about.mission.badge')}
                </span>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-deep leading-tight mb-8">
                  {t('about.mission.title')}{' '}
                  <span className="text-gold">{t('about.mission.title2')}</span>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={0.2}>
                <p className="text-deep text-lg leading-relaxed mb-6">
                  {t('about.mission.text1')}
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={0.3}>
                <p className="text-deep text-lg leading-relaxed">
                  {t('about.mission.text2')}
                </p>
              </RevealOnScroll>
            </div>
            <RevealOnScroll direction="right">
              <div className="rounded-4xl bg-deep p-12 shadow-card">
                <p className="text-beige text-xl leading-relaxed">
                  {t('about.approach.text')}
                </p>
                <div className="mt-10 flex flex-col gap-4 text-beige/80 text-sm leading-relaxed">
                  <p>Nous aidons les équipes à transformer leur vision en actions structurées, claires et mesurables.</p>
                  <p>Notre valeur ajoutée se mesure dans la qualité de mise en œuvre et la cohérence de chaque étape.</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ─── VISION & MISSION ─── */}
      <section className="section-padding bg-deep">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-10">
            <RevealOnScroll direction="left">
              <div className="rounded-4xl bg-beige p-10 shadow-card h-full">
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-md mb-7">
                  <span className="w-1 h-1 rounded-md bg-gold" />
                  {t('about.vision.badge')}
                </span>
                <div className="text-[3rem] md:text-[4rem] font-black leading-none tracking-tight mb-8">
                  <div className="text-gold">{t('about.vision.title')}</div>
                  <div className="text-deep">{t('about.vision.title2')}</div>
                  <div className="text-gold">{t('about.vision.title3')}</div>
                </div>
                <p className="text-deep text-lg leading-relaxed">{t('about.vision.text')}</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="right">
              <div className="rounded-4xl bg-gold p-10 shadow-card h-full text-deep">
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-deep shadow-badge px-4 py-1.5 rounded-md mb-7 bg-deep/5">
                  <span className="w-1 h-1 rounded-md bg-deep" />
                  {t('about.mission.badge')}
                </span>
                <h3 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
                  {t('about.mission.title')}{' '}
                  <span className="text-deep">{t('about.mission.title2')}</span>
                </h3>
                <p className="mt-8 text-deep/90 text-lg leading-relaxed">{t('about.mission.text1')}</p>
                <p className="mt-5 text-deep/90 text-lg leading-relaxed">{t('about.mission.text2')}</p>
                <div className="mt-10 border-t border-deep/20 pt-8">
                  <p className="text-deep text-base leading-relaxed">
                    Une stratégie sans exécution n'a aucune valeur.
                  </p>
                  <p className="mt-4 text-deep/70 text-sm">— La philosophie ActiveRise</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ─── DIFFERENTIATION ─── */}
      <section className="section-padding bg-beige">
        <div className="container-xl">
          <div className="text-center mb-16">
            <RevealOnScroll>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-md mb-5">
                <span className="w-1 h-1 rounded-md bg-gold" />
                {t('about.differentiation.badge')}
              </span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-deep">
                {t('about.differentiation.title')}{' '}
                <span className="text-gold">{t('about.differentiation.title2')}</span>
              </h2>
            </RevealOnScroll>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {differentiators.map((d, i) => (
              <RevealOnScroll key={i} delay={i * 0.08} direction="up">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group rounded-4xl border border-gray-200 bg-deep p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 h-full"
                >
                  <div className="w-14 h-14 rounded-xl bg-gold flex items-center justify-center mb-6">
                    <d.icon size={24} className="text-deep" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-beige mb-3">{t(d.titleKey)}</h3>
                  <p className="text-beige/80 leading-relaxed">{t(d.descKey)}</p>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="section-padding bg-deep">
        <div className="container-xl">
          <div className="text-center mb-16">
            <SectionTitle
              badge={t('about.values.badge')}
              title={t('about.values.title')}
              titleGold={t('about.values.title2')}
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <RevealOnScroll key={i} delay={i * 0.08} direction="up">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group rounded-4xl bg-beige p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 h-full"
                >
                  <div className="w-12 h-12 rounded-md bg-gold flex items-center justify-center mb-6">
                    <v.icon size={22} className="text-deep" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-deep mb-3">{t(v.titleKey)}</h3>
                  <p className="text-deep/80 text-sm leading-relaxed">{t(v.descKey)}</p>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

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
