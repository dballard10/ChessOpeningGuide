import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const NextMoveButton = ({
  handleNextMove,
  currentMove,
  moveList,
  isEnabled = true,
}: {
  handleNextMove: () => void;
  currentMove: number;
  moveList: string[];
  isEnabled?: boolean;
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    handleNextMove();
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 150);
  };

  const isDisabled = !isEnabled || currentMove >= moveList.length;

  return (
    <div className="p-2">
      <button
        onClick={handleClick}
        className={`p-2 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 hover:scale-105 transition-all ${
          isDisabled ? "opacity-50 cursor-not-allowed" : ""
        } ${isClicked ? "bg-white/30 scale-95" : ""}`}
        disabled={isDisabled}
        title={
          !isEnabled ? "Custom move sequence - next move disabled" : "Next move"
        }
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default NextMoveButton;
