import React from "react";
import { GiMagnifyingGlass } from "react-icons/gi";

const MagnifyingGlassButton: React.FC = () => {
  return (
    <div className="p-2">
      <button
        disabled={true}
        className="p-2 rounded bg-white/10 backdrop-blur-lg border border-white/20 hover:scale-105 opacity-50 cursor-not-allowed"
        title="Show analysis bar"
      >
        <GiMagnifyingGlass />
      </button>
    </div>
  );
};

export default MagnifyingGlassButton;
