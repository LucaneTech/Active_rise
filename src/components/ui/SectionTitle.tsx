import RevealOnScroll from './RevealOnScroll';

interface Props {
  badge?: string;
  title: string;
  titleGold?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionTitle({ badge, title, titleGold, subtitle, align = 'center', light = false }: Props) {
  const centerClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  const textColor = light ? 'text-beige' : 'text-deep';
  const subColor = light ? 'text-beige' : 'text-deep/65';

  return (
    <div className={`flex flex-col gap-3.5 ${centerClass}`}>
      {badge && (
        <RevealOnScroll delay={0}>
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold shadow-badge px-4 py-1.5 rounded-md">
            {/* Small decorative circle */}
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex w-full h-full rounded-md bg-gold opacity-40 animate-ping" style={{ animationDuration: '2.4s' }} />
              <span className="relative w-1.5 h-1.5 rounded-md bg-gold" />
            </span>
            {badge}
          </span>
        </RevealOnScroll>
      )}
      <RevealOnScroll delay={0.1}>
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.08] ${textColor}`}>
          {title}
          {titleGold && (
            <>
              {' '}
              <span className="text-gold">{titleGold}</span>
            </>
          )}
        </h2>
      </RevealOnScroll>
      {subtitle && (
        <RevealOnScroll delay={0.2}>
          <p className={`text-base max-w-xl leading-relaxed ${subColor} ${align === 'center' ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        </RevealOnScroll>
      )}
    </div>
  );
}
