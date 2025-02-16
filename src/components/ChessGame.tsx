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
import ChessGame from "./MovePieces";

interface ChessFunctionsProps {
  selectedOpening: string;
  focusSide: "white" | "black";
  setFocusSide: (side: "white" | "black") => void;
}

const ChessFunctions: React.FC<ChessFunctionsProps> = ({
  selectedOpening,
  focusSide,
  setFocusSide,
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
          <Button>
            <Icon as={GiMagnifyingGlass} />
          </Button>
        </HStack>
      </HStack>
      <Box display="flex" flexDirection="column" alignItems="center">
        <ChessGame focusSide={focusSide} />
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

export default ChessFunctions;
