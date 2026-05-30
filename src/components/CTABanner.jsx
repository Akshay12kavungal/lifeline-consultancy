export default function CTABanner({ scrollTo }) {
  return (
    <section style={{ padding:"80px 28px",background:"linear-gradient(135deg,#1B2A4A,#0D1F3A)",position:"relative",overflow:"hidden" }}>
      <div style={{ position:"absolute",top:-60,right:-60,width:300,height:300,borderRadius:"50%",background:"rgba(0,174,239,0.08)",pointerEvents:"none" }}></div>
      <div style={{ position:"absolute",bottom:-40,left:-40,width:200,height:200,borderRadius:"50%",background:"rgba(0,174,239,0.05)",pointerEvents:"none" }}></div>
      <div style={{ maxWidth:700,margin:"0 auto",textAlign:"center",position:"relative" }}>
        <h2 style={{ fontFamily:"'Montserrat',sans-serif",fontSize:"clamp(26px,4vw,44px)",fontWeight:900,color:"#fff",marginBottom:20 }}>
          Your Academic Journey Starts Again Here.
        </h2>
        <p style={{ fontFamily:"'Nunito',sans-serif",fontWeight:400,fontSize:16,color:"rgba(255,255,255,0.65)",lineHeight:1.8,marginBottom:36 }}>
          Restart your engineering journey today. Your first consultation is completely free — talk to our expert team and discover the right academic path for you.
        </p>
        <button
          className="blue-btn"
          style={{ fontSize:13,padding:"16px 40px",background:"linear-gradient(135deg,#00AEEF,#0096D6)" }}
          onClick={() => scrollTo("contact")}
        >
          Get Free Consultation →
        </button>
      </div>
    </section>
  );
}
