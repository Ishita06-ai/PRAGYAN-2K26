import React from "react";
import Hero from "./curser/Hero";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import MainContent from "./components/MainContent";
import GlobalStyles from "./components/GlobalStyles";
import StarField from "./components/StartField"; // Fixed import name
import GridLines from "./components/GridLines";

export default function GamingEventPage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden font-sans">
      {/* Three.js 3D Background with StarField and GridLines */}
      <div className="fixed inset-0 z-0">
        <Hero />
        {/* StarField Background */}
        <StarField
          density="high"
          showComets={true}
          cometCount={5}
          isDark={true}
        />
        {/* GridLines Overlay */}
        <GridLines
          strokeColor="#00ffff"
          horizontalLines={25}
          verticalLines={25}
          strokeOpacity={0.15}
          strokeWidth={0.5}
          speed={8}
          opacity={0.3}
        />
      </div>
      {/* Gaming Corner Decorative Elements */}
     <div className="fixed inset-0 z-10 pointer-events-none">
  {/* Top Left Corner */}
  <div className="absolute top-0 left-0 w-64 h-32 md:w-80 md:h-40">
    {/* Outer glow layer */}
    <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-red-500 via-purple-500 to-transparent blur-sm opacity-75"></div>
    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-red-500 via-purple-500 to-transparent blur-sm opacity-75"></div>

    {/* Main border */}
    <div className="absolute top-0 left-0 w-full h-3.5 bg-gradient-to-r from-red-600 via-purple-600 via-cyan-500 via-cyan-500 to-cyan-400"></div>
    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-red-600 via-purple-600 via-cyan-500 via-cyan-500 to-cyan-400"></div>

    {/* Inner electric lines */}
    <div className="absolute top-4 left-0 w-4/5 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent animate-pulse"></div>
    <div className="absolute top-0 left-4 w-0.5 h-4/5 bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent animate-pulse"></div>

    {/* Corner brackets */}
    <div className="absolute top-2 left-2 w-8 h-8 md:w-10 md:h-10 border-t-3 border-l-3 border-cyan-400 shadow-lg shadow-cyan-500/50"></div>
    <div className="absolute top-1 left-1 w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-red-500 animate-pulse"></div>

    {/* Corner accent fill */}
    <div className="absolute top-0 left-0 w-4 h-4 bg-gradient-to-br from-red-600 via-purple-600 to-transparent opacity-60"></div>

    {/* Tech dots */}
    <div className="absolute top-3 left-3 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
    <div className="absolute top-6 left-6 w-1.5 h-1.5 bg-purple-500 rounded-full"></div>

    {/* Diagonal accent */}
    <div className="absolute top-0 left-0 w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent rotate-45 origin-top-left"></div>
  </div>

  {/* Top Right Corner */}
  <div className="absolute top-0 right-0 w-64 h-32 md:w-80 md:h-40">
    {/* Outer glow layer */}
    <div className="absolute top-0 right-0 w-full h-3 bg-gradient-to-l from-red-500 via-purple-500 to-transparent blur-sm opacity-75"></div>
    <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-red-500 via-purple-500 to-transparent blur-sm opacity-75"></div>

    {/* Main border */}
    <div className="absolute top-0 right-0 w-full h-3.5 bg-gradient-to-l from-red-600 via-purple-600 via-cyan-500 via-cyan-500 to-cyan-400"></div>
    <div className="absolute top-0 right-0 w-1.5 h-full bg-gradient-to-b from-red-600 via-purple-600 via-cyan-500 via-cyan-500 to-cyan-400"></div>

    {/* Inner electric lines */}
    <div className="absolute top-4 right-0 w-4/5 h-0.5 bg-gradient-to-l from-cyan-400 via-blue-500 to-transparent animate-pulse"></div>
    <div className="absolute top-0 right-4 w-0.5 h-4/5 bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent animate-pulse"></div>

    {/* Corner brackets */}
    <div className="absolute top-2 right-2 w-8 h-8 md:w-10 md:h-10 border-t-3 border-r-3 border-cyan-400 shadow-lg shadow-cyan-500/50"></div>
    <div className="absolute top-1 right-1 w-6 h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-red-500 animate-pulse"></div>

    {/* Corner accent fill */}
    <div className="absolute top-0 right-0 w-4 h-4 bg-gradient-to-bl from-red-600 via-purple-600 to-transparent opacity-60"></div>

    {/* Tech dots */}
    <div className="absolute top-3 right-3 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
    <div className="absolute top-6 right-6 w-1.5 h-1.5 bg-purple-500 rounded-full"></div>

    {/* Diagonal accent */}
    <div className="absolute top-0 right-0 w-12 h-0.5 bg-gradient-to-l from-yellow-400 to-transparent -rotate-45 origin-top-right"></div>
  </div>

  {/* Bottom Left Corner */}
  <div className="absolute bottom-0 left-0 w-64 h-32 md:w-80 md:h-40">
    {/* Outer glow layer */}
    <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-red-500 via-purple-500 to-transparent blur-sm opacity-75"></div>
    <div className="absolute bottom-0 left-0 w-2 h-full bg-gradient-to-t from-red-500 via-purple-500 to-transparent blur-sm opacity-75"></div>

    {/* Main border */}
    <div className="absolute bottom-0 left-0 w-full h-3.5 bg-gradient-to-r from-red-600 via-purple-600 via-cyan-500 via-cyan-500 to-cyan-400"></div>
    <div className="absolute bottom-0 left-0 w-1.5 h-full bg-gradient-to-t from-red-600 via-purple-600 via-cyan-500 via-cyan-500 to-cyan-400"></div>

    {/* Inner electric lines */}
    <div className="absolute bottom-4 left-0 w-4/5 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent animate-pulse"></div>
    <div className="absolute bottom-0 left-4 w-0.5 h-4/5 bg-gradient-to-t from-cyan-400 via-blue-500 to-transparent animate-pulse"></div>

    {/* Corner brackets */}
    <div className="absolute bottom-2 left-2 w-8 h-8 md:w-10 md:h-10 border-b-3 border-l-3 border-cyan-400 shadow-lg shadow-cyan-500/50"></div>
    <div className="absolute bottom-1 left-1 w-6 h-6 md:w-8 md:h-8 border-b-2 border-l-2 border-red-500 animate-pulse"></div>

    {/* Corner accent fill */}
    <div className="absolute bottom-0 left-0 w-4 h-4 bg-gradient-to-tr from-red-600 via-purple-600 to-transparent opacity-60"></div>

    {/* Tech dots */}
    <div className="absolute bottom-3 left-3 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
    <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-purple-500 rounded-full"></div>

    {/* Diagonal accent */}
    <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent -rotate-45 origin-bottom-left"></div>
  </div>

  {/* Bottom Right Corner */}
  <div className="absolute bottom-0 right-0 w-64 h-32 md:w-80 md:h-40">
    {/* Outer glow layer */}
    <div className="absolute bottom-0 right-0 w-full h-3 bg-gradient-to-l from-red-500 via-purple-500 to-transparent blur-sm opacity-75"></div>
    <div className="absolute bottom-0 right-0 w-2 h-full bg-gradient-to-t from-red-500 via-purple-500 to-transparent blur-sm opacity-75"></div>

    {/* Main border */}
    <div className="absolute bottom-0 right-0 w-full h-3.5 bg-gradient-to-l from-red-600 via-purple-600 via-cyan-500 via-cyan-500 to-cyan-400"></div>
    <div className="absolute bottom-0 right-0 w-1.5 h-full bg-gradient-to-t from-red-600 via-purple-600 via-cyan-500 via-cyan-500 to-cyan-400"></div>

    {/* Inner electric lines */}
    <div className="absolute bottom-4 right-0 w-4/5 h-0.5 bg-gradient-to-l from-cyan-400 via-blue-500 to-transparent animate-pulse"></div>
    <div className="absolute bottom-0 right-4 w-0.5 h-4/5 bg-gradient-to-t from-cyan-400 via-blue-500 to-transparent animate-pulse"></div>

    {/* Corner brackets */}
    <div className="absolute bottom-2 right-2 w-8 h-8 md:w-10 md:h-10 border-b-3 border-r-3 border-cyan-400 shadow-lg shadow-cyan-500/50"></div>
    <div className="absolute bottom-1 right-1 w-6 h-6 md:w-8 md:h-8 border-b-2 border-r-2 border-red-500 animate-pulse"></div>

    {/* Corner accent fill */}
    <div className="absolute bottom-0 right-0 w-4 h-4 bg-gradient-to-tl from-red-600 via-purple-600 to-transparent opacity-60"></div>

    {/* Tech dots */}
    <div className="absolute bottom-3 right-3 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
    <div className="absolute bottom-6 right-6 w-1.5 h-1.5 bg-purple-500 rounded-full"></div>

    {/* Diagonal accent */}
    <div className="absolute bottom-0 right-0 w-12 h-0.5 bg-gradient-to-l from-yellow-400 to-transparent rotate-45 origin-bottom-right"></div>
  </div>
</div>

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
