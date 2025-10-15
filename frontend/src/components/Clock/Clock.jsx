import React from "react";
import Countdown from "react-countdown";

function Clock() {
  // Custom renderer for countdown
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <span className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-widest bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
          EVENT STARTED!
        </span>
      );
    } else {
      return (
        <div className="flex items-center justify-center gap-2 md:gap-4">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tabular-nums">
              {String(days).padStart(2, "0")}
            </span>
            <span className="text-xs md:text-sm mt-1 text-gray-400 tracking-wider">
              DAYS
            </span>
          </div>

          <span className="text-3xl md:text-4xl lg:text-5xl text-purple-400 font-light">
            :
          </span>

          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tabular-nums">
              {String(hours).padStart(2, "0")}
            </span>
            <span className="text-xs md:text-sm mt-1 text-gray-400 tracking-wider">
              HOURS
            </span>
          </div>

          <span className="text-3xl md:text-4xl lg:text-5xl text-purple-400 font-light">
            :
          </span>

          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tabular-nums">
              {String(minutes).padStart(2, "0")}
            </span>
            <span className="text-xs md:text-sm mt-1 text-gray-400 tracking-wider">
              MINUTES
            </span>
          </div>

          <span className="text-3xl md:text-4xl lg:text-5xl text-purple-400 font-light">
            :
          </span>

          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tabular-nums">
              {String(seconds).padStart(2, "0")}
            </span>
            <span className="text-xs md:text-sm mt-1 text-gray-400 tracking-wider">
              SECONDS
            </span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="flex justify-center items-center py-8 px-4">
      {/* Countdown Box with enhanced styling */}
      <div className="relative w-full max-w-4xl">
        {/* Main countdown container */}
        <div className="relative p-8 md:p-12">
          {/* Countdown Timer */}
          <div className="flex justify-center mb-8">
            <Countdown
              date={new Date("2026-02-22T00:00:00")}
              renderer={renderer}
            />
          </div>

          {/* Event Dates */}
          <div className="text-center mt-8 pt-8 border-t border-white/10">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
              21<sup className="text-sm md:text-base">ST</sup> - 22
              <sup className="text-sm md:text-base">ND</sup> - 23
              <sup className="text-sm md:text-base">RD</sup>
            </div>
            <div className="text-lg md:text-xl lg:text-2xl text-gray-300 tracking-widest">
              FEBRUARY{" "}
              <span className="text-purple-400 font-semibold">2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clock;
