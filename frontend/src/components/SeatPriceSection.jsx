import React from 'react';
import SeatTable from './SeatTable';
import { CheckCircle } from 'lucide-react'; 

const SeatPriceSection = () => {
    return (
        <section className="py-12    bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="flex flex-col lg:flex-row justify-between items-start lg:space-x-12">
                    <div className="lg:w-1/2 pl-10 pt-20 mb-10 lg:mb-0">
                        <h2 className="text-5xl font-bold text-gray-900 mb-6 pb-1">
                            Get the <span className="text-indigo-700">Seat price</span>
                        </h2>
                        <p className="text-gray-600 text-xl mb-8 max-w-lg">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>

                        <ul className="space-y-6 mb-8">
                            <li className="flex items-start text-lg text-gray-700">
                                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 shrink-0" />
                                <div>
                                    <span className="font-semibold">World class</span>
                                    <p className="text-m text-gray-500 italic ">
                                        Lorem ipsum is simply dummy text 
                                        <br />of the printing and typesetting
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start text-lg text-gray-700">
                                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 shrink-0" />
                                <div>
                                    <span className="font-semibold">Affordable</span>
                                    <p className="text-m text-gray-500 italic">
                                        Lorem ipsum is simply dummy text <br />of the printing and typesetting
                                    </p>
                                </div>
                            </li>
                        </ul>
                        
                        <a href="#" className="text-indigo-600 hover:text-indigo-800 font-semibold transition duration-200">
                            Learn more →
                        </a>
                    </div>

                    <div className="lg:w-1/2 flex justify-center ">
                        <SeatTable />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SeatPriceSection;