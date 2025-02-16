import { Button, Icon } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";

interface NextMoveButtonProps {
  moveList: string[];
  setMoveList: (moveList: string[]) => void;
  currentMove: number;
  setCurrentMove: (currentMove: number) => void;
}

const movePiece = (moveList: string[], currentMove: number) => {};

const NextMoveButton: React.FC<NextMoveButtonProps> = ({
  moveList,
  setMoveList,
  currentMove,
  setCurrentMove,
}) => {
  return (
    <Button
      onClick={() => {
        setCurrentMove(currentMove + 1);
        setMoveList(moveList.slice(currentMove + 1));
      }}
      disabled={currentMove >= moveList.length}
    >
      <Icon as={FaChevronRight} />
    </Button>
  );
};

export default NextMoveButton;
