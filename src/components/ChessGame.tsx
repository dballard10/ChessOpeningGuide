import React, { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { Button, Heading, HStack, Icon, SimpleGrid } from "@chakra-ui/react";
import { FaChessKing, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GiMagnifyingGlass } from "react-icons/gi";
import { RiResetLeftFill } from "react-icons/ri";

interface ChessGameProps {
  selectedOpening: string;
  focusSide: "white" | "black";
}

const ChessGame: React.FC<ChessGameProps> = ({
  selectedOpening,
  focusSide,
}) => {
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
    <SimpleGrid columns={1} paddingRight={20}>
      <HStack justifyContent="space-between">
        <Heading>
          <Icon
            as={FaChessKing}
            paddingRight={5}
            color={focusSide === "white" ? "white" : "black"}
          />
          {selectedOpening}
        </Heading>
        <Button>
          <Icon as={GiMagnifyingGlass} />
        </Button>
      </HStack>
      <Chessboard position={game.fen()} onPieceDrop={onDrop} boardWidth={500} />
      <HStack justifyContent="center" padding={10}>
        <Button>
          <Icon as={FaChevronLeft} />
        </Button>
        <Button>
          <Icon as={RiResetLeftFill} />
        </Button>
        <Button>
          <Icon as={FaChevronRight} />
        </Button>
      </HStack>
    </SimpleGrid>
  );
};

export default ChessGame;
