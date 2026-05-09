import { useEffect, useRef, useState } from 'react';
import RevealOnScroll from './RevealOnScroll';

interface Stat {
  value: string;
  label: string;
}

interface Props {
  badge?: string;
  title: string;
  titleGold?: string;
  stats: Stat[];
  dark?: boolean;
}

function AnimatedNumber({ value, isVisible }: { value: string; isVisible: boolean }) {
  const [display, setDisplay] = useState('0');
  const numMatch = value.match(/[\d.]+/);
  const num = numMatch ? parseFloat(numMatch[0]) : 0;
  const prefix = value.replace(/[\d.]+.*/, '');
  const suffix = value.replace(/^[^0-9]*[\d.]+/, '');

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = num % 1 === 0 ? Math.round(eased * num) : (eased * num).toFixed(1);
      setDisplay(String(current));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, num]);

  return <span>{prefix}{display}{suffix}</span>;
}

export default function StatsSection({ badge, title, titleGold, stats, dark = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const bg = dark ? 'bg-deep' : 'bg-beige dark:bg-deep/50';
  const titleColor = dark ? 'text-beige' : 'text-deep dark:text-beige';

  return (
    <section ref={ref} className={`${bg} section-padding relative overflow-hidden`}>
      {/* Background decorative circles */}
      
      <img src="images/icon.png" alt="icon active rise" className='absolute top-0 -left-20 opacity-40 w-72 h-72'/>
      <img src="images/black_icon.png" alt="icon active rise" className='absolute bottom-0 -right-20 w-64 h-64 z-0 opacity-50'/>

      <div className="container-xl relative z-10">
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <RevealOnScroll key={i} delay={i * 0.1} direction="up">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black text-gold mb-2.5 tabular-nums">
                  <AnimatedNumber value={s.value} isVisible={isVisible} />
                </div>
                <p className="text-[13px] font-medium text-deep">{s.label}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
