import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, ArrowRight} from 'lucide-react';


function SocialLinks() {
  const socials = [
    { 
      name: 'Facebook', 
      href: 'https://www.facebook.com/share/1DkCHXns2f/', 
      path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
    },
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/activerise.ag?igsh=MXVoMno1Zzh3MmRzaQ==', 
      path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/company/activerise/', 
      path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
    },
    { 
      name: 'TikTok', 
      href: 'https://www.tiktok.com/@activerise.ag?_r=1&_t=ZS-97XaY6sNgrh', 
      path: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.94 1.18 2.27 2 3.74 2.32v3.91c-1.39-.08-2.74-.63-3.83-1.5-.75-.59-1.37-1.35-1.81-2.22V15.5c0 1.9-.62 3.77-1.78 5.23-1.63 2.04-4.22 3.28-6.84 3.24-2.43-.04-4.78-1.15-6.28-3.06C-.12 18.52-.3 15.42.68 13c.96-2.38 3.24-4.05 5.8-4.23.18-.01.36-.01.54-.01h.02c0 1.34-.01 2.68-.01 4.02-.13-.01-.27 0-.4 0-1.28.08-2.52.79-3.18 1.9-.76 1.28-.79 2.96-.08 4.27a4.237 4.237 0 0 0 4.84 2.11c1.24-.34 2.27-1.33 2.68-2.54.19-.57.25-1.16.24-1.76V.02z'
    },
  ];

  return (
    <div className="flex gap-2.5">
      {socials.map(({ name, href, path }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Suivez-nous sur ${name}`}
          className="w-9 h-9 rounded-full border border-yellow-500/40 flex items-center justify-center text-gray-300 hover:border-gold hover:text-gold hover:scale-105 transition-all duration-300"
        >
          <svg 
            fill="orange" 
            viewBox="0 0 24 24" 
            className="w-4 h-4" 
          >
            <path d={path} />
          </svg>
        </a>
      ))}
    </div>
  );
}


export default function Footer() {
  const { t } = useTranslation();

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/services', label: t('nav.services') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const services = [
    t('footer.s1'),
    t('footer.s2'),
    t('footer.s3'),
    t('footer.s4'),
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
            <SocialLinks/>
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
                <a href="mailto:contact@activerise.pro" className="text-sm text-beige hover:text-gold transition-colors">
                  {t('contact.info.email_val')}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-gold mt-0.5 shrink-0" />
                <a href={`tel:${t('contact.info.phone_val')}`} className="text-sm text-beige hover:text-gold transition-colors">
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
              className="inline-flex items-center bg-gold text-deep font-bold text-sm px-5 py-2 rounded-md hover:bg-gold/90 transition-colors"
            >
              {t('nav.cta')}            
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
