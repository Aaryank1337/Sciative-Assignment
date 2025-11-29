
import React from 'react';
import { BookOpen, User } from 'lucide-react';

// CourseCard Component
const CourseCard = ({ course }) => {
  const priceBadgeClass = course.isFree 
    ? "bg-[#86efac] text-gray-800" 
    : "bg-[#86efac] text-gray-800";

  const tagBadgeClass = "bg-white text-gray-700 shadow-lg";

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      
      {/* Image with Tag/Badge Container */}
      <div className="relative h-84 overflow-hidden">
        <img 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={course.imagePlaceholder} 
          alt={course.title} 
        />
        
        {/* TAG BADGE (Bottom Left) */}
        <div className={`absolute bottom-5 left-5 text-sm font-medium px-5 py-2 rounded-full ${tagBadgeClass}`}>
          {course.tag}
        </div>

        {/* PRICE/FREE BADGE (Bottom Right) */}
        <div className={`absolute bottom-5 right-5 text-sm font-semibold px-5 py-2 rounded-full ${priceBadgeClass}`}>
          {course.isFree ? "Free" : `$ ${course.price}`}
        </div>
      </div>
      
      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2 leading-tight">
          {course.title}
        </h3>
        <p className="text-gray-600 text-base mb-2 leading-relaxed">
          {course.description}
        </p>

        {/* Footer Info */}
        <div className="flex items-center justify-between">
          {/* Author Info */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <User className="w-5 h-5 text-gray-500" />
            </div>
            <span className="text-gray-600 text-sm">
              by <span className="font-semibold text-gray-900">{course.author}</span>
            </span>
          </div>

          {/* Lessons Info */}
          <div className="flex items-center space-x-2 rounded-full bg-white border border-gray-200 py-2.5 px-4 shadow-sm">
            <BookOpen className="w-4 h-4 text-gray-600" />
            <span className="text-gray-900 font-semibold text-sm">{course.lessons} Lesson</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;