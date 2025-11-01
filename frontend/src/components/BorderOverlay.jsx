import React from "react";
import CornerElement from "./CornerElement";

const BorderOverlay = () => {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none">
      <CornerElement position="top-left" />
      <CornerElement position="top-right" />
      <CornerElement position="bottom-left" />
      <CornerElement position="bottom-right" />
    </div>
  );
};

export default BorderOverlay;