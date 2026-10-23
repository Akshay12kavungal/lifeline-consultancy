import { useState } from "react";
import { SERVICES, GOOGLE_FORM_ACTION, FIELD_IDS } from "../data/constants";

const CONTACT_ITEMS = [
  { icon:"📍", label:"Address", type:"text", val:"GGHSS Road, opp. PWD Office\nNedumangad, Trivandrum – 695541" },
  { icon:"📞", label:"Phone / WhatsApp", type:"links", links:[{text:"7559095008",href:"tel:7559095008"}] },
  { icon:"✉️", label:"Email", type:"links", links:[{text:"lifelineconsultancy.edu@gmail.com",href:"mailto:lifelineconsultancy.edu@gmail.com"}] },
  { icon:"📸", label:"Instagram", type:"links", links:[{text:"@lifeline.consultancy",href:"https://instagram.com/lifeline.consultancy"}] },
  { icon:"🕐", label:"Working Hours", type:"text", val:"Mon – Sat: 9:00 AM – 6:00 PM" },
];

export default function Contact({ visible, setRef }) {
  const [formData, setFormData] = useState({ name:"", email:"", phone:"", course:"", service:"", message:"" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill required fields");
      return;
    }
    try {
      const body = new URLSearchParams();
      body.append(FIELD_IDS.name, formData.name);
      body.append(FIELD_IDS.phone, formData.phone);
      body.append(FIELD_IDS.email, formData.email);
      body.append(FIELD_IDS.course, formData.course);
      body.append(FIELD_IDS.service, formData.service);
      body.append(FIELD_IDS.message, formData.message);
      await fetch(GOOGLE_FORM_ACTION, { method:"POST", mode:"no-cors", body });
      setSubmitted(true);
      setFormData({ name:"", email:"", phone:"", course:"", service:"", message:"" });
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" ref={setRef("contact")} style={{ padding:"110px 28px",background:"#F4F8FC" }}>
      <div style={{ maxWidth:1200,margin:"0 auto" }}>
        <div className={`fade-up${visible.contact?" in":""}`} style={{ textAlign:"center",marginBottom:70 }}>
          <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:11,letterSpacing:4,color:"#00AEEF",textTransform:"uppercase",marginBottom:16,fontWeight:700 }}>Get In Touch</div>
          <div style={{ width:48,height:3,background:"linear-gradient(90deg,#00AEEF,#0077B6)",margin:"0 auto 22px",borderRadius:2 }}></div>
          <h2 style={{ fontFamily:"'Montserrat',sans-serif",fontSize:"clamp(28px,4vw,48px)",fontWeight:900,color:"#1B2A4A",marginBottom:14 }}>Connect With Lifeline</h2>
          <p style={{ fontFamily:"'Nunito',sans-serif",fontWeight:400,color:"#4A6080",fontSize:15 }}>Our team responds within a few hours. Fill the form or WhatsApp us directly for quick guidance.</p>
        </div>

        <div className="contact-grid" style={{ display:"grid",gridTemplateColumns:"1fr 1.6fr",gap:64 }}>
          {/* Contact Info */}
          <div className={`fade-up${visible.contact?" in":""}`}>
            {CONTACT_ITEMS.map((item,i) => (
              <div key={i} style={{ display:"flex",gap:18,marginBottom:24,paddingBottom:24,borderBottom:i<4?"1px solid #D6EAF8":"none" }}>
                <div style={{ fontSize:22,marginTop:2 }}>{item.icon}</div>
                <div>
                  <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:10,letterSpacing:2.5,textTransform:"uppercase",color:"#00AEEF",marginBottom:8,fontWeight:700 }}>{item.label}</div>
                  {item.type === "links" ? (
                    <div style={{ display:"flex",flexDirection:"column",gap:4 }}>
                      {item.links.map((l,j) => (
                        <a key={j} href={l.href} target={l.href.startsWith("http")?"_blank":"_self"} rel="noopener noreferrer" className="click-link"
                          style={{ fontFamily:"'Nunito',sans-serif",fontSize:14,lineHeight:1.7 }}>
                          {l.text}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div style={{ fontFamily:"'Nunito',sans-serif",fontSize:14,color:"#4A6080",lineHeight:1.7,whiteSpace:"pre-line" }}>{item.val}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className={`fade-up s2${visible.contact?" in":""}`}>
            {submitted ? (
              <div style={{ textAlign:"center",padding:"70px 20px",background:"#fff",border:"1.5px solid #D6EAF8",borderRadius:16,boxShadow:"0 8px 32px rgba(0,174,239,.08)" }}>
                <div style={{ fontSize:56,marginBottom:20 }}>🎓</div>
                <h3 style={{ fontFamily:"'Montserrat',sans-serif",fontSize:28,fontWeight:900,color:"#1B2A4A",marginBottom:14 }}>Enquiry Received!</h3>
                <p style={{ fontFamily:"'Nunito',sans-serif",color:"#4A6080",fontSize:15,lineHeight:1.7 }}>
                  Our team will contact you shortly.<br />
                  You can also WhatsApp us directly at{" "}
                  <a href="https://wa.me/917559095008" target="_blank" rel="noopener noreferrer" className="click-link" style={{ fontWeight:700 }}>7559095008</a>.
                </p>
              </div>
            ) : (
              <div style={{ background:"#fff",border:"1.5px solid #D6EAF8",borderRadius:16,padding:36,display:"flex",flexDirection:"column",gap:16,boxShadow:"0 8px 32px rgba(27,42,74,.06)" }}>
                <div className="form-row" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:16 }}>
                  <input placeholder="Full Name *" value={formData.name} onChange={e => setFormData({...formData,name:e.target.value})} />
                  <input placeholder="Phone Number *" value={formData.phone} onChange={e => setFormData({...formData,phone:e.target.value})} />
                </div>
                <div className="form-row" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:16 }}>
                  <input placeholder="Email Address" type="email" value={formData.email} onChange={e => setFormData({...formData,email:e.target.value})} />
                  <input placeholder="Course Interested (e.g. B.Tech)" value={formData.course} onChange={e => setFormData({...formData,course:e.target.value})} />
                </div>
                <select value={formData.service} onChange={e => setFormData({...formData,service:e.target.value})}>
                  <option value="">Select Service Needed</option>
                  {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                </select>
                <textarea placeholder="Tell us your situation — how can we help you?" rows={4} value={formData.message} onChange={e => setFormData({...formData,message:e.target.value})} style={{ resize:"vertical" }} />
                <button className="blue-btn" onClick={handleSubmit} style={{ alignSelf:"flex-start",marginTop:4 }}>Book Free Consultation →</button>
                <div style={{ fontFamily:"'Nunito',sans-serif",fontSize:12,color:"#4A6080" }}>
                  💬 Or WhatsApp us directly:{" "}
                  <a href="https://wa.me/917559095008" target="_blank" rel="noopener noreferrer" className="click-link" style={{ fontWeight:700 }}>7559095008</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
