import { Button, Heading, HStack, Icon, SimpleGrid } from "@chakra-ui/react";
import { FaChessKing, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GiMagnifyingGlass } from "react-icons/gi";
import { RiResetLeftFill } from "react-icons/ri";
import FlipSides from "./FlipSides";
import ChessGame from "./ChessGame";
import { FC } from "react";
import { Chess } from "chess.js";

interface ChessFunctionsProps {
  selectedOpening: string;
  focusSide: "white" | "black";
  setFocusSide: (side: "white" | "black") => void;
  moveList: string[];
  game: Chess;
  handleNextMove: () => void;
  handleReset: () => void;
  currentMove: number;
}

const ChessFunctions: FC<ChessFunctionsProps> = ({
  selectedOpening,
  focusSide,
  setFocusSide,
  moveList,
  game,
  handleNextMove,
  handleReset,
  currentMove,
}) => {
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
          <Button disabled={true}>
            <Icon as={GiMagnifyingGlass} />
          </Button>
        </HStack>
      </HStack>
      <ChessGame focusSide={focusSide} game={game} />
      <HStack justifyContent="center" paddingTop={10} width="500px">
        <Button disabled={true}>
          <Icon as={FaChevronLeft} />
        </Button>
        <Button onClick={handleReset}>
          <Icon as={RiResetLeftFill} />
        </Button>
        <Button
          onClick={handleNextMove}
          disabled={currentMove >= moveList.length}
        >
          <Icon as={FaChevronRight} />
        </Button>
      </HStack>
    </SimpleGrid>
  );
};

export default ChessFunctions;
