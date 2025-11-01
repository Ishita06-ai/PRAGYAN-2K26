import React from "react";

const CornerSVG = ({ position }) => {
  const getSVGConfig = () => {
    const configs = {
      "top-left": {
        className: "absolute top-0 left-0 w-full h-full",
        paths: {
          main: "M 0 25 L 0 0 L 25 0",
          inner: "M 5 40 L 5 5 L 40 5",
          notch1: "M 0 20 L 8 20 L 8 12",
          notch2: "M 20 0 L 20 8 L 12 8"
        },
        lines: {
          horizontal: { x1: 15, y1: 15, x2: 60, y2: 15 },
          vertical: { x1: 15, y1: 15, x2: 15, y2: 60 },
          diagonal1: { x1: 0, y1: 0, x2: 80, y2: 80 },
          diagonal2: { x1: 10, y1: 0, x2: 90, y2: 80 }
        },
        circles: [
          { cx: 25, cy: 25, r: 3, animated: true },
          { cx: 45, cy: 25, r: 2, animated: false },
          { cx: 25, cy: 45, r: 2, animated: false }
        ]
      },
      "top-right": {
        className: "absolute top-0 right-0 w-full h-full",
        paths: {
          main: "M 200 25 L 200 0 L 175 0",
          inner: "M 195 40 L 195 5 L 160 5",
          notch1: "M 200 20 L 192 20 L 192 12",
          notch2: "M 180 0 L 180 8 L 188 8"
        },
        lines: {
          horizontal: { x1: 185, y1: 15, x2: 140, y2: 15 },
          vertical: { x1: 185, y1: 15, x2: 185, y2: 60 },
          diagonal1: { x1: 200, y1: 0, x2: 120, y2: 80 }
        },
        circles: [
          { cx: 175, cy: 25, r: 3, animated: true },
          { cx: 155, cy: 25, r: 2, animated: false },
          { cx: 175, cy: 45, r: 2, animated: false }
        ]
      },
      "bottom-left": {
        className: "absolute bottom-0 left-0 w-full h-full",
        paths: {
          main: "M 0 175 L 0 200 L 25 200",
          inner: "M 5 160 L 5 195 L 40 195",
          notch1: "M 0 180 L 8 180 L 8 188",
          notch2: "M 20 200 L 20 192 L 12 192"
        },
        lines: {
          horizontal: { x1: 15, y1: 185, x2: 60, y2: 185 },
          vertical: { x1: 15, y1: 185, x2: 15, y2: 140 },
          diagonal1: { x1: 0, y1: 200, x2: 80, y2: 120 }
        },
        circles: [
          { cx: 25, cy: 175, r: 3, animated: true },
          { cx: 45, cy: 175, r: 2, animated: false },
          { cx: 25, cy: 155, r: 2, animated: false }
        ]
      },
      "bottom-right": {
        className: "absolute bottom-0 right-0 w-full h-full",
        paths: {
          main: "M 200 175 L 200 200 L 175 200",
          inner: "M 195 160 L 195 195 L 160 195",
          notch1: "M 200 180 L 192 180 L 192 188",
          notch2: "M 180 200 L 180 192 L 188 192"
        },
        lines: {
          horizontal: { x1: 185, y1: 185, x2: 140, y2: 185 },
          vertical: { x1: 185, y1: 185, x2: 185, y2: 140 },
          diagonal1: { x1: 200, y1: 200, x2: 120, y2: 120 }
        },
        circles: [
          { cx: 175, cy: 175, r: 3, animated: true },
          { cx: 155, cy: 175, r: 2, animated: false },
          { cx: 175, cy: 155, r: 2, animated: false }
        ]
      }
    };
    return configs[position];
  };

  const config = getSVGConfig();
  const gradientId = `grad-${position}`;
  const diagonalGradientId = `diag-grad-${position}`;

  return (
    <svg className={config.className} viewBox="0 0 200 200">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00ffff', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#ff00ff', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0080ff', stopOpacity: 0.5 }} />
        </linearGradient>
        <linearGradient id={diagonalGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00ffff', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#00ffff', stopOpacity: 0 }} />
        </linearGradient>
      </defs>

      {/* Main paths */}
      <path d={config.paths.main} fill="none" stroke={`url(#${gradientId})`} strokeWidth="8" strokeLinecap="square" />
      <path d={config.paths.inner} fill="none" stroke="#00ffff" strokeWidth="3" />
      
      {/* Tech lines */}
      <line 
        {...config.lines.horizontal} 
        stroke="#00ffff" 
        strokeWidth="2" 
        opacity="0.6"
      >
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
      </line>
      <line 
        {...config.lines.vertical} 
        stroke="#00ffff" 
        strokeWidth="2" 
        opacity="0.6"
      >
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
      </line>
      
      {/* Notches */}
      <path d={config.paths.notch1} fill="none" stroke="#ff00ff" strokeWidth="2" />
      <path d={config.paths.notch2} fill="none" stroke="#ff00ff" strokeWidth="2" />
      
      {/* Circles */}
      {config.circles.map((circle, index) => (
        <circle 
          key={index}
          cx={circle.cx} 
          cy={circle.cy} 
          r={circle.r} 
          fill={circle.animated ? "#00ffff" : "#ff00ff"} 
          opacity={circle.animated ? "1" : "0.8"}
        >
          {circle.animated && (
            <animate attributeName="r" values="2;4;2" dur="1.5s" repeatCount="indefinite" />
          )}
        </circle>
      ))}
      
      {/* Diagonal lines */}
      <line 
        {...config.lines.diagonal1} 
        stroke={`url(#${diagonalGradientId})`} 
        strokeWidth="1" 
        opacity="0.3" 
      />
      {config.lines.diagonal2 && (
        <line 
          {...config.lines.diagonal2} 
          stroke={`url(#${diagonalGradientId})`} 
          strokeWidth="1" 
          opacity="0.2" 
        />
      )}
    </svg>
  );
};

export default CornerSVG;