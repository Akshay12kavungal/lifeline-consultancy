export default function StudentProblems() {
  const problems = [
    "Too Many Backlogs?",
    "Lost Academic Year?",
    "Confused About Next Step?",
    "Want To Continue B.Tech?",
    "Need Expert Guidance?",
  ];

  return (
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
          {problems.map((item,i) => (
            <div key={i} style={{ background:"rgba(0,174,239,0.12)",border:"1.5px solid rgba(0,174,239,0.3)",borderRadius:30,padding:"10px 22px",fontFamily:"'Montserrat',sans-serif",fontSize:12,fontWeight:700,color:"#00AEEF",letterSpacing:0.5 }}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
