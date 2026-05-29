import { useState, useEffect, useRef } from "react";
import logo from "./assets/IMG_9898.png";

const NAV_LINKS = ["Home", "Services", "About", "Contact"];

const SERVICES = [
  {
    icon: "🔄",
    title: "B.Tech Credit Transfer",
    desc: "Students facing backlogs, discontinuation, or academic difficulties can continue their engineering education through proper credit transfer guidance and admission support.",
    tag: "Most Popular",
    color: "#00AEEF",
    highlight: true,
  },
  {
    icon: "🏫",
    title: "Admission Guidance",
    desc: "Complete assistance for choosing suitable colleges, courses, and educational pathways based on student goals and eligibility.",
    tag: "Featured",
    color: "#0077B6",
  },
  {
    icon: "🎯",
    title: "Academic Counselling",
    desc: "One-on-one counselling sessions to help students understand career options, academic opportunities, and future growth paths.",
    tag: "Personalized",
    color: "#00AEEF",
  },
  {
    icon: "📅",
    title: "Career Support",
    desc: "Guidance for higher studies, skill development, and career-focused educational planning to help students move forward with confidence.",
    tag: "New",
    color: "#0077B6",
  },
  {
    icon: "📋",
    title: "Documentation Assistance",
    desc: "Support with admission procedures, documentation, application processing, and student coordination from start to finish.",
    tag: "End-to-End",
    color: "#00AEEF",
  },
];

const STATS = [
  { value: "500+", label: "Student Enquiries" },
  { value: "100+", label: "Guidance Sessions" },
  { value: "Trusted", label: "Educational Support" },
  { value: "Student", label: "Centered Approach" },
];

const TEAM = [
  { name: "Academic Counsellors", role: "B.Tech Credit Transfer Experts", exp: "Personalized guidance", initials: "AC" },
  { name: "Documentation Team", role: "Transfer & Admission Processing", exp: "End-to-end support", initials: "DT" },
  { name: "Student Advisors", role: "Eligibility & Career Planning", exp: "Free consultation", initials: "SA" },
];

const WHY_US = [
  { icon: "✅", title: "Personalized Student Guidance", desc: "Every student gets a tailored plan based on their academic situation, goals, and eligibility." },
  { icon: "💬", title: "Supportive & Friendly Counselling", desc: "Our counsellors are approachable, patient, and genuinely invested in your success." },
  { icon: "⚡", title: "Simplified Admission Process", desc: "We handle all documentation and follow-ups so your journey is completed without unnecessary delays." },
  { icon: "🤝", title: "Transparent Communication", desc: "We keep you informed at every step — no hidden charges, no surprises, just honest guidance." },
  { icon: "📞", title: "Quick Response Team", desc: "Our team responds promptly so students and parents always feel supported and heard." },
  { icon: "🎯", title: "Focused on Student Success", desc: "From eligibility check to final admission — we are with you at every single step of the process." },
  { icon: "🗺️", title: "Guidance Across Kerala", desc: "We assist students from across Kerala with reliable educational assistance and counselling." },
  { icon: "📚", title: "Reliable Educational Assistance", desc: "Trusted by hundreds of students and families for honest, result-oriented academic support." },
];

function LogoIcon({ width = 200 }) {
  return (
    <img
      src={logo}
      alt="Lifeline Consultancy"
      style={{
        width: `${width}px`,
        height: "300px",
        objectFit: "contain",
        display: "block",
        marginTop: "10px", // upper space
      }}
    />
  );
}

