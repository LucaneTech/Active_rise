import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Zap, Shield, Star, Users, BarChart3, Globe, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import Timeline from '../components/ui/Timeline';
import CTASection from '../components/ui/CTASection';

export default function About() {
  const { t } = useTranslation();

  const values = [
    { icon: Star, titleKey: 'about.values.v1_title', descKey: 'about.values.v1_desc' },
    { icon: Shield, titleKey: 'about.values.v2_title', descKey: 'about.values.v2_desc' },
    { icon: Lightbulb, titleKey: 'about.values.v3_title', descKey: 'about.values.v3_desc' },
    { icon: Target, titleKey: 'about.values.v4_title', descKey: 'about.values.v4_desc' },
    { icon: CheckCircle2, titleKey: 'about.values.v5_title', descKey: 'about.values.v5_desc' },
    { icon: Users, titleKey: 'about.values.v6_title', descKey: 'about.values.v6_desc' },
  ];

  const differentiators = [
    { icon: Globe, titleKey: 'about.differentiation.d1_title', descKey: 'about.differentiation.d1_desc' },
    { icon: BarChart3, titleKey: 'about.differentiation.d2_title', descKey: 'about.differentiation.d2_desc' },
    { icon: Target, titleKey: 'about.differentiation.d3_title', descKey: 'about.differentiation.d3_desc' },
    { icon: Zap, titleKey: 'about.differentiation.d4_title', descKey: 'about.differentiation.d4_desc' },
  ];

  const expertises = [
    'about.expertise.e1', 'about.expertise.e2', 'about.expertise.e3', 'about.expertise.e4',
    'about.expertise.e5', 'about.expertise.e6', 'about.expertise.e7', 'about.expertise.e8',
  ];

  const timelineItems = [
    { year: t('about.timeline.y1'), event: t('about.timeline.e1') },
    { year: t('about.timeline.y2'), event: t('about.timeline.e2') },
    { year: t('about.timeline.y3'), event: t('about.timeline.e3') },
    { year: t('about.timeline.y4'), event: t('about.timeline.e4') },
    { year: t('about.timeline.y5'), event: t('about.timeline.e5') },
  ];

  return (
    <div className="bg-beige dark:bg-deep overflow-hidden">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[80vh] flex items-center bg-deep overflow-hidden pt-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_50%,rgba(211,170,42,0.1),transparent)]" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gold/10" />
        </div>
        <div className="container-xl relative z-10 py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                {t('about.hero.badge')}
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-4xl lg:text-6xl font-black tracking-tight leading-[1.05] text-beige mb-8"
            >
              {t('about.hero.title')}
              <br />
              <span className="text-gold">{t('about.hero.title2')}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="text-beige/75 text-xl leading-relaxed max-w-xl"
            >
              {t('about.hero.text')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── VISION ─── */}
      <section className="section-padding bg-beige dark:bg-deep">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll direction="left">
              <div className="relative">
                <div className="text-[120px] md:text-[160px] font-black leading-none tracking-tight">
                  <div className="text-gold/20">
                    {t('about.vision.title')}
                  </div>
                  <div className="text-gold/40">
                    {t('about.vision.title2')}
                  </div>
                  <div className="text-gold">
                    {t('about.vision.title3')}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
            <div>
              <RevealOnScroll delay={0}>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-full mb-6">
                  <span className="w-1 h-1 rounded-full bg-gold" />
                  {t('about.vision.badge')}
                </span>
              </RevealOnScroll>
              <RevealOnScroll delay={0.15}>
                <p className="text-deep/70 dark:text-beige/70 text-xl leading-relaxed">
                  {t('about.vision.text')}
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION ─── */}
      <section className="section-padding bg-deep">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <RevealOnScroll delay={0}>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-full mb-6">
                  <span className="w-1 h-1 rounded-full bg-gold" />
                  {t('about.mission.badge')}
                </span>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-beige leading-[1.05] mb-8">
                  {t('about.mission.title')}{' '}
                  <span className="text-gold">{t('about.mission.title2')}</span>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={0.2}>
                <p className="text-beige/75 leading-relaxed mb-6">{t('about.mission.text1')}</p>
              </RevealOnScroll>
              <RevealOnScroll delay={0.3}>
                <p className="text-beige/75 leading-relaxed">{t('about.mission.text2')}</p>
              </RevealOnScroll>
            </div>
            <RevealOnScroll delay={0.2} direction="right">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                  alt="Équipe ActiveRise en session stratégique"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { num: '150+', label: 'Entreprises' },
                      { num: '8+', label: "Ans d'expertise" },
                      { num: '94%', label: 'Satisfaction' },
                    ].map((s, i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl font-black text-gold tabular-nums leading-none mb-1">{s.num}</div>
                        <div className="text-beige/72 text-[11px]">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="section-padding bg-beige dark:bg-deep">
        <div className="container-xl">
          <div className="text-center mb-16">
            <SectionTitle
              badge={t('about.values.badge')}
              title={t('about.values.title')}
              titleGold={t('about.values.title2')}
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <RevealOnScroll key={i} delay={i * 0.08} direction="up">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group bg-beige dark:bg-deep shadow-card rounded-[40px] p-8 h-full hover:shadow-card-hover transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                    <v.icon size={22} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-deep dark:text-beige mb-3">{t(v.titleKey)}</h3>
                  <p className="text-deep/70 dark:text-beige/75 text-sm leading-relaxed">{t(v.descKey)}</p>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHY QUOTE ─── */}
      <section className="section-padding bg-gold">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto text-center">
            <RevealOnScroll>
              <div className="text-6xl text-deep/20 font-serif leading-none mb-6">"</div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <p className="text-3xl md:text-4xl font-black text-deep tracking-tight leading-[1.1]">
                Une stratégie sans exécution n'a aucune valeur.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p className="text-deep/70 text-lg mt-6">— La philosophie Active Rise</p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ─── DIFFERENTIATION ─── */}
      <section className="section-padding bg-deep">
        <div className="container-xl">
          <div className="text-center mb-16">
            <RevealOnScroll>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-full mb-5">
                <span className="w-1 h-1 rounded-full bg-gold" />
                {t('about.differentiation.badge')}
              </span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-beige">
                {t('about.differentiation.title')}{' '}
                <span className="text-gold">{t('about.differentiation.title2')}</span>
              </h2>
            </RevealOnScroll>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {differentiators.map((d, i) => (
              <RevealOnScroll key={i} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group glass-card rounded-[40px] p-8 hover:shadow-card-hover transition-shadow duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <d.icon size={24} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-beige mb-3">{t(d.titleKey)}</h3>
                      <p className="text-beige/75 leading-relaxed">{t(d.descKey)}</p>
                    </div>
                  </div>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERTISE TAGS ─── */}
      <section className="section-padding bg-beige dark:bg-deep">
        <div className="container-xl">
          <div className="text-center mb-16">
            <SectionTitle
              badge={t('about.expertise.badge')}
              title={t('about.expertise.title')}
              titleGold={t('about.expertise.title2')}
            />
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {expertises.map((e, i) => (
              <RevealOnScroll key={i} delay={i * 0.07} direction="up">
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="border-2 border-deep/15 dark:border-beige/15 hover:border-gold px-6 py-3 rounded-full text-sm font-semibold text-deep dark:text-beige hover:text-gold transition-all duration-300 cursor-default"
                >
                  {t(e)}
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <Timeline
        badge={t('about.timeline.badge')}
        title={t('about.timeline.title')}
        titleGold={t('about.timeline.title2')}
        items={timelineItems}
      />

      {/* ─── APPROACH ─── */}
      <section className="section-padding bg-deep">
        <div className="container-xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <RevealOnScroll>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-full mb-5">
                  <span className="w-1 h-1 rounded-full bg-gold" />
                  {t('about.approach.badge')}
                </span>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-beige">
                  {t('about.approach.title')}{' '}
                  <span className="text-gold">{t('about.approach.title2')}</span>
                </h2>
              </RevealOnScroll>
            </div>
            <RevealOnScroll delay={0.2}>
              <p className="text-beige/75 text-xl leading-relaxed text-center">{t('about.approach.text')}</p>
            </RevealOnScroll>
            <div className="mt-16 grid md:grid-cols-3 gap-6">
              {[
                { label: 'Conseiller stratégique', desc: 'Nous donnons une direction claire et fondée sur l\'analyse.' },
                { label: 'Structurant de croissance', desc: 'Nous organisons les leviers pour une progression cohérente.' },
                { label: 'Partenaire d\'exécution', desc: 'Nous accompagnons la mise en œuvre jusqu\'aux résultats.' },
              ].map((r, i) => (
                <RevealOnScroll key={i} delay={i * 0.1} direction="up">
                  <div className="text-center p-8 glass-card rounded-[40px] hover:shadow-card-hover transition-shadow duration-300">
                    <div className="w-3 h-3 rounded-full bg-gold mx-auto mb-6" />
                    <h3 className="font-bold text-beige mb-3">{r.label}</h3>
                    <p className="text-beige/68 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTASection
        title={t('about.cta.title')}
        titleGold={t('about.cta.title2')}
        text={t('about.cta.text')}
        btnPrimary={t('about.cta.btn')}
        dark={true}
      />
    </div>
  );
}
