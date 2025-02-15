import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";
import { Button, Icon, SimpleGrid, Stack } from "@chakra-ui/react";
import { openings, defenses } from "../data/openings";
import { FaChessKnight, FaChessRook } from "react-icons/fa";
import { FC } from "react";

interface OpeningSelectorProps {
  setSelectedOpening: (opening: string) => void;
  setFocusSide: (side: "white" | "black") => void;
}

const OpeningSelector: FC<OpeningSelectorProps> = ({
  setSelectedOpening,
  setFocusSide,
}) => {
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

  return (
    <Stack width="full" paddingLeft={10}>
      <AccordionRoot>
        {items.map((item) => (
          <AccordionItem
            padding={10}
            key={item.value}
            value={item.value.toString()}
          >
            <AccordionItemTrigger>
              <Icon>{item.icon}</Icon>
              {" " + item.title}
            </AccordionItemTrigger>
            <AccordionItemContent paddingLeft={10}>
              <SimpleGrid columns={1} gap={7} padding={10}>
                {item.value === 1
                  ? openings.map((opening) => (
                      <Button
                        key={opening}
                        onClick={() => {
                          setSelectedOpening(opening);
                          setFocusSide("white");
                        }}
                      >
                        {opening}
                      </Button>
                    ))
                  : defenses.map((defense) => (
                      <Button
                        key={defense}
                        onClick={() => {
                          setSelectedOpening(defense);
                          setFocusSide("black");
                        }}
                      >
                        {defense}
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
