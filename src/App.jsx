import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingButtons from "./components/layout/FloatingButtons";

import Hero from "./components/sections/Hero";
import StatsBar from "./components/sections/StatsBar";
import Services from "./components/sections/Services";
import StudentProblems from "./components/sections/StudentProblems";
import Process from "./components/sections/Process";
import WhyUs from "./components/sections/WhyUs";
import About from "./components/sections/About";
import FAQ from "./components/sections/FAQ";
import CTABanner from "./components/sections/CTABanner";
import Contact from "./components/sections/Contact";

import useRevealOnScroll from "./hooks/useRevealOnScroll";
import useActiveSection from "./hooks/useActiveSection";
import useCardSpotlight from "./hooks/useCardSpotlight";
import { NAV_LINKS } from "./data/content";

const NAV_SECTIONS = NAV_LINKS.map(l => l.toLowerCase());

export default function App() {
  const { visible, setRef } = useRevealOnScroll();
  const [activeNav, setActiveNav] = useActiveSection(NAV_SECTIONS);
  useCardSpotlight();

  const scrollTo = (id) => {
    if (NAV_SECTIONS.includes(id)) setActiveNav(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar activeNav={activeNav} scrollTo={scrollTo} />
      <main>
        <Hero scrollTo={scrollTo} />
        <StatsBar />
        <Services visible={visible} setRef={setRef} />
        <StudentProblems visible={visible} setRef={setRef} />
        <Process visible={visible} setRef={setRef} />
        <WhyUs visible={visible} setRef={setRef} />
        <About visible={visible} setRef={setRef} />
        <FAQ visible={visible} setRef={setRef} />
        <CTABanner scrollTo={scrollTo} />
        <Contact visible={visible} setRef={setRef} />
      </main>
      <Footer scrollTo={scrollTo} />
      <FloatingButtons />
    </>
  );
}
