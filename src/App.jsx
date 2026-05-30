import { useState, useEffect, useRef } from "react";
import { globalStyles } from "./styles/globalStyles";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import Services from "./components/Services";
import StudentProblems from "./components/StudentProblems";
import Process from "./components/Process";
import WhyUs from "./components/WhyUs";
import About from "./components/About";
import FAQ from "./components/FAQ";
import CTABanner from "./components/CTABanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function App() {
  const [activeNav, setActiveNav] = useState("Home");
  const [visible, setVisible] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) setVisible(v => ({ ...v, [e.target.id]: true }));
      }),
      { threshold: 0.08 }
    );
    Object.values(sectionRefs.current).forEach(r => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  const setRef = (id) => (el) => { sectionRefs.current[id] = el; };

  const scrollTo = (id) => {
    setActiveNav(id.charAt(0).toUpperCase() + id.slice(1));
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily:"'Segoe UI', sans-serif", background:"#F4F8FC", color:"#1B2A4A", minHeight:"100vh", overflowX:"hidden" }}>
      <style>{globalStyles}</style>

      <Navbar activeNav={activeNav} setActiveNav={setActiveNav} scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <StatsBar />
      <Services visible={visible} setRef={setRef} />
      <StudentProblems />
      <Process />
      <WhyUs scrollTo={scrollTo} />
      <About visible={visible} setRef={setRef} />
      <FAQ />
      <CTABanner scrollTo={scrollTo} />
      <Contact visible={visible} setRef={setRef} />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
