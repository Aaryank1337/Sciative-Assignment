import React from "react";
import SeatTable from "./SeatTable";
import { CheckCircle } from "lucide-react";

const SeatPriceSection = () => {
  return (
    <section className="py-8 sm:py-10 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:space-x-12">
          <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:pl-10 pt-6 sm:pt-10 lg:pt-15 mb-8 sm:mb-10 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 pb-1">
              Get the <span className="text-indigo-700">Seat price</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-6 sm:mb-7 md:mb-8 max-w-lg">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            <ul className="space-y-4 sm:space-y-5 md:space-y-6 mb-6 sm:mb-7 md:mb-8">
              <li className="flex items-start text-base sm:text-lg text-gray-700">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2 sm:mr-3 mt-1 shrink-0" />
                <div>
                  <span className="font-semibold">World class</span>
                  <p className="text-sm sm:text-base text-gray-500 italic">
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting
                  </p>
                </div>
              </li>
              <li className="flex items-start text-base sm:text-lg text-gray-700">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2 sm:mr-3 mt-1 shrink-0" />
                <div>
                  <span className="font-semibold">Affordable</span>
                  <p className="text-sm sm:text-base text-gray-500 italic">
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting
                  </p>
                </div>
              </li>
            </ul>

            <a
              href="#"
              className="text-indigo-600 hover:text-indigo-800 font-semibold transition duration-200 text-sm sm:text-base"
            >
              Learn more →
            </a>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center px-4 sm:px-6 lg:px-0">
            <SeatTable />
          </div>
        </div>  
      </div>
    </section>
  );
};

export default SeatPriceSection;
