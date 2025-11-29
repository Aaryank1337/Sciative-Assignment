import React from "react";
import CourseCard from "./CourseCard";
import { scrollToSection } from '../utils/scroll';

const CoursesSection = () => {
  const courses = [
    {
      title: "Native Mac Apps in Swift",
      description:
        "Take your dev skills to the next level with this ground-up tutorial on native Mac apps.",
      imagePlaceholder:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      author: "Annabelle Portar",
      lessons: 3,
      tag: "Software",
      price: "79.00 USD",
      isFree: false,
    },
    {
      title: "Fundamentals of Interior Design",
      description:
        "A beginner's guide to designing or renovating breathtaking interior spaces that pop.",
      imagePlaceholder:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
      author: "Annabelle Portar",
      lessons: 3,
      tag: "Art & Design",
      price: "Free",
      isFree: true,
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
          <h2 className="text-2xl sm:text-5xl font-bold text-[#1e3a5f]">
            New Courses
          </h2>
          <button
            onClick={()=>scrollToSection("courses")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            EXPLORE COURSES
          </button>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
