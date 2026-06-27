import React from "react";

const companies = [
  { name: "Oralise", logo: "images/logo.png" },
  { name: "Oralise", logo: "images/logo.png" },
  { name: "Oralise", logo: "images/logo.png" },
  { name: "Oralise", logo: "images/logo.png" },
  { name: "Oralise", logo: "images/logo.png" },
];

const TrustedCompanies: React.FC = () => {
  // Dupliquer les logos pour créer un effet de boucle continue
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-6 md:py-8">
      <div className="relative overflow-hidden">
        {/* Fade edges - plus prononcé pour un effet plus doux */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Row 1 — animation de marquee fluide */}
        <div className="flex overflow-hidden">
          <div className="flex gap-12 items-center animate-marquee-left whitespace-nowrap">
            {duplicatedCompanies.map((company, index) => (
              <img
                key={index}
                src={company.logo}
                alt={company.name}
                loading="lazy"
                className="h-6 md:h-10 w-auto object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300 flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;