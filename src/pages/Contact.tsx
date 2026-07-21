import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ChevronDown, CheckCircle2, ArrowRight, Minus, Plus } from 'lucide-react';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import ProcessSection from '../components/ui/ProcessSection';
import { Link } from 'react-router-dom';


const WHATSAPP_NUMBER = "212681537167";


function IntakeSection() {
  const { t } = useTranslation();

  const steps = [
    { title: t('contact.intake.step1_title'), desc: t('contact.intake.step1_desc') },
    { title: t('contact.intake.step2_title'), desc: t('contact.intake.step2_desc') },
    { title: t('contact.intake.step3_title'), desc: t('contact.intake.step3_desc') },
    { title: t('contact.intake.step4_title'), desc: t('contact.intake.step4_desc') },
  ];

  return (
    <section className="py-24 lg:py-36 text-white overflow-hidden border-t border-white/5">
      <div className="container-xl max-w-[1400px] mx-auto px-4 sm:px-8">

        <div className="mb-20">
          <RevealOnScroll direction="left">
            <span className="text-xs font-bold tracking-[0.4em] text-gold uppercase block mb-4">
              {t('contact.intake.badge')}
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-black">
              {t('contact.intake.section_title')}
            </h2>
          </RevealOnScroll>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
          {steps.map((step, index) => (
            <RevealOnScroll key={index} delay={index * 0.1} direction="up">
              <div className="group relative border-t border-white/10 pt-6 h-full flex flex-col justify-between cursor-default">
                {/* Ligne d'accentuation dorée cinétique */}
                <div className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-gold to-transparent w-0 group-hover:w-full transition-all duration-500" />

                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-gold group-hover:text-gold transition-colors duration-300 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-deep text-sm sm:text-base leading-relaxed group-hover:text-gray-500 transition-colors duration-300">
                    {step.desc}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}


function FAQSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: t('contact.faq.q1_title'), a: t('contact.faq.q1_desc') },
    { q: t('contact.faq.q2_title'), a: t('contact.faq.q2_desc') },
    { q: t('contact.faq.q3_title'), a: t('contact.faq.q3_desc') },
    { q: t('contact.faq.q4_title'), a: t('contact.faq.q4_desc') },
  ];

  return (
    <section className="py-24 lg:py-36 bg-deep text-white border-t border-white/5">
      <div className="container-xl max-w-[1200px] mx-auto px-4 sm:px-8">

        <div className="mb-16 text-center lg:text-left">
          <RevealOnScroll direction="left">
            <span className="text-xs font-bold tracking-[0.4em] text-gold uppercase block mb-4">
              {t('contact.faq.badge')}
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              {t('contact.faq.section_title')}
            </h2>
          </RevealOnScroll>
        </div>

        <div className="border-t border-white/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-white/10">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-6 sm:py-8 flex items-center justify-between gap-6 text-left focus:outline-none group"
                >
                  <span className={`text-lg sm:text-xl font-bold uppercase tracking-tight transition-colors duration-300 ${isOpen ? 'text-gold' : 'text-white/80 group-hover:text-white'}`}>
                    {faq.q}
                  </span>
                  <div className={`flex-shrink-0 text-white/30 group-hover:text-gold transition-colors ${isOpen ? 'text-gold' : ''}`}>
                    {isOpen ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, filter: 'blur(4px)' }}
                      animate={{ height: 'auto', opacity: 1, filter: 'blur(0px)' }}
                      exit={{ height: 0, opacity: 0, filter: 'blur(4px)' }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-white/60 text-sm sm:text-base leading-relaxed max-w-4xl font-medium">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


function RetentionSection() {
  const { t } = useTranslation();

  return (
    <section className="py-28 lg:py-40 bg-deep text-white relative overflow-hidden border-t border-white/5">
      {/* Lueur d'ambiance centrale diffuse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-xl max-w-[1000px] mx-auto px-4 sm:px-8 text-center relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 max-w-2xl mx-auto leading-tight"
        >
          {t('contact.retention.title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/50 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-medium mb-12"
        >
          {t('contact.retention.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            to="/cases"
            className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-gold border border-gold/30 hover:border-gold bg-gold/5 hover:bg-gold/10 px-8 py-5 rounded-md transition-all duration-300 group"
          >
            {t('contact.retention.action')}
            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const services = [
    t('contact.form.opt_marketing'), t('contact.form.opt_branding'), t('contact.form.opt_communication'),
    t('contact.form.opt_creation'), t('contact.form.opt_web'), t('contact.form.opt_consulting'), t('contact.form.opt_other'),
  ];

  const processSteps = [
    { number: '01', title: t('contact.process.p1'), description: t('contact.process.p1_desc') },
    { number: '02', title: t('contact.process.p2'), description: t('contact.process.p2_desc') },
    { number: '03', title: t('contact.process.p3'), description: t('contact.process.p3_desc') },
    { number: '04', title: t('contact.process.p4'), description: t('contact.process.p4_desc') },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Construction du message WhatsApp bien structuré
    const message = `*-----NOUVEAU MESSAGE DEPUIS LE SITE ACTIVE RISE-----*\n\n` +
      `*Nom complet :* ${form.name}\n` +
      `*Email :* ${form.email}\n` +
      `*Entreprise :* ${form.company || 'Non renseigné'}\n` +
      `*Service souhaité :* ${form.service || 'Non spécifié'}\n\n` +
      `*Message :*\n${form.message}`;

    // Encodage de l'URL pour gérer correctement les espaces et sauts de ligne
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Petit délai d'animation avant d'ouvrir WhatsApp
    await new Promise((r) => setTimeout(r, 800));

    setSubmitting(false);
    setSubmitted(true);

    // Ouvre WhatsApp dans un nouvel onglet
    window.open(whatsappUrl, '_blank');
  };

  const inputClass = `w-full bg-transparent border border-gray-300 rounded-md px-5 py-4 text-deep text-sm placeholder:text-deep/30 focus:outline-none focus:border-gold transition-colors duration-300`;
  const labelClass = `block text-xs font-semibold tracking-wider uppercase text-deep/65 mb-2`;

  return (
    <div className="bg-beige overflow-hidden">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[65vh] flex items-center bg-deep overflow-hidden pt-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(211,170,42,0.18),transparent)]" />
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
        <div className="container-xl relative z-10 py-16 md:py-24 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl lg:text-6xl font-black tracking-tight leading-[1.05] text-beige mb-8"
          >
            {t('contact.hero.title')}
            <br />
            <span className="text-gold">{t('contact.hero.title2')}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55 }}
            className="text-beige text-lg leading-relaxed max-w-2xl mx-auto"
          >
            {t('contact.hero.text')}
          </motion.p>
        </div>
      </section>

      <div className="section-separator" />

      {/* ─── FORM + INFO ─── */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-xl">
          <div className="grid lg:grid-cols-5 gap-16">

            {/* FORM */}
            <div className="lg:col-span-3">
              <RevealOnScroll delay={0} direction="left">
                <div className="bg-white rounded-md p-10 shadow-card border border-gray-200/50">
                  <h2 className="text-2xl font-black text-deep mb-8">{t('contact.form.title')}</h2>

                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-16"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                          className="w-20 h-20 rounded-md bg-gold/15 flex items-center justify-center mx-auto mb-6"
                        >
                          <CheckCircle2 size={36} className="text-gold" strokeWidth={1.5} />
                        </motion.div>
                        <h3 className="text-2xl font-black text-deep mb-3">{t('contact.form.success')}</h3>
                        <p className="text-deep/70">Redirection vers WhatsApp pour envoyer votre message...</p>
                      </motion.div>
                    ) : (
                      <motion.form key="form" onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className={labelClass}>{t('contact.form.name')}</label>
                            <input
                              type="text"
                              required
                              placeholder={t('contact.form.name_placeholder')}
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              className={inputClass}
                            />
                          </div>
                          <div>
                            <label className={labelClass}>{t('contact.form.email')}</label>
                            <input
                              type="email"
                              required
                              placeholder={t('contact.form.email_placeholder')}
                              value={form.email}
                              onChange={(e) => setForm({ ...form, email: e.target.value })}
                              className={inputClass}
                            />
                          </div>
                        </div>

                        <div>
                          <label className={labelClass}>{t('contact.form.company')}</label>
                          <input
                            type="text"
                            placeholder={t('contact.form.company_placeholder')}
                            value={form.company}
                            onChange={(e) => setForm({ ...form, company: e.target.value })}
                            className={inputClass}
                          />
                        </div>

                        <div>
                          <label className={labelClass}>{t('contact.form.service')}</label>
                          <div className="relative">
                            <select
                              value={form.service}
                              onChange={(e) => setForm({ ...form, service: e.target.value })}
                              className={`${inputClass} appearance-none cursor-pointer`}
                            >
                              <option value="" disabled>{t('contact.form.service_placeholder')}</option>
                              {services.map((s, i) => (
                                <option key={i} value={s}>{s}</option>
                              ))}
                            </select>
                            <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-deep/60 pointer-events-none" />
                          </div>
                        </div>

                        <div>
                          <label className={labelClass}>{t('contact.form.message')}</label>
                          <textarea
                            required
                            rows={6}
                            placeholder={t('contact.form.message_placeholder')}
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            className={`${inputClass} resize-none`}
                          />
                        </div>

                        <motion.button
                          type="submit"
                          disabled={submitting}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-gold text-deep font-bold py-3 px-8 rounded-md flex items-center justify-center gap-3 hover:bg-gold/90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                        >
                          {submitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-deep/30 border-t-deep rounded-md animate-spin" />
                              Redirection WhatsApp...
                            </>
                          ) : (
                            <>
                              {t('contact.form.send')}
                            </>
                          )}
                        </motion.button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </RevealOnScroll>
            </div>

            {/* INFO */}
            <div className="lg:col-span-2 space-y-6">
              <RevealOnScroll delay={0.2} direction="right">
                <div className="bg-deep rounded-md p-8">
                  <h3 className="text-lg font-bold text-beige mb-6">{t('contact.info.title')}</h3>
                  <div className="space-y-5">
                    {[
                      { icon: Mail, label: t('contact.info.email_label'), val: t('contact.info.email_val'), href: `mailto:${t('contact.info.email_val')}` },
                      { icon: Phone, label: t('contact.info.phone_label'), val: t('contact.info.phone_val'), href: `tel:+242069995815` },
                      { icon: MapPin, label: t('contact.info.address_label'), val: t('contact.info.address_val'), href: undefined },
                      { icon: Clock, label: t('contact.info.hours_label'), val: t('contact.info.hours_val'), href: undefined },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                          <item.icon size={16} className="text-gold" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-xs text-beige font-semibold tracking-wider uppercase mb-1">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="text-sm text-beige hover:text-gold transition-colors">{item.val}</a>
                          ) : (
                            <p className="text-sm text-beige">{item.val}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.3} direction="right">
                <div className="bg-gold/10 shadow-xl border border-gold rounded-[40px_14px_40px_14px] p-8">
                  <div className="text-4xl font-black text-gold mb-3">
                    {t('contact.diagnostic.duration')}
                  </div>
                  <h3 className="font-bold text-deep mb-2">
                    {t('contact.diagnostic.title')}
                  </h3>
                  <p className="text-deep text-sm leading-relaxed mb-6">
                    {t('contact.diagnostic.description')}
                  </p>
                  <div className="flex items-center gap-2 text-gold text-sm font-semibold">
                    <span className="w-2 h-2 rounded-md bg-gold animate-pulse" />
                    {t('contact.diagnostic.availability')}
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <ProcessSection
        badge={t('contact.process.badge')}
        title={t('contact.process.title')}
        titleGold={t('contact.process.title2')}
        steps={processSteps}
        dark={true}
      />

      <IntakeSection />
      {/* ─── FAQ ─── */}
      <FAQSection />
      <RetentionSection />

    </div>
  );
}