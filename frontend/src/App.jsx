import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import CoursesSection from "./components/CoursesSection";
import HowItWorks from "./components/HowItWorks";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // Only run once on scroll
    });
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection />
      <CoursesSection />
      <HowItWorks />
    </>
  );
}

export default App;
