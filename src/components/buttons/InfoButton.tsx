import React, { useState } from "react";
import { FaInfo } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface InfoButtonProps {
  // The section ID to navigate to on the help page
  section?: string;
  // Optional tooltip text
  tooltip?: string;
}

const InfoButton: React.FC<InfoButtonProps> = ({
  section = "",
  tooltip = "Help & Information",
}) => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    // Navigate to the help page, optionally with a section fragment identifier
    navigate(`/help${section ? `#${section}` : ""}`);

    // Animation effect on click
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 150);
  };

  return (
    <div className="p-2">
      <button
        onClick={handleClick}
        className={`p-1.5 rounded-full bg-white text-gray-800 hover:bg-white/90 hover:scale-105 transition-all
          ${isClicked ? "scale-95" : ""}
          flex items-center justify-center w-6 h-6
          shadow-md border border-white/20`}
        title={tooltip}
      >
        <FaInfo className="text-xs" />
      </button>
    </div>
  );
};

export default InfoButton;
