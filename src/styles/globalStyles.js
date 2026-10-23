export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Nunito:ital,wght@0,300;0,400;0,600;1,400&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  .fade-up { opacity: 0; transform: translateY(32px); transition: opacity 0.7s ease, transform 0.7s ease; }
  .fade-up.in { opacity: 1; transform: translateY(0); }
  .s1{transition-delay:.05s}.s2{transition-delay:.15s}.s3{transition-delay:.25s}.s4{transition-delay:.35s}.s5{transition-delay:.45s}.s6{transition-delay:.55s}
  .blue-btn { background: linear-gradient(135deg,#00AEEF,#0077B6); color:#fff; border:none; padding:14px 32px; font-family:'Montserrat',sans-serif; font-weight:800; font-size:12px; letter-spacing:1.5px; text-transform:uppercase; cursor:pointer; border-radius:8px; transition:transform .2s,box-shadow .2s; box-shadow:0 4px 20px rgba(0,174,239,.35); }
  .blue-btn:hover { transform:translateY(-2px); box-shadow:0 8px 30px rgba(0,174,239,.5); }
  .outline-btn { background:transparent; color:#00AEEF; border:2px solid #00AEEF; padding:12px 32px; font-family:'Montserrat',sans-serif; font-weight:800; font-size:12px; letter-spacing:1.5px; text-transform:uppercase; cursor:pointer; border-radius:8px; transition:all .2s; }
  .outline-btn:hover { background:#00AEEF15; transform:translateY(-2px); }
  .service-card { background:#fff; border:1.5px solid #D6EAF8; padding:32px 28px; border-radius:12px; transition:all .3s; cursor:default; position:relative; overflow:hidden; }
  .service-card:hover { border-color:#00AEEF77; transform:translateY(-6px); box-shadow:0 16px 48px rgba(0,174,239,.13); }
  .service-card.highlight { background:linear-gradient(145deg,#1B2A4A,#0D1F3A); border-color:#00AEEF44; }
  .team-card { background:#fff; border:1px solid #D6EAF8; padding:32px 24px; border-radius:12px; text-align:center; transition:border-color .3s,box-shadow .3s; }
  .team-card:hover { border-color:#00AEEF66; box-shadow:0 8px 30px rgba(0,174,239,.1); }
  .why-card { background:#fff; border:1.5px solid #D6EAF8; padding:28px 24px; border-radius:12px; transition:all .3s; }
  .why-card:hover { border-color:#00AEEF66; box-shadow:0 8px 28px rgba(0,174,239,.1); transform:translateY(-4px); }
  .faq-item { border-bottom:1px solid #D6EAF8; }
  input,textarea,select { background:#F4F8FC; border:1.5px solid #D6EAF8; color:#1B2A4A; padding:13px 16px; font-family:'Nunito',sans-serif; font-size:14px; width:100%; border-radius:8px; outline:none; transition:border-color .2s,box-shadow .2s; }
  input:focus,textarea:focus,select:focus { border-color:#00AEEF; box-shadow:0 0 0 3px rgba(0,174,239,.1); background:#fff; }
  select option { background:#fff; }
  .nav-link { font-family:'Montserrat',sans-serif; font-size:12px; letter-spacing:1px; text-transform:uppercase; color:#4A6080; cursor:pointer; background:none; border:none; transition:color .2s; font-weight:700; }
  .nav-link:hover,.nav-link.active { color:#00AEEF; }
  ::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:#F4F8FC}::-webkit-scrollbar-thumb{background:#00AEEF55;border-radius:3px}
  .pulse { animation:pulse 2s infinite; }
  @keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(0,174,239,.4)} 50%{box-shadow:0 0 0 8px rgba(0,174,239,0)} }
  .click-link { color:#00AEEF; text-decoration:none; }
  .click-link:hover { text-decoration:underline; }
  .footer-link { color:rgba(255,255,255,0.55); text-decoration:none; }
  .footer-link:hover { color:rgba(255,255,255,0.85); text-decoration:underline; }
  .about-link { color:#0077B6; text-decoration:none; }
  .about-link:hover { text-decoration:underline; }
  @media(max-width:900px){
    .services-grid{grid-template-columns:repeat(2,1fr)!important}
    .about-grid{grid-template-columns:1fr!important}
    .team-grid{grid-template-columns:1fr!important}
    .why-grid{grid-template-columns:repeat(2,1fr)!important}
    .footer-grid{grid-template-columns:1fr 1fr!important}
  }
  @media(max-width:640px){
    .hero-btns{flex-direction:column!important;align-items:stretch!important}
    .services-grid{grid-template-columns:1fr!important}
    .stats-grid{grid-template-columns:repeat(2,1fr)!important}
    .testi-grid{grid-template-columns:1fr!important}
    .contact-grid{grid-template-columns:1fr!important}
    .form-row{grid-template-columns:1fr!important}
    .why-grid{grid-template-columns:1fr!important}
    .footer-grid{grid-template-columns:1fr!important}
    .nav-desktop{display:none!important}
    .menu-btn{display:flex!important}
    .hero-right{display:none!important}
  }
  @media(min-width:641px){.menu-btn{display:none!important}.mobile-menu{display:none!important}}
`;
