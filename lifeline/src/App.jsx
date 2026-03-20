import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Home", "Courses", "About", "Testimonials", "Contact"];

const COURSES = [
  { icon: "◈", title: "Career Counselling", desc: "Discover your ideal career path with personalised assessments and expert guidance tailored to your strengths.", tag: "Popular", color: "#C8A96E" },
  { icon: "◎", title: "Study Abroad", desc: "Navigate university applications, visa processes and scholarships for top institutions worldwide.", tag: "Featured", color: "#7EAFC8" },
  { icon: "◇", title: "Skill Development", desc: "Master in-demand skills through curated programs aligned with today's competitive job market.", tag: "New", color: "#9EC87E" },
  { icon: "△", title: "MBA Guidance", desc: "From GMAT prep to essay writing and interview coaching — your MBA journey starts here.", tag: "Premium", color: "#C87E9E" },
  { icon: "○", title: "Entrance Exams", desc: "Structured preparation plans for JEE, NEET, UPSC and other competitive entrance examinations.", tag: "Popular", color: "#C8C07E" },
  { icon: "▷", title: "Personal Development", desc: "Build confidence, communication and leadership skills that last a lifetime.", tag: "New", color: "#A07EC8" },
];

const TESTIMONIALS = [
  { name: "Priya Sharma", role: "Engineering Student", text: "Life Line completely changed how I approached my future. The career mapping session was eye-opening and precise.", initials: "PS" },
  { name: "Arjun Mehta", role: "MBA Aspirant", text: "Got into my dream B-school thanks to the essay and interview coaching. Couldn't have done it without them.", initials: "AM" },
  { name: "Sneha Reddy", role: "Study Abroad", text: "The study abroad counsellors knew every scholarship I qualified for. I saved lakhs on my education.", initials: "SR" },
  { name: "Rohan Das", role: "UPSC Candidate", text: "Structured study plans and weekly check-ins kept me on track. Cleared prelims in my first attempt!", initials: "RD" },
];

const STATS = [
  { value: "12K+", label: "Students Guided" },
  { value: "98%", label: "Success Rate" },
  { value: "200+", label: "University Partners" },
  { value: "15+", label: "Years Experience" },
];

const TEAM = [
  { name: "Dr. Meera Iyer", role: "Chief Counsellor", exp: "18 yrs exp", initials: "MI" },
  { name: "Kiran Bhat", role: "Study Abroad Head", exp: "12 yrs exp", initials: "KB" },
  { name: "Anita Nair", role: "Career Strategist", exp: "10 yrs exp", initials: "AN" },
];

