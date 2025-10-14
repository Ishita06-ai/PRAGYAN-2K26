import React from 'react';
import GamingButton from './GamingButton';

export default function RightSidebar() {
  const menuItems = ["ABOUT", "EVENTS", "TEAM", "CONTACT", "LOGIN"];

  return (
    <div className="hidden lg:flex fixed right-5 top-1/2 -translate-y-1/2 z-10 flex-col gap-6">
      {menuItems.map((item, index) => (
        <div key={item} className="relative flex items-center group">
          {/* Enhanced gaming border decoration on LEFT side (mirrored) */}
          <div className="absolute -left-10 top-0 bottom-0 w-8 flex flex-col justify-center">
            {/* Main vertical line with glow */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-purple-500/60 to-transparent shadow-[0_0_10px_rgba(168,85,247,0.5)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-all duration-500"></div>

            {/* Top corner bracket - enhanced */}
            <div className="absolute top-0 right-0 w-full h-6">
              <div className="absolute top-0 right-0 w-full h-full border-t-2 border-l-2 border-purple-500/70 group-hover:border-purple-500 transition-colors duration-300 shadow-[0_0_8px_rgba(168,85,247,0.4)]"
                style={{
                  clipPath: "polygon(100% 0, 0 0, 0 60%, 15% 100%, 25% 100%, 15% 60%, 100% 60%)",
                }}
              ></div>
              {/* Corner glow dot */}
              <div className="absolute top-0 left-0 w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
            </div>

            {/* Middle tech details - enhanced */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-full flex flex-col gap-2">
              {/* Horizontal tech bars */}
              <div className="relative w-4 h-1 bg-gradient-to-l from-purple-500/80 to-transparent animate-pulse shadow-[0_0_5px_rgba(168,85,247,0.6)] ml-auto"></div>
              <div className="relative w-5 h-0.5 bg-gradient-to-l from-purple-500/60 to-transparent group-hover:w-6 transition-all duration-500 ml-auto"></div>
              <div className="relative w-3 h-1 bg-gradient-to-l from-purple-500/80 to-transparent animate-pulse shadow-[0_0_5px_rgba(168,85,247,0.6)] ml-auto"
                style={{ animationDelay: "0.3s" }}
              ></div>
              
              {/* Mini circuit node */}
              <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 border-2 border-purple-500 rounded-full bg-black group-hover:bg-purple-500 transition-colors duration-300 shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div>
            </div>

            {/* Bottom corner bracket - enhanced */}
            <div className="absolute bottom-0 right-0 w-full h-6">
              <div className="absolute bottom-0 right-0 w-full h-full border-b-2 border-l-2 border-purple-500/70 group-hover:border-purple-500 transition-colors duration-300 shadow-[0_0_8px_rgba(168,85,247,0.4)]"
                style={{
                  clipPath: "polygon(100% 40%, 15% 40%, 25% 0, 15% 0, 0 40%, 0 100%, 100% 100%)",
                }}
              ></div>
              {/* Corner glow dot */}
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>

            {/* Animated circuit nodes with trails */}
            <div className="absolute top-1/4 left-0 w-2 h-2 bg-purple-500 rounded-full animate-ping shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
            <div className="absolute top-1/4 left-0 w-1 h-1 bg-purple-400 rounded-full"></div>
            
            <div className="absolute bottom-1/4 left-0 w-2 h-2 bg-purple-500 rounded-full animate-ping shadow-[0_0_15px_rgba(168,85,247,0.8)]"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="absolute bottom-1/4 left-0 w-1 h-1 bg-purple-400 rounded-full"></div>

            {/* Additional decorative elements */}
            <div className="absolute top-[35%] right-1 w-1.5 h-1.5 border border-purple-500/60 rotate-45 group-hover:rotate-[225deg] transition-transform duration-700"></div>
            <div className="absolute bottom-[35%] right-1 w-1.5 h-1.5 border border-purple-500/60 rotate-45 group-hover:rotate-[225deg] transition-transform duration-700"
              style={{ transitionDelay: "0.1s" }}
            ></div>

            {/* Data flow indicators */}
            <div className="absolute top-[15%] left-2 flex flex-col gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-1 h-0.5 bg-purple-500 animate-pulse"></div>
              <div className="w-0.5 h-0.5 bg-purple-500 animate-pulse" style={{ animationDelay: "0.1s" }}></div>
            </div>
            <div className="absolute bottom-[15%] left-2 flex flex-col gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-1 h-0.5 bg-purple-500 animate-pulse" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-0.5 h-0.5 bg-purple-500 animate-pulse" style={{ animationDelay: "0.3s" }}></div>
            </div>
          </div>

          <GamingButton 
            item={item} 
            index={index} 
            side="right" 
            color="purple" 
          />

          {/* Connecting line between buttons (except last one) */}
          {index < menuItems.length - 1 && (
            <div className="absolute -bottom-6 -left-6 w-1 h-6 flex flex-col justify-center">
              <div className="w-0.5 h-full bg-gradient-to-b from-purple-500/60 via-purple-500/30 to-transparent group-hover:from-purple-500 transition-colors duration-500"></div>
              {/* Connection nodes */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-purple-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 border border-purple-500/60 rounded-full animate-pulse"></div>
            </div>
          )}
        </div>
      ))}

      {/* Top terminal bracket */}
      <div className="absolute -top-8 right-0 w-full h-6 border-t-2 border-r-2 border-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.3)]"
        style={{
          clipPath: "polygon(100% 100%, 100% 0, 70% 0, 65% 50%, 70% 100%)",
        }}
      >
        <div className="absolute top-0 right-0 w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
      </div>

      {/* Bottom terminal bracket */}
      <div className="absolute -bottom-8 right-0 w-full h-6 border-b-2 border-r-2 border-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.3)]"
        style={{
          clipPath: "polygon(100% 0, 100% 100%, 70% 100%, 65% 50%, 70% 0)",
        }}
      >
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.8)]"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>

      {/* Side panel indicator */}
      <div className="absolute -right-3 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-70">
        {[...Array(5)].map((_, i) => (
          <div
            key={`indicator-${i}`}
            className="w-1 h-1 bg-purple-500 rounded-full animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
}