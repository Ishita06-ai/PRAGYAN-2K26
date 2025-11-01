import React from "react";
import CornerSVG from "./CornerSVG";
import GlowEffects from "./GlowEffects";

const CornerElement = ({ position }) => {
  const getPositionClasses = () => {
    const baseClasses = "absolute w-48 h-48 md:w-64 md:h-64";
    const positionClasses = {
      "top-left": "top-0 left-0",
      "top-right": "top-0 right-0",
      "bottom-left": "bottom-0 left-0",
      "bottom-right": "bottom-0 right-0"
    };
    return `${baseClasses} ${positionClasses[position]}`;
  };

  return (
    <div className={getPositionClasses()}>
      <CornerSVG position={position} />
      <GlowEffects position={position} />
    </div>
  );
};

export default CornerElement;