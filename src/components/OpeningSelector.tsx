import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";
import { Button, Icon, SimpleGrid, Stack } from "@chakra-ui/react";
import { openings, defenses } from "../data/openings";
import { FaChessKnight, FaChessRook } from "react-icons/fa";
import { FC, useEffect } from "react";
import { Chess } from "chess.js";

interface OpeningSelectorProps {
  setSelectedOpening: (opening: string) => void;
  setFocusSide: (side: "white" | "black") => void;
  setMoveList: (moves: string[]) => void;
  setCurrentMove: (move: number) => void;
  setGame: (game: Chess) => void;
}

const OpeningSelector: FC<OpeningSelectorProps> = ({
  setSelectedOpening,
  setFocusSide,
  setMoveList,
  setCurrentMove,
  setGame,
}) => {
  useEffect(() => {
    setSelectedOpening("Select an Opening"); // Set the initial value when the component mounts
  }, [setSelectedOpening]);

  const items = [
    {
      value: 1,
      title: "Openings",
      icon: <Icon as={FaChessKnight} />,
    },
    {
      value: 2,
      title: "Defenses",
      icon: <Icon as={FaChessRook} />,
    },
  ];

  const handleSelectOpening = (
    opening: { name: string; moves: string[] },
    side: "white" | "black"
  ) => {
    setSelectedOpening(opening.name);
    setMoveList(opening.moves);
    setFocusSide(side);
    setCurrentMove(0);
    setGame(new Chess());
  };

  return (
    <Stack width="full">
      <AccordionRoot collapsible>
        {items.map((item) => (
          <AccordionItem
            padding={10}
            key={item.value}
            value={item.value.toString()}
          >
            <AccordionItemTrigger
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon>{item.icon}</Icon>
              {" " + item.title}
            </AccordionItemTrigger>
            <AccordionItemContent>
              <SimpleGrid columns={1} gap={7} padding={10}>
                {item.value === 1
                  ? openings.map((opening) => (
                      <Button
                        key={opening.name}
                        onClick={() => handleSelectOpening(opening, "white")}
                      >
                        {opening.name}
                      </Button>
                    ))
                  : defenses.map((defense) => (
                      <Button
                        key={defense.name}
                        onClick={() => handleSelectOpening(defense, "black")}
                      >
                        {defense.name}
                      </Button>
                    ))}
              </SimpleGrid>
            </AccordionItemContent>
          </AccordionItem>
        ))}
      </AccordionRoot>
    </Stack>
  );
};

export default OpeningSelector;
