import React from "react";
import InfoButton from "../buttons/InfoButton";

interface MoveSequenceProps {
  moveList: string[];
  currentMove: number;
  selectedOpening: string;
  onMoveClick: (moveIndex: number) => void;
}

const MoveSequence: React.FC<MoveSequenceProps> = ({
  moveList,
  currentMove,
  selectedOpening,
  onMoveClick,
}) => {
  // If no opening selected, show a prompt
  if (!selectedOpening || selectedOpening === "Chessboard") {
    return (
      <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg mt-4 transition-opacity duration-500 ease-in-out">
        <p className="text-gray-300 text-center">
          Select an opening to see the move sequence
        </p>
      </div>
    );
  }

  // Format the moves in proper chess notation (1. e4 e5, 2. Nf3 Nc6, etc.)
  const formattedMoves = [];
  for (let i = 0; i < moveList.length; i += 2) {
    const moveNumber = Math.floor(i / 2) + 1;
    const whiteMove = moveList[i];
    const blackMove = i + 1 < moveList.length ? moveList[i + 1] : null;

    formattedMoves.push({
      moveNumber,
      whiteMove,
      blackMove,
      whiteIndex: i,
      blackIndex: i + 1,
    });
  }

  return (
    <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg mt-4 max-h-[30rem] md:max-h-96 overflow-y-auto self-start max-w-[500px] transition-all duration-500 ease-in-out will-change-transform will-change-opacity">
      <div className="flex flex-row items-center gap-2 mb-2">
        <h3 className="text-lg font-semibold">Move Sequence</h3>
        <InfoButton
          section="chess-notation"
          tooltip="Learn about chess notation"
        />
      </div>

      {/* Starting position button */}
      <button
        onClick={() => onMoveClick(0)}
        className={`font-mono text-left w-full mb-2 py-1 transition-colors duration-200 ${
          currentMove === 0
            ? "bg-white/20 font-bold text-white rounded px-2"
            : "text-gray-300 hover:bg-white/10 rounded px-2"
        }`}
        title="Go to starting position"
      >
        Starting Position
      </button>

      <div className="grid grid-cols-[auto_1fr_1fr] gap-x-4 gap-y-1">
        {formattedMoves.map((move) => {
          return (
            <React.Fragment key={`move-${move.moveNumber}`}>
              {/* Move number */}
              <div className="text-gray-400">{move.moveNumber}.</div>

              {/* White's move */}
              <button
                onClick={() => onMoveClick(move.whiteIndex + 1)}
                className={`font-mono text-left transition-colors duration-200 ${
                  currentMove === move.whiteIndex + 1
                    ? "bg-white/20 font-bold text-white rounded px-2"
                    : "text-gray-300 hover:bg-white/10 rounded px-2"
                }`}
                title="Go to this position"
              >
                {move.whiteMove}
              </button>

              {/* Black's move (if any) */}
              {move.blackMove ? (
                <button
                  onClick={() => onMoveClick(move.blackIndex + 1)}
                  className={`font-mono text-left transition-colors duration-200 ${
                    currentMove === move.blackIndex + 1
                      ? "bg-white/20 font-bold text-white rounded px-2"
                      : "text-gray-300 hover:bg-white/10 rounded px-2"
                  }`}
                  title="Go to this position"
                >
                  {move.blackMove}
                </button>
              ) : (
                <div></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default MoveSequence;
