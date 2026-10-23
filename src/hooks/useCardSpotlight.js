import { useEffect } from "react";

// Feeds the pointer position into --mx/--my on the hovered .card (used by the spotlight in ui.css).
export default function useCardSpotlight() {
  useEffect(() => {
    const onMove = (e) => {
      const card = e.target.closest?.(".card");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);
}
