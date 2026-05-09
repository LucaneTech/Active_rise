import RevealOnScroll from './RevealOnScroll';

interface TimelineItem {
  year: string;
  event: string;
}

interface Props {
  badge?: string;
  title: string;
  titleGold?: string;
  items: TimelineItem[];
}

export default function Timeline({ badge, title, titleGold, items }: Props) {
  return (
    <section className="section-padding bg-beige dark:bg-deep">
      <div className="container-xl">
        <div className="text-center mb-16">
          {badge && (
            <RevealOnScroll delay={0}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-gold border border-gold/30 px-4 py-2 rounded-full mb-6">
                <span className="w-1 h-1 rounded-full bg-gold" />
                {badge}
              </span>
            </RevealOnScroll>
          )}
          <RevealOnScroll delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-deep dark:text-beige">
              {title}{titleGold && <> <span className="text-gold">{titleGold}</span></>}
            </h2>
          </RevealOnScroll>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gold/20" />
          <div className="space-y-12">
            {items.map((item, i) => (
              <RevealOnScroll key={i} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`flex items-center gap-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <span className="text-3xl font-black text-gold">{item.year}</span>
                  </div>
                  <div className="relative z-10 w-4 h-4 rounded-full bg-gold border-4 border-beige dark:border-deep shrink-0" />
                  <div className="flex-1">
                    <p className="text-deep/70 dark:text-beige/70 text-sm leading-relaxed">{item.event}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
