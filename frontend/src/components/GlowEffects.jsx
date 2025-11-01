import React from "react";

const GlowEffects = ({ position }) => {
  const getGlowConfig = () => {
    const configs = {
      "top-left": [
        { className: "absolute top-0 left-0 w-24 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent blur-sm" },
        { className: "absolute top-0 left-0 w-1 h-24 bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent blur-sm" }
      ],
      "top-right": [
        { className: "absolute top-0 right-0 w-24 h-1 bg-gradient-to-l from-cyan-400 via-purple-500 to-transparent blur-sm" },
        { className: "absolute top-0 right-0 w-1 h-24 bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent blur-sm" }
      ],
      "bottom-left": [
        { className: "absolute bottom-0 left-0 w-24 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent blur-sm" },
        { className: "absolute bottom-0 left-0 w-1 h-24 bg-gradient-to-t from-cyan-400 via-purple-500 to-transparent blur-sm" }
      ],
      "bottom-right": [
        { className: "absolute bottom-0 right-0 w-24 h-1 bg-gradient-to-l from-cyan-400 via-purple-500 to-transparent blur-sm" },
        { className: "absolute bottom-0 right-0 w-1 h-24 bg-gradient-to-t from-cyan-400 via-purple-500 to-transparent blur-sm" }
      ]
    };
    return configs[position];
  };

  const glowEffects = getGlowConfig();

  return (
    <>
      {glowEffects.map((effect, index) => (
        <div key={index} className={effect.className} />
      ))}
    </>
  );
};

export default GlowEffects;