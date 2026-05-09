import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  TrendingUp, Palette, Megaphone, Star, Globe, BarChart3,
  CheckCircle2, Target, Shield, Users,
  Camera, Video, Search, ShoppingCart, Mail, FileText,
  Award, Layers, Code2, LineChart
} from 'lucide-react';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import SectionTitle from '../components/ui/SectionTitle';
import ProcessSection from '../components/ui/ProcessSection';
import CTASection from '../components/ui/CTASection';

interface ServiceItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay?: number;
}

function ServiceItem({ icon: Icon, title, description, delay = 0 }: ServiceItemProps) {
  return (
    <RevealOnScroll delay={delay} direction="up">
      <motion.div
        whileHover={{ y: -5 }}
        className="group flex items-start gap-5 p-6 rounded-md shadow-card bg-transparent  border border-gray-200/30 hover:shadow-card-hover transition-shadow duration-300"
      >
        <div className="w-12 h-12 rounded-md bg-gray-200/20 border border-gray-500/30 flex items-center justify-center shrink-0 transition-colors duration-300">
          <Icon size={20} className="text-gold" strokeWidth={1.5} />
        </div>
        <div>
          <h4 className="font-bold text-gold mb-1">{title}</h4>
          <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </RevealOnScroll>
  );
}

