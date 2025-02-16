import { HStack } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";
import { useColorMode } from "./ui/color-mode";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <ColorModeButton colorPalette={"blue"} onClick={toggleColorMode}>
        {colorMode === "dark" ? "Dark Mode" : "Light Mode"}
      </ColorModeButton>
    </HStack>
  );
};

export default ColorModeSwitch;
