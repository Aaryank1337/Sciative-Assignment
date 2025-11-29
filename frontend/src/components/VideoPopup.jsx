import React from 'react';
import { X } from 'lucide-react'; 

const VideoPopup = ({ videoId, onClose }) => {
  if (!videoId) return null; 

  return (
    <div className="fixed inset-0 z-999 bg-black bg-opacity-75 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 bg-gray-800 bg-opacity-75 rounded-full text-white hover:bg-opacity-100 transition-all"
          aria-label="Close video"
        >
          <X size={24} />
        </button>
        <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoPopup;