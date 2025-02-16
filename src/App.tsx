import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import OpeningSelector from "./components/OpeningSelector";
import ChessFunctions from "./components/ChessGame";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  const [selectedOpening, setSelectedOpening] = useState("");
  const [focusSide, setFocusSide] = useState<"white" | "black">("white");

  const templateAreas = useBreakpointValue({
    base: `"nav nav" "aside main"`,
    lg: `"nav nav" "aside main"`,
  });

  const templateColumns = useBreakpointValue({
    base: "300px 1fr",
    lg: "300px 1fr",
  });

  return (
    <Grid
      templateAreas={templateAreas}
      templateColumns={templateColumns}
      width="100vw"
      position="absolute"
      top="0"
      left="0"
    >
      <GridItem area="nav" boxShadow="0 0 5px rgba(0, 0, 0, 0.5)">
        <NavBar />
      </GridItem>
      <GridItem area="aside" boxShadow="0 0 5px rgba(0, 0, 0, 0.5)">
        <OpeningSelector
          setSelectedOpening={setSelectedOpening}
          setFocusSide={setFocusSide}
        />
      </GridItem>
      <GridItem area="main" boxShadow="0 0 5px rgba(0, 0, 0, 0.5)">
        <ChessFunctions
          selectedOpening={selectedOpening}
          focusSide={focusSide}
          setFocusSide={setFocusSide}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
