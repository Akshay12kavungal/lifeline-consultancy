import { SERVICES } from "../data/constants";

export default function Services({ visible, setRef }) {
  return (
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
  );
}
