import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { fetchTestimonials } from "../utils/api";

import "swiper/css";
import "swiper/css/pagination";

// Enhanced custom styles for Swiper pagination
const customStyles = `
  .testimonial-swiper {
    position: relative;
  }
  .testimonial-swiper .swiper-pagination {
    bottom: 0px !important;
    margin-top: 20px;
  }
  .testimonial-swiper .swiper-pagination-bullet {
    width: 10px !important;
    height: 10px !important;
    margin: 0 5px !important;
    background-color: #c7d2fe !important;
    opacity: 0.7 !important;
    transition: all 0.3s ease !important;
  }
  .testimonial-swiper .swiper-pagination-bullet-active {
    background-color: #4f46e5 !important;
    opacity: 1 !important;
    transform: scale(1.2) !important;
  }
`;

const STATIC_STUDENT_IMAGE = "/images/person.png";

// Helper Component for Star rating
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
  <div className="relative w-full lg:w-1/2 flex justify-center items-center mb-2 lg:mb-0 lg:pr-10">
    <div className="relative w-full max-w-[350px] lg:max-w-[400px] aspect-7/9">
      <img
        src={STATIC_STUDENT_IMAGE}
        alt="Student Testimonial"
        className="w-full h-full object-contain pl-4"
      />
    </div>
  </div>
);

const TestimonialContent = ({ testimonial }) => (
  <div className="w-full lg:w-1/2 text-center lg:text-left p-4 pb-12"> {/* Added pb-12 */}
    <blockquote className="text-gray-600 italic mb-6 text-lg leading-relaxed relative"> {/* Increased mb-6 */}
      {/* Big Quote Icon */}
      <span className="absolute -top-6 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 text-indigo-200 text-7xl font-bold -z-10 opacity-70">
        "
      </span>
      <br />
      {testimonial.comment}
    </blockquote>

    <div className="flex justify-center lg:justify-start mt-6 mb-3"> {/* Increased margins */}
      <StarRating rating={parseFloat(testimonial.rating)} />
    </div>

    <p className="mt-4 font-semibold text-gray-900">{testimonial.comment_by}</p> {/* Increased mt-4 */}
    <p className="text-sm text-gray-500 mt-1">{testimonial.location || "Poland"}</p> {/* Added mt-1 */}
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
    <section className="py-12 bg-linear-to-b from-indigo-50 to-indigo-50">
      <style>{customStyles}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12"> {/* Added mb-12 */}
          What Our Student Says
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-5xl mx-auto min-h-[400px] lg:p-6">
          <StaticTestimonialImage />
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="testimonial-swiper w-full lg:w-1/2 h-full" // Removed pb-20, using custom class
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