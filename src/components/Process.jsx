const STEPS = [
  { step:"01", title:"Contact Our Team", desc:"Speak with our educational counsellors and explain your academic situation." },
  { step:"02", title:"Profile Evaluation", desc:"Our experts analyze your eligibility, academic status, and available opportunities." },
  { step:"03", title:"Guidance & Documentation", desc:"Receive complete support for choosing the right path and preparing necessary documents." },
  { step:"04", title:"Admission Support", desc:"Get end-to-end assistance until the process is completed successfully." },
];

export default function Process() {
  return (
    <section style={{ padding:"90px 28px",background:"#fff" }}>
      <div style={{ maxWidth:1100,margin:"0 auto" }}>
        <div style={{ textAlign:"center",marginBottom:60 }}>
          <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:11,letterSpacing:4,color:"#00AEEF",textTransform:"uppercase",marginBottom:16,fontWeight:700 }}>How It Works</div>
          <div style={{ width:48,height:3,background:"linear-gradient(90deg,#00AEEF,#0077B6)",margin:"0 auto 22px",borderRadius:2 }}></div>
          <h2 style={{ fontFamily:"'Montserrat',sans-serif",fontSize:"clamp(26px,3.5vw,42px)",fontWeight:900,color:"#1B2A4A" }}>
            Simple <span style={{ color:"#00AEEF" }}>4-Step Process</span>
          </h2>
        </div>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:24 }} className="why-grid">
          {STEPS.map((item,i) => (
            <div key={i} className="why-card" style={{ textAlign:"center" }}>
              <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:36,fontWeight:900,color:"rgba(0,174,239,0.2)",marginBottom:10 }}>{item.step}</div>
              <h3 style={{ fontFamily:"'Montserrat',sans-serif",fontSize:16,fontWeight:800,color:"#1B2A4A",marginBottom:10 }}>{item.title}</h3>
              <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:13,lineHeight:1.8,color:"#4A6080" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
