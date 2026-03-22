import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Home", "Services", "About", "Testimonials", "Contact"];

const SERVICES = [
  {
    icon: "🔄",
    title: "KTU B.Tech Credit Transfer",
    desc: "Lost 1–2 years in B.Tech? We help you recover lost semesters through KTU's official credit transfer process. Available for 2019 batch onwards.",
    tag: "Most Popular",
    color: "#00AEEF",
    highlight: true,
  },
  {
    icon: "📋",
    title: "Backlog Clearance Support",
    desc: "Struggling with backlogs? Our expert team guides you through every step to clear arrears and get back on track without losing more time.",
    tag: "High Demand",
    color: "#0077B6",
  },
  {
    icon: "🏫",
    title: "College Transfer Guidance",
    desc: "Want to move to a better college? We handle the entire KTU inter-college transfer process smoothly and efficiently from start to finish.",
    tag: "Featured",
    color: "#00AEEF",
  },
  {
    icon: "📅",
    title: "Semester Recovery Plan",
    desc: "Don't repeat semesters — transfer smart. We build a personalised academic recovery plan to preserve your academic journey and save your time.",
    tag: "New",
    color: "#0077B6",
  },
  {
    icon: "✅",
    title: "Eligibility Assessment",
    desc: "Not sure if you qualify? We offer a free eligibility check to evaluate your case and advise on the best academic route forward.",
    tag: "Free",
    color: "#00AEEF",
  },
  {
    icon: "💳",
    title: "Flexible EMI Plans",
    desc: "Affordable fees with flexible EMI options so financial constraints never become a barrier to continuing your education.",
    tag: "Flexible",
    color: "#0077B6",
  },
];

const TESTIMONIALS = [
  {
    name: "Arun K.",
    role: "KTU B.Tech Student, 2020 Batch",
    text: "I lost 2 years due to health issues and thought my degree was over. Lifeline helped me transfer credits and continue without starting over. Truly life-changing!",
    initials: "AK",
  },
  {
    name: "Meenu Thomas",
    role: "B.Tech Credit Transfer, 2021",
    text: "I had no idea credit transfer was even possible. The team at Lifeline explained everything clearly and handled all the paperwork. Forever grateful.",
    initials: "MT",
  },
  {
    name: "Vishnu R.",
    role: "KTU Backlog Student",
    text: "Had 6 backlogs and was about to drop out. Lifeline gave me a structured plan and I cleared them all within a year. Highly recommended!",
    initials: "VR",
  },
  {
    name: "Ananya S.",
    role: "College Transfer, 2021",
    text: "The EMI option made it possible for my family. The team was incredibly supportive and my transfer was completed faster than I expected.",
    initials: "AS",
  },
];

const STATS = [
  { value: "800+", label: "Students Helped" },
  { value: "98%", label: "Success Rate" },
  { value: "7+", label: "Years Experience" },
  { value: "EMI", label: "Easy Payment" },
];

const TEAM = [
  { name: "Academic Counsellors", role: "KTU Credit Transfer Experts", exp: "7+ yrs exp", initials: "CT" },
  { name: "Documentation Team", role: "Transfer & Backlog Processing", exp: "End-to-end support", initials: "DT" },
  { name: "Student Advisors", role: "Eligibility & Planning", exp: "Free consultation", initials: "SA" },
];

const WHY_US = [
  { icon: "✅", title: "2019 Batch Onwards", desc: "KTU credit transfer available for 2019 batch and later students. Check your eligibility with us today for free." },
  { icon: "⚡", title: "Fast Processing", desc: "We handle all documentation and follow-ups so your transfer is completed without unnecessary delays." },
  { icon: "🤝", title: "End-to-End Support", desc: "From eligibility check to final approval — we are with you at every single step of the process." },
  { icon: "💰", title: "EMI Available", desc: "Flexible EMI plans mean your education never stops due to financial constraints. Easy and transparent." },
];

function Logo({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="22" y="30" width="20" height="60" fill="#00AEEF" rx="2"/>
      <rect x="22" y="74" width="55" height="16" fill="#00AEEF" rx="2"/>
      <polygon points="60,16 108,34 60,52 12,34" fill="#1B2A4A"/>
      <ellipse cx="60" cy="34" rx="11" ry="6" fill="#14203A"/>
      <line x1="74" y1="34" x2="80" y2="57" stroke="#00AEEF" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="80" cy="60" r="3.5" fill="#00AEEF"/>
    </svg>
  );
}

