import React, { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      color: Math.random() > 0.5 ? "#00ffff" : "#8a2be2",
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.5,
      duration: Math.random() * 10 + 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Circuit Lines */}
      <div className="absolute w-[300px] h-[2px] top-[20%] -left-[300px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30 animate-slideRight"></div>
      <div className="absolute w-[300px] h-[2px] top-[60%] -right-[300px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30 animate-slideLeft"></div>

      {/* Hexagons */}
      <div
        className="absolute w-12 h-12 top-[15%] left-[10%] border-2 border-cyan-400 opacity-20 animate-float"
        style={{
          clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
        }}
      ></div>
      <div
        className="absolute w-12 h-12 top-[70%] right-[15%] border-2 border-cyan-400 opacity-20 animate-floatSlow"
        style={{
          clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
        }}
      ></div>

      {/* Floating Shapes */}
      <div
        className="absolute w-24 h-24 top-[30%] right-[20%] bg-gradient-to-br from-pink-600 to-purple-600 opacity-60 animate-rotate3d"
        style={{
          clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
        }}
      ></div>
      <div
        className="absolute w-20 h-20 bottom-[20%] left-[15%] bg-gradient-to-br from-pink-600 to-purple-600 opacity-60 animate-rotate3dSlow"
        style={{
          clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
        }}
      ></div>

      {/* Dynamic Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-float"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            opacity: particle.opacity,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
}