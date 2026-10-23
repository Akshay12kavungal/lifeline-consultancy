import { useEffect, useRef, useState } from "react";

// Returns whether the page has scrolled past the top, plus a ref whose
// element is scaled horizontally to show how far down the page the reader is.
export default function useScrollProgress(threshold = 12) {
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > threshold);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { scrolled, progressRef };
}
