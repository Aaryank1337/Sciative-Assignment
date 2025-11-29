import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { scrollToSection } from '../utils/scroll';

const steps = [
  {
    number: 1,
    title: "Browse course from our expert contributor",
  },
  {
    number: 2,
    title: "Purchase quickly and securely",
  },
  {
    number: 3,
    title: "That's Start learning right away",
  },
];

// SVG Curved Dotted Line Component
const CurvedLine = ({ direction, index }) => {
  // Horizontal path for desktop (curved)
  const horizontalPath =
    direction === "down" ? "M 0 20 Q 50 60, 100 20" : "M 0 40 Q 50 0, 100 40";

  // Vertical curved path for mobile (alternating left/right curves)
  const verticalPath =
    direction === "down"
      ? "M 30 0 Q 50 25, 30 50" 
      : "M 30 0 Q 10 25, 30 50"; 

  return (
    <>
      {/* Mobile: Vertical dotted line */}
      <svg
        className="block md:hidden my-4 mx-auto"
        width="60"
        height="50"
        viewBox="0 0 60 50"
        data-aos="fade"
        data-aos-delay={index * 150 + 100}
      >
        <path
          d={verticalPath}
          fill="none"
          stroke="#9ca3af"
          strokeWidth="2"
          strokeDasharray="6 6"
          strokeLinecap="round"
        />
      </svg>

      {/* Desktop: Horizontal curved line */}
      <svg
        className="hidden md:block mx-2 lg:mx-4 mt-6 w-20 lg:w-28 xl:w-32"
        height="60"
        viewBox="0 0 100 60"
        preserveAspectRatio="none"
        style={{ flexShrink: 0 }}
        data-aos="fade"
        data-aos-delay={index * 150 + 100}
      >
        <path
          d={horizontalPath}
          fill="none"
          stroke="#9ca3af"
          strokeWidth="2"
          strokeDasharray="6 6"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </>
  );
};

const HowItWorks = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);


  return (
    <section className="py-20  bg-linear-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-4xl sm:text-5xl font-bold text-[#2d4a6f] mb-16"
          data-aos="fade-up"
        >
          How does Educate work?
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div
                className="flex flex-col items-center w-full md:w-auto px-4 mb-8 md:mb-0"
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
                {/* Number Circle */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-emerald-400 text-white font-bold text-2xl mb-6 shadow-lg">
                  {step.number}
                </div>
                {/* Title */}
                <p className="text-[#5a6c84] font-medium text-base max-w-[180px] mx-auto leading-snug">
                  {step.title}
                </p>
              </div>

              {/* Curved Connecting Line */}
              {index < steps.length - 1 && (
                <CurvedLine
                  direction={index === 0 ? "down" : "up"}
                  index={index}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-20" data-aos="fade-up" data-aos-delay="500">
          <p className="text-xl text-[#5a6c84] mb-8 font-medium">
            Join over{" "}
            <span className="font-bold text-[#2d4a6f]">
              1,000 satisfied learners
            </span>{" "}
            today.
          </p>
          <button
            onClick={()=>scrollToSection("courses")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            Explore courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
