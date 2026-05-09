import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/services', label: t('nav.services') },
    { to: '/cases', label: t('nav.cases') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-2xl shadow-xl py-3'
            : 'py-5 bg-white'
        }`}
      >
        <div className="container-xl flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
           <img src="images/logo.png" alt="logo active_rise" className='w-24 sm:w-28 md:w-48 h-auto object-contain' />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-[13px] font-medium transition-colors duration-200 relative group ${
                  isActive(link.to)
                    ? 'text-gold'
                    : 'text-deep '
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ${
                    isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 text-[11px] font-semibold text-deep transition-colors px-3 py-1.5 rounded-md shadow-btn-ghost"
            >
              <Globe size={12} />
              {i18n.language === 'fr' ? 'EN' : 'FR'}
            </button>
            {/* <ThemeSwitcher /> */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gold text-deep font-bold text-[12px] px-5 py-2.5 rounded-md hover:bg-gold/90 transition-all duration-300 tracking-wide"
              >
                {t('nav.cta')}
                <ArrowRight size={13} />
              </Link>
            </motion.div>
          </div>

          {/* Mobile actions */}
          <div className="lg:hidden flex items-center gap-2.5">
            {/* <ThemeSwitcher /> */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-md shadow-btn-ghost border border-gray-700/20"
            >
              {menuOpen
                ? <X size={16} className="text-deep" />
                : <Menu size={16} className="text-deep" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-40 bg-beige pt-24 px-6 lg:hidden overflow-y-auto"
          >
            {/* Decorative circle top-right */}
            <div className="absolute top-16 right-8 w-32 h-32 rounded-md border border-gold/10 pointer-events-none" />
            <div className="absolute top-24 right-16 w-16 h-16 rounded-md border border-gold/15 pointer-events-none" />

            <nav className="flex flex-col gap-1">
              {links.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={link.to}
                    className={`flex items-center justify-between text-xl font-bold py-4 border-b border-deep/6 transition-colors ${
                      isActive(link.to) ? 'text-gold' : 'text-deep'
                    }`}
                  >
                    {link.label}
                    {isActive(link.to) && (
                      <span className="w-1.5 h-1.5 rounded-md bg-gold" />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <button
                onClick={toggleLang}
                className="flex items-center gap-2 text-xs font-semibold text-deep/65"
              >
                <Globe size={14} />
                {i18n.language === 'fr' ? 'Switch to English' : 'Passer en Français'}
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold text-deep font-bold text-sm px-6 py-3.5 rounded-md"
              >
                {t('nav.cta')}
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
