import Logo from "../ui/Logo";
import { SITE, LINKS } from "../../config/site";
import { FOOTER_COLS } from "../../data/content";
import "./Footer.css";

export default function Footer({ scrollTo }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-logo"><Logo /></div>
            <p className="footer-about">
              Helping students move forward with confidence and better educational opportunities across Kerala.
            </p>
            <div className="footer-contact">
              📞{" "}
              <a href={LINKS.tel} className="footer-link">{SITE.phone}</a>
            </div>
            <div className="footer-contact">
              ✉️{" "}
              <a href={LINKS.email} className="footer-link">{SITE.email}</a>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLS.map(col => (
            <div key={col.heading}>
              <h5>{col.heading}</h5>
              {col.links.map(([label, target]) => target
                ? <button key={label} className="footer-link" onClick={() => scrollTo(target)}>{label}</button>
                : <div key={label} className="footer-text">{label}</div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div>
            © 2026 Lifeline Education Consultancy, Nedumangad, Trivandrum, Kerala. All rights reserved.
          </div>
          <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="footer-link">
            {`📸 @${SITE.instagram}`}
          </a>
        </div>
      </div>
    </footer>
  );
}
