import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Megaphone,
  Palette,
  BarChart3,
  Target,
  Zap,
  Quote,
  FileText,
  Phone,
  Rocket,
  Search,
} from 'lucide-react';

import SectionTitle from '../components/ui/SectionTitle';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import ServiceCard from '../components/ui/ServiceCard';
import StatsSection from '../components/ui/StatsSection';

import CTASection from '../components/ui/CTASection';
import type React from 'react';
import TestimonialCard from '../components/ui/TestimonialCard';

const HeroSection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 md:px-24"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          {/* Grille fine mais claire */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 79px,
            rgba(211, 170, 42, 0.15) 79px,
            rgba(211, 170, 42, 0.35) 80px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 79px,
            rgba(211, 170, 42, 0.15) 79px,
            rgba(211, 170, 42, 0.35) 80px
          )
        `,
              backgroundSize: '80px 80px',
            }}
          />

          {/* Dégradés */}
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-transparent" />
        </div>

        <div className="flex justify-center items-baseline relative z-10 py-28">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">

            {/* Colonne gauche - Texte */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.04] text-beige mb-6"
              >
                {t('home.hero.title1')}
                <br />
                <span className="text-gold">{t('home.hero.title2')}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-beige md:text-lg max-w-xl leading-relaxed mb-10"
              >
                {t('home.hero.subtitle')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="flex flex-wrap gap-3"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-gold text-deep font-bold px-8 py-3 rounded-md hover:bg-gold/90 transition-colors text-sm tracking-wide"
                >
                  {t('home.hero.cta_primary')}
                </Link>
              </motion.div>
            </div>

            {/* Colonne droite - Card */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 16 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-md lg:max-w-xl rounded-lg shadow-2xl"
            >
              <div className="absolute bg-black/70 top-0 left-0 w-30 h-30 rounded-full blur-xl" />

              <div className="bg-white/6 border border-white/8 rounded-lg p-10 min-h-105 backdrop-blur-sm z-20">
                <div className="text-gold text-[11px] uppercase tracking-[0.28em] mb-4">
                  ActiveRise
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-beige mb-5">
                  {t('home.hero.card_title')}
                </h2>
                <p className="text-gold leading-relaxed">
                  {t('home.hero.card_text')}
                </p>
                <div className="mt-10 grid gap-3">
                  {[
                    t('home.hero.card_tags.tag1'),
                    t('home.hero.card_tags.tag2'),
                    t('home.hero.card_tags.tag3'),
                    t('home.hero.card_tags.tag4'),
                  ].map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-[13px] text-white/80 font-medium tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-12 -left-8 bg-gold px-4 py-3 z-40 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 flex items-center justify-center shrink-0">
                    <img src="images/black_icon.png" alt="icone active rise" />
                  </div>
                  {/* <div>
                    <div className="text-deep text-xs font-black leading-none mb-0.5">
                      {t('home.hero.badge_text')}
                    </div>
                    <div className="text-deep/60 text-[10px]">
                      {t('home.hero.badge_subtext')}
                    </div>
                  </div> */}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}



const WhoAreWe: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="section-padding bg-gray-50/50">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
            <div>
              <RevealOnScroll delay={0}>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-lg mb-6">
                  <span className="w-1 h-1 rounded-full bg-gold" />
                  {t('home.philosophy.badge')}
                </span>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] text-deep mb-6">
                  {t('home.philosophy.title')}
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={0.2}>
                <p className="text-deep leading-relaxed text-lg mb-8">
                  {t('home.philosophy.text')}
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={0.3}>
                <blockquote className="border-l-4 border-gold pl-6 py-1">
                  <p className="text-deep font-semibold italic text-lg">
                    "{t('home.philosophy.quote')}"
                  </p>
                </blockquote>
              </RevealOnScroll>
            </div>

            <div
              className="group relative overflow-hidden rounded-tr-[80px] rounded-bl-[80px] shadow-lg hover:shadow-2xl hover:shadow-amber-400/30 transition-all duration-500 transform-gpu will-change-transform"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"
                alt="Collaboration ActiveRise"
                width={900}
                height={384}
                className="w-full h-96 object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:blur-[1px]"
                loading="lazy"
                decoding="async"
              />

              {/* Légende qui apparaît au hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm">
                <span className="text-gold text-md tracking-wider px-6 py-3 border border-gold/30 rounded-lg bg-black/20 backdrop-blur-md">
                  <Link to="/services" >
                    Voir nos services
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default function Home() {
  const { t } = useTranslation();

  const services = [
    {
      icon: TrendingUp,
      titleKey: 'home.services.marketing_title',
      subtitle: 'home.services.marketing_subtitle',
      descKey: 'home.services.marketing_desc',
    },
    {
      icon: Megaphone,
      titleKey: 'home.services.communication_title',
      subtitle: 'home.services.communication_subtitle',
      descKey: 'home.services.communication_desc',
    },
    {
      icon: Palette,
      titleKey: 'home.services.creation_title',
      subtitle: 'home.services.creation_subtitle',
      descKey: 'home.services.creation_desc',
    },
    {
      icon: BarChart3,
      titleKey: 'home.services.performance_title',
      subtitle: 'home.services.performance_subtitle',
      descKey: 'home.services.performance_desc',
    },
  ];

  const process = [
    {
      icon: Phone,
      number: "01",
      titleKey: 'home.process.step1_title',
      subtitle: 'home.process.step1_subtitle',
      descKey: 'home.process.step1_desc',
    },
    {
      icon: Search,
      number: "02",
      titleKey: 'home.process.step2_title',
      subtitle: 'home.process.step2_subtitle',
      descKey: 'home.process.step2_desc',
    },
    {
      icon: FileText,
      number: "03",
      titleKey: 'home.process.step3_title',
      subtitle: 'home.process.step3_subtitle',
      descKey: 'home.process.step3_desc',
    },
    {
      icon: Rocket,
      number: "04",
      titleKey: 'home.process.step4_title',
      subtitle: 'home.process.step4_subtitle',
      descKey: 'home.process.step4_desc',
    },
  ];

  const testimonials = [
    { textKey: 'home.testimonials.t1_text', nameKey: 'home.testimonials.t1_name', roleKey: 'home.testimonials.t1_role' },
    { textKey: 'home.testimonials.t2_text', nameKey: 'home.testimonials.t2_name', roleKey: 'home.testimonials.t2_role' },
    { textKey: 'home.testimonials.t3_text', nameKey: 'home.testimonials.t3_name', roleKey: 'home.testimonials.t3_role' },
    { textKey: 'home.testimonials.t4_text', nameKey: 'home.testimonials.t4_name', roleKey: 'home.testimonials.t4_role' },
  ];

  const whyReasons = [
    {
      icon: Target,       // Stratégie/objectif
      titleKey: 'home.why.r1_title',
      descKey: 'home.why.r1_desc',
    },
    {
      icon: TrendingUp,   // Croissance/performance
      titleKey: 'home.why.r2_title',
      descKey: 'home.why.r2_desc',
    },
    {
      icon: Zap,          // Réactivité/impact
      titleKey: 'home.why.r3_title',
      descKey: 'home.why.r3_desc',
    },
  ];
  const stats = [
    { value: '50', label: t('home.stats.s1_label') },
    { value: '100', label: t('home.stats.s2_label') },
    { value: '200', label: t('home.stats.s3_label') },
    { value: '500', label: t('home.stats.s4_label') },
  ];




  return (
    <div className="bg-beige overflow-hidden">

      <HeroSection />
      <WhoAreWe />

      <div className="section-separator" />

      <section className="section-padding bg-gray-50">
        <div className="container-xl">
          <SectionTitle
            badge={t('home.services.badge')}
            title={t('home.services.title')}
            titleGold={t('home.services.title2')}
          />
          <div className="grid md:grid-cols-2 gap-5 mt-10">
            {services.map((s, i) => (
              <ServiceCard
                key={i}
                icon={s.icon}
                title={t(s.titleKey)}
                subtitle={t(s.subtitle)}
                description={t(s.descKey)}
                linkLabel={t('home.services.view_all')}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="section-separator" />

      <section className="section-padding bg-deep">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <RevealOnScroll delay={0}>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-md mb-6">
                  <span className="w-1 h-1 rounded-full bg-gold" />
                  {t('home.why.badge')}
                </span>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.05] mb-8">
                  {t('home.why.title')} <span className="text-gold">{t('home.why.title2')}</span>
                </h2>
              </RevealOnScroll>
              <div className="space-y-4">
                {whyReasons.map((reason, i) => (
                  <RevealOnScroll key={i} delay={0.15 + i * 0.08} direction="left">
                    <div className="group perspective-1000">
                      <div className="relative transform-gpu transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-x-2">


                        <div className="relative flex items-start gap-5 p-5 rounded-md bg-gradient-to-tl from-black/5 to-black/0 backdrop-blur-sm transition-all duration-300 group-hover:border-gold/40 shadow-sm">
                          {/* Numéro décoratif */}
                          <div className="absolute -top-4 -right-2 text-5xl text-gold font-black group-hover:text-gold/10 transition-all duration-500">
                            {(i + 1).toString().padStart(2, '0')}
                          </div>

                          <div className="relative w-12 h-12 rounded-md flex items-center justify-center  transition-all duration-300">
                            <reason.icon size={22} className="text-gold transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                          </div>

                          <div className="flex-1 relative z-10">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-bold text-gold text-sm uppercase tracking-wider">
                                {t(reason.titleKey)}
                              </h3>
                              {/* Ligne décorative */}
                              <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
                            </div>
                            <p className="text-white text-sm leading-relaxed">
                              {t(reason.descKey)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"
                alt="Collaboration ActiveRise"
                width={900}
                height={384}
                className="relative w-full h-auto object-cover transition-all duration-700 ease-out group-hover:scale-105 border-1 border-yellow-400/40"
                loading="lazy"
                decoding="async"
              />

              {/* Double overlay pour profondeur */}
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/50 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-transparent" />

              {/* Texte flottant stylisé */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
                <div className="flex items-start gap-3 md:gap-4 max-w-3xl">
                  <Quote className='text-gold w-10 h-10' />

                  <div>
                    <p className="text-white/95 text-sm md:text-base lg:text-md leading-relaxed font-medium">
                      {t('home.why.summary')}
                    </p>
                    {/* Ligne décorative */}
                    <div className="w-12 h-0.5 bg-gold/60 mt-3 md:mt-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="section-padding bg-gray-50">
        <div className="container-xl">
          <SectionTitle
            badge={t('home.process.badge')}
            title={t('home.process.title')}
            titleGold={t('home.services.title2')}
          />
          <div className="grid md:grid-cols-2 gap-5 mt-10">
            {process.map((s, i) => (
              <ServiceCard
                key={i}
                icon={s.icon}
                title={t(s.titleKey)}
                subtitle={t(s.subtitle)}
                description={t(s.descKey)}

                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>


      <StatsSection
        badge={t('home.stats.badge')}
        title={t('home.stats.title')}
        titleGold={t('home.stats.title2')}
        stats={stats}
        dark={false}
      />

      {/* <ProcessSection
        badge={t('home.process.badge')}
        title={t('home.process.title')}
        titleGold={t('home.process.title2')}
        steps={processSteps}
        dark={false}
      /> */}
      {/* ─── TESTIMONIALS ─── */}
      <section className="section-padding bg-deep">
        <div className="container-xl">
          <div className="text-center mb-14">
            <RevealOnScroll>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-md mb-5">
                <span className="w-1 h-1 rounded-full bg-gold" />
                {t('home.testimonials.badge')}
              </span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-beige">
                {t('home.testimonials.title')}{' '}
                <span className="text-gold">{t('home.testimonials.title2')}</span>
              </h2>
            </RevealOnScroll>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t2, i) => (
              <TestimonialCard
                key={i}
                text={t(t2.textKey)}
                // name={t(t2.nameKey)}
                role={t(t2.roleKey)}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>


      <CTASection
        badge="Passez à l'action"
        title={t('home.cta.title')}
        titleGold={t('home.cta.title2')}
        text={t('home.cta.text')}
        btnPrimary={t('home.cta.btn_primary')}
        btnSecondary={t('home.cta.btn_secondary')}
        btnSecondaryLink="/contact"
        dark={true}
        desStyle
      />
    </div>
  );
}
