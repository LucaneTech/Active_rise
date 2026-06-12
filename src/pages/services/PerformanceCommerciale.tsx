import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BarChart3, LineChart, Award, Target } from 'lucide-react';
import CTASection from '../../components/ui/CTASection';
import RevealOnScroll from '../../components/ui/RevealOnScroll';

export default function PerformanceCommerciale() {
  const { t } = useTranslation();

  const services = [
    { icon: BarChart3, title: t('services.consulting.s1'), description: t('services.consulting.s1_desc') },
    { icon: LineChart, title: t('services.consulting.s2'), description: t('services.consulting.s2_desc') },
    { icon: Award, title: t('services.consulting.s5'), description: t('services.consulting.s5_desc') },
    { icon: Target, title: t('services.consulting.s6'), description: t('services.consulting.s6_desc') },
  ];

  return (
    <div className="min-h-screen bg-beige overflow-hidden">
      <section className="relative bg-deep pt-24 pb-20 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
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
        <div className="container-xl relative z-10 py-6">
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl lg:text-6xl font-black leading-tight text-beige mb-6"
          >
            {t('services.consulting.title')} <span className="text-gold">{t('services.consulting.title2')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="text-beige max-w-3xl text-lg leading-relaxed"
          >
            {t('services.page.performance.text')}
          </motion.p>
        </div>
      </section>

      <div className="section-separator" />

      <section className="section-padding bg-gray-50/50">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((item, index) => (
              <RevealOnScroll
                key={item.title}
                delay={index * 0.08}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group rounded-md border border-gray-200/50 bg-white p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gold text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-xl font-bold text-deep mb-3">{item.title}</h2>
                  <p className="text-deep/75 leading-relaxed text-sm">{item.description}</p>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
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
