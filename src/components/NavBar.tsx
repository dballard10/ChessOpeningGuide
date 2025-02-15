import { HStack, Image, Heading, SimpleGrid } from "@chakra-ui/react";
import logo from "../assets/chesslogo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <SimpleGrid columns={2} padding="10px" justifyContent="space-between">
      <HStack>
        <Image src={logo} width="60px" height="60px" />
        <Heading> Chess Opening Explorer</Heading>
      </HStack>
      <ColorModeSwitch />
    </SimpleGrid>
  );
};

export default NavBar;
