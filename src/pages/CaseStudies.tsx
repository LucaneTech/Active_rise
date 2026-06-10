import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Quote, TrendingUp, Target, Users, BarChart3 } from 'lucide-react';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import ProcessSection from '../components/ui/ProcessSection';
import StatsSection from '../components/ui/StatsSection';
import CTASection from '../components/ui/CTASection';



export default function CaseStudies() {
  const { t } = useTranslation();

  const cases = [
    {
      numKey: 'case1',
      color: 'bg-gold/8',
      border: 'border-gold/20',
    },
    {
      numKey: 'case2',
      color: 'bg-beige/5',
      border: 'border-beige/10',
    },
    {
      numKey: 'case3',
      color: 'bg-gold/5',
      border: 'border-gold/15',
    },
  ];

  const processSteps = [
    { number: '01', title: t('cases.process.p1'), description: t('cases.process.p1_desc') },
    { number: '02', title: t('cases.process.p2'), description: t('cases.process.p2_desc') },
    { number: '03', title: t('cases.process.p3'), description: t('cases.process.p3_desc') },
    { number: '04', title: t('cases.process.p4'), description: t('cases.process.p4_desc') },
  ];

  const globalMetrics = [
    { value: t('cases.metrics.m1_val'), label: t('cases.metrics.m1_label') },
    { value: t('cases.metrics.m2_val'), label: t('cases.metrics.m2_label') },
    { value: t('cases.metrics.m3_val'), label: t('cases.metrics.m3_label') },
    { value: t('cases.metrics.m4_val'), label: t('cases.metrics.m4_label') },
  ];

  return (
    <div className="bg-beige  overflow-hidden">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[75vh] flex items-center bg-deep overflow-hidden pt-12 md:pt-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(211,170,42,0.2),transparent)]" />
          {/* Grille fine */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
        repeating-linear-gradient(
          0deg,
          transparent,
          transparent 79px,
          rgba(211, 170, 42, 0.12) 79px,
          rgba(211, 170, 42, 0.25) 80px
        ),
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 79px,
          rgba(211, 170, 42, 0.12) 79px,
          rgba(211, 170, 42, 0.25) 80px
        )
      `,
              backgroundSize: '80px 80px',
            }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
        </div>
        <div className="container-xl relative z-10 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* Left: Text */}
            <div>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-full mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  {t('cases.hero.badge')}
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-4xl lg:text-6xl font-black tracking-tight leading-[1.05] text-beige mb-8"
              >
                {t('cases.hero.title')}
                <br />
                <span className="text-gold">{t('cases.hero.title2')}</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="text-beige text-lg leading-relaxed max-w-2xl"
              >
                {t('cases.hero.text')}
              </motion.p>
            </div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block relative group rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80"
                alt="Résultats clients ActiveRise"
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: '+187%', label: 'Croissance' },
                    { value: '150+', label: 'Clients' },
                    { value: '3×', label: 'ROI moyen' },
                  ].map((s, i) => (
                    <div key={i} className="text-center bg-white/5 backdrop-blur-sm border border-gray-200/10 rounded-md px-3 py-3">
                      <div className="text-gold font-black text-lg tabular-nums leading-none mb-1">{s.value}</div>
                      <div className="text-beige text-[11px]">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <div className="section-separator" />

      {/* ─── CASE STUDIES ─── */}
      {cases.map((c, caseIdx) => (
        <section key={caseIdx} className={`section-padding ${caseIdx % 2 === 0 ? 'bg-gray-50/50' : 'bg-deep'}`}>
          <div className="container-xl">
            <div className="mb-8 md:mb-12">
              <RevealOnScroll delay={0}>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-full mb-4">
                  {t(`cases.${c.numKey}.tag`)}
                </span>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-[1.05] mb-2 ${caseIdx % 2 === 0 ? 'text-deep' : 'text-beige'}`}>
                  {t(`cases.${c.numKey}.title`)}
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={0.15}>
                <p className={`text-lg font-semibold text-gold`}>
                  {t(`cases.${c.numKey}.company`)}
                </p>
              </RevealOnScroll>
            </div>

            <div className="grid lg:grid-cols-2 gap-4 md:gap-12 mb-8 md:mb-12">
              <RevealOnScroll delay={0.1} direction="left">
                <div className={`rounded-md p-5 sm:p-8 border shadow-card ${caseIdx % 2 === 0 ? 'bg-white border-gray-200/50' : 'bg-deep/80 border-gray-600/20'}`}>
                  <h3 className="text-sm font-bold tracking-widest uppercase mb-3 text-gold">
                    {t(`cases.${c.numKey}.challenge_label`)}
                  </h3>
                  <p className={`leading-relaxed text-sm sm:text-base ${caseIdx % 2 === 0 ? 'text-deep' : 'text-beige'}`}>
                    {t(`cases.${c.numKey}.challenge`)}
                  </p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={0.2} direction="right">
                <div className={`rounded-md p-5 sm:p-8 border shadow-card ${caseIdx % 2 === 0 ? 'bg-white border-gray-200/50' : 'bg-deep/80 border-gray-600/20'}`}>
                  <h3 className="text-sm font-bold tracking-widest uppercase mb-3 text-gold">
                    {t(`cases.${c.numKey}.solution_label`)}
                  </h3>
                  <p className={`leading-relaxed text-sm sm:text-base ${caseIdx % 2 === 0 ? 'text-deep' : 'text-beige'}`}>
                    {t(`cases.${c.numKey}.solution`)}
                  </p>
                </div>
              </RevealOnScroll>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8 md:mb-12">
              {['kpi1', 'kpi2', 'kpi3'].map((kpi, i) => (
                <RevealOnScroll key={i} delay={i * 0.1} direction="up">
                  <div className={`text-center p-3 sm:p-6 rounded-md border shadow-card ${caseIdx % 2 === 0 ? 'bg-white border-gray-200/50' : 'bg-deep/80 border-gray-600/20'}`}>
                    <div className="text-xl sm:text-3xl md:text-4xl font-black text-gold mb-1 sm:mb-2 tabular-nums">
                      {t(`cases.${c.numKey}.${kpi}_val`)}
                    </div>
                    <p className={`text-[11px] sm:text-sm leading-tight ${caseIdx % 2 === 0 ? 'text-deep' : 'text-beige'}`}>
                      {t(`cases.${c.numKey}.${kpi}_label`)}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll delay={0.3}>
              <div className={`rounded-2xl p-5 sm:p-8 border-l-4 border-gold pl-6 sm:pl-10 shadow-card ${caseIdx % 2 === 0 ? 'bg-white' : 'bg-deep/80 border border-gray-600/20'}`}>
                <Quote size={24} className="text-gold mb-3 sm:mb-4" strokeWidth={1.5} />
                <p className={`text-base sm:text-xl italic leading-relaxed mb-4 sm:mb-6 ${caseIdx % 2 === 0 ? 'text-deep' : 'text-beige'}`}>
                  "{t(`cases.${c.numKey}.testimonial`)}"
                </p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-9 h-9 shrink-0 flex items-center justify-center border border-gray-500/20 bg-gold rounded-full">
                    <span className="text-deep font-bold text-sm">
                      {t(`cases.${c.numKey}.client_name`).charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className={`font-bold text-sm ${caseIdx % 2 === 0 ? 'text-deep' : 'text-beige'}`}>
                      {t(`cases.${c.numKey}.client_name`)}
                    </p>
                    <p className={`text-xs ${caseIdx % 2 === 0 ? 'text-deep/65' : 'text-beige/65'}`}>
                      {t(`cases.${c.numKey}.client_role`)}
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      ))}

      <div className="section-separator" />

      {/* ─── PROCESS ─── */}
      <ProcessSection
        badge={t('cases.process.badge')}
        title={t('cases.process.title')}
        titleGold={t('cases.process.title2')}
        steps={processSteps}
        dark={false}
      />

      {/* ─── GLOBAL METRICS ─── */}
      <StatsSection
        badge={t('cases.metrics.badge')}
        title={t('cases.metrics.title')}
        titleGold={t('cases.metrics.title2')}
        stats={globalMetrics}
        dark={false}
      />

      {/* ─── VALUE PROPS ─── */}
      <section className="section-padding bg-deep">
        <div className="container-xl">
          <div className="text-center mb-10 md:mb-16">
            <RevealOnScroll>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-beige">
                Pourquoi nos clients <span className="text-gold">nous font confiance</span>
              </h2>
            </RevealOnScroll>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: 'Approche sur mesure', desc: 'Chaque stratégie est construite autour de vos besoins spécifiques.' },
              { icon: TrendingUp, title: 'Focus sur les résultats', desc: 'Nous mesurons tout et optimisons en continu pour maximiser le ROI.' },
              { icon: Users, title: 'Équipe dédiée', desc: 'Une équipe experte entièrement dédiée à votre succès.' },
              { icon: BarChart3, title: 'Transparence totale', desc: 'Reporting complet et suivi régulier de tous les KPIs.' },
            ].map((item, i) => (
              <RevealOnScroll key={i} delay={i * 0.1} direction="up">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group glass-card rounded-md p-5 sm:p-8 text-center hover:shadow-card-hover transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-full border border-gray-200/30 bg-gold flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                    <item.icon size={24} className="text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-beige mb-3">{item.title}</h3>
                  <p className="text-beige text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTASection
        title={t('cases.cta.title')}
        titleGold={t('cases.cta.title2')}
        text={t('cases.cta.text')}
        btnPrimary={t('cases.cta.btn')}
        dark={false}
      />
    </div>
  );
}
