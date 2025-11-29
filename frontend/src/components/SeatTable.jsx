import React, { useState, useEffect, useMemo } from "react";
import { fetchSeatInfo } from "../utils/api";

const ITEMS_PER_PAGE = 6;

const SeatTable = () => {
  const [seats, setSeats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadSeatInfo = async () => {
      setCurrentPage(1);
      try {
        const data = await fetchSeatInfo();
        setSeats(data);
        setError(null);
      } catch (err) {
        setError(
          "Failed to load seat data. Please check the API source or network connection."
        );
      } finally {
        setLoading(false);
      }
    };

    loadSeatInfo();
  }, []);

  const totalPages = Math.ceil(seats.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentSeats = useMemo(() => {
    return seats.slice(startIndex, endIndex);
  }, [seats, startIndex, endIndex]);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (loading) {
    return (
      <div className="py-8 text-center text-indigo-600 font-semibold">
        Loading seat information...
      </div>
    );
  }
  if (error) {
    return (
      <div className="py-8 text-center text-red-600 font-semibold">
        Error: {error}
      </div>
    );
  }
  if (seats.length === 0) {
    return (
      <div className="py-8 text-center text-gray-600">
        No seat information available.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto shadow-xl rounded-lg border border-gray-200 w-full">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-indigo-100">
          <tr>
            <th className="px-4 sm:px-6 md:px-13 py-3 sm:py-4 md:py-5 text-center text-xs sm:text-sm md:text-base font-bold text-gray-900 border border-violet-300 uppercase tracking-wider">SEAT</th>
            <th className="px-4 sm:px-6 md:px-13 py-3 sm:py-4 md:py-5 text-center text-xs sm:text-sm md:text-base font-bold text-gray-900 border border-violet-300 uppercase tracking-wider">PRICE</th>
            <th className="px-4 sm:px-6 md:px-13 py-3 sm:py-4 md:py-5 text-center text-xs sm:text-sm md:text-base font-bold text-gray-900 border border-violet-300 uppercase tracking-wider">STATUS</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentSeats.map((seat, index) => {
            return (
              <tr
                key={startIndex + index}
                className="hover:bg-gray-50 transition duration-150"
              >
                <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 border border-violet-300 whitespace-nowrap text-center text-sm sm:text-base md:text-lg font-bold text-indigo-700">
                  {seat.seat_no}
                </td>
                <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 border border-violet-300 whitespace-nowrap text-center text-sm sm:text-base md:text-lg font-bold text-gray-900">
                  {seat.price.toLocaleString()}
                </td>
                <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 border border-violet-300 whitespace-nowrap text-center text-sm sm:text-base md:text-lg font-bold text-indigo-700">
                  {seat.status}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {totalPages > 1 && (
        <div className="flex justify-center items-center py-3 sm:py-4 space-x-1 sm:space-x-2 border-t border-gray-200 bg-white flex-wrap gap-y-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg text-indigo-600 border border-indigo-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-50 transition"
          >
            Previous
          </button>

          {pageNumbers.map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg transition ${
                currentPage === page
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-indigo-600 hover:bg-indigo-50"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg text-indigo-600 border border-indigo-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-50 transition"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default SeatTable;