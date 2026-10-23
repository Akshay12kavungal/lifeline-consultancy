import { useState } from "react";
import SectionHead from "../ui/SectionHead";
import { FAQS } from "../../data/content";
import "./FAQ.css";

export default function FAQ({ visible, setRef }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const v = visible.faq ? " in" : "";

  return (
    <section id="faq" ref={setRef("faq")} className="section section--white" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className={`fade-up${v}`}>
          <SectionHead eyebrow="Got Questions?" title="Frequently Asked Questions" />
        </div>
        <div className="faq-wrap">
          {FAQS.map((f, i) => {
            const open = activeFaq === i;
            return (
              <div key={f.q} className={`faq-item fade-up s${i + 1}${v}${open ? " open" : ""}`}>
                <button className="faq-q" onClick={() => setActiveFaq(open ? null : i)} aria-expanded={open} aria-controls={`faq-a-${i}`}>
                  <span>{f.q}</span>
                  <span className="faq-icon">{open ? "−" : "+"}</span>
                </button>
                <div className="faq-a" id={`faq-a-${i}`}>
                  <div><p>{f.a}</p></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
