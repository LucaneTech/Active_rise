import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function HistoryTimeline() {
  const { t } = useTranslation();

  const timelineData = [
    {
      year: "2019",
      title: t('home.history.steps.2019.title'),
      items: [t('home.history.steps.2019.p1'), t('home.history.steps.2019.p2'), t('home.history.steps.2019.p3')]
    },
    {
      year: "2022",
      title: t('home.history.steps.2022.title'),
      items: [t('home.history.steps.2022.p1'), t('home.history.steps.2022.p2'), t('home.history.steps.2022.p3')]
    },
    {
      year: "2025",
      title: t('home.history.steps.2025.title'),
      items: [t('home.history.steps.2025.p1'), t('home.history.steps.2025.p2'), t('home.history.steps.2025.p3')]
    },
    {
      year: "2026 +",
      title: t('home.history.steps.2026.title'),
      items: [t('home.history.steps.2026.p1'), t('home.history.steps.2026.p2'), t('home.history.steps.2026.p3')]
    }
  ];

  return (
    <section className="py-24 lg:py-36 bg-deep text-white overflow-hidden border-t border-white/5">
      <div className="container-xl flex flex-col lg:flex-row max-w-[1200px] mx-auto px-4 sm:px-8">
        
        {/* En-tête de section */}
        <div className="mb-20 text-center lg:text-left">
          <span className="text-xs font-bold tracking-[0.4em] text-gold uppercase block mb-4">
            {t('home.history.badge')}
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
            {t('home.history.title')}
          </h2>
        </div>

        {/* Conteneur de l'axe vertical */}
        <div className="relative  border-l border-white/10 ml-4 sm:ml-32 pl-8 sm:pl-16 space-y-16 lg:space-y-24">
          
          {timelineData.map((milestone, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Le Jalon de l'axe (Point doré cinétique) */}
              <div className="absolute -left-[37px] sm:-left-[69px] top-1.5 w-4 h-4 rounded-full bg-gold border-2 border-white/20 group-hover:border-gold flex items-center justify-center transition-colors duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-gold transition-colors duration-300" />
              </div>

              {/* Positionnement Absolu de l'année sur grand écran */}
              <div className="hidden sm:block absolute -left-48 top-0 w-28 text-right font-mono text-xl font-bold tracking-tight text-gold group-hover:text-gold transition-colors duration-300">
                {milestone.year}
              </div>

              {/* Bloc de contenu */}
              <div className="space-y-4">
                {/* Année visible uniquement sur Mobile (< sm) */}
                <span className="sm:hidden block font-mono text-sm font-bold text-gold mb-1">
                  {milestone.year}
                </span>

                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white  transition-all duration-300">
                  {milestone.title}
                </h3>

                {/* Liste des descriptifs épurés */}
                <ul className="space-y-2 max-w-xl">
                  {milestone.items.map((item, i) => (
                    <li key={i} className="text-white/80 text-sm sm:text-base font-medium flex items-center gap-3 group-hover:text-white/70 transition-colors duration-300">
                      <span className="w-1 h-1 rounded-full bg-gold/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}