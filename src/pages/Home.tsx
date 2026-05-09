import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, TrendingUp, Megaphone, Palette, Globe, BarChart3,
  Lightbulb, Star, Zap, Target, Shield, Users, Play
} from 'lucide-react';

import SectionTitle from '../components/ui/SectionTitle';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import ServiceCard from '../components/ui/ServiceCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import CaseStudyCard from '../components/ui/CaseStudyCard';
import StatsSection from '../components/ui/StatsSection';
import ProcessSection from '../components/ui/ProcessSection';
import CTASection from '../components/ui/CTASection';


export default function Home() {
  const { t } = useTranslation();

  const services = [
    { icon: TrendingUp, titleKey: 'home.services.marketing_title', descKey: 'home.services.marketing_desc' },
    { icon: Palette, titleKey: 'home.services.branding_title', descKey: 'home.services.branding_desc' },
    { icon: Megaphone, titleKey: 'home.services.communication_title', descKey: 'home.services.communication_desc' },
    { icon: Star, titleKey: 'home.services.creation_title', descKey: 'home.services.creation_desc' },
    { icon: Globe, titleKey: 'home.services.web_title', descKey: 'home.services.web_desc' },
    { icon: BarChart3, titleKey: 'home.services.consulting_title', descKey: 'home.services.consulting_desc' },
  ];

  const whyReasons = [
    { icon: Target, titleKey: 'home.why.r1_title', descKey: 'home.why.r1_desc' },
    { icon: BarChart3, titleKey: 'home.why.r2_title', descKey: 'home.why.r2_desc' },
    { icon: Users, titleKey: 'home.why.r3_title', descKey: 'home.why.r3_desc' },
    { icon: Zap, titleKey: 'home.why.r4_title', descKey: 'home.why.r4_desc' },
  ];

  const stats = [
    { value: t('home.stats.s1_value'), label: t('home.stats.s1_label') },
    { value: t('home.stats.s2_value'), label: t('home.stats.s2_label') },
    { value: t('home.stats.s3_value'), label: t('home.stats.s3_label') },
    { value: t('home.stats.s4_value'), label: t('home.stats.s4_label') },
  ];

  const processSteps = [
    { number: '01', title: t('home.process.p1_title'), description: t('home.process.p1_desc') },
    { number: '02', title: t('home.process.p2_title'), description: t('home.process.p2_desc') },
    { number: '03', title: t('home.process.p3_title'), description: t('home.process.p3_desc') },
    { number: '04', title: t('home.process.p4_title'), description: t('home.process.p4_desc') },
  ];

  const testimonials = [
    { textKey: 'home.testimonials.t1_text', nameKey: 'home.testimonials.t1_name', roleKey: 'home.testimonials.t1_role' },
    { textKey: 'home.testimonials.t2_text', nameKey: 'home.testimonials.t2_name', roleKey: 'home.testimonials.t2_role' },
    { textKey: 'home.testimonials.t3_text', nameKey: 'home.testimonials.t3_name', roleKey: 'home.testimonials.t3_role' },
    { textKey: 'home.testimonials.t4_text', nameKey: 'home.testimonials.t4_name', roleKey: 'home.testimonials.t4_role' },
  ];

  const cases = [
    { titleKey: 'home.cases_preview.c1_title', tagKey: 'home.cases_preview.c1_tag', resultKey: 'home.cases_preview.c1_result', company: 'TechVision SAS' },
    { titleKey: 'home.cases_preview.c2_title', tagKey: 'home.cases_preview.c2_tag', resultKey: 'home.cases_preview.c2_result', company: 'Groupe Horizon' },
    { titleKey: 'home.cases_preview.c3_title', tagKey: 'home.cases_preview.c3_tag', resultKey: 'home.cases_preview.c3_result', company: 'Studio Créa' },
  ];

  const trustedClients = ['TechVision SAS', 'Groupe Horizon', 'Studio Créa', 'Novatel', 'Axio Partners'];

  return (
    <div className="bg-beige dark:bg-deep overflow-hidden">

      {/* ─── HERO (split layout) ─── */}
      <section className="relative min-h-screen flex flex-col justify-center bg-deep overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_65%_40%,rgba(211,170,42,0.15),transparent)]" />
  <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_50%_70%_at_100%_50%,rgba(211,170,42,0.08),transparent)]" />
  <div
    className="absolute inset-0 opacity-[0.08]"
    style={{
      backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 80px, #d3aa2a 80px, #d3aa2a 81px), repeating-linear-gradient(90deg, transparent, transparent 80px, #d3aa2a 80px, #d3aa2a 81px)`,
    }}
  />
