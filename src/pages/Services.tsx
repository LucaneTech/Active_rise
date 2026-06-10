import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TrendingUp, Megaphone, Code2, BarChart3, Target, Users, Star } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import ServiceCard from '../components/ui/ServiceCard';
import ProcessSection from '../components/ui/ProcessSection';
import CTASection from '../components/ui/CTASection';
import RevealOnScroll from '../components/ui/RevealOnScroll';

export default function Services() {
  const { t } = useTranslation();

  const servicePillars = [
    {
      icon: TrendingUp,
      title: t('services.hub.marketing.title'),
      description: t('services.hub.marketing.desc'),
      link: '/services/marketing',
    },
    {
      icon: Megaphone,
      title: t('services.hub.communication.title'),
      description: t('services.hub.communication.desc'),
      link: '/services/communication',
    },
    {
      icon: Code2,
      title: t('services.hub.creation.title'),
      description: t('services.hub.creation.desc'),
      link: '/services/creation-web',
    },
    {
      icon: BarChart3,
      title: t('services.hub.performance.title'),
      description: t('services.hub.performance.desc'),
      link: '/services/performance-commerciale',
    },
  ];

  const processSteps = [
    { number: '01', title: t('services.process.p1'), description: t('services.process.p1_desc') },
    { number: '02', title: t('services.process.p2'), description: t('services.process.p2_desc') },
    { number: '03', title: t('services.process.p3'), description: t('services.process.p3_desc') },
    { number: '04', title: t('services.process.p4'), description: t('services.process.p4_desc') },
  ];

  const results = [
    { icon: Target, titleKey: 'services.results.r1_title', descKey: 'services.results.r1_desc' },
    { icon: Users, titleKey: 'services.results.r2_title', descKey: 'services.results.r2_desc' },
    { icon: Star, titleKey: 'services.results.r3_title', descKey: 'services.results.r3_desc' },
    { icon: BarChart3, titleKey: 'services.results.r4_title', descKey: 'services.results.r4_desc' },
  ];

  return (
    <div className="bg-beige overflow-hidden">
      <section className="relative min-h-[75vh] flex items-center bg-deep overflow-hidden pt-12 md:pt-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(211,170,42,0.18),transparent)]" />
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
        <div className="container-xl relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-full mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  {t('services.hero.badge')}
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-4xl lg:text-6xl font-black tracking-tight leading-[1.05] text-beige mb-8"
              >
                {t('services.hero.title')}
                <br />
                <span className="text-gold">{t('services.hero.title2')}</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55 }}
                className="text-beige text-lg leading-relaxed max-w-2xl"
              >
                {t('services.hero.text')}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block relative group rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
                alt="Espace de travail stratégique ActiveRise"
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    t('services.hub.marketing.label'),
                    t('services.hub.communication.label'),
                    t('services.hub.creation.label'),
                    t('services.hub.performance.label'),
                  ].map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center justify-center rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-[12px] font-semibold text-gold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-separator" />

      <section className="section-padding bg-beige">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <SectionTitle
              badge={t('services.intro.badge')}
              title={t('services.intro.title')}
              titleGold={t('services.intro.title2')}
            />
            <p className="text-deep text-lg leading-relaxed mt-4">{t('services.intro.text')}</p>
          </div>
        </div>
      </section>

      <div className="section-separator" />

      <section className="section-padding bg-gray-50/50">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold mb-4 shadow-badge px-4 py-1.5 rounded-full">
              {t('services.hub.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-deep">
              {t('services.hub.title')} <span className="text-gold">{t('services.hub.title2')}</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {servicePillars.map((pillar, index) => (
              <ServiceCard
                key={pillar.title}
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
                link={pillar.link}
                delay={index * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="section-separator" />

      <section className="section-padding bg-deep">
        <div className="container-xl">
          <div className="text-center mb-16">
            <SectionTitle
              badge={t('services.results.badge')}
              title={t('services.results.title')}
              titleGold={t('services.results.title2')}
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((r, i) => (
              <RevealOnScroll key={i} delay={i * 0.08} direction="up">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group text-center p-8 bg-white shadow-card rounded-md hover:shadow-card-hover transition-shadow duration-300 border border-gray-200/50"
                >
                  <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                    <r.icon size={24} className="text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-deep mb-3">{t(r.titleKey)}</h3>
                  <p className="text-deep text-sm leading-relaxed">{t(r.descKey)}</p>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <div className="section-separator" />

      <section className="section-padding bg-beige">
        <ProcessSection
          badge={t('services.process.badge')}
          title={t('services.process.title')}
          titleGold={t('services.process.title2')}
          steps={processSteps}
          dark={false}
        />
      </section>

      <div className="section-separator" />

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
