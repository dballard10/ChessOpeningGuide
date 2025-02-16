import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useState } from "react";

interface ChessGameProps {
  focusSide: "white" | "black";
}

const ChessGame: React.FC<ChessGameProps> = ({ focusSide }) => {
  // Initialize the chess game
  const [game, setGame] = useState(new Chess());
  // Get lis of opening moves
  //const [moves, setMoves] = useState<string[]>([]);
  // Get history of moves from the game
  //const moves = game.history({ verbose: true });

  // Handler for when a piece is dropped
  const onDrop = (sourceSquare: string, targetSquare: string) => {
    // Try making the move on the game engine
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // Always promote to queen for simplicity
    });

    // If the move is illegal, move will be null
    if (move === null) return false;

    // Update the game state
    setGame(new Chess(game.fen()));
    return true;
  };

  return (
    <>
      <Chessboard
        position={game.fen()}
        onPieceDrop={onDrop}
        boardWidth={500}
        boardOrientation={focusSide}
      />
    </>
  );
};

export default ChessGame;
