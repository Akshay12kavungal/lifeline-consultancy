import SectionHead from "../ui/SectionHead";
import { WHY_US } from "../../data/content";
import "./WhyUs.css";

export default function WhyUs({ visible, setRef }) {
  const v = visible.why ? " in" : "";
  return (
    <section id="why" ref={setRef("why")} className="section section--tint">
      <div className="container">
        <div className={`fade-up${v}`}>
          <SectionHead
            eyebrow="Why Choose Us"
            title={<>Why Students <span className="accent">Trust Lifeline</span></>}
          />
        </div>
        <div className="why-grid">
          {WHY_US.map((w, i) => (
            <div key={w.title} className={`card fade-up s${i + 1}${v}`}>
              <div className="emoji-tile">{w.icon}</div>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
        <div className={`banner fade-up${v}`}>
          <div className="banner-title">
            Don't Let Backlogs Stop Your Dream. <span>Restart Today.</span>
          </div>
          <div className="banner-text">
            Guiding students towards a better academic future. Better Guidance. Better Direction. Better Future.
          </div>
        </div>
      </div>
    </section>
  );
}
