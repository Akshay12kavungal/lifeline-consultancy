import { WHY_US } from "../data/constants";

export default function WhyUs({ scrollTo }) {
  return (
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
  );
}