</div>

        <div className="container-xl relative z-10 pt-32 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* Left: Text content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  {t('home.hero.badge')}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.04] text-beige mb-6"
              >
                {t('home.hero.title1')}
                <br />
                <span className="text-gold">{t('home.hero.title2')}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-base md:text-lg text-beige/72 max-w-lg leading-relaxed mb-10"
              >
                {t('home.hero.subtitle')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="flex flex-wrap gap-3 mb-12"
              >
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 bg-gold text-deep font-bold px-8 py-3 rounded-md hover:bg-gold/90 transition-colors text-sm tracking-wide"
                  >
                    {t('home.hero.cta_primary')}
                    <ArrowRight size={15} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/services"
                    className="inline-flex  items-center gap-3 border border-gray-200/50 text-beige font-bold px-8 py-3 rounded-md hover:border-gold hover:text-gold transition-all text-sm tracking-wide"
                  >
                    {t('home.hero.cta_secondary')}
                  </Link>
                </motion.div>
              </motion.div>

              {/* Inline stats bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="flex gap-8 pt-5"
              >
                {[
                  { value: '150+', label: 'Clients' },
                  { value: '94%', label: 'Satisfaction' },
                  { value: '8+', label: 'Années' },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="text-2xl font-black text-gold tabular-nums">{s.value}</div>
                    <div className="text-[11px] text-beige/55 mt-0.5 uppercase tracking-wider">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Floating performance dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 16 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative">
                {/* Main dashboard card */}
                <div className="bg-white/[0.05] border border-white/[0.09] rounded-2xl p-8 backdrop-blur-sm">
                  <div className="flex items-center gap-2.5 mb-7">
                    <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    <span className="text-beige/55 text-[11px] uppercase tracking-[0.16em]">Performance clients</span>
                  </div>
                  <div className="space-y-0.5">
                    {[
                      { label: 'Croissance moyenne', value: '+187%' },
                      { label: 'Taux de satisfaction', value: '94%' },
                      { label: 'Entreprises accompagnées', value: '150+' },
                      { label: 'ROI moyen sur 12 mois', value: '3×' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-4 border-b border-white/[0.06] last:border-0">
                        <span className="text-beige/68 text-sm">{item.label}</span>
                        <span className="text-gold font-black text-xl tabular-nums">{item.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {['Marketing', 'Branding', 'Web', 'Conseil', 'SEO'].map((tag) => (
                      <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-12 -left-8 bg-gold px-4 py-3 rounded-xl shadow-lg"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 flex items-center justify-center shrink-0">
                      <img src="images/black_icon.png" alt="icone active rise" />
                    </div>
                    <div>
                      <div className="text-deep text-xs font-black leading-none mb-0.5">Depuis 2016</div>
                      <div className="text-deep/60 text-[10px]">8+ ans d'expertise</div>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative circles */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border border-white bg-gold  pointer-events-none" />
<div className="absolute -top-9 -right-9 w-16 h-16 rounded-full border border-gold pointer-events-none bg-beige" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Trusted by strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="relative z-10  py-6"
        >
          <div className="container-xl">
            <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-10">
              <span className="text-gold text-[15px] font-[300] uppercase tracking-[0.22em] whitespace-nowrap shrink-0">
                Ils nous font confiance
              </span>
              <div className="hidden sm:block w-px h-5 bg-beige/10 shrink-0" />
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-6 sm:gap-10">
                {trustedClients.map((name) => (
                  <span key={name} className="logo-strip-item">{name}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── PHILOSOPHY ─── */}
      <section className="section-padding bg-beige dark:bg-deep">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <RevealOnScroll delay={0}>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-full mb-6">
                  <span className="w-1 h-1 rounded-full bg-gold" />
                  {t('home.philosophy.badge')}
                </span>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] text-deep dark:text-beige mb-6">
                  {t('home.philosophy.title')}<br />
                  <span className="text-gold">{t('home.philosophy.title2')}</span>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={0.2}>
                <p className="text-deep leading-relaxed text-lg mb-8">
                  {t('home.philosophy.text')}
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={0.3}>
                <blockquote className="border-l-4 border-gold pl-6 py-1">
                  <p className="text-deep dark:text-beige font-semibold italic text-lg">
                    "{t('home.philosophy.quote')}"
                  </p>
                </blockquote>
              </RevealOnScroll>
            </div>

            <RevealOnScroll delay={0.2} direction="right">
              <div className="relative">
                <div className="relative bg-deep dark:bg-beige/5 rounded-2xl p-10 shadow-card border border-gray-200/30">
                  {[
                    { icon: Shield, label: 'Structurer', desc: 'Organiser pour mieux performer' },
                    { icon: Lightbulb, label: 'Simplifier', desc: 'Clarté avant complexité' },
                    { icon: Zap, label: 'Activer', desc: 'Passer à l\'action mesurée' },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                      className={`flex items-center gap-5 ${i < 2 ? 'mb-6 pb-6 border-b border-gray-200/30' : ''}`}
                    >
                      <div className="w-11 h-11 rounded-full border border-gold bg-gold/15 flex items-center justify-center shrink-0 bg-gray-100/30">
                        <item.icon size={20} className="text-gold" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="font-bold text-gold dark:text-beige text-base">{item.label}</p>
                        <p className="text-beige/68 text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full shadow-[0_0_0_1px_rgba(211,170,42,0.18)] bg-gold" />
               
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Section separator */}
      <div className="section-separator" />

      {/* ─── METHODOLOGY ─── */}
      <section className="section-padding bg-deep">
        <div className="container-xl">
          <div className="text-center mb-16">
            <RevealOnScroll delay={0}>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-full mb-5">
                <span className="w-1 h-1 rounded-full bg-gold" />
                {t('home.methodology.badge')}
              </span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-beige">
                {t('home.methodology.title')}{' '}
                <span className="text-gold">{t('home.methodology.title2')}</span>
              </h2>
            </RevealOnScroll>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: t('home.methodology.step1_num'), title: t('home.methodology.step1_title'), sub: t('home.methodology.step1_sub'), desc: t('home.methodology.step1_desc') },
              { num: t('home.methodology.step2_num'), title: t('home.methodology.step2_title'), sub: t('home.methodology.step2_sub'), desc: t('home.methodology.step2_desc') },
              { num: t('home.methodology.step3_num'), title: t('home.methodology.step3_title'), sub: t('home.methodology.step3_sub'), desc: t('home.methodology.step3_desc') },
            ].map((step, i) => (
              <RevealOnScroll key={i} delay={i * 0.15} direction="up">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group relative glass-card rounded-md p-9 h-full overflow-hidden hover:shadow-card-hover transition-shadow duration-300 border border-beige/[0.07]"
                >
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="text-7xl font-black text-gold/12 leading-none mb-6 tabular-nums">{step.num}</div>
                  <div className="w-7 h-0.5 bg-gold mb-5" />
                  <h3 className="text-xl font-bold text-beige mb-2">{step.title}</h3>
                  <p className="text-gold text-sm font-semibold mb-4">{step.sub}</p>
                  <p className="text-beige/70 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES GRID ─── */}
      <section className="section-padding bg-beige dark:bg-deep">
        <div className="container-xl">
          <div className="text-center mb-16">
            <SectionTitle
              badge={t('home.services.badge')}
              title={t('home.services.title')}
              titleGold={t('home.services.title2')}
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <ServiceCard
                key={i}
                icon={s.icon}
                title={t(s.titleKey)}
                description={t(s.descKey)}
                delay={i * 0.08}
              />
            ))}
          </div>
          <RevealOnScroll delay={0.3}>
            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-flex items-center gap-3 border border-gray-500/30 dark:border-beige/20 text-deep dark:text-beige font-bold px-8 py-4 rounded-md hover:border-gold hover:text-gold transition-all text-sm"
              >
                {t('home.services.view_all')}
                <ArrowRight size={14} />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Section separator */}
      <div className="section-separator" />

      {/* ─── WHY CHOOSE US ─── */}
      <section className="section-padding bg-deep">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <RevealOnScroll delay={0}>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-full mb-6">
                  <span className="w-1 h-1 rounded-full bg-gold" />
                  {t('home.why.badge')}
                </span>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-beige leading-[1.05] mb-12">
                  {t('home.why.title')}{' '}
                  <span className="text-gold">{t('home.why.title2')}</span>
                </h2>
              </RevealOnScroll>
              <div className="space-y-5">
                {whyReasons.map((r, i) => (
                  <RevealOnScroll key={i} delay={i * 0.1} direction="left">
                    <div className="flex items-start gap-4 group p-4 rounded-xl hover:bg-beige/[0.04] transition-colors duration-300">
                      <div className="w-11 h-11 rounded-full border border-gold bg-white/50 bg-blur-xl flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                        <r.icon size={19} className="text-white" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gold mb-1 text-sm">{t(r.titleKey)}</h3>
                        <p className="text-beige/68 text-sm leading-relaxed">{t(r.descKey)}</p>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>

            <RevealOnScroll delay={0.3} direction="right">
              <div className="relative glass-card rounded-2xl p-10 text-center border border-beige/[0.07]">
                <div className="text-7xl font-black text-gold mb-3 tabular-nums">150+</div>
                <p className="text-beige/68 text-base mb-8">entreprises accompagnées</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { v: '94%', l: 'Satisfaction' },
                    { v: '3×', l: 'Croissance' },
                    { v: '8+', l: 'Années' },
                    { v: '100%', l: 'Engagement' },
                  ].map((s, i) => (
                    <div key={i} className="bg-beige/5 rounded-md p-4 border border-gray-700/50">
                      <div className="text-xl font-black text-gold tabular-nums">{s.v}</div>
                      <div className="text-[11px] text-beige/62 mt-1">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <StatsSection
        badge={t('home.stats.badge')}
        title={t('home.stats.title')}
        titleGold={t('home.stats.title2')}
        stats={stats}
        dark={false}
      />

      {/* ─── PROCESS ─── */}
      <ProcessSection
        badge={t('home.process.badge')}
        title={t('home.process.title')}
        titleGold={t('home.process.title2')}
        steps={processSteps}
        dark={false}
      />

      {/* ─── BRANDING SHOWCASE ─── */}
      {/* <section className="section-padding bg-beige dark:bg-deep">
        <div className="container-xl">
          <div className="text-center mb-14">
            <RevealOnScroll>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-full mb-5">
                <span className="w-1 h-1 rounded-full bg-gold" />
                Branding & Design
              </span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-deep dark:text-beige">
                Une identité qui <span className="text-gold">marque les esprits</span>
              </h2>
            </RevealOnScroll>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Identité Visuelle', icon: Palette, bg: 'bg-gold/8 dark:bg-gold/10' },
              { label: 'Brand Strategy', icon: Target, bg: 'bg-deep/4 dark:bg-beige/5' },
              { label: 'Motion Design', icon: Play, bg: 'bg-gold/5 dark:bg-gold/6' },
              { label: 'Web Design', icon: Globe, bg: 'bg-deep/6 dark:bg-beige/7' },
            ].map((item, i) => (
              <RevealOnScroll key={i} delay={i * 0.1} direction="up">
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className={`${item.bg} rounded-2xl p-8 flex flex-col items-center justify-center gap-4 shadow-card hover:shadow-card-hover transition-shadow duration-300 aspect-square border border-deep/[0.05] dark:border-beige/[0.06]`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center">
                    <item.icon size={24} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <p className="font-bold text-deep dark:text-beige text-sm text-center">{item.label}</p>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section> */}

      {/* Section separator */}
      <div className="section-separator" />

      {/* ─── TESTIMONIALS ─── */}
      <section className="section-padding bg-deep">
        <div className="container-xl">
          <div className="text-center mb-14">
            <RevealOnScroll>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-full mb-5">
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
                name={t(t2.nameKey)}
                role={t(t2.roleKey)}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CASE STUDIES PREVIEW ─── */}
      <section className="section-padding bg-beige dark:bg-deep">
        <div className="container-xl">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
            <SectionTitle
              badge={t('home.cases_preview.badge')}
              title={t('home.cases_preview.title')}
              titleGold={t('home.cases_preview.title2')}
              align="left"
            />
            <RevealOnScroll delay={0.3}>
              <Link
                to="/cases"
                className="inline-flex items-center gap-2 text-sm font-semibold text-deep/70 dark:text-beige/70 hover:text-gold transition-colors whitespace-nowrap"
              >
                {t('home.cases_preview.view_all')}
                <ArrowRight size={13} />
              </Link>
            </RevealOnScroll>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {cases.map((c, i) => (
              <CaseStudyCard
                key={i}
                title={t(c.titleKey)}
                tag={t(c.tagKey)}
                result={t(c.resultKey)}
                company={c.company}
                delay={i * 0.1}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── VISION ─── */}
      <section className="section-padding bg-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(211,170,42,0.06),transparent)] pointer-events-none" />
        {/* Decorative horizontal lines */}
        <div className="absolute top-1/3 left-0 right-0 h-px bg-beige/[0.04] pointer-events-none" />
        <div className="absolute bottom-1/3 left-0 right-0 h-px bg-beige/[0.04] pointer-events-none" />

        <div className="container-xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <RevealOnScroll>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-full mb-8">
                <span className="w-1 h-1 rounded-full bg-gold" />
                {t('home.vision.badge')}
              </span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-black tracking-tight leading-[1.05] text-beige mb-4">
                {t('home.vision.title')}
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-black tracking-tight leading-[1.05] text-beige/25 mb-4">
                {t('home.vision.title2')}
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.3}>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-black tracking-tight leading-[1.05] text-gold mb-12">
                {t('home.vision.title3')}
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.4}>
              <p className="text-beige/70 text-lg max-w-2xl mx-auto leading-relaxed">
                {t('home.vision.text')}
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
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
