import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";

interface ChessGameProps {
  focusSide: "white" | "black";
  game: Chess;
}

const ChessGame: React.FC<ChessGameProps> = ({ focusSide, game }) => {
  // Get the current FEN position from the game state
  const position = game.fen();

  return (
    <Chessboard
      position={position}
      boardWidth={500}
      boardOrientation={focusSide}
      // Disable dragging pieces manually to enforce move control via buttons
      arePiecesDraggable={false}
    />
  );
};

export default ChessGame;
