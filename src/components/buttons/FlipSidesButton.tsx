import React, { useState } from "react";
import { HiSwitchVertical } from "react-icons/hi";

interface FlipSidesProps {
  focusSide: "white" | "black";
  setFocusSide: (side: "white" | "black") => void;
}

const FlipSides: React.FC<FlipSidesProps> = ({ focusSide, setFocusSide }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setFocusSide(focusSide === "white" ? "black" : "white");
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 150);
  };

  return (
    <div className="p-2">
      <button
        onClick={handleClick}
        className={`p-2 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 hover:scale-105 transition-all ${
          isClicked ? "bg-white/30 scale-95" : ""
        }`}
        title={`Switch to ${
          focusSide === "white" ? "black" : "white"
        } side view`}
      >
        <HiSwitchVertical />
      </button>
    </div>
  );
};

export default FlipSides;
