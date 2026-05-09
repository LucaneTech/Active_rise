import type { LucideIcon } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

interface Step {
  icon?: LucideIcon;
  number?: string;
  title: string;
  description: string;
}

interface Props {
  badge?: string;
  title: string;
  titleGold?: string;
  steps: Step[];
  dark?: boolean;
}

export default function ProcessSection({ badge, title, titleGold, steps, dark = false }: Props) {
  const bg = dark ? 'bg-deep' : 'bg-beige';
  const titleColor = dark ? 'text-beige' : 'text-deep';
  const cardBg = dark
    ? 'glass-card shadow-[0_2px_20px_rgba(0,0,0,0.18)] hover:shadow-[0_4px_32px_rgba(211,170,42,0.10)] border border-beige/[0.07]'
    : 'bg-white/70 shadow-card hover:shadow-card-hover border border-gray-300 bg-drop-blur-xl';
  const numColor = 'text-gold' ;
  const stepTitleColor ='text-gold';
  const stepDescColor = 'text-slate-500';
 
  return (
    <section className={`${bg} section-padding`}>
      <div className="container-xl">
        <div className="text-center mb-14">
          {badge && (
            <RevealOnScroll delay={0}>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-md mb-5">
                <span className="w-1.5 h-1.5 rounded-md bg-gold" />
                {badge}
              </span>
            </RevealOnScroll>
          )}
          <RevealOnScroll delay={0.1}>
            <h2 className={`text-3xl md:text-4xl font-black tracking-tight ${titleColor}`}>
              {title}{titleGold && <> <span className="text-gold">{titleGold}</span></>}
            </h2>
          </RevealOnScroll>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Horizontal connecting line on desktop */}
          {/* <div className="step-connector-line hidden lg:block" /> */}

          {steps.map((step, i) => (
            <RevealOnScroll key={i} delay={i * 0.09} direction="up">
              <div className={`relative rounded-md p-8 h-full transition-shadow duration-300 overflow-hidden ${cardBg}`}>

                {/* Step number badge — top left */}
                <div className="w-9 h-9 rounded-md bg-gold/12 flex items-center justify-center mb-5 relative z-10">
                  <span className="text-gold font-black text-xs">
                    {step.number || String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Faded large number background */}
                <div className={`absolute top-3 right-4 text-5xl font-black ${numColor} leading-none select-none pointer-events-none`}>
                  {step.number || String(i + 1).padStart(2, '0')}
                </div>

                {step.icon && (
                  <div className="w-10 h-10 rounded-md bg-gold/10 flex items-center justify-center mb-4">
                    <step.icon size={18} className="text-gold" strokeWidth={1.5} />
                  </div>
                )}
                <div className="w-6 h-0.5 bg-gold mb-3" />
                <h3 className={`text-[14px] font-bold mb-2 ${stepTitleColor}`}>{step.title}</h3>
                <p className={`text-[13px] leading-relaxed ${stepDescColor}`}>{step.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
