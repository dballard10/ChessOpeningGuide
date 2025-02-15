import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import openings from "../data/openings";
import { FaChess } from "react-icons/fa";
const OpeningSelector = () => {
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
      <Heading>Openings</Heading>
      <AccordionRoot>
        {items.map((item) => (
          <AccordionItem
            paddingBottom={10}
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
              <SimpleGrid columns={1} gap={7}>
                {openings.map((opening) => (
                  <div key={opening}>{opening}</div>
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
