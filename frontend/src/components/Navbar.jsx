import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { scrollToSection } from '../utils/scroll';

const navItems = ["Home", "Programs", "Courses", "Admission", "Testimonial"];
const LOGO_URL = "/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToSection = (e, item) => {
    e.preventDefault();
    scrollToSection(item.toLowerCase());
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="shrink-0 flex items-center">
            <a
              href="#home"
              className="flex items-center"
              onClick={(e) => handleScrollToSection(e, "Home")}
            >
              <img
                className="h-9 w-auto rounded-md"
                src={LOGO_URL}
                alt="Educate"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.style.display = "none";
                  const textFallback = document.createElement("span");
                  textFallback.className = "text-xl font-bold text-gray-900";
                  textFallback.innerHTML =
                    '<span class="text-2xl font-extrabold text-indigo-700">E</span>ducate';
                  e.currentTarget.parentNode.appendChild(textFallback);
                }}
              />
            </a>
          </div>

          {/* Desktop Menu Links */}
          <div className="hidden md:flex md:space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleScrollToSection(e, item)}
                className="text-gray-700 hover:text-indigo-700 transition duration-150 ease-in-out font-medium cursor-pointer py-1"
              >
                {item}
              </a>
            ))}

            {/* Desktop Buttons */}
            <div className="flex items-center space-x-4 ml-4">
              <button
                className="text-indigo-600 hover:bg-indigo-600 hover:text-white border-2 border-indigo-600 rounded-lg font-medium py-2 px-5 transition duration-150 ease-in-out transform hover:scale-[1.02]"
              >
                Log in
              </button>
              <button className="bg-[#7dd3a0] hover:bg-green-700 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition duration-150 ease-in-out transform hover:scale-[1.02]">
                Registration
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-700 hover:bg-gray-100 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Content */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } absolute w-full bg-white shadow-2xl border-t border-gray-100`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleScrollToSection(e, item)}
              className="text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
            >
              {item}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-100">
            <button className="w-full text-left text-indigo-600 hover:bg-indigo-600 hover:text-white border-2 border-indigo-600 block px-3 py-2 rounded-md text-base font-medium">
              Log in
            </button>
            <button className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-3 rounded-lg text-base shadow-md transition duration-150 ease-in-out">
              Registration
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;