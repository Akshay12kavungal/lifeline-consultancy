export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/917559095008"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position:"fixed",bottom:"20px",right:"20px",
          width:"60px",height:"60px",
          background:"#25D366",borderRadius:"50%",
          display:"flex",alignItems:"center",justifyContent:"center",
          boxShadow:"0 8px 24px rgba(0,0,0,0.25)",
          zIndex:9999,textDecoration:"none",
          animation:"pulse 2s infinite",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white">
          <path d="M20.52 3.48A11.8 11.8 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.16 1.6 5.98L0 24l6.3-1.65a11.8 11.8 0 0 0 5.76 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.16-3.45-8.44zM12.07 21.3a9.3 9.3 0 0 1-4.74-1.3l-.34-.2-3.74.98 1-3.64-.22-.37a9.28 9.28 0 1 1 8.04 4.53zm5.1-6.96c-.28-.14-1.64-.8-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.16-.43-2.2-1.37-.82-.73-1.37-1.63-1.53-1.9-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.1-.18.05-.35-.02-.5-.07-.14-.61-1.47-.84-2.02-.22-.52-.44-.45-.61-.46h-.52c-.18 0-.46.07-.7.35-.24.28-.92.9-.92 2.18s.95 2.52 1.08 2.7c.14.18 1.87 2.86 4.53 4.01.63.27 1.13.43 1.52.55.64.2 1.22.17 1.68.1.51-.08 1.64-.67 1.87-1.31.23-.64.23-1.18.16-1.3-.07-.11-.25-.18-.53-.32z" />
        </svg>
      </a>

      {/* Call */}
      <a
        href="tel:7559095008"
        style={{
          position:"fixed",bottom:"20px",left:"20px",
          width:"60px",height:"60px",
          background:"#0077B6",borderRadius:"50%",
          display:"flex",alignItems:"center",justifyContent:"center",
          boxShadow:"0 8px 24px rgba(0,0,0,0.25)",
          zIndex:9999,textDecoration:"none",
          animation:"pulse 2s infinite",
          fontSize:"24px",
        }}
      >
        📞
      </a>
    </>
  );
}
