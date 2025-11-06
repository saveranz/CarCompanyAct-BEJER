import React from "react";
import FeatureCard from "./FeatureCard";
import { LightningBolt, Smartphone, ShieldCheck } from './icons.jsx';

const FeaturesSection = ({ onExplore, onOrder }) => {
  return (
    <section id="features" className="w-full py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose RedLine Motors</h3>
          <p className="text-gray-600 text-lg">
            Trusted vehicles, transparent pricing, and hassle-free purchase
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<LightningBolt />}
            title="Car Listings"
            description="Browse a wide selection of makes, models, and trims to find the right car."
            onClick={() => onExplore && onExplore(0)}
          />

          <FeatureCard
            icon={<Smartphone />}
            title="Order Your Car Now"
            description="Reserve or purchase a vehicle online with transparent pricing and support."
            onClick={() => onOrder && onOrder()}
          />

          <FeatureCard
            icon={<ShieldCheck />}
            title="Certified Vehicles"
            description="Each vehicle passes a multi-point inspection and comes with warranty options."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
