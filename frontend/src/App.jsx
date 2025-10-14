import React from "react";
import Hero from "./curser/Hero";
import SplashCursor from "./curser/SplashCursor";
import AnimatedBackground from "./components/AnimatedBackground";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import MainContent from "./components/MainContent";
import GlobalStyles from "./components/GlobalStyles";

export default function GamingEventPage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden font-sans">
      {/* Three.js 3D Background */}
      <div className="fixed inset-0 z-0">
        <Hero />
      </div>

      {/* Animated Background */}
      <AnimatedBackground />

      {/* Left Sidebar */}
      <LeftSidebar />

      {/* Right Sidebar */}
      <RightSidebar />

      {/* Main Content */}
      <MainContent />

      {/* Global Styles */}
      <GlobalStyles />
    </div>
  );
}