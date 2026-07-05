import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail, FileText, ArrowRight, HelpCircle } from 'lucide-react';

type ServiceItem = {
  title: string;
  description: string;
};

type SectionGroup = {
  title: string;
  services: ServiceItem[];
};

type FormationItem = {
  title: string;
  description: string;
};

// --- ANIMATION CONFIGURATIONS (SIEGEL PREMIUM KINETICS) ---
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } }
};

export default function CreationWeb() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(null);

  const sections = t('services.creation_web.sections', { returnObjects: true }) as SectionGroup[] || [];
  const intro = t('services.creation_web.intro', { defaultValue: '' });
  const formation = t('services.creation_web.formation', { returnObjects: true }) as { title: string; description: string; items?: FormationItem[] } || { title: '', description: '' };
  const cta = t('services.creation_web.cta', { returnObjects: true }) as { title: string; title2: string; text: string; btn: string; } || { title: '', title2: '', text: '', btn: '' };

  const toggleAccordion = (id: string) => {
    setExpandedAccordion(expandedAccordion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#F3F4F6] selection:bg-gold selection:text-black antialiased overflow-x-hidden font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative mx-auto w-full max-w-7xl px-6 pt-32 pb-24 sm:px-8 lg:pt-44 lg:pb-36 flex flex-col justify-center">
        {/* Subtle geometric structural light background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-gold/5 to-transparent blur-[120px] pointer-events-none" />
        
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-4xl"
        >
          <motion.p 
            variants={fadeInUp}
            className="mb-6 text-xs font-bold uppercase tracking-[0.4em] text-gold/90"
          >
            {t('services.creation_web.eyebrow', { defaultValue: 'WEB CREATION & DEVELOPMENT' })}
          </motion.p>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            <span className="block text-white opacity-95">{t('services.creation_web.title')}</span>
            <span className="mt-3 block bg-gradient-to-r from-gold via-[#F3C66F] to-yellow-500 bg-clip-text text-transparent">
              {t('services.creation_web.title2')}
            </span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="mt-10 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg font-light"
          >
            {intro}
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="mt-10 flex flex-sm:row items-center gap-4"
          >
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-center bg-gold px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-black rounded-md transition-transform duration-300 active:scale-95 hover:bg-[#F3C66F]"
            >
              {cta.btn}
              
            </a>
            
          </motion.div>
        </motion.div>
      </section>

      {/* 2. MODULE DE SERVICES INTERACTIF (TABS & ACCORDIONS) */}
      <section id="explore" className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 border-t border-white/[0.04]">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold/80">{t('services.creation_web.sections_label')}</span>
            <h2 className="mt-2 text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">{t('services.creation_web.sections_title')}</h2>
          </div>
          
          {/* Custom Minimal Dynamic Navigation Tabs */}
          <div className="flex flex-wrap gap-2 bg-[#121215] p-1.5 border border-white/[0.06] rounded-md">
            {sections.map((section, idx) => (
              <button
                key={section.title}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all duration-300 ${
                  activeTab === idx 
                    ? 'bg-gold text-black shadow-lg shadow-gold/10' 
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.02]'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Multi-layered Screen Segment using AnimatePresence */}
        <div className="min-h-[450px]">
          <AnimatePresence mode="wait">
            {sections.map((section, sectionIndex) => (
              sectionIndex === activeTab && (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                  className="grid gap-8 lg:grid-cols-12 items-start"
                >
                  
                  {/* Left Column: Contextual Core Identity Data */}
                  <div className="lg:col-span-4 space-y-6 sticky top-28">
                    <div className="p-8 bg-[#121215] border border-white/[0.06] rounded-md backdrop-blur-md">
                      <span className="text-4xl font-black text-yellow-500/30 tracking-wider block mb-4">
                        {String(sectionIndex + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-4">{section.title}</h3>
                     
                    
                    </div>
                  </div>

                  {/* Right Column: Progressive Reveal Accordion Matrix */}
                  <div className="lg:col-span-8 space-y-3">
                    {section.services.map((service, serviceIndex) => {
                      const accordionId = `${sectionIndex}-${serviceIndex}`;
                      const isExpanded = expandedAccordion === accordionId;

                      return (
                        <div 
                          key={accordionId}
                          className={`border transition-colors duration-300 rounded-md bg-deep/40 backdrop-blur-sm ${
                            isExpanded ? 'border-yellow-500/40 bg-[#121215]' : 'border-white/[0.06] hover:border-white/20'
                          }`}
                        >
                          <button
                            onClick={() => toggleAccordion(accordionId)}
                            className="w-full flex items-center justify-between p-6 text-left"
                          >
                            <div className="flex items-center gap-4">
                              <span className="text-xs font-mono text-gray-500">
                                {String(serviceIndex + 1).padStart(2, '0')}
                              </span>
                              <div className={`p-2 rounded-md border transition-colors duration-300 ${
                                isExpanded ? 'border-yellow-500/20 bg-yellow-500/5 text-yellow-500' : 'border-white/[0.06] text-gray-400'
                              }`}>
                                {serviceIndex % 2 === 0 ? <Mail size={16} /> : <FileText size={16} />}
                              </div>
                              <h4 className="text-base font-semibold text-white tracking-wide">{service.title}</h4>
                            </div>
                            <motion.div
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className="text-gray-400"
                            >
                              <ArrowRight size={16} className="rotate-90" />
                            </motion.div>
                          </button>

                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 pb-6 pt-2 pl-16 text-sm leading-7 text-gray-400 font-light border-t border-white/[0.03]">
                                  <p className="mb-4">{service.description}</p>
                                 
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>

                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        {/* Formation & Academy Section inside Structured Framework */}
        {formation && formation.title && (
          <>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="mt-20 p-8 border border-white/[0.06] bg-gradient-to-r from-[#121215] to-[#16161C] rounded-md relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 text-white pointer-events-none">
              <HelpCircle size={120} />
            </div>
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-gold/80 flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" /> {t('services.creation_web.formation_label')}
              </span>
              <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-4">{formation.title}</h3>
              <p className="text-sm leading-7 text-gray-400 font-light">{formation.description}</p>
            </div>
          </motion.div>

          <div>
            {formation.items && formation.items.length > 0 && (
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {formation.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-6 border border-white/[0.06] bg-[#121215] rounded-md"
                  >
                    <h4 className="text-base font-semibold text-gold tracking-wide mb-2">{item.title}</h4>
                    <p className="text-sm leading-7 text-gray-400 font-light">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
          </>
        )}
      </section>

      {/* 3. SECTION ENGAGEMENT / CALL-TO-ACTION (CTA) */}
      <section id="conversion" className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-gradient-to-b from-[#121215] to-[#0A0A0C] border border-white/[0.08] p-8 sm:p-12 lg:p-16 rounded-md overflow-hidden text-center flex flex-col items-center justify-center"
        >
          {/* Subtle Graphic Grid Accent */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-gold/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold">
              {cta.title || 'START CONVERSION'}
            </span>
            
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl leading-none">
              {cta.title2 || 'Ready to launch your project?'}
            </h2>
            
            <p className="text-sm sm:text-base text-gray-400 font-light leading-7 max-w-xl mx-auto">
              {cta.text || 'Let\'s discuss your web creation and development needs. Together we identify the best solutions for your goals. First consultation free.'}
            </p>

            <div className="pt-6">
              <a
                href="/contact"
              
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-black rounded-md transition-all duration-300 hover:bg-gold active:scale-95 shadow-xl hover:shadow-gold/5"
              >
                {cta.btn || 'Request free assessment'}
                
              </a>
            </div>
          </div>
        </motion.div>
      </section>
      
    </div>
  );
}
