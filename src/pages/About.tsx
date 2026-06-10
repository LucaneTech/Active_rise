import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Shield, Star, Globe, BarChart3 } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import CTASection from '../components/ui/CTASection';

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

      {/* ─── HERO ─── */}
      <section className="relative min-h-[80vh] flex items-center bg-deep overflow-hidden pt-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_40%_50%,rgba(211,170,42,0.18),transparent)]" />
          {/* Grille fine mais claire */}
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
          {/* Gradients supplémentaires */}
          <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
        </div>
        <div className="container-xl relative z-10 py-10 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            <div>
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
                className="text-beige text-lg leading-relaxed max-w-2xl mb-8"
              >
                {t('about.hero.text')}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="flex flex-wrap gap-3"
              >
                {[
                  t('about.vision.title'),
                  t('about.vision.title2'),
                  t('about.vision.title3'),
                ].map((item, index) => (
                  <span key={index} className="inline-flex items-center rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-[12px] font-semibold text-gold">
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative group rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80"
                alt="L'équipe ActiveRise"
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

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
