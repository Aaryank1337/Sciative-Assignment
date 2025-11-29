import React from 'react';

// You might need a utility component or icons for the author/lesson/duration
// I'll keep the SVG placeholders for simplicity, but using a library like lucide-react (like you installed earlier) is better.

const CourseCard = ({ course }) => {
  // Determine the correct style for the Price/Free badge
  const priceBadgeClass = course.isFree 
    ? "bg-green-400 text-white" // Green background for "Free"
    : "bg-[#212a3d] text-white"; // Dark background for price (Adjust color code if needed)

  // Style for the Tag badge (e.g., "Software")
  const tagBadgeClass = "bg-white text-[#212a3d]"; // White background, dark text

  // Adjust author name for cleaner display
  const authorName = course.author.split(' ').slice(0, 2).join(' ');


  return (
    // Card Container (Removed transform/hover-translate-y to better match the reference image's subtle style)
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group border border-gray-100">
      
      {/* Image with Tag/Badge Container */}
      <div className="relative h-48">
        <img 
          className="w-full h-full object-cover transition duration-300 group-hover:opacity-90"
          // Using placeholder image for demonstration. Replace with actual image URLs.
          src={course.imagePlaceholder} 
          alt={course.title} 
        />
        
        {/* === TAG BADGE (Bottom Left) === */}
        <div className={`absolute bottom-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${tagBadgeClass} shadow-md`}>
          {course.tag}
        </div>

        {/* === PRICE/FREE BADGE (Bottom Right) === */}
        <div className={`absolute bottom-3 right-3 text-xs font-semibold px-3 py-1 rounded-full ${priceBadgeClass} shadow-md`}>
          {course.isFree ? "Free" : `$${course.price}`}
        </div>
      </div>
      
      {/* Card Content */}
      <div className="p-4 sm:p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#4f46e5] transition duration-300 leading-snug">
          {course.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {course.description}
        </p>

        {/* Footer Info (Author, Lessons) */}
        <div className="flex items-center text-xs text-gray-500 border-t pt-4">
          {/* Author Info */}
          <div className="flex items-center space-x-2 mr-4">
              {/* Icon Placeholder for Author - Use a clean circle icon like in the image */}
            <span className="text-gray-900">
              {/* This is a simple circle, mimicking the author's avatar in the image */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rounded-full bg-gray-200 text-gray-700 p-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </span>
            <span className="text-gray-900 font-medium text-sm">by {authorName}</span>
          </div>

          {/* Lessons Info (Using a simplified layout to match the image's "3 Lesson" style) */}
          <div className="flex items-center space-x-1 border border-gray-200 rounded-lg py-1 px-3">
            <span className="text-gray-500">
              {/* Book Icon Placeholder for Lessons */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253" />
              </svg>
            </span>
            <span className="text-sm text-gray-600">{course.lessons} Lesson</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;