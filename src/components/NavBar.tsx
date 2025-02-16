import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/chesslogo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="20px">
      <HStack>
        <img
          src={logo}
          width="60px"
          height="60px"
          style={{ borderRadius: "10px" }}
        />
        <h1
          className="text-xl font-bold"
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          Chess Opening Guide
        </h1>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
