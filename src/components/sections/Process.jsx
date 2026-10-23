import SectionHead from "../ui/SectionHead";
import { STEPS } from "../../data/content";
import "./Process.css";

export default function Process({ visible, setRef }) {
  const v = visible.process ? " in" : "";
  return (
    <section id="process" ref={setRef("process")} className="section section--white">
      <div className="container">
        <div className={`fade-up${v}`}>
          <SectionHead
            eyebrow="How It Works"
            title={<>Simple <span className="accent">4-Step Process</span></>}
          />
        </div>
        <ol className={`process${v}`}>
          {STEPS.map((item, i) => (
            <li key={item.step} className={`step fade-up s${i + 1}${v}`}>
              <div className="step-num" style={{ "--d": `${i * 0.4}s` }}>{item.step}</div>
              <div className="card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
