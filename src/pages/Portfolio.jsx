import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Marquee from "../components/Marquee";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import CustomCursor from "../components/CustomeCurser";
import Contact from "../sections/Contact";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-zinc-950 cursor-none">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Marquee text="React • Spring Boot • Java • Docker •" />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Portfolio;
