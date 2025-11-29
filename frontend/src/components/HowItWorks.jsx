import React from 'react';

// Using simple data structure for the steps
const steps = [
  {
    number: 1,
    title: "Browse Course from our expert contributor",
  },
  {
    number: 2,
    title: "Purchase quickly and securely",
  },
  {
    number: 3,
    title: "That's start learning right away",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title */}
        <h2 
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12"
          // AOS Suggestion: data-aos="fade-up"
        >
          How does Educate work?
        </h2>
        
        {/* Steps Container */}
        <div className="flex justify-center items-start relative mb-12">
          
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              {/* Step Item - uses w-full to ensure equal spacing */}
              <div 
                className="flex flex-col items-center w-full max-w-xs px-4"
                // AOS Suggestion: data-aos="zoom-in" data-aos-delay={`${index * 150}`}
              >
                {/* Number Circle */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold text-lg mb-4 shadow-lg ring-4 ring-indigo-200">
                  {step.number}
                </div>
                {/* Title */}
                <p className="text-gray-700 font-medium max-w-[150px] mx-auto">
                  {step.title}
                </p>
              </div>

              {/* Connecting Line (Styled as Dotted/Dashed for Visual) */}
              {index < steps.length - 1 && (
                <div 
                  className="flex-1 mt-6 hidden sm:flex items-start"
                  // AOS Suggestion: data-aos="fade-zoom-in" data-aos-delay={`${index * 150 + 100}`}
                >
                  <div className="border-t border-dashed border-gray-300 w-full h-0 mt-2"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Closing Text and CTA */}
        <div className="mt-16" 
             // AOS Suggestion: data-aos="fade-up" data-aos-delay="500"
        >
          <p className="text-xl text-gray-700 mb-6">
            Join over <span className="font-extrabold text-indigo-700">1,000 satisfied learners</span> today.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Explore Courses
          </button>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;