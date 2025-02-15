import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";
import { Button, Icon, SimpleGrid, Stack } from "@chakra-ui/react";
import openings from "../data/openings";
import { FaChess } from "react-icons/fa";
import { FC } from "react";

interface OpeningSelectorProps {
  setSelectedOpening: (opening: string) => void;
}

const OpeningSelector: FC<OpeningSelectorProps> = ({ setSelectedOpening }) => {
  const items = [
    {
      value: 1,
      title: "Openings",
      icon: <Icon as={FaChess} />,
    },
    {
      value: 2,
      title: "Defenses",
      icon: <Icon as={FaChess} />,
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
              <Icon fontSize="lg" color="fg.subtle">
                {item.icon}
              </Icon>
              {" " + item.title}
            </AccordionItemTrigger>
            <AccordionItemContent paddingLeft={10}>
              <SimpleGrid columns={1} gap={7} padding={10}>
                {openings.map((opening) => (
                  <Button
                    key={opening}
                    onClick={() => setSelectedOpening(opening)}
                  >
                    {opening}
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
