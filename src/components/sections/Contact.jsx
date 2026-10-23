import SectionHead from "../ui/SectionHead";
import ContactForm from "./ContactForm";
import { CONTACT_ITEMS } from "../../data/content";
import "./Contact.css";

export default function Contact({ visible, setRef }) {
  const v = visible.contact ? " in" : "";
  return (
    <section id="contact" ref={setRef("contact")} className="section section--tint">
      <div className="container">
        <div className={`fade-up${v}`}>
          <SectionHead
            eyebrow="Get In Touch"
            title="Connect With Lifeline"
            lead="Our team responds within a few hours. Fill the form or WhatsApp us directly for quick guidance."
          />
        </div>

        <div className="contact-grid">
          {/* Contact details */}
          <div className={`contact-list fade-up${v}`}>
            {CONTACT_ITEMS.map(item => (
              <div key={item.label} className="contact-item">
                <div className="emoji-tile">{item.icon}</div>
                <div>
                  <div className="contact-label">{item.label}</div>
                  <div className="contact-value">
                    {item.href
                      ? <a href={item.href} target={item.href.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer" className="link">{item.text}</a>
                      : item.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`fade-up s2${v}`}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
