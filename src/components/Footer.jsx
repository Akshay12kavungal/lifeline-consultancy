import { Logo } from "./Logo";

const FOOTER_COLS = [
  {
    heading: "Services",
    links: ["B.Tech Credit Transfer","Admission Guidance","Academic Counselling","Career Support","Documentation Assistance"],
  },
  {
    heading: "Company",
    links: ["Home","About Us","Services","FAQ","Contact Us"],
  },
  {
    heading: "Legal",
    links: ["Privacy Policy","Terms & Conditions","Refund Policy","Cookie Policy"],
  },
];

export default function Footer() {
  return (
    <footer style={{ background:"#1B2A4A",borderTop:"1px solid rgba(0,174,239,0.2)",padding:"56px 28px 32px" }}>
      <div style={{ maxWidth:1200,margin:"0 auto" }}>
        <div className="footer-grid" style={{ display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:40,marginBottom:48 }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom:16 }}>
              <Logo size={42} darkBg={true} />
            </div>
            <p style={{ fontFamily:"'Nunito',sans-serif",fontWeight:400,fontSize:13,color:"rgba(255,255,255,0.5)",lineHeight:1.8,maxWidth:260,marginBottom:16 }}>
              Helping students move forward with confidence and better educational opportunities across Kerala.
            </p>
            <div style={{ fontFamily:"'Nunito',sans-serif",fontSize:13,color:"rgba(255,255,255,0.4)",marginBottom:6 }}>
              📞{" "}
              <a href="tel:7559095008" className="footer-link">7559095008</a>
            </div>
            <div style={{ fontFamily:"'Nunito',sans-serif",fontSize:13,color:"rgba(255,255,255,0.4)" }}>
              ✉️{" "}
              <a href="mailto:lifelineconsultancy.edu@gmail.com" className="footer-link">lifelineconsultancy.edu@gmail.com</a>
            </div>
          </div>

          {/* Columns */}
          {FOOTER_COLS.map((col,i) => (
            <div key={i}>
              <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:11,letterSpacing:2,textTransform:"uppercase",color:"#00AEEF",marginBottom:20,fontWeight:700 }}>{col.heading}</div>
              {col.links.map(l => (
                <div
                  key={l}
                  style={{ fontFamily:"'Nunito',sans-serif",fontSize:13,color:"rgba(255,255,255,0.45)",marginBottom:12,cursor:"pointer",transition:"color .2s" }}
                  onMouseEnter={e=>e.target.style.color="rgba(255,255,255,0.8)"}
                  onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.45)"}
                >
                  {l}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop:"1px solid rgba(0,174,239,0.15)",paddingTop:24,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12 }}>
          <div style={{ fontFamily:"'Nunito',sans-serif",fontSize:12,color:"rgba(255,255,255,0.3)" }}>
            © 2026 Lifeline Education Consultancy, Nedumangad, Trivandrum, Kerala. All rights reserved.
          </div>
          <a href="https://instagram.com/lifeline.consultancy" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ fontFamily:"'Nunito',sans-serif",fontSize:12 }}>
            📸 @lifeline.consultancy
          </a>
        </div>
      </div>
    </footer>
  );
}
