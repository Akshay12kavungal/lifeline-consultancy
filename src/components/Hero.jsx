import { LogoIcon } from "./Logo";

export default function Hero({ scrollTo }) {
  return (
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

        <div className="hero-right" style={{ display:"flex",flexDirection:"column",alignItems:"center",opacity:0.07,pointerEvents:"none" }}>
          <LogoIcon size={280} />
        </div>
      </div>
    </section>
  );
}
