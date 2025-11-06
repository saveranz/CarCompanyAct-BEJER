import React from 'react';

export default function FeatureCard({ icon, title, description, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-white border border-gray-200 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left w-full"
      aria-label={title}
    >
      <div className="text-4xl mb-4 text-red-600" aria-hidden>
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </button>
  );
}
