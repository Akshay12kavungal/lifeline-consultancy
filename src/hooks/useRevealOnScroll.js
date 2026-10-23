import { useEffect, useRef, useState } from "react";

// Tracks which sections have scrolled into view (once each).
// Attach with ref={setRef("id")} on a section whose DOM id matches; read visible.id.
export default function useRevealOnScroll() {
  const [visible, setVisible] = useState({});
  const refs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) setVisible(v => ({ ...v, [e.target.id]: true }));
      }),
      { threshold: 0.08 }
    );
    Object.values(refs.current).forEach(r => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  const setRef = (id) => (el) => { refs.current[id] = el; };

  return { visible, setRef };
}
