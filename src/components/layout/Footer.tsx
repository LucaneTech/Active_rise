import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, ArrowRight, ExternalLink, MessageCircle } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/services', label: t('nav.services') },
    { to: '/cases', label: t('nav.cases') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const services = [
    t('footer.s1'), t('footer.s2'), t('footer.s3'), t('footer.s4'), t('footer.s5'),
  ];

  return (
    <footer className="bg-deep text-beige">

      {/* Newsletter strip */}
      <div className="border-b border-gray-500/50">
        {/* <div className="container-xl py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-black text-lg text-beige mb-1">Restez informé</h3>
              <p className="text-beige text-sm">Stratégies, tendances et insights de croissance — en exclusivité.</p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 min-w-0 bg-beige/5 border border-beige/12 rounded-md px-5 py-3 text-sm text-beige placeholder:text-beige focus:outline-none focus:border-gold/40 transition-colors"
              />
              <button className="bg-gold text-deep font-bold text-sm px-6 py-3 rounded-md hover:bg-gold/90 transition-colors whitespace-nowrap shrink-0">
                S'abonner
              </button>
            </div>
          </div>
        </div> */}
      </div>

      <div className="container-xl pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <img src="images/white-logo.png" alt="logo active_rise" className='w-24 sm:w-28 md:w-48 h-auto object-contain' />
            </Link>
            <p className="text-gold font-semibold text-sm mb-3">{t('footer.tagline')}</p>
            <p className="text-beige text-sm leading-relaxed mb-7">{t('footer.desc')}</p>
            <div className="flex gap-2.5">
              {[
                { icon: ExternalLink, href: '#' },
                { icon: ExternalLink, href: '#' },
                { icon: MessageCircle, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full border border-gray-500/50 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xs tracking-widest uppercase text-beige mb-5">{t('footer.nav_title')}</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-beige hover:text-gold transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs tracking-widest uppercase text-beige mb-5">{t('footer.services_title')}</h4>
            <ul className="space-y-2.5">
              {services.map((s, i) => (
                <li key={i}>
                  <Link
                    to="/services"
                    className="text-sm text-beige hover:text-gold transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs tracking-widest uppercase text-beige mb-5">{t('footer.contact_title')}</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-gold mt-0.5 shrink-0" />
                <a href="mailto:contact@activerise.com" className="text-sm text-beige hover:text-gold transition-colors">
                  {t('contact.info.email_val')}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-gold mt-0.5 shrink-0" />
                <a href="tel:+0000000" className="text-sm text-beige hover:text-gold transition-colors">
                  {t('contact.info.phone_val')}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-beige">{t('contact.info.address_val')}</span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold text-deep font-bold text-sm px-5 py-2.5 rounded-md hover:bg-gold/90 transition-colors"
            >
              {t('nav.cta')}
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-400 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-beige">
            © {new Date().getFullYear()} ActiveRise. {t('footer.rights')}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-beige hover:text-gold transition-colors">{t('footer.legal')}</a>
            <a href="#" className="text-xs text-beige hover:text-gold transition-colors">{t('footer.privacy')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
