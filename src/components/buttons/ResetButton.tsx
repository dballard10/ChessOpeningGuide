import { RiResetLeftFill } from "react-icons/ri";
import { useState } from "react";

const ResetButton = ({
  handleReset,
  currentMove,
}: {
  handleReset: () => void;
  currentMove: number;
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    handleReset();
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 150);
  };
  return (
    <div className="p-2">
      <button
        onClick={handleClick}
        className={`p-2 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 hover:scale-105 transition-all ${
          currentMove === 0 ? "opacity-50 cursor-not-allowed" : ""
        }
        ${isClicked ? "bg-white/30 scale-95" : ""}`}
        title="Reset board"
      >
        <RiResetLeftFill />
      </button>
    </div>
  );
};

export default ResetButton;
