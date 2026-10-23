import { useState } from "react";
import { Logo } from "./Logo";
import { NAV_LINKS } from "../data/constants";

export default function Navbar({ activeNav, setActiveNav, scrollTo }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (link) => {
    setMenuOpen(false);
    setActiveNav(link);
    scrollTo(link.toLowerCase());
  };

  return (
    <nav style={{ position:"fixed",top:0,left:0,right:0,zIndex:200,background:"rgba(255,255,255,0.97)",backdropFilter:"blur(14px)",borderBottom:"1px solid #D6EAF8",boxShadow:"0 2px 20px rgba(27,42,74,.06)" }}>
      <div style={{ maxWidth:1200,margin:"0 auto",padding:"0 28px",height:72,display:"flex",alignItems:"center",justifyContent:"space-between" }}>
        <div style={{ cursor:"pointer" }} onClick={() => scrollTo("home")}>
          <Logo size={46} />
        </div>
        <div className="nav-desktop" style={{ display:"flex",gap:36 }}>
          {NAV_LINKS.map(l => (
            <button key={l} className={`nav-link${activeNav===l?" active":""}`} onClick={() => handleNav(l)}>{l}</button>
          ))}
        </div>
        <button className="blue-btn nav-desktop" style={{ padding:"10px 22px",fontSize:11 }} onClick={() => scrollTo("contact")}>Free Consultation</button>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} style={{ background:"none",border:"none",cursor:"pointer",display:"none",flexDirection:"column",gap:5,padding:4 }}>
          {[24,16,20].map((w,i) => <span key={i} style={{ display:"block",width:w,height:2,background:"#00AEEF",borderRadius:2 }}></span>)}
        </button>
      </div>
      {menuOpen && (
        <div className="mobile-menu" style={{ background:"#fff",borderTop:"1px solid #D6EAF8",padding:"8px 28px 24px" }}>
          {NAV_LINKS.map(l => (
            <div key={l} style={{ borderBottom:"1px solid #EAF3FB" }}>
              <button className="nav-link" style={{ padding:"14px 0",display:"block",width:"100%",textAlign:"left" }} onClick={() => handleNav(l)}>{l}</button>
            </div>
          ))}
          <button className="blue-btn" style={{ marginTop:20,width:"100%" }} onClick={() => scrollTo("contact")}>Get Free Consultation</button>
        </div>
      )}
    </nav>
  );
}
