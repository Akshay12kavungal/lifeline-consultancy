import { STATS } from "../data/constants";

export default function StatsBar() {
  return (
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
  );
}
