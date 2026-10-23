import SectionHead from "../ui/SectionHead";
import { PROBLEMS } from "../../data/content";
import "./StudentProblems.css";

export default function StudentProblems({ visible, setRef }) {
  const v = visible.problems ? " in" : "";
  return (
    <section id="problems" ref={setRef("problems")} className="section section--dark">
      <div className="container">
        <div className={`fade-up${v}`}>
          <SectionHead
            eyebrow="We Understand You"
            title="Feeling Stuck In Your Academic Journey?"
            lead="Many students lose confidence because of backlogs, discontinued studies, pressure from family, or uncertainty about their future. At Lifeline, we believe one setback should never decide your future."
            style={{ marginBottom: 44 }}
          />
        </div>
        <div className="chips">
          {PROBLEMS.map((item, i) => (
            <div key={item} className={`chip fade-up s${i + 1}${v}`} style={{ "--i": i }}>{item}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
