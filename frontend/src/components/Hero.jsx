import React, { useState } from "react";
import VideoPopup from "./VideoPopup";
import { scrollToSection } from '../utils/scroll';

const HeroSection = () => {
  const [showVideoPopup, setShowVideoPopup] = useState(false);
  const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ";

  return (
    <section className="bg-linear-to-b from-indigo-50 to-indigo-50 pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32">
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&display=swap");
        h1 {
          font-family: "Playfair Display", serif;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading and Subheading */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Get The Best Online <br className="hidden sm:inline" />
          <span className="text-indigo-700">Learning Service</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>

        <button onClick={()=>scrollToSection("courses")} className="bg-[#6366f1] hover:bg-[#5558e3] text-white font-semibold py-3 px-8 rounded-lg shadow-lg text-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
          Start a course
        </button>

        {/* Hero Image with Play Button Overlay */}
        <div
          className="relative mt-16 lg:mt-24 w-full max-w-3xl mx-auto rounded-xl shadow-2xl overflow-hidden cursor-pointer group"
          onClick={() => setShowVideoPopup(true)}
        >
          <img
            className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
            src="/images/book2.png"
            alt="Person interacting with an online learning tablet"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-opacity-30 group-hover:bg-opacity-40 transition-opacity duration-300">
            <div className="p-4 rounded-full bg-indigo-600 bg-opacity-90 group-hover:bg-opacity-100 transform group-hover:scale-110 transition-all duration-300">
              <svg
                className="h-12 w-12 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Video Popup Component */}
      {showVideoPopup && (
        <VideoPopup
          videoId={YOUTUBE_VIDEO_ID}
          onClose={() => setShowVideoPopup(false)}
        />
      )}
    </section>
  );
};

export default HeroSection;
