import React from "react";
import { Text } from "@chakra-ui/react";

interface NextMoveProps {
  currentMove: number;
  moveList: string[];
}

const NextMove: React.FC<NextMoveProps> = ({ currentMove, moveList }) => {
  const move = moveList[currentMove] || "No move available";
  return <Text>Current Move: {move}</Text>;
};

export default NextMove;
