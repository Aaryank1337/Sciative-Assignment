import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { fetchTestimonials } from "../utils/api";

import "swiper/css";
import "swiper/css/pagination";

const STATIC_STUDENT_IMAGE = "/images/man1.png"; 

// Helper Component for Star rating (kept the same)
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const emptyStars = Math.max(0, 5 - fullStars);

  return (
    <div className="flex items-center space-x-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          className="w-5 h-5 fill-yellow-400 stroke-yellow-400"
        />
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <Star
          key={`empty-${i}`}
          className="w-5 h-5 fill-gray-300 stroke-gray-400"
        />
      ))}
    </div>
  );
};

const StaticTestimonialImage = () => (
    <div className="relative w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0 lg:pr-10 min-h-[400px]">
        <div className="relative w-[300px] h-[380px] lg:w-[350px] lg:h-[420px]">
            {/* 1. Purple Background Shape */}
            <div className="absolute w-full h-[50%] bg-[#b9adda] rounded-[10px] transform  top-[43%] left-[5%] z-40"></div>
            {/* 2. Green Foreground Shape  */}
            <div className="absolute w-full h-[50%] bg-[#8ed3ac] rounded-[10px] bottom-[-1%] left-[-4%] transform z-20"></div>
            <img
                src={STATIC_STUDENT_IMAGE} 
                alt="Student Testimonial"
                className="absolute pl-4 top-0 left-0 w-full h-full object-contain z-60" 
            />
        </div>
    </div>
);
const TestimonialContent = ({ testimonial }) => (
  <div className="w-full lg:w-1/2 text-center lg:text-left p-4">
    <blockquote className="text-gray-600 italic mb-4 text-lg leading-relaxed relative">
      {/* Big Quote Icon */}
      <span className="absolute -top-6 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 text-indigo-200 text-7xl font-bold -z-10 opacity-70">
        “
      </span>
      <br />
      {testimonial.comment}
    </blockquote>

    <div className="flex justify-center lg:justify-start mt-4 mb-2">
      <StarRating rating={parseFloat(testimonial.rating)} />
    </div>

    <p className="mt-3 font-semibold text-gray-900">{testimonial.comment_by}</p>
    <p className="text-sm text-gray-500">{testimonial.location || "Poland"}</p>
  </div>
);

// Main Section Component
const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const data = await fetchTestimonials(); 
        setTestimonials(data);
        setError(null);
      } catch (err) {
        setError("Failed to load testimonials.");
      } finally {
        setLoading(false);
      }
    };

    loadTestimonials();
  }, []); 

  if (loading)
    return (
      <div className="py-20 text-center text-indigo-600">
        Loading testimonials...
      </div>
    );
  if (error)
    return <div className="py-20 text-center text-red-600">Error: {error}</div>;
  if (testimonials.length === 0)
    return (
      <div className="py-20 text-center text-gray-600">
        No testimonials available.
      </div>
    );

  return (
    <section className="py-20 bg-linear-to-b from-indigo-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
          What Our Student Says
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center  max-w-5xl mx-auto min-h-[400px] lg:p-12">
          <StaticTestimonialImage />
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="w-full lg:w-1/2 h-full pb-16" 
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center"
              >
                <TestimonialContent testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
