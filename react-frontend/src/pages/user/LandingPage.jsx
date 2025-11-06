import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import FeaturesSection from "../../components/FeaturesSection";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import SidePanel from "../../components/SidePanel";

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const handleExplore = (index) => {
    // If an index is provided, use it to determine which section to open.
    // index === 0 -> car listings (per image instructions)
    if (typeof index === "number") {
      if (index === 0) {
        // navigate to listing page via history API (SPA)
        window.history.pushState({}, '', '/listing');
        window.dispatchEvent(new PopStateEvent('popstate'));
        return;
      }
    }

    // default behavior: scroll to features
    const el = document.getElementById("features");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleOrder = () => {
    // navigate to order page via history API (SPA)
    window.history.pushState({}, '', '/order');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen w-full">
      <Navbar 
        onExplore={handleExplore} 
        onOrder={handleOrder}
        onOpenModal={() => setIsModalOpen(true)}
        onOpenSidePanel={() => setIsSidePanelOpen(true)}
      />
      
      <div className="max-w-7xl mx-auto px-4">
        <HeroSection onOrder={handleOrder} />
        <FeaturesSection onExplore={handleExplore} onOrder={handleOrder} />
        <CTASection onExplore={handleExplore} />
      </div>
      
      <Footer onExplore={handleExplore} onOrder={handleOrder} />

      {/* Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="My Modal"
      >
        <p>This is the modal content.</p>
        <p className="mt-4">You can add any content here, such as forms, images, or detailed information.</p>
      </Modal>

      {/* Side Panel */}
      <SidePanel 
        isOpen={isSidePanelOpen} 
        onClose={() => setIsSidePanelOpen(false)}
        title="My Side Panel"
      >
        <p>This is the side panel content.</p>
        <p className="mt-4">Side panels are great for navigation menus, filters, or additional information without leaving the page.</p>
      </SidePanel>
    </div>
  );
};

export default LandingPage;
