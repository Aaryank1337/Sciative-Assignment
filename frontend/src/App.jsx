import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import CoursesSection from "./components/CoursesSection";
import HowItWorks from "./components/HowItWorks";
// import SeatTable from "./components/SeatTable";
import TestimonialsSection from "./components/Testimonials";
import SeatPriceSection from "./components/SeatPriceSection";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  
  return (
    <>
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="courses">
        <CoursesSection />
      </div>
      <div id="programs">
        <HowItWorks />
      </div>
      <div id="admission">
        <SeatPriceSection />
      </div>
      <div id="testimonial">
        <TestimonialsSection />
      </div>
    </>
  );
}

export default App;