export default function Services() {
  const { t } = useTranslation();

  const processSteps = [
    { number: '01', title: t('services.process.p1'), description: t('services.process.p1_desc') },
    { number: '02', title: t('services.process.p2'), description: t('services.process.p2_desc') },
    { number: '03', title: t('services.process.p3'), description: t('services.process.p3_desc') },
    { number: '04', title: t('services.process.p4'), description: t('services.process.p4_desc') },
    { number: '05', title: t('services.process.p5'), description: t('services.process.p5_desc') },
    { number: '06', title: t('services.process.p6'), description: t('services.process.p6_desc') },
  ];

  const results = [
    { icon: Target, titleKey: 'services.results.r1_title', descKey: 'services.results.r1_desc' },
    { icon: Users, titleKey: 'services.results.r2_title', descKey: 'services.results.r2_desc' },
    { icon: Star, titleKey: 'services.results.r3_title', descKey: 'services.results.r3_desc' },
    { icon: BarChart3, titleKey: 'services.results.r4_title', descKey: 'services.results.r4_desc' },
  ];

  return (
    <div className="bg-beige overflow-hidden">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[75vh] flex items-center bg-deep overflow-hidden pt-12 md:pt-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_100%_50%,rgba(211,170,42,0.1),transparent)]" />
        </div>
        <div className="container-xl relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            {/* Left: Text */}
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
                className="text-beige text-xl leading-relaxed"
              >
                {t('services.hero.text')}
              </motion.p>
            </div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative block relative rounded-md overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                alt="Espace de travail stratégique ActiveRise"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-deep/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="flex flex-wrap gap-2">
                  {['Marketing', 'Branding', 'Web', 'Conseil', 'SEO'].map((tag) => (
                    <span key={tag} className="bg-gold/20 backdrop-blur-sm border border-gold/30 text-gold text-[11px] font-semibold px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="section-padding bg-beige">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2  md:gap-16 items-center">
            <div>
              <RevealOnScroll delay={0}>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-md mb-6">
                  <span className="w-1 h-1 rounded-md bg-gold" />
                  {t('services.intro.badge')}
                </span>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-deep  mb-6">
                  {t('services.intro.title')}{' '}
                  <span className="text-gold">{t('services.intro.title2')}</span>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={0.2}>
                <p className="text-deep text-lg leading-relaxed">{t('services.intro.text')}</p>
              </RevealOnScroll>
            </div>
            <RevealOnScroll delay={0.2} direction="right">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: TrendingUp, label: 'Marketing' },
                  { icon: Palette, label: 'Branding' },
                  { icon: Megaphone, label: 'Comm.' },
                  { icon: Camera, label: 'Création' },
                  { icon: Globe, label: 'Web & SEO' },
                  { icon: BarChart3, label: 'Consulting' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="aspect-square bg-beige shadow-card border border-gray-300 rounded-md flex flex-col items-center justify-center gap-2 mt-4 hover:shadow-card-hover transition-shadow duration-300"
                  >
                   <span className="w-10 h-10 rounded-full bg-gold flex items-center justify-center mb-1">
                     <item.icon size={22} className="text-white" strokeWidth={1.5} />
                   </span>
                    <span className="text-xs font-semibold text-deep ">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ─── MARKETING ─── */}
      <section className="section-padding bg-deep" id="marketing">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <RevealOnScroll delay={0}>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-md mb-5">
                  <span className="w-1 h-1 rounded-md bg-gold" />
                  {t('services.marketing.badge')}
                </span>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-beige leading-[1.05] mb-6">
                  {t('services.marketing.title')}{' '}
                  <span className="text-gold">{t('services.marketing.title2')}</span>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={0.15}>
                <div className="w-12 h-0.5 bg-gold mb-8" />
              </RevealOnScroll>
            </div>
            <div className="grid gap-4">
              {[
                { icon: Target, k: 's1' }, { icon: Mail, k: 's2' }, { icon: FileText, k: 's3' },
                { icon: Users, k: 's4' }, { icon: TrendingUp, k: 's5' }, { icon: Star, k: 's6' },
              ].map((item, i) => (
                <ServiceItem
                  key={i}
                  icon={item.icon}
                  title={t(`services.marketing.${item.k}`)}
                  description={t(`services.marketing.${item.k}_desc`)}
                  delay={i * 0.07}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── BRANDING ─── */}
      <section className="section-padding bg-beige" id="branding">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="grid gap-4 order-2 lg:order-1">
              {[
                { icon: Palette, k: 's1' }, { icon: Target, k: 's2' }, { icon: Layers, k: 's3' },
                { icon: Megaphone, k: 's4' }, { icon: Shield, k: 's5' }, { icon: CheckCircle2, k: 's6' },
              ].map((item, i) => (
                <ServiceItem
                  key={i}
                  icon={item.icon}
                  title={t(`services.branding.${item.k}`)}
                  description={t(`services.branding.${item.k}_desc`)}
                  delay={i * 0.07}
                />
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <RevealOnScroll delay={0}>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-full mb-5">
                  <span className="w-1 h-1 rounded-full bg-gold" />
                  {t('services.branding.badge')}
                </span>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-deep leading-[1.05] mb-6">
                  {t('services.branding.title')}{' '}
                  <span className="text-gold">{t('services.branding.title2')}</span>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={0.15}>
                <div className="w-12 h-0.5 bg-gold" />
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMMUNICATION ─── */}
      <section className="section-padding bg-deep" id="communication">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <RevealOnScroll delay={0}>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-full mb-5">
                  <span className="w-1 h-1 rounded-full bg-gold" />
                  {t('services.communication.badge')}
                </span>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-beige leading-[1.05] mb-6">
                  {t('services.communication.title')}{' '}
                  <span className="text-gold">{t('services.communication.title2')}</span>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={0.15}>
                <div className="w-12 h-0.5 bg-gold mb-8" />
              </RevealOnScroll>
            </div>
            <div className="grid gap-4">
              {[
                { icon: Globe, k: 's1' }, { icon: Award, k: 's2' }, { icon: Megaphone, k: 's3' },
                { icon: Users, k: 's4' }, { icon: Shield, k: 's5' }, { icon: FileText, k: 's6' },
              ].map((item, i) => (
                <ServiceItem
                  key={i}
                  icon={item.icon}
                  title={t(`services.communication.${item.k}`)}
                  description={t(`services.communication.${item.k}_desc`)}
                  delay={i * 0.07}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CREATION ─── */}
      <section className="section-padding bg-beige" id="creation">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="grid gap-4 order-2 lg:order-1">
              {[
                { icon: Palette, k: 's1' }, { icon: Star, k: 's2' }, { icon: Video, k: 's3' },
                { icon: Megaphone, k: 's4' }, { icon: Camera, k: 's5' }, { icon: Layers, k: 's6' },
              ].map((item, i) => (
                <ServiceItem
                  key={i}
                  icon={item.icon}
                  title={t(`services.creation.${item.k}`)}
                  description={t(`services.creation.${item.k}_desc`)}
                  delay={i * 0.07}
                />
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <RevealOnScroll delay={0}>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-full mb-5">
                  <span className="w-1 h-1 rounded-full bg-gold" />
                  {t('services.creation.badge')}
                </span>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-deep leading-[1.05] mb-6">
                  {t('services.creation.title')}{' '}
                  <span className="text-gold">{t('services.creation.title2')}</span>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={0.15}>
                <div className="w-12 h-0.5 bg-gold" />
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WEB & SEO ─── */}
      <section className="section-padding bg-deep" id="web">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <RevealOnScroll delay={0}>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-full mb-5">
                  <span className="w-1 h-1 rounded-full bg-gold" />
                  {t('services.web.badge')}
                </span>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-beige leading-[1.05] mb-6">
                  {t('services.web.title')}{' '}
                  <span className="text-gold">{t('services.web.title2')}</span>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={0.15}>
                <div className="w-12 h-0.5 bg-gold mb-8" />
              </RevealOnScroll>
            </div>
            <div className="grid gap-4">
              {[
                { icon: Code2, k: 's1' }, { icon: Search, k: 's2' }, { icon: Globe, k: 's3' },
                { icon: Target, k: 's4' }, { icon: ShoppingCart, k: 's5' }, { icon: Shield, k: 's6' },
              ].map((item, i) => (
                <ServiceItem
                  key={i}
                  icon={item.icon}
                  title={t(`services.web.${item.k}`)}
                  description={t(`services.web.${item.k}_desc`)}
                  delay={i * 0.07}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONSULTING ─── */}
      <section className="section-padding bg-beige" id="consulting">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="grid gap-4 order-2 lg:order-1">
              {[
                { icon: BarChart3, k: 's1' }, { icon: LineChart, k: 's2' }, { icon: FileText, k: 's3' },
                { icon: Users, k: 's4' }, { icon: Award, k: 's5' }, { icon: Target, k: 's6' },
              ].map((item, i) => (
                <ServiceItem
                  key={i}
                  icon={item.icon}
                  title={t(`services.consulting.${item.k}`)}
                  description={t(`services.consulting.${item.k}_desc`)}
                  delay={i * 0.07}
                />
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <RevealOnScroll delay={0}>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-full mb-5">
                  <span className="w-1 h-1 rounded-full bg-gold" />
                  {t('services.consulting.badge')}
                </span>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-deep leading-[1.05] mb-6">
                  {t('services.consulting.title')}{' '}
                  <span className="text-gold">{t('services.consulting.title2')}</span>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={0.15}>
                <div className="w-12 h-0.5 bg-gold" />
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <ProcessSection
        badge={t('services.process.badge')}
        title={t('services.process.title')}
        titleGold={t('services.process.title2')}
        steps={processSteps}
        dark={true}
      />

      {/* ─── RESULTS ─── */}
      <section className="section-padding bg-beige">
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
              <RevealOnScroll key={i} delay={i * 0.1} direction="up">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group text-center p-8 bg-beige shadow-card rounded-md hover:shadow-card-hover transition-shadow duration-300 border border-gray-600/30"
                >
                  <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                    <r.icon size={24} className="text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-deep  mb-3">{t(r.titleKey)}</h3>
                  <p className="text-deep text-sm leading-relaxed">{t(r.descKey)}</p>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
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