function Logo({ width = 200 }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "72px",
        paddingTop: "10px", // extra top spacing
      }}
    >
      <LogoIcon width={width} />
    </div>
  );
}
export default function App() {
  const [activeNav, setActiveNav] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState({});
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", course: "", service: "", message: "" });
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

  const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/1FAIpQLSd-1H_wOkFzoEsWRSHPSSoJfaaxkMpOWzyFQQRn5EA9Q9uaMQ/formResponse";

  const FIELD_IDS = {
    name: "entry.2005620554",
    phone: "entry.1045781291",
    email: "entry.1166974658",
    course: "entry.1065046570",
    service: "entry.839337160",
    message: "entry.568520424",
  };

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
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: body,
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", course: "", service: "", message: "" });
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const faqs = [
    { q: "Who can apply for B.Tech credit transfer?", a: "Students with backlogs, discontinued studies, or students looking for academic continuation support can contact our team for guidance. We evaluate your case and advise on the best academic route forward." },
    { q: "Do you provide counselling support?", a: "Yes. We provide personalized counselling sessions based on the student's academic condition and future goals. Our advisors help you understand available opportunities and make confident decisions." },
    { q: "How long does the process take?", a: "The process depends on academic profile, documentation, and institution procedures. Our team handles all documentation and university follow-ups to make it as fast as possible." },
    { q: "Can parents contact directly?", a: "Yes. Parents and guardians can directly connect with our counselling team. We encourage family involvement and keep everyone informed throughout the process." },
    { q: "Is online consultation available?", a: "Yes. We provide phone and online consultation support so students across Kerala can access our guidance conveniently." },
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
        .click-link { color:#00AEEF; text-decoration:none; }
        .click-link:hover { text-decoration:underline; }
        .footer-link { color:rgba(255,255,255,0.55); text-decoration:none; }
        .footer-link:hover { color:rgba(255,255,255,0.85); text-decoration:underline; }
        .about-link { color:#0077B6; text-decoration:none; }
        .about-link:hover { text-decoration:underline; }
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
          <div style={{ cursor:"pointer" }} onClick={() => scrollTo("home")}>
            <Logo size={46} />
          </div>
          <div className="nav-desktop" style={{ display:"flex",gap:36 }}>
            {NAV_LINKS.map(l => (
              <button key={l} className={`nav-link${activeNav===l?" active":""}`} onClick={() => scrollTo(l.toLowerCase())}>{l}</button>
            ))}
          </div>
          <button className="blue-btn nav-desktop" style={{ padding:"10px 22px",fontSize:11 }} onClick={() => scrollTo("contact")}>Free Consultation</button>
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
            <button className="blue-btn" style={{ marginTop:20,width:"100%" }} onClick={() => scrollTo("contact")}>Get Free Consultation</button>
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
            <div style={{ display:"inline-flex",alignItems:"center",gap:10,background:"rgba(0,174,239,0.1)",border:"1.5px solid rgba(0,174,239,0.3)",borderRadius:30,padding:"8px 18px",marginBottom:28 }}>
              <span className="pulse" style={{ display:"inline-block",width:8,height:8,borderRadius:"50%",background:"#00AEEF",flexShrink:0 }}></span>
              <span style={{ fontFamily:"'Montserrat',sans-serif",fontSize:11,letterSpacing:1.5,color:"#0077B6",fontWeight:700,textTransform:"uppercase" }}>B.Tech Credit Transfer & Academic Support — Kerala</span>
            </div>

            <h1 style={{ fontFamily:"'Montserrat',sans-serif",fontSize:"clamp(34px,5vw,66px)",fontWeight:900,lineHeight:1.1,color:"#1B2A4A",marginBottom:22,maxWidth:680 }}>
              Your Dream Degree<br />Deserves A<br /><span style={{ color:"#00AEEF" }}>Second Chance.</span>
            </h1>

            <p style={{ fontFamily:"'Nunito',sans-serif",fontWeight:600,fontSize:17,lineHeight:1.75,color:"#0077B6",maxWidth:560,marginBottom:14 }}>
              Helping students with B.Tech Credit Transfer, Admission Guidance, Academic Support & Career Direction across Kerala.
            </p>
            <p style={{ fontFamily:"'Nunito',sans-serif",fontWeight:400,fontSize:16,lineHeight:1.8,color:"#4A6080",maxWidth:520,marginBottom:44 }}>
              We understand the pressure students face due to backlogs, academic gaps, and transfer issues. Lifeline Education Consultancy provides personalized guidance to help you continue your education without giving up on your dreams.
            </p>

            <div className="hero-btns" style={{ display:"flex",gap:16,flexWrap:"wrap",marginBottom:48 }}>
              <button className="blue-btn" onClick={() => scrollTo("contact")}>Get Free Consultation</button>
              <a href="tel:7559095008" style={{ textDecoration:"none" }}>
                <button className="outline-btn">Call Us</button>
              </a>
            </div>

            <div style={{ display:"flex",gap:0,flexWrap:"wrap",background:"#fff",border:"1.5px solid #D6EAF8",borderRadius:12,overflow:"hidden",maxWidth:620,boxShadow:"0 4px 20px rgba(27,42,74,.07)" }}>
              {[
                { icon:"✔", text:"Trusted Student Support" },
                { icon:"✔", text:"Personalized Guidance" },
                { icon:"✔", text:"Quick Admission Help" },
                { icon:"✔", text:"Student-Friendly Process" },
              ].map((item, i) => (
                <div key={i} style={{ flex:"1 1 120px",padding:"16px 10px",textAlign:"center",borderRight:i<3?"1px solid #D6EAF8":"none" }}>
                  <div style={{ fontSize:18,marginBottom:6,color:"#00AEEF" }}>{item.icon}</div>
                  <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:10,fontWeight:700,color:"#1B2A4A" }}>{item.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero right — large logo watermark */}
          <div className="hero-right" style={{ display:"flex",flexDirection:"column",alignItems:"center",opacity:0.07,pointerEvents:"none" }}>
            <LogoIcon size={280} />
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background:"linear-gradient(135deg,#1B2A4A,#0D1F3A)",padding:"52px 28px" }}>
        <div style={{ maxWidth:1200,margin:"0 auto" }}>
          <div className="stats-grid" style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:0,textAlign:"center" }}>
            {STATS.map((s,i) => (
              <div key={i} style={{ padding:"12px 8px",borderRight:i<3?"1px solid rgba(0,174,239,0.2)":"none" }}>
                <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:38,fontWeight:900,color:"#00AEEF",lineHeight:1.1 }}>{s.value}</div>
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
            <p style={{ fontFamily:"'Nunito',sans-serif",fontWeight:400,fontSize:15,color:"#4A6080",maxWidth:520,margin:"0 auto" }}>Specialised guidance for students — from B.Tech credit transfer to admission support, counselling, and career guidance.</p>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT PROBLEMS SECTION */}
      <section style={{ padding:"90px 28px",background:"#1B2A4A",position:"relative",overflow:"hidden" }}>
        <div style={{ position:"absolute",top:-80,right:-80,width:320,height:320,borderRadius:"50%",background:"rgba(0,174,239,0.07)",pointerEvents:"none" }}></div>
        <div style={{ maxWidth:1100,margin:"0 auto",textAlign:"center" }}>
          <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:11,letterSpacing:4,color:"#00AEEF",textTransform:"uppercase",marginBottom:16,fontWeight:700 }}>We Understand You</div>
          <div style={{ width:48,height:3,background:"linear-gradient(90deg,#00AEEF,#0077B6)",margin:"0 auto 22px",borderRadius:2 }}></div>
          <h2 style={{ fontFamily:"'Montserrat',sans-serif",fontSize:"clamp(24px,3.5vw,42px)",fontWeight:900,color:"#fff",marginBottom:20 }}>
            Feeling Stuck In Your Academic Journey?
          </h2>
          <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:16,color:"rgba(255,255,255,0.65)",lineHeight:1.8,maxWidth:620,margin:"0 auto 44px" }}>
            Many students lose confidence because of backlogs, discontinued studies, pressure from family, or uncertainty about their future. At Lifeline, we believe one setback should never decide your future.
          </p>
          <div style={{ display:"flex",flexWrap:"wrap",gap:14,justifyContent:"center",marginBottom:44 }}>
            {["Too Many Backlogs?","Lost Academic Year?","Confused About Next Step?","Want To Continue B.Tech?","Need Expert Guidance?"].map((item,i) => (
              <div key={i} style={{ background:"rgba(0,174,239,0.12)",border:"1.5px solid rgba(0,174,239,0.3)",borderRadius:30,padding:"10px 22px",fontFamily:"'Montserrat',sans-serif",fontSize:12,fontWeight:700,color:"#00AEEF",letterSpacing:0.5 }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section style={{ padding:"90px 28px",background:"#fff" }}>
        <div style={{ maxWidth:1100,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:60 }}>
            <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:11,letterSpacing:4,color:"#00AEEF",textTransform:"uppercase",marginBottom:16,fontWeight:700 }}>How It Works</div>
            <div style={{ width:48,height:3,background:"linear-gradient(90deg,#00AEEF,#0077B6)",margin:"0 auto 22px",borderRadius:2 }}></div>
            <h2 style={{ fontFamily:"'Montserrat',sans-serif",fontSize:"clamp(26px,3.5vw,42px)",fontWeight:900,color:"#1B2A4A" }}>Simple <span style={{ color:"#00AEEF" }}>4-Step Process</span></h2>
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:24 }} className="why-grid">
            {[
              { step:"01",title:"Contact Our Team",desc:"Speak with our educational counsellors and explain your academic situation." },
              { step:"02",title:"Profile Evaluation",desc:"Our experts analyze your eligibility, academic status, and available opportunities." },
              { step:"03",title:"Guidance & Documentation",desc:"Receive complete support for choosing the right path and preparing necessary documents." },
              { step:"04",title:"Admission Support",desc:"Get end-to-end assistance until the process is completed successfully." },
            ].map((item,i) => (
              <div key={i} className="why-card" style={{ textAlign:"center" }}>
                <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:36,fontWeight:900,color:"rgba(0,174,239,0.2)",marginBottom:10 }}>{item.step}</div>
                <h3 style={{ fontFamily:"'Montserrat',sans-serif",fontSize:16,fontWeight:800,color:"#1B2A4A",marginBottom:10 }}>{item.title}</h3>
                <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:13,lineHeight:1.8,color:"#4A6080" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ padding:"90px 28px",background:"#F4F8FC" }}>
        <div style={{ maxWidth:1200,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:60 }}>
            <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:11,letterSpacing:4,color:"#00AEEF",textTransform:"uppercase",marginBottom:14,fontWeight:700 }}>Why Choose Us</div>
            <div style={{ width:48,height:3,background:"linear-gradient(90deg,#00AEEF,#0077B6)",margin:"0 auto 20px",borderRadius:2 }}></div>
            <h2 style={{ fontFamily:"'Montserrat',sans-serif",fontSize:"clamp(26px,3.5vw,42px)",fontWeight:900,color:"#1B2A4A" }}>
              Why Students <span style={{ color:"#00AEEF" }}>Trust Lifeline</span>
            </h2>
          </div>
          <div className="why-grid" style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20,marginBottom:52 }}>
            {WHY_US.map((w,i) => (
              <div key={i} className="why-card">
                <div style={{ fontSize:28,marginBottom:14 }}>{w.icon}</div>
                <h3 style={{ fontFamily:"'Montserrat',sans-serif",fontSize:15,fontWeight:800,color:"#1B2A4A",marginBottom:10 }}>{w.title}</h3>
                <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:13,lineHeight:1.8,color:"#4A6080" }}>{w.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ background:"linear-gradient(135deg,#1B2A4A,#0D1F3A)",borderRadius:16,padding:"40px 48px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:24 }}>
            <div>
              <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:22,fontWeight:900,color:"#fff",marginBottom:8 }}>
                Don't Let Backlogs Stop Your Dream. <span style={{ color:"#00AEEF" }}>Restart Today.</span>
              </div>
              <div style={{ fontFamily:"'Nunito',sans-serif",fontSize:14,color:"rgba(255,255,255,0.6)" }}>
                Guiding students towards a better academic future. Better Guidance. Better Direction. Better Future.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" ref={setRef("about")} style={{ padding:"110px 28px",background:"#fff" }}>
        <div style={{ maxWidth:1200,margin:"0 auto" }}>
          <div className="about-grid" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"center" }}>
            <div className={`fade-up${visible.about?" in":""}`}>
              <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:11,letterSpacing:4,color:"#00AEEF",textTransform:"uppercase",marginBottom:16,fontWeight:700 }}>About Us</div>
              <div style={{ width:48,height:3,background:"linear-gradient(90deg,#00AEEF,#0077B6)",marginBottom:24,borderRadius:2 }}></div>
              <h2 style={{ fontFamily:"'Montserrat',sans-serif",fontSize:"clamp(26px,3.5vw,44px)",fontWeight:900,color:"#1B2A4A",marginBottom:24,lineHeight:1.2 }}>
                About Lifeline<br /><span style={{ color:"#00AEEF" }}>Education</span><br />Consultancy
              </h2>
              <p style={{ fontFamily:"'Nunito',sans-serif",fontWeight:400,fontSize:15,lineHeight:1.9,color:"#4A6080",marginBottom:16 }}>
                Lifeline Education Consultancy was created with one mission — to help students continue their education without giving up on their dreams.
              </p>
              <p style={{ fontFamily:"'Nunito',sans-serif",fontWeight:400,fontSize:15,lineHeight:1.9,color:"#4A6080",marginBottom:16 }}>
                We understand the pressure students face due to backlogs, academic gaps, transfer issues, career confusion, or university-related challenges. Our expert team provides personalized guidance for B.Tech credit transfer, admission assistance, educational counselling, and academic support.
              </p>
              <p style={{ fontFamily:"'Nunito',sans-serif",fontWeight:400,fontSize:15,lineHeight:1.9,color:"#4A6080",marginBottom:36 }}>
                With a student-first approach, we help candidates explore the right academic opportunities and make confident decisions for a better future.
              </p>
              <div style={{ display:"flex",gap:40,marginBottom:36,flexWrap:"wrap" }}>
                {[["500+","Student Enquiries"],["100+","Guidance Sessions"],["Kerala","Wide Support"]].map(([v,l],i) => (
                  <div key={i}>
                    <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:34,fontWeight:900,color:"#00AEEF" }}>{v}</div>
                    <div style={{ fontFamily:"'Nunito',sans-serif",fontSize:13,color:"#4A6080",marginTop:4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`fade-up s2${visible.about?" in":""}`}>
              <div style={{ background:"linear-gradient(135deg,#EBF5FD,#F4F8FC)",border:"1.5px solid #D6EAF8",borderRadius:16,padding:40 }}>
                <div style={{ marginBottom:28 }}>
                  <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:13,fontWeight:800,color:"#1B2A4A",marginBottom:10,display:"flex",alignItems:"center",gap:8 }}>
                    <span style={{ color:"#00AEEF",fontSize:18 }}>🎯</span> Our Vision
                  </div>
                  <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:14,lineHeight:1.8,color:"#4A6080" }}>
                    To become Kerala's most trusted educational consultancy for students seeking a second opportunity to complete their academic journey.
                  </p>
                </div>
                <div style={{ borderTop:"1px solid #D6EAF8",paddingTop:28,marginBottom:28 }}>
                  <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:13,fontWeight:800,color:"#1B2A4A",marginBottom:10,display:"flex",alignItems:"center",gap:8 }}>
                    <span style={{ color:"#00AEEF",fontSize:18 }}>🚀</span> Our Mission
                  </div>
                  <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:14,lineHeight:1.8,color:"#4A6080" }}>
                    To provide honest guidance, simplified processes, and reliable educational support that helps students move forward confidently.
                  </p>
                </div>
                {[
                  { label:"Student Satisfaction Score", val:99 },
                  { label:"Successful Guidance Sessions", val:94 },
                  { label:"On-Time Case Processing", val:96 },
                ].map((item,i) => (
                  <div key={i} style={{ marginBottom:i<2?20:0 }}>
                    <div style={{ display:"flex",justifyContent:"space-between",marginBottom:8 }}>
                      <span style={{ fontFamily:"'Nunito',sans-serif",fontSize:13,color:"#4A6080",fontWeight:600 }}>{item.label}</span>
                      <span style={{ fontFamily:"'Montserrat',sans-serif",fontSize:14,color:"#00AEEF",fontWeight:800 }}>{item.val}%</span>
                    </div>
                    <div style={{ background:"#D6EAF8",height:6,borderRadius:3 }}>
                      <div style={{ background:"linear-gradient(90deg,#00AEEF,#0077B6)",height:6,borderRadius:3,width:`${visible.about?item.val:0}%`,transition:"width 1.2s ease" }}></div>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop:28,borderTop:"1px solid #D6EAF8",paddingTop:20 }}>
                  <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:13,color:"#4A6080",marginBottom:8 }}>📍 Nedumangad, Trivandrum – 695541</div>
                  <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:13,color:"#4A6080" }}>
                    📞{" "}
                    <a href="tel:7559095008" className="about-link">7559095008</a>
                  </div>
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

      {/* FAQ */}
      <section style={{ padding:"80px 28px",background:"#fff" }}>
        <div style={{ maxWidth:760,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:56 }}>
            <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:11,letterSpacing:4,color:"#00AEEF",textTransform:"uppercase",marginBottom:16,fontWeight:700 }}>Got Questions?</div>
            <div style={{ width:48,height:3,background:"linear-gradient(90deg,#00AEEF,#0077B6)",margin:"0 auto 22px",borderRadius:2 }}></div>
            <h2 style={{ fontFamily:"'Montserrat',sans-serif",fontSize:"clamp(26px,3.5vw,40px)",fontWeight:900,color:"#1B2A4A" }}>Frequently Asked Questions</h2>
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
            Your Academic Journey Starts Again Here.
          </h2>
          <p style={{ fontFamily:"'Nunito',sans-serif",fontWeight:400,fontSize:16,color:"rgba(255,255,255,0.65)",lineHeight:1.8,marginBottom:36 }}>
            Restart your engineering journey today. Your first consultation is completely free — talk to our expert team and discover the right academic path for you.
          </p>
          <button className="blue-btn" style={{ fontSize:13,padding:"16px 40px",background:"linear-gradient(135deg,#00AEEF,#0096D6)" }} onClick={() => scrollTo("contact")}>
            Get Free Consultation →
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" ref={setRef("contact")} style={{ padding:"110px 28px",background:"#F4F8FC" }}>
        <div style={{ maxWidth:1200,margin:"0 auto" }}>
          <div className={`fade-up${visible.contact?" in":""}`} style={{ textAlign:"center",marginBottom:70 }}>
            <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:11,letterSpacing:4,color:"#00AEEF",textTransform:"uppercase",marginBottom:16,fontWeight:700 }}>Get In Touch</div>
            <div style={{ width:48,height:3,background:"linear-gradient(90deg,#00AEEF,#0077B6)",margin:"0 auto 22px",borderRadius:2 }}></div>
            <h2 style={{ fontFamily:"'Montserrat',sans-serif",fontSize:"clamp(28px,4vw,48px)",fontWeight:900,color:"#1B2A4A",marginBottom:14 }}>Connect With Lifeline</h2>
            <p style={{ fontFamily:"'Nunito',sans-serif",fontWeight:400,color:"#4A6080",fontSize:15 }}>Our team responds within a few hours. Fill the form or WhatsApp us directly for quick guidance.</p>
          </div>
          <div className="contact-grid" style={{ display:"grid",gridTemplateColumns:"1fr 1.6fr",gap:64 }}>
            <div className={`fade-up${visible.contact?" in":""}`}>
              {[
                { icon:"📍", label:"Address", type:"text", val:"GGHSS Road, opp. PWD Office\nNedumangad, Trivandrum – 695541" },
                { icon:"📞", label:"Phone / WhatsApp", type:"links", links:[{text:"7559095008",href:"tel:7559095008"}] },
                { icon:"✉️", label:"Email", type:"links", links:[{text:"lifelineconsultancy.edu@gmail.com",href:"mailto:lifelineconsultancy.edu@gmail.com"}] },
                { icon:"📸", label:"Instagram", type:"links", links:[{text:"@lifeline.consultancy",href:"https://instagram.com/lifeline.consultancy"}] },
                { icon:"🕐", label:"Working Hours", type:"text", val:"Mon – Sat: 9:00 AM – 6:00 PM" },
              ].map((item,i) => (
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

      {/* FOOTER */}
      <footer style={{ background:"#1B2A4A",borderTop:"1px solid rgba(0,174,239,0.2)",padding:"56px 28px 32px" }}>
        <div style={{ maxWidth:1200,margin:"0 auto" }}>
          <div className="footer-grid" style={{ display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:40,marginBottom:48 }}>
            <div>
              <div style={{ marginBottom:16 }}>
                <Logo size={42} darkBg={true} />
              </div>
              <p style={{ fontFamily:"'Nunito',sans-serif",fontWeight:400,fontSize:13,color:"rgba(255,255,255,0.5)",lineHeight:1.8,maxWidth:260,marginBottom:16 }}>Helping students move forward with confidence and better educational opportunities across Kerala.</p>
              <div style={{ fontFamily:"'Nunito',sans-serif",fontSize:13,color:"rgba(255,255,255,0.4)",marginBottom:6 }}>
                📞{" "}
                <a href="tel:7559095008" className="footer-link">7559095008</a>
              </div>
              <div style={{ fontFamily:"'Nunito',sans-serif",fontSize:13,color:"rgba(255,255,255,0.4)" }}>
                ✉️{" "}
                <a href="mailto:lifelineconsultancy.edu@gmail.com" className="footer-link">lifelineconsultancy.edu@gmail.com</a>
              </div>
            </div>
            {[
              { heading:"Services", links:["B.Tech Credit Transfer","Admission Guidance","Academic Counselling","Career Support","Documentation Assistance"] },
              { heading:"Company", links:["Home","About Us","Services","FAQ","Contact Us"] },
              { heading:"Legal", links:["Privacy Policy","Terms & Conditions","Refund Policy","Cookie Policy"] },
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
            <div style={{ fontFamily:"'Nunito',sans-serif",fontSize:12,color:"rgba(255,255,255,0.3)" }}>© 2026 Lifeline Education Consultancy, Nedumangad, Trivandrum, Kerala. All rights reserved.</div>
            <a href="https://instagram.com/lifeline.consultancy" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ fontFamily:"'Nunito',sans-serif",fontSize:12 }}>
              📸 @lifeline.consultancy
            </a>
          </div>
        </div>
           </footer>

              {/* Floating WhatsApp Button */}
              <a
                href="https://wa.me/917559095008"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: "fixed",
                  bottom: "20px",
                  right: "20px",
                  width: "60px",
                  height: "60px",
                  background: "#25D366",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
                  zIndex: 9999,
                  textDecoration: "none",
                  animation: "pulse 2s infinite",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M20.52 3.48A11.8 11.8 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.16 1.6 5.98L0 24l6.3-1.65a11.8 11.8 0 0 0 5.76 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.16-3.45-8.44zM12.07 21.3a9.3 9.3 0 0 1-4.74-1.3l-.34-.2-3.74.98 1-3.64-.22-.37a9.28 9.28 0 1 1 8.04 4.53zm5.1-6.96c-.28-.14-1.64-.8-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.16-.43-2.2-1.37-.82-.73-1.37-1.63-1.53-1.9-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.1-.18.05-.35-.02-.5-.07-.14-.61-1.47-.84-2.02-.22-.52-.44-.45-.61-.46h-.52c-.18 0-.46.07-.7.35-.24.28-.92.9-.92 2.18s.95 2.52 1.08 2.7c.14.18 1.87 2.86 4.53 4.01.63.27 1.13.43 1.52.55.64.2 1.22.17 1.68.1.51-.08 1.64-.67 1.87-1.31.23-.64.23-1.18.16-1.3-.07-.11-.25-.18-.53-.32z" />
                </svg>
              </a>

              <a
                href="tel:7559095008"
                style={{
                  position: "fixed",
                  bottom: "20px",
                  left: "20px",
                  width: "60px",
                  height: "60px",
                  background: "#0077B6",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
                  zIndex: 9999,
                  textDecoration: "none",
                  animation: "pulse 2s infinite",
                }}
              >
                📞
              </a>

            </div>
          );
        }
      
