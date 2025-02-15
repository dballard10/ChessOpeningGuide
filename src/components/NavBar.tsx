import { Heading, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/chesslogo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <HStack>
        <Image src={logo} width="60px" height="60px" />
        <Heading>Chess Opening Guide</Heading>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
