import { TEAM } from "../data/constants";

export default function About({ visible, setRef }) {
  return (
    <section id="about" ref={setRef("about")} style={{ padding:"110px 28px",background:"#fff" }}>
      <div style={{ maxWidth:1200,margin:"0 auto" }}>
        <div className="about-grid" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"center" }}>
          {/* Left */}
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

          {/* Right */}
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

        {/* Team */}
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
  );
}
