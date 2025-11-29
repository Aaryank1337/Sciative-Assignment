import React, { useState, useEffect } from 'react';

const API_URL = "https://viaje.ai/seatinfo_api/";

const SeatTable = () => {
  const [seats, setSeats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        if (data && Array.isArray(data.data)) {
          setSeats(data.data);
          setError(null);
        } else {
          throw new Error("Invalid data structure received from API. Expected 'data' array.");
        }
      })
      .catch(err => {
        console.error("Fetching error:", err);
        setError("Failed to load seat data. Please check the API source or network connection.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Helper function to determine display text and Tailwind class based on the 'status' code
  const getStatusInfo = (statusCode) => {
    switch (statusCode.toUpperCase()) {
      case 'A': // Available
        // Changed text to match the design (only 'A' or 'B')
        return { text: 'A', class: 'text-green-800 bg-white' }; 
      case 'B': // Booked
        return { text: 'B', class: 'text-red-800 bg-white' }; 
      case 'R': // Reserved
        return { text: 'Reserved', class: 'text-yellow-800 bg-white' };
      default:
        return { text: 'Unknown', class: 'text-gray-800 bg-white' };
    }
  };

  if (loading) {
    return <div className="py-8 text-center text-indigo-600 font-semibold">Loading seat information...</div>;
  }
  if (error) {
    return <div className="py-8 text-center text-red-600 font-semibold">Error: {error}</div>;
  }
  if (seats.length === 0) {
    return <div className="py-8 text-center text-gray-600">No seat information available.</div>;
  }

  return (
    // Table is now wrapped in a simple div, ready to be placed in the main component
    <div className="overflow-x-auto shadow-xl rounded-m border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-indigo-100"> 
          <tr>
            <th className="px-13 py-5 text-center text-m font-bold text-gray-900 border border-violet-300 uppercase tracking-wider">
              SEAT
            </th>
            <th className="px-13 py-5 text-center text-m font-bold text-gray-900 border border-violet-300 uppercase tracking-wider">
              PRICE
            </th>
            <th className="px-13 py-5 text-center text-m font-bold text-gray-900 border border-violet-300 uppercase tracking-wider">
              STATUS
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {seats.map((seat, index) => {
            const statusInfo = getStatusInfo(seat.status);
            return (
              <tr key={index} className="hover:bg-gray-50 transition duration-150">
                {/* Seat Number (seat_no) */}
                <td className="px-6 py-3 border border-violet-300 whitespace-nowrap text-center text-lg font-bold text-indigo-700">
                  {seat.seat_no}
                </td>

                {/* Price */}
                <td className="px-6 py-3 border border-violet-300 whitespace-nowrap text-center text-lg font-bold text-gray-900">
                  {/* Remove '$' for closer match to design, keep bold */}
                  {seat.price.toLocaleString()} 
                </td>
                
                {/* Status Badge - Text only for closer design match */}
                <td className="px-6 py-3 border border-violet-300 whitespace-nowrap text-center text-lg font-bold text-indigo-700">
                  {statusInfo.text}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SeatTable;