export default function App() {
  const [activeNav, setActiveNav] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState({});
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", batch: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) setVisible(v => ({ ...v, [e.target.id]: true }));
      }),
      { threshold: 0.08 }
    );
    Object.values(sectionRefs.current).forEach(r => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  const setRef = (id) => (el) => { sectionRefs.current[id] = el; };

  const scrollTo = (id) => {
    setMenuOpen(false);
    setActiveNav(id.charAt(0).toUpperCase() + id.slice(1));
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = () => {
    if (formData.name && formData.phone) setSubmitted(true);
  };

  const faqs = [
    { q: "Who is eligible for KTU B.Tech Credit Transfer?", a: "Students from the 2019 batch onwards are eligible. Whether you lost time due to health issues, personal reasons, or backlogs — we assess your case and guide you through the process. Contact us for a free eligibility check." },
    { q: "How many years can be recovered through credit transfer?", a: "Depending on your case, 1 to 2 years can typically be recovered through the KTU credit transfer process. Reach out to us and we will evaluate your specific situation." },
    { q: "Is EMI available for your services?", a: "Yes! We offer flexible EMI plans so that financial constraints never become a barrier to your education. Our team will work out a payment plan suited to you." },
    { q: "How long does the credit transfer process take?", a: "The timeline varies based on the case, but our team handles all documentation and university follow-ups to make it as fast as possible. We keep you updated at every step." },
    { q: "Do you help with backlog clearance too?", a: "Absolutely. We provide structured backlog clearance guidance alongside credit transfer support, helping you get back on track in the most efficient way possible." },
    { q: "Is the initial consultation really free?", a: "Yes — your first eligibility check and consultation is completely free. No commitments or hidden charges. Just reach out and we will take it from there." },
  ];

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#F4F8FC", color: "#1B2A4A", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Nunito:ital,wght@0,300;0,400;0,600;1,400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .fade-up { opacity: 0; transform: translateY(32px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-up.in { opacity: 1; transform: translateY(0); }
        .s1{transition-delay:.05s}.s2{transition-delay:.15s}.s3{transition-delay:.25s}.s4{transition-delay:.35s}.s5{transition-delay:.45s}.s6{transition-delay:.55s}
        .blue-btn { background: linear-gradient(135deg,#00AEEF,#0077B6); color:#fff; border:none; padding:14px 32px; font-family:'Montserrat',sans-serif; font-weight:800; font-size:12px; letter-spacing:1.5px; text-transform:uppercase; cursor:pointer; border-radius:8px; transition:transform .2s,box-shadow .2s; box-shadow:0 4px 20px rgba(0,174,239,.35); }
        .blue-btn:hover { transform:translateY(-2px); box-shadow:0 8px 30px rgba(0,174,239,.5); }
        .outline-btn { background:transparent; color:#00AEEF; border:2px solid #00AEEF; padding:12px 32px; font-family:'Montserrat',sans-serif; font-weight:800; font-size:12px; letter-spacing:1.5px; text-transform:uppercase; cursor:pointer; border-radius:8px; transition:all .2s; }
        .outline-btn:hover { background:#00AEEF15; transform:translateY(-2px); }
        .service-card { background:#fff; border:1.5px solid #D6EAF8; padding:32px 28px; border-radius:12px; transition:all .3s; cursor:default; position:relative; overflow:hidden; }
        .service-card:hover { border-color:#00AEEF77; transform:translateY(-6px); box-shadow:0 16px 48px rgba(0,174,239,.13); }
        .service-card.highlight { background:linear-gradient(145deg,#1B2A4A,#0D1F3A); border-color:#00AEEF44; }
        .testi-card { background:#fff; border:1px solid #D6EAF8; padding:30px; border-radius:12px; box-shadow:0 4px 20px rgba(27,42,74,.06); }
        .team-card { background:#fff; border:1px solid #D6EAF8; padding:32px 24px; border-radius:12px; text-align:center; transition:border-color .3s,box-shadow .3s; }
        .team-card:hover { border-color:#00AEEF66; box-shadow:0 8px 30px rgba(0,174,239,.1); }
        .why-card { background:#fff; border:1.5px solid #D6EAF8; padding:28px 24px; border-radius:12px; transition:all .3s; }
        .why-card:hover { border-color:#00AEEF66; box-shadow:0 8px 28px rgba(0,174,239,.1); transform:translateY(-4px); }
        .faq-item { border-bottom:1px solid #D6EAF8; }
        input,textarea,select { background:#F4F8FC; border:1.5px solid #D6EAF8; color:#1B2A4A; padding:13px 16px; font-family:'Nunito',sans-serif; font-size:14px; width:100%; border-radius:8px; outline:none; transition:border-color .2s,box-shadow .2s; }
        input:focus,textarea:focus,select:focus { border-color:#00AEEF; box-shadow:0 0 0 3px rgba(0,174,239,.1); background:#fff; }
        select option { background:#fff; }
        .nav-link { font-family:'Montserrat',sans-serif; font-size:12px; letter-spacing:1px; text-transform:uppercase; color:#4A6080; cursor:pointer; background:none; border:none; transition:color .2s; font-weight:700; }
        .nav-link:hover,.nav-link.active { color:#00AEEF; }
        ::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:#F4F8FC}::-webkit-scrollbar-thumb{background:#00AEEF55;border-radius:3px}
        .pulse { animation:pulse 2s infinite; }
        @keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(0,174,239,.4)} 50%{box-shadow:0 0 0 8px rgba(0,174,239,0)} }
        @media(max-width:900px){
          .services-grid{grid-template-columns:repeat(2,1fr)!important}
          .about-grid{grid-template-columns:1fr!important}
          .team-grid{grid-template-columns:1fr!important}
          .why-grid{grid-template-columns:repeat(2,1fr)!important}
          .footer-grid{grid-template-columns:1fr 1fr!important}
        }
        @media(max-width:640px){
          .hero-btns{flex-direction:column!important;align-items:stretch!important}
          .services-grid{grid-template-columns:1fr!important}
          .stats-grid{grid-template-columns:repeat(2,1fr)!important}
          .testi-grid{grid-template-columns:1fr!important}
          .contact-grid{grid-template-columns:1fr!important}
          .form-row{grid-template-columns:1fr!important}
          .why-grid{grid-template-columns:1fr!important}
          .footer-grid{grid-template-columns:1fr!important}
          .nav-desktop{display:none!important}
          .menu-btn{display:flex!important}
          .hero-right{display:none!important}
        }
        @media(min-width:641px){.menu-btn{display:none!important}.mobile-menu{display:none!important}}
      `}</style>

      {/* NAV */}
      <nav style={{ position:"fixed",top:0,left:0,right:0,zIndex:200,background:"rgba(255,255,255,0.97)",backdropFilter:"blur(14px)",borderBottom:"1px solid #D6EAF8",boxShadow:"0 2px 20px rgba(27,42,74,.06)" }}>
        <div style={{ maxWidth:1200,margin:"0 auto",padding:"0 28px",height:72,display:"flex",alignItems:"center",justifyContent:"space-between" }}>
          <div style={{ cursor:"pointer",display:"flex",alignItems:"center",gap:12 }} onClick={() => scrollTo("home")}>
            <Logo size={46} />
            <div>
              <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:18,fontWeight:900,color:"#1B2A4A",letterSpacing:1,lineHeight:1.1 }}>LIFELINE</div>
              <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:10,letterSpacing:3,color:"#00AEEF",textTransform:"uppercase",fontWeight:700 }}>Consultancy</div>
            </div>
          </div>
          <div className="nav-desktop" style={{ display:"flex",gap:36 }}>
            {NAV_LINKS.map(l => (
              <button key={l} className={`nav-link${activeNav===l?" active":""}`} onClick={() => scrollTo(l.toLowerCase())}>{l}</button>
            ))}
          </div>
          <button className="blue-btn nav-desktop" style={{ padding:"10px 22px",fontSize:11 }} onClick={() => scrollTo("contact")}>Check Eligibility</button>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} style={{ background:"none",border:"none",cursor:"pointer",display:"none",flexDirection:"column",gap:5,padding:4 }}>
            {[24,16,20].map((w,i) => <span key={i} style={{ display:"block",width:w,height:2,background:"#00AEEF",borderRadius:2 }}></span>)}
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu" style={{ background:"#fff",borderTop:"1px solid #D6EAF8",padding:"8px 28px 24px" }}>
            {NAV_LINKS.map(l => (
              <div key={l} style={{ borderBottom:"1px solid #EAF3FB" }}>
                <button className="nav-link" style={{ padding:"14px 0",display:"block",width:"100%",textAlign:"left" }} onClick={() => scrollTo(l.toLowerCase())}>{l}</button>
              </div>
            ))}
            <button className="blue-btn" style={{ marginTop:20,width:"100%" }} onClick={() => scrollTo("contact")}>Check Eligibility — Free</button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" style={{ minHeight:"100vh",display:"flex",alignItems:"center",position:"relative",overflow:"hidden",paddingTop:72,background:"linear-gradient(160deg,#EBF5FD 0%,#F4F8FC 50%,#E8F4FB 100%)" }}>
        <div style={{ position:"absolute",top:"8%",right:"4%",width:420,height:420,borderRadius:"50%",background:"radial-gradient(circle,rgba(0,174,239,0.1) 0%,transparent 70%)",pointerEvents:"none" }}></div>
        <div style={{ position:"absolute",bottom:"10%",left:"-5%",width:280,height:280,borderRadius:"50%",background:"radial-gradient(circle,rgba(27,42,74,0.06) 0%,transparent 70%)",pointerEvents:"none" }}></div>
        <div style={{ position:"absolute",top:"18%",right:"12%",width:190,height:190,border:"2px solid rgba(0,174,239,0.15)",borderRadius:"50%",pointerEvents:"none" }}></div>
        <div style={{ position:"absolute",top:"28%",right:"17%",width:95,height:95,border:"2px solid rgba(0,174,239,0.2)",borderRadius:"50%",pointerEvents:"none" }}></div>

        <div style={{ maxWidth:1200,margin:"0 auto",padding:"80px 28px",position:"relative",width:"100%",display:"grid",gridTemplateColumns:"1fr auto",gap:60,alignItems:"center" }}>
          <div>
            {/* Live badge */}
            <div style={{ display:"inline-flex",alignItems:"center",gap:10,background:"rgba(0,174,239,0.1)",border:"1.5px solid rgba(0,174,239,0.3)",borderRadius:30,padding:"8px 18px",marginBottom:28 }}>
              <span className="pulse" style={{ display:"inline-block",width:8,height:8,borderRadius:"50%",background:"#00AEEF",flexShrink:0 }}></span>
              <span style={{ fontFamily:"'Montserrat',sans-serif",fontSize:11,letterSpacing:1.5,color:"#0077B6",fontWeight:700,textTransform:"uppercase" }}>KTU B.Tech Credit Transfer — 2019 Batch Onwards</span>
            </div>

            <h1 style={{ fontFamily:"'Montserrat',sans-serif",fontSize:"clamp(38px,5.5vw,72px)",fontWeight:900,lineHeight:1.08,color:"#1B2A4A",marginBottom:22,maxWidth:680 }}>
              Lost 1–2 Years in<br /><span style={{ color:"#00AEEF" }}>B.Tech?</span><br />Don't Give Up!
            </h1>
            <p style={{ fontFamily:"'Nunito',sans-serif",fontWeight:600,fontSize:17,lineHeight:1.75,color:"#0077B6",maxWidth:540,marginBottom:14 }}>
              Don't waste any more time — your degree is still within reach.
            </p>
            <p style={{ fontFamily:"'Nunito',sans-serif",fontWeight:400,fontSize:16,lineHeight:1.8,color:"#4A6080",maxWidth:520,marginBottom:44 }}>
              Through KTU's official Credit Transfer process, Lifeline Consultancy helps you recover lost semesters and continue your B.Tech without starting over. We help you continue your studies without delay.
            </p>
            <div className="hero-btns" style={{ display:"flex",gap:16,flexWrap:"wrap",marginBottom:48 }}>
              <button className="blue-btn" onClick={() => scrollTo("contact")}>Check My Eligibility — Free</button>
              <button className="outline-btn" onClick={() => scrollTo("services")}>Our Services</button>
            </div>

            {/* Feature pills */}
            <div style={{ display:"flex",gap:0,flexWrap:"wrap",background:"#fff",border:"1.5px solid #D6EAF8",borderRadius:12,overflow:"hidden",maxWidth:580,boxShadow:"0 4px 20px rgba(27,42,74,.07)" }}>
              {[
                { icon:"✅", text:"2019 Batch+" },
                { icon:"📋", text:"Backlog Support" },
                { icon:"🔄", text:"Credit Transfer" },
                { icon:"💳", text:"EMI Available" },
              ].map((item, i) => (
                <div key={i} style={{ flex:"1 1 120px",padding:"16px 10px",textAlign:"center",borderRight:i<3?"1px solid #D6EAF8":"none" }}>
                  <div style={{ fontSize:20,marginBottom:6 }}>{item.icon}</div>
                  <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:11,fontWeight:700,color:"#1B2A4A" }}>{item.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Faded logo right */}
          <div className="hero-right" style={{ display:"flex",flexDirection:"column",alignItems:"center",opacity:0.1,pointerEvents:"none" }}>
            <Logo size={260} />
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background:"linear-gradient(135deg,#1B2A4A,#0D1F3A)",padding:"52px 28px" }}>
        <div style={{ maxWidth:1200,margin:"0 auto" }}>
          <div className="stats-grid" style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:0,textAlign:"center" }}>
            {STATS.map((s,i) => (
              <div key={i} style={{ padding:"12px 8px",borderRight:i<3?"1px solid rgba(0,174,239,0.2)":"none" }}>
                <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:42,fontWeight:900,color:"#00AEEF",lineHeight:1.1 }}>{s.value}</div>
                <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:11,letterSpacing:2,textTransform:"uppercase",color:"rgba(255,255,255,0.55)",marginTop:6,fontWeight:600 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" ref={setRef("services")} style={{ padding:"110px 28px",background:"#F4F8FC" }}>
        <div style={{ maxWidth:1200,margin:"0 auto" }}>
          <div className={`fade-up${visible.services?" in":""}`} style={{ textAlign:"center",marginBottom:70 }}>
            <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:11,letterSpacing:4,color:"#00AEEF",textTransform:"uppercase",marginBottom:16,fontWeight:700 }}>What We Offer</div>
            <div style={{ width:48,height:3,background:"linear-gradient(90deg,#00AEEF,#0077B6)",margin:"0 auto 22px",borderRadius:2 }}></div>
            <h2 style={{ fontFamily:"'Montserrat',sans-serif",fontSize:"clamp(28px,4vw,48px)",fontWeight:900,color:"#1B2A4A",marginBottom:16 }}>Our Services</h2>
            <p style={{ fontFamily:"'Nunito',sans-serif",fontWeight:400,fontSize:15,color:"#4A6080",maxWidth:480,margin:"0 auto" }}>Specialised guidance for KTU B.Tech students — from credit transfer to backlog clearance and beyond.</p>
          </div>
          <div className="services-grid" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:22 }}>
            {SERVICES.map((s,i) => (
              <div key={i} className={`service-card${s.highlight?" highlight":""} fade-up s${i+1}${visible.services?" in":""}`}>
                {s.highlight && (
                  <div style={{ position:"absolute",top:16,right:16,background:"#00AEEF",color:"#fff",fontFamily:"'Montserrat',sans-serif",fontSize:9,fontWeight:800,letterSpacing:1.5,textTransform:"uppercase",padding:"4px 10px",borderRadius:20 }}>⭐ Top Service</div>
                )}
                <div style={{ fontSize:34,marginBottom:14 }}>{s.icon}</div>
                <div style={{ display:"inline-block",fontFamily:"'Montserrat',sans-serif",fontSize:9,letterSpacing:1.5,color:s.highlight?"#00AEEF":s.color,border:`1.5px solid ${s.highlight?"#00AEEF55":s.color+"55"}`,padding:"3px 12px",borderRadius:20,marginBottom:14,textTransform:"uppercase",fontWeight:700,background:s.highlight?"rgba(0,174,239,0.1)":`${s.color}0D` }}>{s.tag}</div>
                <h3 style={{ fontFamily:"'Montserrat',sans-serif",fontSize:19,fontWeight:800,color:s.highlight?"#fff":"#1B2A4A",marginBottom:12,lineHeight:1.3 }}>{s.title}</h3>
                <p style={{ fontFamily:"'Nunito',sans-serif",fontWeight:400,fontSize:14,lineHeight:1.85,color:s.highlight?"rgba(255,255,255,0.65)":"#4A6080",marginBottom:20 }}>{s.desc}</p>
                <button onClick={() => scrollTo("contact")} style={{ background:"none",border:"none",color:s.highlight?"#00AEEF":s.color,fontFamily:"'Montserrat',sans-serif",fontSize:11,letterSpacing:1.5,textTransform:"uppercase",cursor:"pointer",padding:0,display:"flex",alignItems:"center",gap:8,fontWeight:800 }}>
                  Enquire Now →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ padding:"90px 28px",background:"#fff" }}>
        <div style={{ maxWidth:1200,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:60 }}>
            <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:11,letterSpacing:4,color:"#00AEEF",textTransform:"uppercase",marginBottom:14,fontWeight:700 }}>Why Choose Us</div>
            <div style={{ width:48,height:3,background:"linear-gradient(90deg,#00AEEF,#0077B6)",margin:"0 auto 20px",borderRadius:2 }}></div>
            <h2 style={{ fontFamily:"'Montserrat',sans-serif",fontSize:"clamp(26px,3.5vw,42px)",fontWeight:900,color:"#1B2A4A" }}>
              KTU B.Tech Credit Transfer <span style={{ color:"#00AEEF" }}>Made Simple</span>
            </h2>
          </div>
          <div className="why-grid" style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20,marginBottom:52 }}>
            {WHY_US.map((w,i) => (
              <div key={i} className="why-card">
                <div style={{ fontSize:32,marginBottom:14 }}>{w.icon}</div>
                <h3 style={{ fontFamily:"'Montserrat',sans-serif",fontSize:16,fontWeight:800,color:"#1B2A4A",marginBottom:10 }}>{w.title}</h3>
                <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:13,lineHeight:1.8,color:"#4A6080" }}>{w.desc}</p>
              </div>
            ))}
          </div>

          {/* Banner strip */}
          <div style={{ background:"linear-gradient(135deg,#1B2A4A,#0D1F3A)",borderRadius:16,padding:"40px 48px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:24 }}>
            <div>
              <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:22,fontWeight:900,color:"#fff",marginBottom:8 }}>
                Don't Repeat Semesters — <span style={{ color:"#00AEEF" }}>Transfer Smart</span>
              </div>
              <div style={{ fontFamily:"'Nunito',sans-serif",fontSize:14,color:"rgba(255,255,255,0.6)" }}>
                Preserve your academic journey with expert help. We help you continue your studies without delay.
              </div>
            </div>
            <button className="blue-btn" style={{ flexShrink:0,whiteSpace:"nowrap" }} onClick={() => scrollTo("contact")}>
              DM Us to Check Eligibility
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" ref={setRef("about")} style={{ padding:"110px 28px",background:"#F4F8FC" }}>
        <div style={{ maxWidth:1200,margin:"0 auto" }}>
          <div className="about-grid" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"center" }}>
            <div className={`fade-up${visible.about?" in":""}`}>
              <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:11,letterSpacing:4,color:"#00AEEF",textTransform:"uppercase",marginBottom:16,fontWeight:700 }}>About Us</div>
              <div style={{ width:48,height:3,background:"linear-gradient(90deg,#00AEEF,#0077B6)",marginBottom:24,borderRadius:2 }}></div>
              <h2 style={{ fontFamily:"'Montserrat',sans-serif",fontSize:"clamp(26px,3.5vw,44px)",fontWeight:900,color:"#1B2A4A",marginBottom:24,lineHeight:1.2 }}>
                Trivandrum's Trusted<br /><span style={{ color:"#00AEEF" }}>KTU Academic</span><br />Support Experts
              </h2>
              <p style={{ fontFamily:"'Nunito',sans-serif",fontWeight:400,fontSize:15,lineHeight:1.9,color:"#4A6080",marginBottom:16 }}>
                Lifeline Consultancy, based in Nedumangad, Trivandrum, is Kerala's trusted name for KTU B.Tech academic support. With 7+ years of experience and 800+ students helped, we specialise in credit transfer, backlog clearance, and college transfers.
              </p>
              <p style={{ fontFamily:"'Nunito',sans-serif",fontWeight:400,fontSize:15,lineHeight:1.9,color:"#4A6080",marginBottom:36 }}>
                We believe no student should lose their future over lost semesters. Our expert team handles every step — from eligibility assessment to final approval — ensuring you continue your academic journey without unnecessary delays.
              </p>
              <div style={{ display:"flex",gap:40,marginBottom:36,flexWrap:"wrap" }}>
                {[["800+","Students Helped"],["7+","Years Experience"],["98%","Success Rate"]].map(([v,l],i) => (
                  <div key={i}>
                    <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:34,fontWeight:900,color:"#00AEEF" }}>{v}</div>
                    <div style={{ fontFamily:"'Nunito',sans-serif",fontSize:13,color:"#4A6080",marginTop:4 }}>{l}</div>
                  </div>
                ))}
              </div>
              <button className="blue-btn" onClick={() => scrollTo("contact")}>Talk to Our Experts</button>
            </div>
            <div className={`fade-up s2${visible.about?" in":""}`}>
              <div style={{ background:"linear-gradient(135deg,#EBF5FD,#F4F8FC)",border:"1.5px solid #D6EAF8",borderRadius:16,padding:40 }}>
                {[
                  { label:"Credit Transfer Success Rate", val:98 },
                  { label:"Backlog Clearance Rate", val:94 },
                  { label:"Student Satisfaction Score", val:99 },
                  { label:"On-Time Case Processing", val:96 },
                ].map((item,i) => (
                  <div key={i} style={{ marginBottom:i<3?28:0 }}>
                    <div style={{ display:"flex",justifyContent:"space-between",marginBottom:10 }}>
                      <span style={{ fontFamily:"'Nunito',sans-serif",fontSize:13,color:"#4A6080",fontWeight:600 }}>{item.label}</span>
                      <span style={{ fontFamily:"'Montserrat',sans-serif",fontSize:14,color:"#00AEEF",fontWeight:800 }}>{item.val}%</span>
                    </div>
                    <div style={{ background:"#D6EAF8",height:6,borderRadius:3 }}>
                      <div style={{ background:"linear-gradient(90deg,#00AEEF,#0077B6)",height:6,borderRadius:3,width:`${visible.about?item.val:0}%`,transition:"width 1.2s ease" }}></div>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop:32,borderTop:"1px solid #D6EAF8",paddingTop:24 }}>
                  <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:13,color:"#4A6080",marginBottom:8 }}>📍 Nedumangad, Trivandrum – 695541</div>
                  <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:13,color:"#4A6080" }}>📞 7559095008 · 9526245008</div>
                </div>
              </div>
            </div>
          </div>

          {/* TEAM */}
          <div style={{ marginTop:80 }}>
            <div className={`fade-up${visible.about?" in":""}`} style={{ textAlign:"center",marginBottom:48 }}>
              <h3 style={{ fontFamily:"'Montserrat',sans-serif",fontSize:32,fontWeight:900,color:"#1B2A4A" }}>How We Help You</h3>
            </div>
            <div className="team-grid" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:22 }}>
              {TEAM.map((t,i) => (
                <div key={i} className={`team-card fade-up s${i+1}${visible.about?" in":""}`}>
                  <div style={{ width:68,height:68,borderRadius:"50%",background:"linear-gradient(135deg,#00AEEF22,#0077B622)",border:"2px solid #00AEEF44",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px",fontFamily:"'Montserrat',sans-serif",fontSize:18,fontWeight:800,color:"#00AEEF" }}>{t.initials}</div>
                  <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:17,fontWeight:800,color:"#1B2A4A",marginBottom:6 }}>{t.name}</div>
                  <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:11,color:"#00AEEF",letterSpacing:1,marginBottom:4,fontWeight:700 }}>{t.role}</div>
                  <div style={{ fontFamily:"'Nunito',sans-serif",fontSize:13,color:"#4A6080" }}>{t.exp}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" ref={setRef("testimonials")} style={{ padding:"110px 28px",background:"#fff" }}>
        <div style={{ maxWidth:1200,margin:"0 auto" }}>
          <div className={`fade-up${visible.testimonials?" in":""}`} style={{ textAlign:"center",marginBottom:70 }}>
            <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:11,letterSpacing:4,color:"#00AEEF",textTransform:"uppercase",marginBottom:16,fontWeight:700 }}>Student Stories</div>
            <div style={{ width:48,height:3,background:"linear-gradient(90deg,#00AEEF,#0077B6)",margin:"0 auto 22px",borderRadius:2 }}></div>
            <h2 style={{ fontFamily:"'Montserrat',sans-serif",fontSize:"clamp(28px,4vw,48px)",fontWeight:900,color:"#1B2A4A" }}>800+ Students Trust Us</h2>
          </div>
          <div className="testi-grid" style={{ display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:22 }}>
            {TESTIMONIALS.map((t,i) => (
              <div key={i} className={`testi-card fade-up s${i+1}${visible.testimonials?" in":""}`}>
                <div style={{ fontFamily:"Georgia,serif",fontSize:56,color:"#00AEEF33",lineHeight:.8,marginBottom:16 }}>"</div>
                <p style={{ fontFamily:"'Nunito',sans-serif",fontWeight:400,fontSize:15,lineHeight:1.85,color:"#4A6080",marginBottom:24,fontStyle:"italic" }}>{t.text}</p>
                <div style={{ display:"flex",alignItems:"center",gap:14,borderTop:"1px solid #D6EAF8",paddingTop:20 }}>
                  <div style={{ width:46,height:46,borderRadius:"50%",background:"linear-gradient(135deg,#00AEEF22,#0077B622)",border:"2px solid #00AEEF44",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Montserrat',sans-serif",fontSize:13,fontWeight:800,color:"#00AEEF",flexShrink:0 }}>{t.initials}</div>
                  <div>
                    <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:14,fontWeight:800,color:"#1B2A4A" }}>{t.name}</div>
                    <div style={{ fontFamily:"'Nunito',sans-serif",fontSize:12,color:"#4A6080",marginTop:3 }}>{t.role}</div>
                  </div>
                  <div style={{ marginLeft:"auto",color:"#00AEEF",letterSpacing:2 }}>★★★★★</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding:"80px 28px",background:"#F4F8FC" }}>
        <div style={{ maxWidth:760,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:56 }}>
            <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:11,letterSpacing:4,color:"#00AEEF",textTransform:"uppercase",marginBottom:16,fontWeight:700 }}>Got Questions?</div>
            <div style={{ width:48,height:3,background:"linear-gradient(90deg,#00AEEF,#0077B6)",margin:"0 auto 22px",borderRadius:2 }}></div>
            <h2 style={{ fontFamily:"'Montserrat',sans-serif",fontSize:"clamp(26px,3.5vw,40px)",fontWeight:900,color:"#1B2A4A" }}>Frequently Asked</h2>
          </div>
          {faqs.map((f,i) => (
            <div key={i} className="faq-item">
              <button onClick={() => setActiveFaq(activeFaq===i?null:i)} style={{ width:"100%",background:"none",border:"none",color:"#1B2A4A",fontFamily:"'Montserrat',sans-serif",fontSize:14,fontWeight:700,cursor:"pointer",padding:"20px 0",textAlign:"left",display:"flex",justifyContent:"space-between",alignItems:"center",gap:16 }}>
                <span>{f.q}</span>
                <span style={{ color:"#00AEEF",fontSize:22,lineHeight:1,flexShrink:0,fontWeight:400 }}>{activeFaq===i?"−":"+"}</span>
              </button>
              {activeFaq===i && (
                <div style={{ fontFamily:"'Nunito',sans-serif",fontWeight:400,fontSize:14,lineHeight:1.85,color:"#4A6080",paddingBottom:20 }}>{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ padding:"80px 28px",background:"linear-gradient(135deg,#1B2A4A,#0D1F3A)",position:"relative",overflow:"hidden" }}>
        <div style={{ position:"absolute",top:-60,right:-60,width:300,height:300,borderRadius:"50%",background:"rgba(0,174,239,0.08)",pointerEvents:"none" }}></div>
        <div style={{ position:"absolute",bottom:-40,left:-40,width:200,height:200,borderRadius:"50%",background:"rgba(0,174,239,0.05)",pointerEvents:"none" }}></div>
        <div style={{ maxWidth:700,margin:"0 auto",textAlign:"center",position:"relative" }}>
          <h2 style={{ fontFamily:"'Montserrat',sans-serif",fontSize:"clamp(26px,4vw,44px)",fontWeight:900,color:"#fff",marginBottom:20 }}>
            Don't Give Up on Your B.Tech Degree.
          </h2>
          <p style={{ fontFamily:"'Nunito',sans-serif",fontWeight:400,fontSize:16,color:"rgba(255,255,255,0.65)",lineHeight:1.8,marginBottom:36 }}>
            Join 800+ KTU students who continued their degree with Lifeline's credit transfer support. Your first consultation is completely free.
          </p>
          <button className="blue-btn" style={{ fontSize:13,padding:"16px 40px",background:"linear-gradient(135deg,#00AEEF,#0096D6)" }} onClick={() => scrollTo("contact")}>
            Enquire Now — It's Free →
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" ref={setRef("contact")} style={{ padding:"110px 28px",background:"#F4F8FC" }}>
        <div style={{ maxWidth:1200,margin:"0 auto" }}>
          <div className={`fade-up${visible.contact?" in":""}`} style={{ textAlign:"center",marginBottom:70 }}>
            <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:11,letterSpacing:4,color:"#00AEEF",textTransform:"uppercase",marginBottom:16,fontWeight:700 }}>Get In Touch</div>
            <div style={{ width:48,height:3,background:"linear-gradient(90deg,#00AEEF,#0077B6)",margin:"0 auto 22px",borderRadius:2 }}></div>
            <h2 style={{ fontFamily:"'Montserrat',sans-serif",fontSize:"clamp(28px,4vw,48px)",fontWeight:900,color:"#1B2A4A",marginBottom:14 }}>Check Your Eligibility — Free</h2>
            <p style={{ fontFamily:"'Nunito',sans-serif",fontWeight:400,color:"#4A6080",fontSize:15 }}>Our team responds within a few hours. Fill the form or WhatsApp us directly.</p>
          </div>
          <div className="contact-grid" style={{ display:"grid",gridTemplateColumns:"1fr 1.6fr",gap:64 }}>
            <div className={`fade-up${visible.contact?" in":""}`}>
              {[
                { icon:"📍",label:"Address",val:"GGHSS Road, opp. PWD Office\nNedumangad, Trivandrum – 695541" },
                { icon:"📞",label:"Phone / WhatsApp",val:"7559095008\n9526245008" },
                { icon:"✉️",label:"Email",val:"lifelineconsultancy.edu@gmail.com" },
                { icon:"📸",label:"Instagram",val:"@lifeline.consultancy" },
              ].map((item,i) => (
                <div key={i} style={{ display:"flex",gap:18,marginBottom:28,paddingBottom:28,borderBottom:i<3?"1px solid #D6EAF8":"none" }}>
                  <div style={{ fontSize:22,marginTop:2 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:10,letterSpacing:2.5,textTransform:"uppercase",color:"#00AEEF",marginBottom:8,fontWeight:700 }}>{item.label}</div>
                    <div style={{ fontFamily:"'Nunito',sans-serif",fontSize:14,color:"#4A6080",lineHeight:1.7,whiteSpace:"pre-line" }}>{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className={`fade-up s2${visible.contact?" in":""}`}>
              {submitted ? (
                <div style={{ textAlign:"center",padding:"70px 20px",background:"#fff",border:"1.5px solid #D6EAF8",borderRadius:16,boxShadow:"0 8px 32px rgba(0,174,239,.08)" }}>
                  <div style={{ fontSize:56,marginBottom:20 }}>🎓</div>
                  <h3 style={{ fontFamily:"'Montserrat',sans-serif",fontSize:28,fontWeight:900,color:"#1B2A4A",marginBottom:14 }}>Enquiry Received!</h3>
                  <p style={{ fontFamily:"'Nunito',sans-serif",color:"#4A6080",fontSize:15,lineHeight:1.7 }}>Our team will contact you shortly.<br />You can also WhatsApp us directly at <strong style={{ color:"#00AEEF" }}>7559095008</strong>.</p>
                </div>
              ) : (
                <div style={{ background:"#fff",border:"1.5px solid #D6EAF8",borderRadius:16,padding:36,display:"flex",flexDirection:"column",gap:16,boxShadow:"0 8px 32px rgba(27,42,74,.06)" }}>
                  <div className="form-row" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:16 }}>
                    <input placeholder="Full Name *" value={formData.name} onChange={e => setFormData({...formData,name:e.target.value})} />
                    <input placeholder="Phone / WhatsApp *" value={formData.phone} onChange={e => setFormData({...formData,phone:e.target.value})} />
                  </div>
                  <div className="form-row" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:16 }}>
                    <input placeholder="Email Address" type="email" value={formData.email} onChange={e => setFormData({...formData,email:e.target.value})} />
                    <input placeholder="KTU Batch Year (e.g. 2020)" value={formData.batch} onChange={e => setFormData({...formData,batch:e.target.value})} />
                  </div>
                  <select value={formData.service} onChange={e => setFormData({...formData,service:e.target.value})}>
                    <option value="">Select Service Needed</option>
                    {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                  </select>
                  <textarea placeholder="Tell us your situation — how many years lost, any backlogs, etc." rows={4} value={formData.message} onChange={e => setFormData({...formData,message:e.target.value})} style={{ resize:"vertical" }} />
                  <button className="blue-btn" onClick={handleSubmit} style={{ alignSelf:"flex-start",marginTop:4 }}>Submit Enquiry →</button>
                  <div style={{ fontFamily:"'Nunito',sans-serif",fontSize:12,color:"#4A6080" }}>💬 Or WhatsApp us directly: <strong style={{ color:"#00AEEF" }}>7559095008</strong></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background:"#1B2A4A",borderTop:"1px solid rgba(0,174,239,0.2)",padding:"56px 28px 32px" }}>
        <div style={{ maxWidth:1200,margin:"0 auto" }}>
          <div className="footer-grid" style={{ display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:40,marginBottom:48 }}>
            <div>
              <div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:16 }}>
                <Logo size={40} />
                <div>
                  <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:16,fontWeight:900,color:"#fff",letterSpacing:1 }}>LIFELINE</div>
                  <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:9,letterSpacing:3,color:"#00AEEF",textTransform:"uppercase",fontWeight:700 }}>Consultancy</div>
                </div>
              </div>
              <p style={{ fontFamily:"'Nunito',sans-serif",fontWeight:400,fontSize:13,color:"rgba(255,255,255,0.5)",lineHeight:1.8,maxWidth:260,marginBottom:16 }}>Pathway to Success — Kerala's trusted KTU B.Tech credit transfer and academic support experts in Trivandrum.</p>
              <div style={{ fontFamily:"'Nunito',sans-serif",fontSize:13,color:"rgba(255,255,255,0.4)",marginBottom:6 }}>📞 7559095008 / 9526245008</div>
              <div style={{ fontFamily:"'Nunito',sans-serif",fontSize:13,color:"rgba(255,255,255,0.4)" }}>✉️ lifelineconsultancy.edu@gmail.com</div>
            </div>
            {[
              { heading:"Services", links:["KTU Credit Transfer","Backlog Support","College Transfer","Semester Recovery","EMI Plans"] },
              { heading:"Company", links:["About Us","Our Team","Instagram","Contact Us"] },
              { heading:"Legal", links:["Privacy Policy","Terms of Service","Refund Policy","Cookie Policy"] },
            ].map((col,i) => (
              <div key={i}>
                <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:11,letterSpacing:2,textTransform:"uppercase",color:"#00AEEF",marginBottom:20,fontWeight:700 }}>{col.heading}</div>
                {col.links.map(l => (
                  <div key={l} style={{ fontFamily:"'Nunito',sans-serif",fontSize:13,color:"rgba(255,255,255,0.45)",marginBottom:12,cursor:"pointer",transition:"color .2s" }}
                    onMouseEnter={e=>e.target.style.color="rgba(255,255,255,0.8)"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.45)"}>{l}</div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop:"1px solid rgba(0,174,239,0.15)",paddingTop:24,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12 }}>
            <div style={{ fontFamily:"'Nunito',sans-serif",fontSize:12,color:"rgba(255,255,255,0.3)" }}>© 2026 Lifeline Consultancy, Nedumangad, Trivandrum, Kerala. All rights reserved.</div>
            <div style={{ fontFamily:"'Nunito',sans-serif",fontSize:12,color:"rgba(255,255,255,0.3)" }}>📸 @lifeline.consultancy</div>
          </div>
        </div>
      </footer>
    </div>
  );
}