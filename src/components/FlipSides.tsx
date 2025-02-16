import { Icon } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React from "react";
import { HiSwitchVertical } from "react-icons/hi";

interface FlipSidesProps {
  focusSide: "white" | "black";
  setFocusSide: (side: "white" | "black") => void;
}

const FlipSides: React.FC<FlipSidesProps> = ({ focusSide, setFocusSide }) => {
  return (
    <Button
      onClick={() => setFocusSide(focusSide === "white" ? "black" : "white")}
    >
      <Icon as={HiSwitchVertical} />
    </Button>
  );
};

export default FlipSides;
