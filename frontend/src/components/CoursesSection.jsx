import React from "react";
import CourseCard from "./CourseCard"; // Import the new component

const courses = [
  {
    title: "Native Mac Apps in Swift",
    description:
      "Take your dev skills to the next level with this ground-up tutorial on native Mac apps.",
    imagePlaceholder:
      "https://via.placeholder.com/600x400/212a3d/ffffff?text=Swift+Programming",
    author: "Annabelle Portar", // Changed to match image
    lessons: 3, // Changed to match image
    tag: "Software", // 👈 Added tag
    price: "79.00 USD", // 👈 Added price
    isFree: false, // 👈 Added free status
  },
  {
    title: "Fundamentals of Interior Design",
    description:
      "A begginers guide to dsigning or renoating breathtaking interior spaces that pop.", // Changed to match image
    imagePlaceholder:
      "https://via.placeholder.com/600x400/a3c6df/212a3d?text=Interior+Design",
    author: "Annabelle Portar", // Changed to match image
    lessons: 3, // Changed to match image
    tag: "Art & Design", // 👈 Added tag
    price: "Free", // 👈 Added price (can be "Free" or a string)
    isFree: true, // 👈 Added free status
  },
];

const CoursesSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header and CTA */}
        <div className="flex justify-between items-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#212a3d] font-serif">
            {" "}
            {/* Adjusted text color and font-weight */}
            New Courses
          </h2>
          {/* Adjusted button style to match the image's purple color and background */}
          <button className="bg-[#6b5acd] text-white hover:bg-[#5a48b3] font-medium py-3 px-8 rounded-lg transition duration-300 text-sm tracking-wide uppercase">
            Explore Courses
          </button>
        </div>

        {/* Course Cards Grid (Ensure you only have 2 courses defined if you want 2 columns as in the image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {" "}
          {/* Changed to md:grid-cols-2 to match the image */}
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
