import Logo from "../ui/Logo";
import { LINKS } from "../../config/site";
import { HERO_TRUST } from "../../data/content";
import "./Hero.css";

export default function Hero({ scrollTo }) {
  return (
    <section id="home" className="hero">
      <span className="hero-blob hero-blob--1" aria-hidden="true" />
      <span className="hero-blob hero-blob--2" aria-hidden="true" />
      <span className="hero-blob hero-blob--3" aria-hidden="true" />
      <div className="container hero-grid">
        <div>
          <span className="eyebrow hero-badge rise">
            <span className="pulse-dot" />B.Tech Credit Transfer & Academic Support — Kerala
          </span>

          <h1 className="rise" style={{ "--d": ".1s" }}>
            Your Dream Degree<br />Deserves A<br /><span className="accent">Second Chance.</span>
          </h1>

          <p className="hero-intro rise" style={{ "--d": ".2s" }}>
            Helping students with B.Tech Credit Transfer, Admission Guidance, Academic Support & Career Direction across Kerala.
          </p>
          <p className="hero-text rise" style={{ "--d": ".28s" }}>
            We understand the pressure students face due to backlogs, academic gaps, and transfer issues. Lifeline Education Consultancy provides personalized guidance to help you continue your education without giving up on your dreams.
          </p>

          <div className="hero-btns rise" style={{ "--d": ".36s" }}>
            <button className="btn btn-primary" onClick={() => scrollTo("contact")}>Get Free Consultation</button>
            <a href={LINKS.tel} className="btn btn-ghost">Call Us</a>
          </div>

          <div className="trust-strip rise" style={{ "--d": ".44s" }}>
            {HERO_TRUST.map(text => (
              <div key={text} className="trust-item">
                <div className="trust-check">✔</div>
                <div>{text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual rise" style={{ "--d": ".3s" }} aria-hidden="true">
          <span className="hero-ring hero-ring--1" />
          <span className="hero-ring hero-ring--2" />
          <span className="hero-shape hero-shape--1" />
          <span className="hero-shape hero-shape--2" />
          <span className="hero-shape hero-shape--3" />
          <div className="hero-logo-card">
            <Logo />
          </div>
        </div>
      </div>
    </section>
  );
}
