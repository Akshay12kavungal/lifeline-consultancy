import { useState } from "react";
import { FAQS } from "../data/constants";

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <section style={{ padding:"80px 28px",background:"#fff" }}>
      <div style={{ maxWidth:760,margin:"0 auto" }}>
        <div style={{ textAlign:"center",marginBottom:56 }}>
          <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:11,letterSpacing:4,color:"#00AEEF",textTransform:"uppercase",marginBottom:16,fontWeight:700 }}>Got Questions?</div>
          <div style={{ width:48,height:3,background:"linear-gradient(90deg,#00AEEF,#0077B6)",margin:"0 auto 22px",borderRadius:2 }}></div>
          <h2 style={{ fontFamily:"'Montserrat',sans-serif",fontSize:"clamp(26px,3.5vw,40px)",fontWeight:900,color:"#1B2A4A" }}>Frequently Asked Questions</h2>
        </div>
        {FAQS.map((f,i) => (
          <div key={i} className="faq-item">
            <button
              onClick={() => setActiveFaq(activeFaq===i?null:i)}
              style={{ width:"100%",background:"none",border:"none",color:"#1B2A4A",fontFamily:"'Montserrat',sans-serif",fontSize:14,fontWeight:700,cursor:"pointer",padding:"20px 0",textAlign:"left",display:"flex",justifyContent:"space-between",alignItems:"center",gap:16 }}
            >
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
  );
}
