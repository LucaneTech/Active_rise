import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BookOpen, FileText, Mail, Target } from 'lucide-react';
import CTASection from '../../components/ui/CTASection';

type ServiceItem = {
  title: string;
  description: string;
};

type SectionGroup = {
  title: string;
  services: ServiceItem[];
};

export default function Marketing() {
  const { t } = useTranslation();

  const sections = t('services.marketing.sections', { returnObjects: true }) as SectionGroup[];

  const intro = t('services.marketing.intro');

  const formation = t('services.marketing.formation', { returnObjects: true }) as {
    title: string;
    description: string;
  };
  
  const cta = t('services.marketing.cta', { returnObjects: true }) as {
    title: string;
    title2: string;
    text: string;
    btn: string;
  };

  return (
    <div className="min-h-screen bg-deep text-white">
      <section className="mx-auto flex w-full max-w-7xl flex-col px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-gold/80">
            {t('services.marketing.eyebrow')}
          </p>
          <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="block">{t('services.marketing.title')}</span>
            <span className="mt-2 block bg-gradient-to-r from-gold via-yellow-500 to-gold bg-clip-text text-transparent">
              {t('services.marketing.title2')}
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            {intro}
          </p>
        </motion.div>

       

        <div className="mt-16 space-y-12">
          {sections.map((section, sectionIndex) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * sectionIndex, duration: 0.45 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 sm:p-8"
            >
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold/80">
                    {String(sectionIndex + 1).padStart(2, '0')}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {section.title}
                  </h2>
                </div>
                <div className="hidden h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent sm:block" />
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {section.services.map((service, serviceIndex) => (
                  <motion.article
                    key={`${section.title}-${service.title}`}
                    whileHover={{ y: -5, scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 240, damping: 22 }}
                    className="group rounded-[1.4rem] border border-white/10 bg-deep/70 p-6 transition-all duration-300 hover:border-gold/40 hover:bg-white/[0.04]"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold/80">
                        {String(sectionIndex + 1).padStart(2, '0')}.{String(serviceIndex + 1).padStart(2, '0')}
                      </span>
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors group-hover:text-gold">
                        {serviceIndex % 2 === 0 ? <Mail size={16} /> : <FileText size={16} />}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/70">{service.description}</p>
                  </motion.article>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Formation Section */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 * sections.length, duration: 0.45 }}
          className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 sm:p-8"
        >
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold/80">
                {String(sections.length + 1).padStart(2, '0')}
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {formation.title}
              </h2>
            </div>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent sm:block" />
          </div>
          <p className="max-w-3xl text-base leading-8 text-white/70">
            {formation.description}
          </p>
        </motion.section>
      </section>

      <CTASection
        title={cta.title}
        titleGold={cta.title2}
        text={cta.text}
        btnPrimary={cta.btn}
        dark={true}
        desStyle
      />
    </div>
  );
}