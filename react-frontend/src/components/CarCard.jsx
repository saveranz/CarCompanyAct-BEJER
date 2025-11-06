import React from 'react';

export default function CarCard({ image, name, quantity, onClick }) {
  const fallback = 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&h=400&w=800';

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-full h-56 md:h-48 lg:h-56 relative bg-gray-100">
        <img
          src={image || fallback}
          alt={name}
          onError={(e) => { e.currentTarget.src = fallback; }}
          loading="lazy"
          className="object-cover w-full h-full"
        />

        {/* overlay at bottom of image with name and quantity */}
        <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
          <div className="flex items-center justify-between text-white">
            <div className="font-semibold truncate">{name}</div>
            <div className="text-sm opacity-90">{quantity} available</div>
          </div>
        </div>
      </div>

      {/* keep a small footer for actions */}
      <div className="p-3 flex items-center justify-end">
        <button className="text-red-600 hover:text-red-800">View</button>
      </div>
    </div>
  );
}
