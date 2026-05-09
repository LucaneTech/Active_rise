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
    <div className="bg-beige dark:bg-deep overflow-hidden">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[75vh] flex items-center bg-deep overflow-hidden pt-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_20%,rgba(211,170,42,0.12),transparent)]" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, #d3aa2a 40px, #d3aa2a 41px)`,
            }}
          />
        </div>
        <div className="container-xl relative z-10 py-20">
          <div className="max-w-3xl">
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
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55 }}
              className="text-beige/60 text-xl leading-relaxed max-w-xl"
            >
              {t('cases.hero.text')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── CASE STUDIES ─── */}
      {cases.map((c, caseIdx) => (
        <section key={caseIdx} className={`section-padding ${caseIdx % 2 === 0 ? 'bg-deep' : 'bg-beige dark:bg-deep'}`}>
          <div className="container-xl">
            <div className="mb-12">
              <RevealOnScroll delay={0}>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-full mb-4">
                  {t(`cases.${c.numKey}.tag`)}
                </span>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <h2 className={`text-3xl md:text-4xl font-black tracking-tight leading-[1.05] mb-2 ${caseIdx % 2 === 0 ? 'text-beige' : 'text-deep dark:text-beige'}`}>
                  {t(`cases.${c.numKey}.title`)}
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={0.15}>
                <p className={`text-lg font-semibold ${caseIdx % 2 === 0 ? 'text-gold' : 'text-gold'}`}>
                  {t(`cases.${c.numKey}.company`)}
                </p>
              </RevealOnScroll>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <RevealOnScroll delay={0.1} direction="left">
                <div className={`rounded-[40px] p-8 border ${c.color} ${c.border}`}>
                  <h3 className={`text-sm font-bold tracking-widest uppercase mb-4 text-gold`}>
                    {t(`cases.${c.numKey}.challenge_label`)}
                  </h3>
                  <p className={`leading-relaxed ${caseIdx % 2 === 0 ? 'text-beige/70' : 'text-deep/70 dark:text-beige/70'}`}>
                    {t(`cases.${c.numKey}.challenge`)}
                  </p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={0.2} direction="right">
                <div className={`rounded-[40px] p-8 border ${c.color} ${c.border}`}>
                  <h3 className={`text-sm font-bold tracking-widest uppercase mb-4 text-gold`}>
                    {t(`cases.${c.numKey}.solution_label`)}
                  </h3>
                  <p className={`leading-relaxed ${caseIdx % 2 === 0 ? 'text-beige/70' : 'text-deep/70 dark:text-beige/70'}`}>
                    {t(`cases.${c.numKey}.solution`)}
                  </p>
                </div>
              </RevealOnScroll>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-12">
              {['kpi1', 'kpi2', 'kpi3'].map((kpi, i) => (
                <RevealOnScroll key={i} delay={i * 0.1} direction="up">
                  <div className={`text-center p-6 rounded-[40px] border ${c.color} ${c.border}`}>
                    <div className="text-3xl md:text-4xl font-black text-gold mb-2">
                      {t(`cases.${c.numKey}.${kpi}_val`)}
                    </div>
                    <p className={`text-sm ${caseIdx % 2 === 0 ? 'text-beige/72' : 'text-deep/70 dark:text-beige/72'}`}>
                      {t(`cases.${c.numKey}.${kpi}_label`)}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll delay={0.3}>
              <div className={`rounded-[40px] p-8 border-l-4 border-gold pl-10 ${caseIdx % 2 === 0 ? 'bg-beige/5' : 'bg-deep/5 dark:bg-beige/5'}`}>
                <Quote size={28} className="text-gold/40 mb-4" strokeWidth={1.5} />
                <p className={`text-xl italic leading-relaxed mb-6 ${caseIdx % 2 === 0 ? 'text-beige/80' : 'text-deep/80 dark:text-beige/80'}`}>
                  "{t(`cases.${c.numKey}.testimonial`)}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="text-gold font-bold text-sm">
                      {t(`cases.${c.numKey}.client_name`).charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className={`font-bold text-sm ${caseIdx % 2 === 0 ? 'text-beige' : 'text-deep dark:text-beige'}`}>
                      {t(`cases.${c.numKey}.client_name`)}
                    </p>
                    <p className={`text-xs ${caseIdx % 2 === 0 ? 'text-beige/65' : 'text-deep/65 dark:text-beige/65'}`}>
                      {t(`cases.${c.numKey}.client_role`)}
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      ))}

      {/* ─── PROCESS ─── */}
      <ProcessSection
        badge={t('cases.process.badge')}
        title={t('cases.process.title')}
        titleGold={t('cases.process.title2')}
        steps={processSteps}
        dark={true}
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
          <div className="text-center mb-16">
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
                  className="group glass-card rounded-[40px] p-8 text-center hover:shadow-card-hover transition-shadow duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                    <item.icon size={24} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-beige mb-3">{item.title}</h3>
                  <p className="text-beige/72 text-sm leading-relaxed">{item.desc}</p>
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
