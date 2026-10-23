import { useState } from "react";
import Logo from "../ui/Logo";
import useScrollProgress from "../../hooks/useScrollProgress";
import { NAV_LINKS } from "../../data/content";
import "./Navbar.css";

export default function Navbar({ activeNav, scrollTo }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrolled, progressRef } = useScrollProgress();

  const go = (id) => {
    setMenuOpen(false);
    scrollTo(id);
  };

  return (
    <nav className={`nav${scrolled || menuOpen ? " scrolled" : ""}`} aria-label="Main">
      <div className="container nav-inner">
        <button className="nav-brand" onClick={() => go("home")} aria-label="Home">
          <Logo />
        </button>

        <div className="nav-links nav-desktop">
          {NAV_LINKS.map(l => (
            <button key={l} className={`nav-link${activeNav === l ? " active" : ""}`} onClick={() => go(l.toLowerCase())}>{l}</button>
          ))}
        </div>

        <button className="btn btn-primary btn-sm nav-desktop" onClick={() => go("contact")}>Free Consultation</button>

        <button className={`menu-btn${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(o => !o)} aria-label="Menu" aria-expanded={menuOpen}>
          {[24, 16, 20].map((w, i) => <span key={i} style={{ width: w }} />)}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map(l => (
            <button key={l} className={`nav-link${activeNav === l ? " active" : ""}`} onClick={() => go(l.toLowerCase())}>{l}</button>
          ))}
          <button className="btn btn-primary btn-block" onClick={() => go("contact")}>Get Free Consultation</button>
        </div>
      )}
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
    </nav>
  );
}
