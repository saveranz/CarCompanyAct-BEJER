import React from "react";

const Footer = ({ onExplore, onOrder }) => {
  return (
    <footer className="w-full bg-red-800 text-red-100">
      {/* Mobile Navigation - Only visible on mobile/tablet */}
      <div className="lg:hidden border-b border-red-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <nav className="flex justify-around items-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (onExplore) onExplore(0);
                else { window.history.pushState({}, '', '/listing'); window.dispatchEvent(new PopStateEvent('popstate')); }
              }}
              className="flex flex-col items-center space-y-1 text-red-100 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-xs font-medium">Car Listings</span>
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (onOrder) onOrder();
                else { window.history.pushState({}, '', '/order'); window.dispatchEvent(new PopStateEvent('popstate')); }
              }}
              className="flex flex-col items-center space-y-1 text-red-100 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="text-xs font-medium">Order</span>
            </a>

            <a
              href="#contact"
              className="flex flex-col items-center space-y-1 text-red-100 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-xs font-medium">Contact</span>
            </a>
          </nav>
        </div>
      </div>

      {/* Footer Info */}
      <div className="text-center py-8">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm">© 2025 Redline Motors. All rights reserved.</p>
          <p className="text-xs mt-2">Contact: sales@redlinemotors.example | +1 (555) 123-4567</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
