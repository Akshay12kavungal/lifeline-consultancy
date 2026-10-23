import { useState } from "react";
import { SITE, LINKS } from "../../config/site";
import { SERVICES } from "../../data/content";
import { submitEnquiry } from "../../lib/submitEnquiry";

const EMPTY = { name: "", email: "", phone: "", course: "", service: "", message: "" };

export default function ContactForm() {
  const [formData, setFormData] = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) => setFormData({ ...formData, [key]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill required fields");
      return;
    }
    try {
      await submitEnquiry(formData);
      setSubmitted(true);
      setFormData(EMPTY);
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="form-card success-card">
        <div className="success-icon">🎓</div>
        <h3>Enquiry Received!</h3>
        <p>
          Our team will contact you shortly.<br />
          You can also WhatsApp us directly at{" "}
          <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="link">{SITE.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-row">
        <input placeholder="Full Name *" aria-label="Full Name" autoComplete="name" value={formData.name} onChange={update("name")} />
        <input placeholder="Phone Number *" aria-label="Phone Number" type="tel" autoComplete="tel" value={formData.phone} onChange={update("phone")} />
      </div>
      <div className="form-row">
        <input placeholder="Email Address" aria-label="Email Address" type="email" autoComplete="email" value={formData.email} onChange={update("email")} />
        <input placeholder="Course Interested (e.g. B.Tech)" aria-label="Course Interested" value={formData.course} onChange={update("course")} />
      </div>
      <select aria-label="Service Needed" value={formData.service} onChange={update("service")}>
        <option value="">Select Service Needed</option>
        {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
      </select>
      <textarea placeholder="Tell us your situation — how can we help you?" aria-label="Your situation" rows={4} value={formData.message} onChange={update("message")} />
      <button type="submit" className="btn btn-primary btn-block">Book Free Consultation →</button>
      <div className="form-note">
        💬 Or WhatsApp us directly:{" "}
        <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="link">{SITE.phone}</a>
      </div>
    </form>
  );
}
