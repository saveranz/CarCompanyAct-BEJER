import React from "react";
import PrimaryButton from "./PrimaryButton";

const CTASection = ({ onExplore }) => {
  return (
  <section className="w-full bg-gradient-to-r from-red-600 via-red-500 to-red-400 text-white text-center py-20 px-6 md:px-12">
      <div className="w-full">
        <h3 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Drive Home Your Next Car?
        </h3>
        <p className="mb-10 text-lg text-red-100">
          Discover great value and financing options on our selection of vehicles.
        </p>
        <PrimaryButton label="Browse Cars" variant="outline" onClick={() => onExplore && onExplore(0)} className="mx-auto" />
      </div>
    </section>
  );
};

export default CTASection;
