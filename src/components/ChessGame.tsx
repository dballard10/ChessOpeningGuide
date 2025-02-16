import React, { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import {
  Button,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import { FaChessKing, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GiMagnifyingGlass } from "react-icons/gi";
import { RiResetLeftFill } from "react-icons/ri";
import FlipSides from "./FlipSides";

interface ChessGameProps {
  selectedOpening: string;
  focusSide: "white" | "black";
  setFocusSide: (side: "white" | "black") => void;
}

const ChessGame: React.FC<ChessGameProps> = ({
  selectedOpening,
  focusSide,
  setFocusSide,
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
    <SimpleGrid
      columns={1}
      padding={10}
      paddingLeft={30}
      paddingRight={20}
      alignItems="center"
    >
      <HStack justifyContent="space-between" width="500px">
        <Heading>
          <Icon
            as={FaChessKing}
            paddingRight={5}
            color={focusSide === "white" ? "white" : "black"}
          />
          {selectedOpening}
        </Heading>
        <HStack>
          <FlipSides focusSide={focusSide} setFocusSide={setFocusSide} />
          <Button>
            <Icon as={GiMagnifyingGlass} />
          </Button>
        </HStack>
      </HStack>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Chessboard
          position={game.fen()}
          onPieceDrop={onDrop}
          boardWidth={500}
          boardOrientation={focusSide}
        />
        <HStack justifyContent="center" paddingTop={10} width="100%">
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
      </Box>
    </SimpleGrid>
  );
};

export default ChessGame;
