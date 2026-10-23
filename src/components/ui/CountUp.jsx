import { useEffect, useRef, useState } from "react";

// Animates the leading number of a value like "500+" when it scrolls into view.
// Non-numeric values ("Trusted", "Kerala") render unchanged.
export default function CountUp({ value, duration = 1400 }) {
  const match = /^(\d+)(.*)$/.exec(value);
  const ref = useRef(null);
  const [n, setN] = useState(match ? 0 : null);

  useEffect(() => {
    if (!match) return;
    const target = Number(match[1]);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(target);
      return;
    }
    let raf;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - start) / duration);
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  return <span ref={ref}>{match ? `${n}${match[2]}` : value}</span>;
}
