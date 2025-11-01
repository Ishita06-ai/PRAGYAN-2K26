import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import MainContent from "../components/MainContent";
import GlobalStyles from "../components/GlobalStyles";
import BackgroundLayer from "../components/BackgroundLayer";
import BorderOverlay from "../components/BorderOverlay";

const HomePage = () =>  {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden font-sans">
      {/* Background Layer */}
      <BackgroundLayer />
      
      {/* Main Layout Container */}
      <div className="relative w-full h-screen bg-gradient-to-br  to-gray-800 overflow-hidden">
        {/* Content Container */}
        <div className="absolute inset-8 md:inset-12 border border-cyan-500/30" />
        
        {/* Border Overlay System */}
        <BorderOverlay />
        
        {/* Sidebars */}
        <LeftSidebar />
        <RightSidebar />
        
        {/* Main Content */}
        <MainContent />
      </div>

      {/* Global Styles */}
      <GlobalStyles />
    </div>
  );
}

export default HomePage;