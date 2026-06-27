import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// 1. Types stricts pour la maintenance
interface Milestone {
  year: string;
  title: string;
  items: string[];
}

// 2. Animation variants isolées (évite la réévaluation en render)
// const timelineVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (index: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       delay: index * 0.12, // Légèrement accéléré pour une sensation de fluidité
//       ease: [0.16, 1, 0.3, 1],
//     },
//   }),
// };

export default function HistoryTimeline() {
  const { t } = useTranslation();

  // 3. Optimisation Performance : useMemo garantit que le tableau n'est recalculé 
  // que si la langue change, libérant le thread principal.
  const timelineData = useMemo<Milestone[]>(() => {
    const years = ["2019", "2022", "2025", "2026"];
    return years.map((year) => ({
      year: year === "2026" ? "2026 +" : year,
      title: t(`home.history.steps.${year}.title`),
      items: [
        t(`home.history.steps.${year}.p1`),
        t(`home.history.steps.${year}.p2`),
        t(`home.history.steps.${year}.p3`),
      ],
    }));
  }, [t]);

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-deep text-white overflow-hidden" aria-label="Historique de l'entreprise">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Sémantique */}
        <header className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-[0.3em] text-gold uppercase block mb-3">
            {t('home.history.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
            {t('home.history.title')}
          </h2>
        </header>

        {/* Conteneur Timeline principal */}
        <div className="relative isolate">
          
          {/* Ligne verticale : Désormais cachée sur ultra-small screen si besoin, ou parfaitement ancrée */}
          <div 
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-white/5 via-white/20 to-white/5 pointer-events-none" 
            aria-hidden="true"
          />

          <div className="space-y-12 md:space-y-0">
            {timelineData.map((milestone, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.article
                  key={milestone.year}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  // variants={timelineVariants}
                  // will-change-transform force l'accélération matérielle (GPU) sur mobile
                  className={`relative flex flex-col md:flex-row md:items-center will-change-transform ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } md:min-h-[200px]`}
                >
                  
                  {/* Indicateur Visuel (Ronds d'ancrage) - Groupé dans un seul conteneur pour un alignement parfait */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-1 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center w-4 h-4 z-10">
                    <div className="absolute w-7 h-7 rounded-full bg-yellow-500/10 border border-white/10" />
                    <div className="w-3 h-3 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                  </div>

                  {/* Bloc Année */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <time className="font-mono text-3xl sm:text-4xl md:text-5xl font-black text-gold tracking-tight block">
                      {milestone.year}
                    </time>
                  </div>

                  {/* Bloc Contenu */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 mt-2 md:mt-0 ${isEven ? 'md:pl-16 md:text-left' : 'md:pr-16 md:text-right'}`}>
                    <h3 className="text-white text-lg sm:text-xl font-bold mb-3 tracking-wide">
                      {milestone.title}
                    </h3>
                    
                    <ul className={`space-y-2.5 flex flex-col ${!isEven ? 'md:items-end' : 'md:items-start'}`}>
                      {milestone.items.map((item, i) => (
                        <li 
                          key={i} 
                          className={`text-white/70 text-sm sm:text-base leading-relaxed flex items-start gap-2.5 max-w-md ${
                            !isEven ? 'md:flex-row-reverse md:text-right' : 'text-left'
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold/80 mt-2 shrink-0" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </motion.article>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}