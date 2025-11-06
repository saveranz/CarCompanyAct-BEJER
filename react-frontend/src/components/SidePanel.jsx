import React from 'react';

const SidePanel = ({ isOpen, onClose, title, children }) => {
  return (
    <>
      {/* Overlay - transparent but clickable */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 transition-opacity"
          onClick={onClose}
        ></div>
      )}

      {/* Side Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            {title && (
              <h2 className="text-xl font-bold text-gray-900">
                {title}
              </h2>
            )}
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="text-gray-600">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidePanel;
