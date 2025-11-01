import React from 'react';
import { Youtube, Instagram, Facebook, Linkedin } from "lucide-react";
import Clock from './Clock/Clock';

export default function MainContent() {

  return (
    <main className="relative z-5 flex-1 flex flex-col justify-center items-center px-12 py-20 text-center min-h-[calc(100vh-80px)]">
      <div className="text-xs tracking-[3px] text-cyan-400 mb-3 uppercase">
        THE QUANTUM NEXUS
      </div>

      <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-[15px] my-5 bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent uppercase animate-glitch">
        PRAGYAA
      </h1>

      <p className="text-xl md:text-2xl tracking-[3px] my-5 uppercase">
        "BRIGHTER THAN EVER BEFORE"
      </p>

      <Clock />

      {/* Social Media Links */}
      <div className="flex gap-6 mt-8 justify-center">
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Instagram className="w-8 h-8 hover:text-pink-500 transition-colors" />
        </a>
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <Facebook className="w-8 h-8 hover:text-blue-600 transition-colors" />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="w-8 h-8 hover:text-blue-700 transition-colors" />
        </a>
        <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <Youtube className="w-8 h-8 hover:text-red-600 transition-colors" />
        </a>
      </div>
    </main>
  );
}