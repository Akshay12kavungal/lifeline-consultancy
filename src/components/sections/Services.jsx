import SectionHead from "../ui/SectionHead";
import { SERVICES } from "../../data/content";
import "./Services.css";

export default function Services({ visible, setRef }) {
  const v = visible.services ? " in" : "";
  return (
    <section id="services" ref={setRef("services")} className="section section--tint">
      <div className="container">
        <div className={`fade-up${v}`}>
          <SectionHead
            eyebrow="What We Offer"
            title="Our Services"
            lead="Specialised guidance for students — from B.Tech credit transfer to admission support, counselling, and career guidance."
          />
        </div>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <article key={s.title} className={`card${s.highlight ? " service-card--featured" : ""} fade-up s${i + 1}${v}`}>
              {s.highlight && <div className="top-badge">⭐ Top Service</div>}
              <div className="emoji-tile">{s.icon}</div>
              <div className="tag">{s.tag}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
