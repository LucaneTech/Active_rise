import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X , Globe } from 'lucide-react';

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

  useEffect(() => { 
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const links = [
    { to: '/', label: t('nav.home'), id: '01' },
    { to: '/about', label: t('nav.about'), id: '02' },
    { to: '/services', label: t('nav.services'), id: '03' },
    { to: '/cases', label: t('nav.cases'), id: '04' },
    { to: '/contact', label: t('nav.contact'), id: '05' },
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
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 text-[11px] font-semibold text-deep transition-colors px-3 py-1.5 rounded-md shadow-btn-ghost"
            >
              <Globe size={12} />
              {i18n.language === 'fr' ? 'EN' : 'FR'}
            </button>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gold text-deep font-bold text-[12px] px-5 py-2.5 rounded-md hover:bg-gold/90 transition-all duration-300 tracking-wide"
              >
                {t('nav.cta')}
              </Link>
            </motion.div>
          </div>

          {/* Mobile actions */}
          <div className="lg:hidden flex items-center gap-2.5 z-50 relative">
             <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 text-[11px] font-semibold text-deep transition-colors px-3 py-1.5 rounded-md shadow-btn-ghost bg-white/80 backdrop-blur-md"
            >
              <Globe size={12} />
              {i18n.language === 'fr' ? 'EN' : 'FR'}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-md bg-white/80 backdrop-blur-md shadow-btn-ghost border border-gray-700/20 transition-transform active:scale-95"
            >
              {menuOpen
                ? <X size={16} className="text-deep" />
                : <Menu size={16} className="text-deep" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ─── REFONTE UNIQUE DU MENU MOBILE EXTRA-PREMIUM ─── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0B0F19] pt-32 px-6 sm:px-12 pb-10 lg:hidden flex flex-col justify-between overflow-hidden"
          >
            {/* MOTIFS DE FORMES CIRCULAIRES PLEINES EN FOND */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              {/* Grand cercle d'accentuation or flouté en haut à droite */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1], x: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-gold/20 to-transparent blur-3xl"
              />
              {/* Cercle plein or opaque au centre gauche */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 -left-12 w-24 h-24 rounded-full bg-gold/10"
              />
              {/* Cercle plein sombre texturé en bas à droite */}
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-16 right-12 w-48 h-48 rounded-full bg-white/[0.02] border border-white/5"
              />
            </div>

            {/* NAVIGATION TEXTUELLE ASYMÉTRIQUE */}
            <nav className="flex flex-col gap-1.5 relative z-10 my-auto">
              {links.map((link, i) => {
                const current = isActive(link.to);
                return (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -30, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
                    transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={link.to}
                      className="flex items-baseline gap-4 py-3 group relative"
                    >
                      {/* Index numérique discret */}
                      <span className={`font-mono text-xs tracking-wider ${current ? 'text-gold' : 'text-white/20'}`}>
                        {link.id}
                      </span>
                      
                      {/* Libellé géant */}
                      <span className={`text-2xl sm:text-4xl font-black uppercase tracking-tight transition-all duration-300 ${
                        current 
                          ? 'text-gold pl-2' 
                          : 'text-white/60 hover:text-white'
                      }`}>
                        {link.label}
                      </span>

                      {/* Indicateur d'activation au design pur */}
                      {current && (
                        <motion.span 
                          layoutId="mobileActiveDot"
                          className="w-2 h-2 rounded-full bg-yellow-500 ml-2"
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* ACTION BASSE ACCÉLÉRÉE */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.3 }}
              className="mt-auto pt-6  relative z-10"
            >
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-between gap-2 bg-gold text-deep font-black text-xs uppercase tracking-[0.2em] px-6 py-5 rounded-md shadow-lg"
              >
                <span className='text-white'>{t('nav.cta')}</span>
              </Link>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}