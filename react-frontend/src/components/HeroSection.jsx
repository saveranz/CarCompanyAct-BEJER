import React from "react";
import PrimaryButton from "./PrimaryButton";

const HeroSection = ({ onOrder }) => {
  return (
    <section className="w-full py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            Drive Home in
            <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              Style
            </span>
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Browse our curated selection of certified pre-owned and new vehicles.
            Find detailed listings, compare specs, and place an order online
            with flexible financing options.
          </p>
          <PrimaryButton label="Order Now" onClick={onOrder} />
        </div>

        <div>
          <img
            src="https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&h=627&w=1200"
            alt="Car showcase"
            className="rounded-3xl shadow-2xl w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