export default function App() {
  const [activeNav, setActiveNav] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState({});
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", course: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) setVisible(v => ({ ...v, [e.target.id]: true }));
      }),
      { threshold: 0.1 }
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
    if (formData.name && formData.email) setSubmitted(true);
  };

  const faqs = [
    { q: "How long does a counselling session last?", a: "Initial sessions are 60 minutes. Follow-up sessions are 45 minutes. We also offer intensive 2-hour deep-dive sessions for career mapping." },
    { q: "Is the first session really free?", a: "Yes — your first 30-minute discovery call is completely free. No commitments, no hidden fees." },
    { q: "Do you help with scholarship applications?", a: "Absolutely. Our study abroad team specialises in identifying and applying for scholarships worth lakhs of rupees annually." },
    { q: "Can I switch programs mid-way?", a: "Yes. We understand that goals evolve. You can switch programs with a simple request to your assigned counsellor." },
  ];

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#0D0D0B", color: "#F0EBE0", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        * { box-sizing: border-box; }
        .fade-up { opacity: 0; transform: translateY(36px); transition: opacity 0.75s ease, transform 0.75s ease; }
        .fade-up.in { opacity: 1; transform: translateY(0); }
        .s1{transition-delay:.05s}.s2{transition-delay:.15s}.s3{transition-delay:.25s}.s4{transition-delay:.35s}.s5{transition-delay:.45s}.s6{transition-delay:.55s}
        .gold-btn { background: linear-gradient(135deg,#C8A96E,#E8C98E); color:#0D0D0B; border:none; padding:14px 32px; font-family:'Lato',sans-serif; font-weight:700; font-size:12px; letter-spacing:2px; text-transform:uppercase; cursor:pointer; border-radius:2px; transition:transform .2s,box-shadow .2s; }
        .gold-btn:hover { transform:translateY(-2px); box-shadow:0 8px 28px rgba(200,169,110,.4); }
        .outline-btn { background:transparent; color:#C8A96E; border:1px solid #C8A96E; padding:13px 32px; font-family:'Lato',sans-serif; font-weight:700; font-size:12px; letter-spacing:2px; text-transform:uppercase; cursor:pointer; border-radius:2px; transition:all .2s; }
        .outline-btn:hover { background:#C8A96E18; }
        .course-card { background:#161612; border:1px solid #2A2A24; padding:32px 28px; border-radius:4px; transition:border-color .3s,transform .3s; cursor:default; }
        .course-card:hover { border-color:#C8A96E55; transform:translateY(-5px); }
        .testi-card { background:#161612; border:1px solid #2A2A24; padding:30px; border-radius:4px; }
        .team-card { background:#161612; border:1px solid #2A2A24; padding:32px 24px; border-radius:4px; text-align:center; transition:border-color .3s; }
        .team-card:hover { border-color:#C8A96E44; }
        .faq-item { border-bottom:1px solid #2A2A24; }
        input,textarea,select { background:#161612; border:1px solid #2A2A24; color:#F0EBE0; padding:13px 16px; font-family:'Lato',sans-serif; font-size:14px; width:100%; border-radius:2px; outline:none; transition:border-color .2s; }
        input:focus,textarea:focus,select:focus { border-color:#C8A96E; }
        select option { background:#161612; }
        .nav-link { font-family:'Lato',sans-serif; font-size:12px; letter-spacing:1.5px; text-transform:uppercase; color:#A09880; cursor:pointer; background:none; border:none; transition:color .2s; }
        .nav-link:hover,.nav-link.active { color:#C8A96E; }
        ::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:#0D0D0B}::-webkit-scrollbar-thumb{background:#C8A96E33;border-radius:3px}
        @media(max-width:900px){
          .courses-grid{grid-template-columns:repeat(2,1fr)!important}
          .about-grid{grid-template-columns:1fr!important}
          .team-grid{grid-template-columns:1fr!important}
        }
        @media(max-width:640px){
          .hero-btns{flex-direction:column!important}
          .courses-grid{grid-template-columns:1fr!important}
          .stats-grid{grid-template-columns:repeat(2,1fr)!important}
          .testi-grid{grid-template-columns:1fr!important}
          .contact-grid{grid-template-columns:1fr!important}
          .form-row{grid-template-columns:1fr!important}
          .footer-inner{flex-direction:column!important;text-align:center;gap:16px!important}
          .nav-desktop{display:none!important}
          .menu-btn{display:flex!important}
          .hero-title{font-size:clamp(38px,10vw,60px)!important}
        }
        @media(min-width:641px){.menu-btn{display:none!important}.mobile-menu{display:none!important}}
      `}</style>

      {/* NAV */}
      <nav style={{ position:"fixed",top:0,left:0,right:0,zIndex:200,background:"#0D0D0Bdd",backdropFilter:"blur(14px)",borderBottom:"1px solid #1E1E18" }}>
        <div style={{ maxWidth:1200,margin:"0 auto",padding:"0 28px",height:70,display:"flex",alignItems:"center",justifyContent:"space-between" }}>
          <div style={{ cursor:"pointer" }} onClick={() => scrollTo("home")}>
            <div style={{ fontFamily:"'Playfair Display',serif",fontSize:22,fontWeight:700,color:"#C8A96E",letterSpacing:.5 }}>Life Line</div>
            <div style={{ fontFamily:"'Lato',sans-serif",fontSize:9,letterSpacing:4,color:"#706A5E",textTransform:"uppercase" }}>Consultancy</div>
          </div>
          <div className="nav-desktop" style={{ display:"flex",gap:36 }}>
            {NAV_LINKS.map(l => (
              <button key={l} className={`nav-link${activeNav===l?" active":""}`} onClick={() => scrollTo(l.toLowerCase())}>{l}</button>
            ))}
          </div>
          <button className="gold-btn nav-desktop" style={{ padding:"10px 22px",fontSize:11 }} onClick={() => scrollTo("contact")}>Free Session</button>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} style={{ background:"none",border:"none",cursor:"pointer",display:"none",flexDirection:"column",gap:5,padding:4 }}>
            {[24,16,20].map((w,i) => <span key={i} style={{ display:"block",width:w,height:1.5,background:"#C8A96E",transition:"all .2s" }}></span>)}
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu" style={{ background:"#0D0D0B",borderTop:"1px solid #1E1E18",padding:"8px 28px 24px" }}>
            {NAV_LINKS.map(l => (
              <div key={l} style={{ borderBottom:"1px solid #1A1A16" }}>
                <button className="nav-link" style={{ padding:"14px 0",display:"block",width:"100%",textAlign:"left" }} onClick={() => scrollTo(l.toLowerCase())}>{l}</button>
              </div>
            ))}
            <button className="gold-btn" style={{ marginTop:20,width:"100%" }} onClick={() => scrollTo("contact")}>Book Free Session</button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" style={{ minHeight:"100vh",display:"flex",alignItems:"center",position:"relative",overflow:"hidden",paddingTop:70 }}>
        <div style={{ position:"absolute",inset:0,background:"radial-gradient(ellipse at 75% 45%, #C8A96E0C 0%, transparent 55%), radial-gradient(ellipse at 15% 85%, #7EAFC80A 0%, transparent 50%)" }}></div>
        <div style={{ position:"absolute",top:"12%",right:"6%",width:360,height:360,border:"1px solid #C8A96E12",borderRadius:"50%" }}></div>
        <div style={{ position:"absolute",top:"22%",right:"11%",width:200,height:200,border:"1px solid #C8A96E1E",borderRadius:"50%" }}></div>
        <div style={{ position:"absolute",bottom:"15%",left:"5%",width:120,height:120,border:"1px solid #C8A96E0E",borderRadius:"50%" }}></div>
        <div style={{ maxWidth:1200,margin:"0 auto",padding:"80px 28px",position:"relative",width:"100%" }}>
          <div style={{ maxWidth:700 }}>
            <div style={{ fontFamily:"'Lato',sans-serif",fontSize:11,letterSpacing:4,color:"#C8A96E",textTransform:"uppercase",marginBottom:28,display:"flex",alignItems:"center",gap:12 }}>
              <span style={{ display:"inline-block",width:32,height:1,background:"#C8A96E" }}></span>
              Shaping Futures Since 2009
            </div>
            <h1 className="hero-title" style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(46px,6.5vw,84px)",fontWeight:700,lineHeight:1.07,color:"#F0EBE0",marginBottom:28 }}>
              Your Path to<br /><em style={{ color:"#C8A96E",fontStyle:"italic" }}>Excellence</em><br />Starts Here
            </h1>
            <p style={{ fontFamily:"'Lato',sans-serif",fontWeight:300,fontSize:17,lineHeight:1.85,color:"#7A7268",maxWidth:500,marginBottom:48 }}>
              Life Line Consultancy empowers students and professionals with expert guidance — from career discovery to global university admissions.
            </p>
            <div className="hero-btns" style={{ display:"flex",gap:16,flexWrap:"wrap" }}>
              <button className="gold-btn" onClick={() => scrollTo("courses")}>Explore Programs</button>
              <button className="outline-btn" onClick={() => scrollTo("contact")}>Book Free Counselling</button>
            </div>
            <div style={{ marginTop:56,display:"flex",gap:32,flexWrap:"wrap" }}>
              {["Certified Counsellors","AICC Accredited","ISO 9001:2015"].map((b,i) => (
                <div key={i} style={{ fontFamily:"'Lato',sans-serif",fontSize:12,color:"#706A5E",display:"flex",alignItems:"center",gap:8 }}>
                  <span style={{ display:"inline-block",width:6,height:6,borderRadius:"50%",background:"#C8A96E" }}></span>{b}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ position:"absolute",right:28,top:"50%",transform:"translateY(-50%) rotate(90deg)",fontFamily:"'Lato',sans-serif",fontSize:9,letterSpacing:5,color:"#C8A96E33",textTransform:"uppercase",whiteSpace:"nowrap" }}>
          Scroll to explore ——
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background:"linear-gradient(135deg,#C8A96E,#B8954E)",padding:"52px 28px" }}>
        <div style={{ maxWidth:1200,margin:"0 auto" }}>
          <div className="stats-grid" style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:0,textAlign:"center" }}>
            {STATS.map((s,i) => (
              <div key={i} style={{ padding:"12px 8px",borderRight:i<3?"1px solid #0D0D0B22":"none" }}>
                <div style={{ fontFamily:"'Playfair Display',serif",fontSize:40,fontWeight:700,color:"#0D0D0B",lineHeight:1.1 }}>{s.value}</div>
                <div style={{ fontFamily:"'Lato',sans-serif",fontSize:11,letterSpacing:2,textTransform:"uppercase",color:"#0D0D0B88",marginTop:6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" ref={setRef("courses")} style={{ padding:"110px 28px",background:"#0D0D0B" }}>
        <div style={{ maxWidth:1200,margin:"0 auto" }}>
          <div className={`fade-up${visible.courses?" in":""}`} style={{ textAlign:"center",marginBottom:70 }}>
            <div style={{ fontFamily:"'Lato',sans-serif",fontSize:11,letterSpacing:4,color:"#C8A96E",textTransform:"uppercase",marginBottom:18 }}>What We Offer</div>
            <div style={{ width:44,height:2,background:"linear-gradient(90deg,#C8A96E,#E8C98E)",margin:"0 auto 22px" }}></div>
            <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(28px,4vw,48px)",fontWeight:700,color:"#F0EBE0",marginBottom:16 }}>Our Consultancy Programs</h2>
            <p style={{ fontFamily:"'Lato',sans-serif",fontWeight:300,fontSize:15,color:"#706A5E",maxWidth:480,margin:"0 auto" }}>Expert-led programs designed around your unique goals and timeline.</p>
          </div>
          <div className="courses-grid" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20 }}>
            {COURSES.map((c,i) => (
              <div key={i} className={`course-card fade-up s${i+1}${visible.courses?" in":""}`}>
                <div style={{ fontSize:30,color:c.color,marginBottom:18 }}>{c.icon}</div>
                <div style={{ display:"inline-block",fontFamily:"'Lato',sans-serif",fontSize:10,letterSpacing:2,color:c.color,border:`1px solid ${c.color}44`,padding:"3px 10px",borderRadius:2,marginBottom:16,textTransform:"uppercase" }}>{c.tag}</div>
                <h3 style={{ fontFamily:"'Playfair Display',serif",fontSize:21,fontWeight:600,color:"#F0EBE0",marginBottom:14 }}>{c.title}</h3>
                <p style={{ fontFamily:"'Lato',sans-serif",fontWeight:300,fontSize:14,lineHeight:1.85,color:"#6A6458",marginBottom:20 }}>{c.desc}</p>
                <button onClick={() => scrollTo("contact")} style={{ background:"none",border:"none",color:c.color,fontFamily:"'Lato',sans-serif",fontSize:12,letterSpacing:1.5,textTransform:"uppercase",cursor:"pointer",padding:0,display:"flex",alignItems:"center",gap:8 }}>
                  Learn More <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" ref={setRef("about")} style={{ padding:"110px 28px",background:"#111110" }}>
        <div style={{ maxWidth:1200,margin:"0 auto" }}>
          <div className="about-grid" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"center" }}>
            <div className={`fade-up${visible.about?" in":""}`}>
              <div style={{ fontFamily:"'Lato',sans-serif",fontSize:11,letterSpacing:4,color:"#C8A96E",textTransform:"uppercase",marginBottom:18 }}>About Us</div>
              <div style={{ width:44,height:2,background:"linear-gradient(90deg,#C8A96E,#E8C98E)",marginBottom:24 }}></div>
              <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(26px,3.5vw,44px)",fontWeight:700,color:"#F0EBE0",marginBottom:24,lineHeight:1.2 }}>
                Guiding Students to <em style={{ color:"#C8A96E" }}>Their Best</em> Futures
              </h2>
              <p style={{ fontFamily:"'Lato',sans-serif",fontWeight:300,fontSize:15,lineHeight:1.9,color:"#6A6458",marginBottom:20 }}>
                Founded in 2009, Life Line Consultancy has been at the forefront of educational counselling in India. Our team of 50+ certified counsellors brings decades of combined experience.
              </p>
              <p style={{ fontFamily:"'Lato',sans-serif",fontWeight:300,fontSize:15,lineHeight:1.9,color:"#6A6458",marginBottom:40 }}>
                We believe every student deserves personalised attention — not generic advice. Our data-driven approach combines psychological assessments, market trends, and one-on-one mentoring.
              </p>
              <div style={{ display:"flex",gap:40,marginBottom:40,flexWrap:"wrap" }}>
                {[["50+","Expert Counsellors"],["15+","Years in Practice"],["98%","Success Rate"]].map(([v,l],i) => (
                  <div key={i}>
                    <div style={{ fontFamily:"'Playfair Display',serif",fontSize:32,fontWeight:700,color:"#C8A96E" }}>{v}</div>
                    <div style={{ fontFamily:"'Lato',sans-serif",fontSize:12,color:"#706A5E",marginTop:4 }}>{l}</div>
                  </div>
                ))}
              </div>
              <button className="gold-btn" onClick={() => scrollTo("contact")}>Meet Our Counsellors</button>
            </div>
            <div className={`fade-up s2${visible.about?" in":""}`}>
              <div style={{ background:"linear-gradient(135deg,#C8A96E12,#C8A96E04)",border:"1px solid #C8A96E1E",borderRadius:4,padding:40,marginBottom:20 }}>
                {[
                  { label:"Personalised Assessment Accuracy",val:96 },
                  { label:"University Admission Rate",val:98 },
                  { label:"Career Satisfaction Score",val:94 },
                  { label:"Student Retention Rate",val:99 },
                ].map((item,i) => (
                  <div key={i} style={{ marginBottom:i<3?28:0 }}>
                    <div style={{ display:"flex",justifyContent:"space-between",marginBottom:10 }}>
                      <span style={{ fontFamily:"'Lato',sans-serif",fontSize:13,color:"#A09880" }}>{item.label}</span>
                      <span style={{ fontFamily:"'Playfair Display',serif",fontSize:15,color:"#C8A96E",fontWeight:600 }}>{item.val}%</span>
                    </div>
                    <div style={{ background:"#1E1E18",height:3,borderRadius:2 }}>
                      <div style={{ background:"linear-gradient(90deg,#C8A96E,#E8C98E)",height:3,borderRadius:2,width:`${visible.about?item.val:0}%`,transition:"width 1.2s ease" }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TEAM */}
          <div style={{ marginTop:80 }}>
            <div className={`fade-up${visible.about?" in":""}`} style={{ textAlign:"center",marginBottom:48 }}>
              <h3 style={{ fontFamily:"'Playfair Display',serif",fontSize:32,color:"#F0EBE0" }}>Meet the Team</h3>
            </div>
            <div className="team-grid" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20 }}>
              {TEAM.map((t,i) => (
                <div key={i} className={`team-card fade-up s${i+1}${visible.about?" in":""}`}>
                  <div style={{ width:64,height:64,borderRadius:"50%",background:"#C8A96E18",border:"1px solid #C8A96E44",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px",fontFamily:"'Lato',sans-serif",fontSize:16,fontWeight:700,color:"#C8A96E" }}>{t.initials}</div>
                  <div style={{ fontFamily:"'Playfair Display',serif",fontSize:18,color:"#F0EBE0",marginBottom:6 }}>{t.name}</div>
                  <div style={{ fontFamily:"'Lato',sans-serif",fontSize:12,color:"#C8A96E",letterSpacing:1,marginBottom:4 }}>{t.role}</div>
                  <div style={{ fontFamily:"'Lato',sans-serif",fontSize:12,color:"#706A5E" }}>{t.exp}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" ref={setRef("testimonials")} style={{ padding:"110px 28px",background:"#0D0D0B" }}>
        <div style={{ maxWidth:1200,margin:"0 auto" }}>
          <div className={`fade-up${visible.testimonials?" in":""}`} style={{ textAlign:"center",marginBottom:70 }}>
            <div style={{ fontFamily:"'Lato',sans-serif",fontSize:11,letterSpacing:4,color:"#C8A96E",textTransform:"uppercase",marginBottom:18 }}>Student Stories</div>
            <div style={{ width:44,height:2,background:"linear-gradient(90deg,#C8A96E,#E8C98E)",margin:"0 auto 22px" }}></div>
            <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(28px,4vw,48px)",fontWeight:700,color:"#F0EBE0" }}>Words from Our Alumni</h2>
          </div>
          <div className="testi-grid" style={{ display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:20 }}>
            {TESTIMONIALS.map((t,i) => (
              <div key={i} className={`testi-card fade-up s${i+1}${visible.testimonials?" in":""}`}>
                <div style={{ fontFamily:"'Playfair Display',serif",fontSize:48,color:"#C8A96E33",lineHeight:.8,marginBottom:20 }}>"</div>
                <p style={{ fontFamily:"'Lato',sans-serif",fontWeight:300,fontSize:15,lineHeight:1.85,color:"#A09880",marginBottom:28,fontStyle:"italic" }}>{t.text}</p>
                <div style={{ display:"flex",alignItems:"center",gap:14,borderTop:"1px solid #2A2A24",paddingTop:22 }}>
                  <div style={{ width:44,height:44,borderRadius:"50%",background:"#C8A96E1E",border:"1px solid #C8A96E44",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Lato',sans-serif",fontSize:13,fontWeight:700,color:"#C8A96E",flexShrink:0 }}>{t.initials}</div>
                  <div>
                    <div style={{ fontFamily:"'Lato',sans-serif",fontSize:14,fontWeight:700,color:"#F0EBE0" }}>{t.name}</div>
                    <div style={{ fontFamily:"'Lato',sans-serif",fontSize:12,color:"#706A5E",marginTop:3 }}>{t.role}</div>
                  </div>
                  <div style={{ marginLeft:"auto",fontFamily:"'Lato',sans-serif",fontSize:13,color:"#C8A96E" }}>★★★★★</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding:"80px 28px",background:"#111110" }}>
        <div style={{ maxWidth:760,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:56 }}>
            <div style={{ fontFamily:"'Lato',sans-serif",fontSize:11,letterSpacing:4,color:"#C8A96E",textTransform:"uppercase",marginBottom:18 }}>Got Questions?</div>
            <div style={{ width:44,height:2,background:"linear-gradient(90deg,#C8A96E,#E8C98E)",margin:"0 auto 22px" }}></div>
            <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(26px,3.5vw,40px)",fontWeight:700,color:"#F0EBE0" }}>Frequently Asked</h2>
          </div>
          {faqs.map((f,i) => (
            <div key={i} className="faq-item">
              <button onClick={() => setActiveFaq(activeFaq===i?null:i)} style={{ width:"100%",background:"none",border:"none",color:"#F0EBE0",fontFamily:"'Lato',sans-serif",fontSize:15,fontWeight:400,cursor:"pointer",padding:"22px 0",textAlign:"left",display:"flex",justifyContent:"space-between",alignItems:"center",gap:16 }}>
                <span>{f.q}</span>
                <span style={{ color:"#C8A96E",fontSize:20,lineHeight:1,flexShrink:0 }}>{activeFaq===i?"−":"+"}</span>
              </button>
              {activeFaq===i && (
                <div style={{ fontFamily:"'Lato',sans-serif",fontWeight:300,fontSize:14,lineHeight:1.85,color:"#706A5E",paddingBottom:22 }}>{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ padding:"80px 28px",background:"linear-gradient(135deg,#C8A96E18,#C8A96E08)",borderTop:"1px solid #C8A96E22",borderBottom:"1px solid #C8A96E22" }}>
        <div style={{ maxWidth:700,margin:"0 auto",textAlign:"center" }}>
          <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(26px,4vw,44px)",fontWeight:700,color:"#F0EBE0",marginBottom:20 }}>
            Ready to Transform Your Future?
          </h2>
          <p style={{ fontFamily:"'Lato',sans-serif",fontWeight:300,fontSize:16,color:"#706A5E",lineHeight:1.8,marginBottom:36 }}>
            Join 12,000+ students who found their path with Life Line Consultancy. Your first session is completely free.
          </p>
          <button className="gold-btn" style={{ fontSize:13,padding:"16px 40px" }} onClick={() => scrollTo("contact")}>Book My Free Session →</button>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" ref={setRef("contact")} style={{ padding:"110px 28px",background:"#0D0D0B" }}>
        <div style={{ maxWidth:1200,margin:"0 auto" }}>
          <div className={`fade-up${visible.contact?" in":""}`} style={{ textAlign:"center",marginBottom:70 }}>
            <div style={{ fontFamily:"'Lato',sans-serif",fontSize:11,letterSpacing:4,color:"#C8A96E",textTransform:"uppercase",marginBottom:18 }}>Get In Touch</div>
            <div style={{ width:44,height:2,background:"linear-gradient(90deg,#C8A96E,#E8C98E)",margin:"0 auto 22px" }}></div>
            <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(28px,4vw,48px)",fontWeight:700,color:"#F0EBE0",marginBottom:14 }}>Book Your Free Session</h2>
            <p style={{ fontFamily:"'Lato',sans-serif",fontWeight:300,color:"#706A5E",fontSize:15 }}>Our counsellors respond within 24 hours.</p>
          </div>
          <div className="contact-grid" style={{ display:"grid",gridTemplateColumns:"1fr 1.6fr",gap:64 }}>
            <div className={`fade-up${visible.contact?" in":""}`}>
              {[
                { icon:"◈",label:"Address",val:"42, Rajaji Nagar\nBengaluru – 560010" },
                { icon:"◎",label:"Phone",val:"+91 98765 43210" },
                { icon:"◇",label:"Email",val:"hello@lifelineconsultancy.in" },
                { icon:"△",label:"Working Hours",val:"Mon – Sat: 9:00 AM – 6:30 PM" },
              ].map((item,i) => (
                <div key={i} style={{ display:"flex",gap:18,marginBottom:32,paddingBottom:32,borderBottom:i<3?"1px solid #1E1E18":"none" }}>
                  <div style={{ color:"#C8A96E",fontSize:20,marginTop:1 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontFamily:"'Lato',sans-serif",fontSize:10,letterSpacing:2.5,textTransform:"uppercase",color:"#C8A96E",marginBottom:8 }}>{item.label}</div>
                    <div style={{ fontFamily:"'Lato',sans-serif",fontSize:14,color:"#A09880",lineHeight:1.7,whiteSpace:"pre-line" }}>{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className={`fade-up s2${visible.contact?" in":""}`}>
              {submitted ? (
                <div style={{ textAlign:"center",padding:"70px 20px",background:"#161612",border:"1px solid #2A2A24",borderRadius:4 }}>
                  <div style={{ fontFamily:"'Playfair Display',serif",fontSize:48,color:"#C8A96E",marginBottom:20 }}>◈</div>
                  <h3 style={{ fontFamily:"'Playfair Display',serif",fontSize:28,color:"#F0EBE0",marginBottom:14 }}>Thank You!</h3>
                  <p style={{ fontFamily:"'Lato',sans-serif",color:"#706A5E",fontSize:15,lineHeight:1.7 }}>We've received your enquiry.<br />A counsellor will reach out within 24 hours.</p>
                </div>
              ) : (
                <div style={{ background:"#161612",border:"1px solid #2A2A24",borderRadius:4,padding:36,display:"flex",flexDirection:"column",gap:16 }}>
                  <div className="form-row" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:16 }}>
                    <input placeholder="Full Name *" value={formData.name} onChange={e => setFormData({...formData,name:e.target.value})} />
                    <input placeholder="Email Address *" type="email" value={formData.email} onChange={e => setFormData({...formData,email:e.target.value})} />
                  </div>
                  <div className="form-row" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:16 }}>
                    <input placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({...formData,phone:e.target.value})} />
                    <select value={formData.course} onChange={e => setFormData({...formData,course:e.target.value})}>
                      <option value="">Select a Program</option>
                      {COURSES.map(c => <option key={c.title} value={c.title}>{c.title}</option>)}
                    </select>
                  </div>
                  <textarea placeholder="Tell us about your goals and how we can help..." rows={4} value={formData.message} onChange={e => setFormData({...formData,message:e.target.value})} style={{ resize:"vertical" }} />
                  <button className="gold-btn" onClick={handleSubmit} style={{ alignSelf:"flex-start",marginTop:4 }}>Submit Enquiry →</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background:"#080807",borderTop:"1px solid #1E1E18",padding:"48px 28px" }}>
        <div style={{ maxWidth:1200,margin:"0 auto" }}>
          <div style={{ display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:40,marginBottom:48,flexWrap:"wrap" }}>
            <div>
              <div style={{ fontFamily:"'Playfair Display',serif",fontSize:22,fontWeight:700,color:"#C8A96E",marginBottom:8 }}>Life Line</div>
              <div style={{ fontFamily:"'Lato',sans-serif",fontSize:9,letterSpacing:4,color:"#706A5E",textTransform:"uppercase",marginBottom:20 }}>Consultancy</div>
              <p style={{ fontFamily:"'Lato',sans-serif",fontWeight:300,fontSize:13,color:"#6A6458",lineHeight:1.8,maxWidth:260 }}>Empowering students and professionals to discover, navigate, and achieve their fullest potential.</p>
            </div>
            {[
              { heading:"Programs", links:["Career Counselling","Study Abroad","MBA Guidance","Entrance Exams"] },
              { heading:"Company", links:["About Us","Our Team","Careers","Blog"] },
              { heading:"Legal", links:["Privacy Policy","Terms of Service","Refund Policy","Cookie Policy"] },
            ].map((col,i) => (
              <div key={i}>
                <div style={{ fontFamily:"'Lato',sans-serif",fontSize:11,letterSpacing:2,textTransform:"uppercase",color:"#C8A96E",marginBottom:20 }}>{col.heading}</div>
                {col.links.map(l => (
                  <div key={l} style={{ fontFamily:"'Lato',sans-serif",fontSize:13,color:"#6A6458",marginBottom:12,cursor:"pointer",transition:"color .2s" }}
                    onMouseEnter={e=>e.target.style.color="#A09880"} onMouseLeave={e=>e.target.style.color="#6A6458"}>{l}</div>
                ))}
              </div>
            ))}
          </div>
          <div className="footer-inner" style={{ borderTop:"1px solid #1E1E18",paddingTop:28,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16 }}>
            <div style={{ fontFamily:"'Lato',sans-serif",fontSize:12,color:"#4A4A42" }}>© 2026 Life Line Consultancy Pvt. Ltd. All rights reserved.</div>
            <div style={{ fontFamily:"'Lato',sans-serif",fontSize:12,color:"#4A4A42" }}>ISO 9001:2015 Certified &nbsp;·&nbsp; AICC Accredited</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
