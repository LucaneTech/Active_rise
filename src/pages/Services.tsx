import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TrendingUp, Megaphone, Code2, BarChart3, Target, Users, Star } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import ServiceCard from '../components/ui/ServiceCard';
import ProcessSection from '../components/ui/ProcessSection';
import CTASection from '../components/ui/CTASection';
import RevealOnScroll from '../components/ui/RevealOnScroll';


const cubicBezier = [0.16, 1, 0.3, 1]

const HeroServicesSection: React.FC = () => {
  const { t } = useTranslation()

  // Récupération dynamique du tableau de tags depuis le JSON
  const strategicTags = t('services.hero.tags', { returnObjects: true }) as string[]

  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-deep overflow-hidden pt-28 pb-12 px-4 sm:px-6 lg:px-8">

      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80"
          alt="Background Texture"
          className="w-full h-full object-cover opacity-40 filter blur-md scale-110 pointer-events-none select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-yellow-500/10" />
      </div>
      
      {/* ─── ARRIÈRE-PLAN AVEC MOTIFS GÉOMÉTRIQUES FINNES ─── */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `linear-gradient(rgba(211, 170, 42, 0.1) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(211, 170, 42, 0.1) 1px, transparent 1px)`,
            backgroundSize: '120px 120px',
          }}
        />
        <svg className="absolute top-0 right-0 w-1/2 h-full opacity-10 text-gold" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.1" strokeDasharray="1" />
          <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.1" strokeDasharray="1" />
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[160px]" />
      </div>

      {/* ─── CORPS PRINCIPAL : SPLIT IMAGE À GAUCHE / TEXTE À DROITE ─── */}
      <div className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 my-auto">

        {/* BLOC GAUCHE : IMAGE AVEC OVERLAY DROITE -> GAUCHE */}
        <div className="lg:col-span-5 order-2 lg:order-1 relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: cubicBezier }}
            className="relative rounded-2xl overflow-hidden aspect-4/3 lg:aspect-[4/5] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] group border border-white/5"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
              alt="ActiveRise Strategy Workspace"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-[#0B0F19]/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          </motion.div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-yellow-500 pointer-events-none rounded-bl-xl hidden lg:block" />
           <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-yellow-500 pointer-events-none rounded-tr-xl hidden lg:block" />
        </div>

        {/* BLOC DROITE : TEXTE DEPUIS LE JSON */}
        <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: cubicBezier }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold">
              {t('services.hero.badge')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: cubicBezier }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-white uppercase mb-8"
          >
            {t('services.hero.title')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-500 to-gold">
              {t('services.hero.title2')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: cubicBezier }}
            className="text-white/70 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl border-l border-white/10 pl-6"
          >
            {t('services.hero.text')}
          </motion.p>
        </div>

      </div>

      {/* ─── ZONE INFÉRIEURE : TAGS MAPÉS DYNAMIQUEMENT ─── */}
      {Array.isArray(strategicTags) && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: cubicBezier }}
          className="w-full max-w-4xl mx-auto text-center z-10 pt-12 lg:pt-16 "
        >
          <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/30 block mb-5">
            {t('services.hero.infer')}
          </span>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {strategicTags.map((tag, index) => (
              <div
                key={index}
                className="px-5 py-3 rounded-xl bg-white/[0.02] border border-yellow-500/10 text-yellow-500/80 text-xs md:text-sm font-semibold tracking-wide backdrop-blur-md transition-all duration-300 hover:border-gold/40 hover:text-white hover:shadow-[0_0_20px_rgba(211,170,42,0.1)] cursor-default"
              >
                {tag}
              </div>
            ))}
          </div>
        </motion.div>
      )}

    </section>
  )
}

export default function Services() {
  const { t } = useTranslation();

  const servicePillars = [
    {
      icon: TrendingUp,
      title: t('services.services.marketing_title'),
      description: t('services.services.marketing_desc'),
      link: '/services/marketing',
    },
    {
      icon: Megaphone,
      title: t('services.services.communication_title'),
      description: t('services.services.communication_desc'),
      link: '/services/communication',
    },
    {
      icon: Code2,
      title: t('services.services.creation_title'),
      description: t('services.services.creation_desc'),
      link: '/services/creation-web',
    },
    {
      icon: BarChart3,
      title: t('services.services.performance_title'),
      description: t('services.services.performance_desc'),
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

      <HeroServicesSection />
      <div className="section-separator" />



      {/* <section className="section-padding bg-beige">
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
      </section> */}

      <div className="section-separator" />

      <section className="section-padding bg-gray-50/50">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold mb-4 shadow-badge px-4 py-1.5 rounded-md">
              {t('services.services.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-deep">
              {t('services.services.title')} <span className="text-gold">{t('services.services.title2')}</span>
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
                linkLabel={t('services.services.view_all')}
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
