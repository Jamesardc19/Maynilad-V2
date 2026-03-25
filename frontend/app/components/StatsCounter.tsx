'use client';

import { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

interface StatsCounterProps {
  stats: Stat[];
}

function CountUpNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const duration = 2000;
            const startTime = performance.now();

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease-out cubic
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(Math.floor(eased * target));

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-2">
            <CountUpNumber target={stat.value} suffix={stat.suffix} />
          </div>
          <div className="text-sm md:text-base font-body text-white/70 uppercase tracking-widest">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
