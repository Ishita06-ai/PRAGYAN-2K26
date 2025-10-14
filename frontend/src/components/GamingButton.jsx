import React from 'react';

export default function GamingButton({ 
  item, 
  index, 
  side = 'left', 
  color = 'cyan' 
}) {
  const colorClasses = {
    cyan: {
      border: 'border-cyan-400/40 hover:border-cyan-400',
      text: 'text-cyan-400',
      shadow: 'shadow-[0_0_20px_#00ffff]',
      gradient: 'from-cyan-400',
      bg: 'bg-cyan-400',
      glow: 'drop-shadow-[0_0_20px_rgba(0,255,255,0.9)] group-hover:drop-shadow-[0_0_35px_rgba(0,255,255,1)]',
      innerGlow: 'shadow-[inset_0_0_20px_rgba(0,255,255,0.3)]',
      pulse: 'shadow-[0_0_30px_rgba(0,255,255,0.6)]'
    },
    purple: {
      border: 'border-purple-500/40 hover:border-purple-500',
      text: 'text-purple-400',
      shadow: 'shadow-[0_0_20px_#a855f7]',
      gradient: 'from-purple-500',
      bg: 'bg-purple-500',
      glow: 'drop-shadow-[0_0_20px_rgba(168,85,247,0.9)] group-hover:drop-shadow-[0_0_35px_rgba(168,85,247,1)]',
      innerGlow: 'shadow-[inset_0_0_20px_rgba(168,85,247,0.3)]',
      pulse: 'shadow-[0_0_30px_rgba(168,85,247,0.6)]'
    },
    pink: {
      border: 'border-pink-500/40 hover:border-pink-500',
      text: 'text-pink-400',
      shadow: 'shadow-[0_0_20px_#ec4899]',
      gradient: 'from-pink-500',
      bg: 'bg-pink-500',
      glow: 'drop-shadow-[0_0_20px_rgba(236,72,153,0.9)] group-hover:drop-shadow-[0_0_35px_rgba(236,72,153,1)]',
      innerGlow: 'shadow-[inset_0_0_20px_rgba(236,72,153,0.3)]',
      pulse: 'shadow-[0_0_30px_rgba(236,72,153,0.6)]'
    },
    orange: {
      border: 'border-orange-500/40 hover:border-orange-500',
      text: 'text-orange-400',
      shadow: 'shadow-[0_0_20px_#f97316]',
      gradient: 'from-orange-500',
      bg: 'bg-orange-500',
      glow: 'drop-shadow-[0_0_20px_rgba(249,115,22,0.9)] group-hover:drop-shadow-[0_0_35px_rgba(249,115,22,1)]',
      innerGlow: 'shadow-[inset_0_0_20px_rgba(249,115,22,0.3)]',
      pulse: 'shadow-[0_0_30px_rgba(249,115,22,0.6)]'
    }
  };

  const currentColor = colorClasses[color];
  const clipPath = side === 'left' 
    ? "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))"
    : "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)";

  return (
    <button
      className={`group relative w-44 h-20 bg-gradient-to-br from-black via-gray-900 to-black border-2 ${currentColor.border} ${currentColor.text} text-xs tracking-[4px] font-black overflow-hidden backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 flex items-center justify-center ${currentColor.innerGlow}`}
      style={{
        animationDelay: `${index * 0.2}s`,
        clipPath: clipPath,
        boxShadow: '0 8px 32px rgba(0,0,0,0.8)'
      }}
    >
      {/* Hexagonal grid pattern background */}
      <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 3px),
                           repeating-linear-gradient(90deg, transparent, transparent 2px, currentColor 2px, currentColor 3px)`,
          backgroundSize: '8px 8px'
        }}
      ></div>

      {/* Animated diagonal scanlines */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)',
          backgroundSize: '20px 20px',
          animation: 'scroll 20s linear infinite'
        }}
      ></div>

      {/* Main scanline effect - enhanced */}
      <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent h-32 translate-y-[-150%] group-hover:translate-y-[250%] transition-transform duration-1500 ease-in-out`}></div>

      {/* Corner circuits - enhanced */}
      <div className={`absolute ${side === 'left' ? 'top-0 left-0' : 'top-0 right-0'} w-5 h-5 opacity-60 group-hover:opacity-100 transition-all duration-300`}>
        <div className={`absolute top-0 ${side === 'left' ? 'left-0' : 'right-0'} w-full h-[3px] ${currentColor.bg} ${currentColor.pulse}`}></div>
        <div className={`absolute ${side === 'left' ? 'left-0' : 'right-0'} top-0 w-[3px] h-full ${currentColor.bg} ${currentColor.pulse}`}></div>
      </div>
      <div className={`absolute ${side === 'left' ? 'bottom-0 right-0' : 'bottom-0 left-0'} w-5 h-5 opacity-60 group-hover:opacity-100 transition-all duration-300`}>
        <div className={`absolute bottom-0 ${side === 'left' ? 'right-0' : 'left-0'} w-full h-[3px] ${currentColor.bg} ${currentColor.pulse}`}></div>
        <div className={`absolute ${side === 'left' ? 'right-0' : 'left-0'} bottom-0 w-[3px] h-full ${currentColor.bg} ${currentColor.pulse}`}></div>
      </div>

      {/* Enhanced glitch bars with multiple layers */}
      <div className={`absolute ${side === 'left' ? 'left-0' : 'right-0'} top-1/4 w-full h-[3px] ${currentColor.bg}/0 group-hover:${currentColor.bg}/80 transition-all duration-100 ${currentColor.shadow}`}></div>
      <div className={`absolute ${side === 'left' ? 'left-0' : 'right-0'} top-1/3 w-3/4 h-[2px] ${currentColor.bg}/0 group-hover:${currentColor.bg}/60 transition-all duration-150`}
        style={{ animationDelay: "0.05s" }}
      ></div>
      <div className={`absolute ${side === 'left' ? 'left-0' : 'right-0'} top-2/3 w-full h-[3px] ${currentColor.bg}/0 group-hover:${currentColor.bg}/80 transition-all duration-100 ${currentColor.shadow}`}
        style={{ animationDelay: "0.08s" }}
      ></div>
      <div className={`absolute ${side === 'left' ? 'left-0' : 'right-0'} top-3/4 w-2/3 h-[2px] ${currentColor.bg}/0 group-hover:${currentColor.bg}/60 transition-all duration-150`}
        style={{ animationDelay: "0.1s" }}
      ></div>

      {/* Enhanced energy pulse on sides */}
      <div className={`absolute ${side === 'left' ? 'left-0' : 'right-0'} top-0 w-[3px] h-0 bg-gradient-to-b ${currentColor.gradient} via-white to-transparent group-hover:h-full transition-all duration-700 ${currentColor.shadow}`}></div>
      <div className={`absolute ${side === 'left' ? 'right-0' : 'left-0'} bottom-0 w-[3px] h-0 bg-gradient-to-t ${currentColor.gradient} via-white to-transparent group-hover:h-full transition-all duration-700 ${currentColor.shadow}`}></div>

      {/* Multiple pixel particles with staggered animation */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className={`absolute w-1 h-1 ${currentColor.bg} opacity-0 group-hover:opacity-100 group-hover:animate-ping rounded-full`}
          style={{
            [side === 'left' ? 'left' : 'right']: `${15 + i * 15}%`,
            [i % 2 === 0 ? 'top' : 'bottom']: `${10 + (i % 3) * 10}%`,
            animationDelay: `${i * 0.15}s`
          }}
        ></div>
      ))}

      {/* Enhanced holographic overlay with rainbow effect */}
      <div className={`absolute inset-0 bg-gradient-to-${side === 'left' ? 'r' : 'l'} from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
        style={{
          transform: side === 'left' ? 'translateX(-200%)' : 'translateX(200%)',
          transition: 'transform 0.7s ease-in-out, opacity 0.7s ease-in-out'
        }}
      ></div>

      {/* Data stream effect */}
      <div className={`absolute ${side === 'left' ? 'left-2' : 'right-2'} top-0 flex flex-col gap-1 opacity-0 group-hover:opacity-70 transition-all duration-500`}>
        {[...Array(5)].map((_, i) => (
          <div
            key={`stream-${i}`}
            className={`w-[2px] h-3 ${currentColor.bg} animate-pulse`}
            style={{ animationDelay: `${i * 0.2}s` }}
          ></div>
        ))}
      </div>

      {/* Main text with enhanced gaming font effect */}
      <span className={`relative z-10 ${currentColor.glow} group-hover:text-white transition-all duration-300 font-mono text-center group-hover:tracking-[5px] group-hover:scale-110`}>
        <span className="relative">
          {item}
          {/* Text shadow layers */}
          <span className={`absolute inset-0 ${currentColor.text} blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>{item}</span>
        </span>
      </span>

      {/* Enhanced level indicator dots */}
      <div className={`absolute ${side === 'left' ? '-right-2' : '-left-2'} top-1/2 -translate-y-1/2 flex flex-col gap-2`}>
        {[...Array(4)].map((_, i) => (
          <div
            key={`level-${i}`}
            className={`w-2 h-2 rounded-full border-2 ${currentColor.border.split(' ')[0]} ${currentColor.bg}/20 group-hover:${currentColor.bg} group-hover:scale-150 transition-all duration-300 ${currentColor.shadow}`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          ></div>
        ))}
      </div>

      {/* Enhanced bottom power bar with segments */}
      <div className={`absolute bottom-0 ${side === 'left' ? 'left-0' : 'right-0'} h-2 w-full flex gap-[2px] overflow-hidden`}>
        {[...Array(8)].map((_, i) => (
          <div
            key={`segment-${i}`}
            className={`flex-1 ${currentColor.bg}/30 group-hover:${currentColor.bg} transition-all duration-700 ${currentColor.shadow}`}
            style={{ transitionDelay: `${i * 0.08}s` }}
          ></div>
        ))}
      </div>

      {/* Outer glow effect */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${currentColor.shadow} blur-xl -z-10`}></div>

      <style jsx>{`
        @keyframes scroll {
          from { background-position: 0 0; }
          to { background-position: 20px 20px; }
        }
      `}</style>
    </button>
  );
}