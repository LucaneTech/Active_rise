import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Types stricts pour les props du composant
interface ContactPopoverProps {
  mainLabel: string;
  whatsappNumber: string; 
  phoneNumber: string;   
  whatsappMessage?: string; 
}

export default function ContactPopover({
  mainLabel,
  whatsappNumber,
  phoneNumber,
  whatsappMessage = "Bonjour, pourrais en savoir plus?."
}: ContactPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Génération des URLs de contact
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const phoneUrl = `tel:${phoneNumber}`;

  // Fermer le popup si on clique à l'extérieur (Bonne pratique UX)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative inline-block text-left">
      
      {/* Bouton Principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="px-6 py-3 bg-transparent border border-white/50 text-white font-medium rounded-md shadow-md transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
      >
        {mainLabel}
      </button>

      {/* Micro Popup (Animer l'entrée/sortie avec Framer Motion) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 bg-white rounded-md shadow-xl border border-gray-100 p-2 z-50 origin-bottom"
          >
            <div className="flex flex-col gap-1" role="menu">
              
              {/* Option WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors font-medium text-sm"
              >
                {/* Icône SVG WhatsApp simplifiée */}
                <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.4.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.66.986 3.288 1.492 4.75 1.493 5.394 0 9.775-4.383 9.778-9.778 0-2.614-1.017-5.071-2.864-6.92C16.415 2.099 13.96 1.081 11.35 1.081 5.955 1.081 1.573 5.461 1.571 10.856c-.001 1.558.418 3.084 1.214 4.43l-.995 3.637 3.733-.979z"/>
                </svg>
                <span>WhatsApp</span>
              </a>

              {/* Option Appel Normal */}
              <a
                href={phoneUrl}
                role="menuitem"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors font-medium text-sm"
              >
                {/* Icône SVG Téléphone */}
                <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span>Appel normal</span>
              </a>

            </div>

            {/* Petite flèche du popover (esthétique) */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-r border-b border-gray-100 -mt-[6px]" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}