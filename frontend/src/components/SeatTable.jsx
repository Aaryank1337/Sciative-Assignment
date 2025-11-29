import React, { useState, useEffect } from "react";
import { fetchSeatInfo } from "../utils/api";

const SeatTable = () => {
  const [seats, setSeats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadSeatInfo = async () => {
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
    <div className="overflow-x-auto shadow-xl rounded-lg border border-gray-200">
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
            return (
              <tr
                key={index}
                className="hover:bg-gray-50 transition duration-150"
              >
                <td className="px-6 py-3 border border-violet-300 whitespace-nowrap text-center text-lg font-bold text-indigo-700">
                  {seat.seat_no}
                </td>
                <td className="px-6 py-3 border border-violet-300 whitespace-nowrap text-center text-lg font-bold text-gray-900">
                  {seat.price.toLocaleString()}
                </td>
                <td className="px-6 py-3 border border-violet-300 whitespace-nowrap text-center text-lg font-bold text-indigo-700">
                  {seat.status}
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
