import { useEffect, useState } from "react";

const toLabel = (id) => id.charAt(0).toUpperCase() + id.slice(1);

// Returns the nav label ("Home", "About"…) of the section in the middle of the viewport.
export default function useActiveSection(ids) {
  const [active, setActive] = useState(toLabel(ids[0]));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) setActive(toLabel(e.target.id));
      }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [ids]);

  const activate = (id) => setActive(toLabel(id));

  return [active, activate];
}
