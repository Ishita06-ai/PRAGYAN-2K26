import React from 'react';
import { Youtube, Instagram, Facebook, Linkedin } from "lucide-react";

export default function MainContent() {
  const socialIcons = [
    { Icon: () => <span className="text-xl">𝕏</span>, label: "X" },
    { Icon: Instagram, label: "Instagram" },
    { Icon: Facebook, label: "Facebook" },
    { Icon: Linkedin, label: "LinkedIn" },
    { Icon: Youtube, label: "YouTube" },
  ];

  const dates = [
    { day: "FRI", date: "15" },
    { day: "SAT", date: "16" },
    { day: "SUN", date: "17" },
  ];

  return (
    <main className="relative z-5 flex-1 flex flex-col justify-center items-center px-12 py-20 text-center min-h-[calc(100vh-80px)]">
      <div className="text-xs tracking-[3px] text-cyan-400 mb-3 uppercase">
        THE QUANTUM NEXUS
      </div>

      <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-[15px] my-5 bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent uppercase animate-glitch">
        CYBERVERSE
      </h1>

      <p className="text-xl md:text-2xl tracking-[3px] my-5 uppercase">
        "THE FUTURE IS NOW"
      </p>

      <div className="flex flex-wrap gap-8 justify-center my-8 text-lg tracking-wider">
        {dates.map((item) => (
          <div
            key={item.day}
            className="px-5 py-3 border-2 border-cyan-400 bg-cyan-400/10"
          >
            <div className="text-xs text-gray-400">{item.day}</div>
            <div className="text-4xl font-bold">{item.date}</div>
          </div>
        ))}
      </div>

      <div className="text-3xl mt-3 tracking-[5px]">2025 MARCH</div>

      <div className="flex flex-col md:flex-row gap-5 my-10">
        <button className="px-10 py-4 text-base tracking-wider uppercase font-bold bg-white text-black hover:bg-cyan-400 hover:shadow-[0_0_30px_#00ffff] hover:-translate-y-0.5 transition-all duration-300">
          REGISTER NOW
        </button>
        <button className="px-10 py-4 text-base tracking-wider uppercase font-bold bg-white/10 text-white border-2 border-white hover:bg-white/20 hover:shadow-[0_0_30px_#ffffff] hover:-translate-y-0.5 transition-all duration-300">
          ACCOMMODATIONS
        </button>
      </div>

      <div className="flex flex-wrap gap-5 my-8">
        {["ABOUT US", "LEGALS"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="px-8 py-3 bg-purple-600/20 border border-purple-600 text-purple-600 text-xs tracking-wider uppercase hover:bg-purple-600/40 hover:shadow-[0_0_20px_#8a2be2] transition-all duration-300"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex gap-4 mt-5">
        {socialIcons.map(({ Icon, label }) => (
          <button
            key={label}
            aria-label={label}
            className="w-11 h-11 rounded-full bg-white/10 border border-gray-600 flex items-center justify-center hover:bg-cyan-400/30 hover:border-cyan-400 hover:shadow-[0_0_20px_#00ffff] hover:-translate-y-1 transition-all duration-300"
          >
            <Icon className="w-5 h-5" />
          </button>
        ))}
      </div>
    </main>
  );
}