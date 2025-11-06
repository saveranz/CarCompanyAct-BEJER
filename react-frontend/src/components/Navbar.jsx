import React from "react";
import PrimaryButton from './PrimaryButton';

const Navbar = ({ onExplore, onOrder, onHome, onOpenModal, onOpenSidePanel }) => {
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="py-5 grid grid-cols-3 items-center">
          {/* Left: logo */}
          <div className="col-span-1">
            <button
              type="button"
              onClick={() => {
                if (onHome) return onHome();
                window.history.pushState({}, '', '/');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
              className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent focus:outline-none"
            >
              Redline Motors
            </button>
          </div>

          {/* Center: nav links (centered) - Hidden on mobile, navigation will be in footer */}
          <div className="col-span-1 hidden lg:flex justify-center items-center space-x-6">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (onExplore) onExplore(0);
                else { window.history.pushState({}, '', '/listing'); window.dispatchEvent(new PopStateEvent('popstate')); }
              }}
              className="text-red-600 hover:text-red-800 transition-colors font-medium text-sm md:text-base whitespace-nowrap"
            >
              Car Listings
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (onOrder) onOrder();
                else { window.history.pushState({}, '', '/order'); window.dispatchEvent(new PopStateEvent('popstate')); }
              }}
              className="text-red-600 hover:text-red-800 transition-colors font-medium text-sm md:text-base whitespace-nowrap"
            >
              Order
            </a>

            <a href="#contact" className="text-red-600 hover:text-red-800 transition-colors font-medium text-sm md:text-base whitespace-nowrap">
              Contact
            </a>
          </div>

          {/* Right: CTA */}
          <div className="col-span-1 flex justify-end">
            <PrimaryButton label="Get Started" onClick={() => { if (onHome) onHome(); else { window.history.pushState({}, '', '/'); window.dispatchEvent(new PopStateEvent('popstate')); } }} />
          </div>
        </div>

        {/* Second row: Modal and Side Panel buttons */}
        <div className="pb-4 flex justify-center items-center space-x-6">
          <button
            onClick={onOpenModal}
            className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm md:text-base"
          >
            Open Modal
          </button>
          <button
            onClick={onOpenSidePanel}
            className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm md:text-base"
          >
            Open Side Panel
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
