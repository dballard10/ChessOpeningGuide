import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useState, useEffect } from "react";
import { useChessStore } from "@/hooks/use-global-store";

interface ChessGameProps {
  focusSide: "white" | "black";
  game: Chess;
  currentMove: number;
  moveList: string[];
  setGame: (game: Chess) => void;
  setCurrentMove: (move: number) => void;
  setMoveList: (moveList: string[]) => void;
}

const ChessGame: React.FC<ChessGameProps> = ({
  focusSide,
  game,
  currentMove,
  moveList,
  setGame,
  setCurrentMove,
  setMoveList,
}) => {
  // Get board and piece customization from the global store
  const { boardTheme } = useChessStore();
  const [isMobile, setIsMobile] = useState(false);

  // Setup mobile detection
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 600);
    };

    // Check on initial load
    checkIfMobile();

    // Add resize listener
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Get the current FEN position from the game state
  const position = game.fen();

  // Track the original move sequence for comparison
  const [originalMoveList, setOriginalMoveList] = useState<string[]>([]);

  // Reset effect when moveList changes completely
  useEffect(() => {
    console.log("ChessGame: moveList changed", moveList);
    // Reset when a new opening is selected
    setOriginalMoveList([...moveList]);
  }, [moveList]);

  // Store the original move list when it first loads
  useEffect(() => {
    if (moveList.length > 0 && originalMoveList.length === 0) {
      setOriginalMoveList([...moveList]);
    }
  }, [moveList, originalMoveList.length]);

  // Handle piece movement by the user
  const onDrop = (sourceSquare: string, targetSquare: string) => {
    try {
      // Attempt to make the move
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q", // Always promote to queen for simplicity
      });

      // If move is invalid, return false to cancel the move
      if (move === null) return false;

      // Clone the current game state
      const newGame = new Chess(game.fen());
      setGame(newGame);

      const moveNotation = move.san;

      // Check if the current moves up to this point match the original sequence
      const currentMovesMatchOriginal = moveList
        .slice(0, currentMove)
        .every((move, idx) => move === originalMoveList[idx]);

      // Check if this is an expected move in the original sequence
      if (
        currentMove < originalMoveList.length &&
        moveNotation === originalMoveList[currentMove] &&
        currentMovesMatchOriginal
      ) {
        // User followed the original sequence - just increment the current move
        setCurrentMove(currentMove + 1);
      } else {
        // User created a custom sequence
        // Create a new move list that keeps moves up to current point and adds the new move
        const newMoveList = [...moveList.slice(0, currentMove), moveNotation];
        setMoveList(newMoveList);
        setCurrentMove(currentMove + 1);
      }

      return true;
    } catch (e) {
      return false;
    }
  };

  return (
    <Chessboard
      position={position}
      boardWidth={isMobile ? 440 : 500}
      boardOrientation={focusSide}
      arePiecesDraggable={true}
      onPieceDrop={onDrop}
      customBoardStyle={{
        borderRadius: "4px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
      }}
      customDarkSquareStyle={{ backgroundColor: boardTheme.dark }}
      customLightSquareStyle={{ backgroundColor: boardTheme.light }}
    />
  );
};

export default ChessGame;
