import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

interface Company {
  name: string;
  logo: string;
}

const companies: Company[] = [
  { name: "Oralise", logo: "images/logo.png" },
  { name: "Oralise", logo: "images/logo.png" },
  { name: "Oralise", logo: "images/logo.png" },
  { name: "Oralise", logo: "images/logo.png" },
  { name: "Oralise", logo: "images/logo.png" },
];

const TrustedCompanies: React.FC = () => {
  const { t } = useTranslation();

  // On double le tableau pour assurer la continuité visuelle parfaite pendant la transition
  const tickerItems = [...companies, ...companies];

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      {/* Conteneur principal centré avec largeur max */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Header i18n */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-[800] tracking-tight text-gold sm:text-4xl">
            {t("partners.title")}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            {t("partners.subtitle")}
          </p>
        </div>

        {/* Zone du Ticker avec masques de fondu (Fade Edges) */}
        <div className="relative w-full overflow-hidden py-8">
          
          {/* Gradients de fondu sur les côtés pour un rendu premium */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Conteneur animé Framer Motion */}
          <div className="flex w-max">
            <motion.div
              className="flex gap-12 pr-12 items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 20, // Ajuste la vitesse ici (plus le chiffre est bas, plus ça va vite)
                repeat: Infinity,
              }}
            
              whileHover={{ animationPlayState: "paused" }} 
              style={{ display: "flex" }}
            >
              {tickerItems.map((company, index) => (
                <div
                  key={index}
                  className="flex w-32 sm:w-40 h-16 items-center justify-center flex-shrink-0 px-4"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TrustedCompanies;