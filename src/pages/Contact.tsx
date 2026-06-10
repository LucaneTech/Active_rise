import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import ProcessSection from '../components/ui/ProcessSection';
import CTASection from '../components/ui/CTASection';

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    t('contact.form.opt_marketing'), t('contact.form.opt_branding'), t('contact.form.opt_communication'),
    t('contact.form.opt_creation'), t('contact.form.opt_web'), t('contact.form.opt_consulting'), t('contact.form.opt_other'),
  ];

  const faqs = [
    { q: t('contact.faq.q1'), a: t('contact.faq.a1') },
    { q: t('contact.faq.q2'), a: t('contact.faq.a2') },
    { q: t('contact.faq.q3'), a: t('contact.faq.a3') },
    { q: t('contact.faq.q4'), a: t('contact.faq.a4') },
  ];

  const processSteps = [
    { number: '01', title: t('contact.process.p1_title'), description: t('contact.process.p1_desc') },
    { number: '02', title: t('contact.process.p2_title'), description: t('contact.process.p2_desc') },
    { number: '03', title: t('contact.process.p3_title'), description: t('contact.process.p3_desc') },
    { number: '04', title: t('contact.process.p4_title'), description: t('contact.process.p4_desc') },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputClass = `w-full bg-transparent border border-gray-300 rounded-md px-5 py-4 text-deep text-sm placeholder:text-deep/30 focus:outline-none focus:border-gold transition-colors duration-300`;
  const labelClass = `block text-xs font-semibold tracking-wider uppercase text-deep/65 mb-2`;

  return (
    <div className="bg-beige overflow-hidden">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[65vh] flex items-center bg-deep overflow-hidden pt-24">
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
        <div className="container-xl relative z-10 py-16 md:py-24 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              {t('contact.hero.badge')}
            </span>
          </motion.div>
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
                        <p className="text-deep/70">Nous vous répondrons dans les plus brefs délais.</p>
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
                          className="w-full bg-gold text-deep font-bold py-3 px-8 rounded-md flex items-center justify-center gap-3 hover:bg-gold/90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {submitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-deep/30 border-t-deep rounded-md animate-spin" />
                              Envoi en cours...
                            </>
                          ) : (
                            <>
                              {t('contact.form.send')}
                              <ArrowRight size={16} />
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
                      { icon: Phone, label: t('contact.info.phone_label'), val: t('contact.info.phone_val'), href: `tel:+33123456789` },
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
                  <div className="text-4xl font-black text-gold mb-3">30 min</div>
                  <h3 className="font-bold text-deep mb-2">Diagnostic gratuit</h3>
                  <p className="text-deep  text-sm leading-relaxed mb-6">
                    Un premier échange sans engagement pour analyser votre situation et vous proposer des pistes concrètes.
                  </p>
                  <div className="flex items-center gap-2 text-gold text-sm font-semibold">
                    <span className="w-2 h-2 rounded-md bg-gold animate-pulse" />
                    Disponible dès aujourd'hui
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

      {/* ─── MAP PLACEHOLDER ─── */}
      <section className="bg-beige">
        <div className="container-xl py-16">
          <RevealOnScroll>
            <div className="w-full h-64 bg-deep/5 rounded-md shadow-card flex items-center justify-center overflow-hidden relative">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(211,170,42,0.15) 30px, rgba(211,170,42,0.15) 31px), repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(211,170,42,0.15) 30px, rgba(211,170,42,0.15) 31px)`,
                }}
              />
              <div className="relative z-10 text-center">
                <MapPin size={40} className="text-gold mx-auto mb-3" strokeWidth={1.5} />
                <p className="font-bold text-deep">Pointe-Noire, Congo-Brazzaville</p>
                <p className="text-deep/65 text-sm mt-1">Active Rise — Agence stratégique</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section-padding bg-deep">
        <div className="container-xl">
          <div className="text-center mb-16">
            <RevealOnScroll>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-md mb-5">
                <span className="w-1 h-1 rounded-md bg-gold" />
                {t('contact.faq.badge')}
              </span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-beige">
                {t('contact.faq.title')}{' '}
                <span className="text-gold">{t('contact.faq.title2')}</span>
              </h2>
            </RevealOnScroll>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <RevealOnScroll key={i} delay={i * 0.08} direction="up">
                <div
                  className="border border-gray-200/30 rounded-md overflow-hidden hover:shadow-card-hover transition-shadow duration-300 cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="flex items-center justify-between p-6">
                    <h3 className="font-bold text-beige pr-4">{faq.q}</h3>
                    <motion.div
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0"
                    >
                      <ChevronDown size={18} className="text-gold" />
                    </motion.div>
                  </div>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 border-t border-gray-200/30 pt-4">
                          <p className="text-beige leading-relaxed text-sm">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTASection
        title={t('contact.cta.title')}
        titleGold={t('contact.cta.title2')}
        text={t('contact.cta.text')}
        btnPrimary={t('contact.cta.btn')}
        btnPrimaryLink="/cases"
        dark={false}
      />
    </div>
  );
}
