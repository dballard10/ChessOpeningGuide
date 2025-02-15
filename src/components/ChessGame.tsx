import React, { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { Heading, SimpleGrid } from "@chakra-ui/react";

interface ChessGameProps {
  selectedOpening: string;
}

const ChessGame: React.FC<ChessGameProps> = ({ selectedOpening }) => {
  // Initialize the chess game
  const [game, setGame] = useState(new Chess());

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
    <SimpleGrid columns={1} padding={10}>
      <Heading>{selectedOpening}</Heading>
      <Chessboard position={game.fen()} onPieceDrop={onDrop} boardWidth={500} />
    </SimpleGrid>
  );
};

export default ChessGame;
