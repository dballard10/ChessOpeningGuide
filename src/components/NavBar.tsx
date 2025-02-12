import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/chesslogo.webp";
//import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} width="60px" height="60px" />
      {/* <ColorModeSwitch /> */}
    </HStack>
  );
};

export default NavBar;
