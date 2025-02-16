import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import OpeningSelector from "./components/OpeningSelector";
import ChessGame from "./components/ChessGame";
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
      gap={4}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="aside">
        <OpeningSelector
          setSelectedOpening={setSelectedOpening}
          setFocusSide={setFocusSide}
        />
      </GridItem>
      <GridItem area="main">
        <ChessGame selectedOpening={selectedOpening} focusSide={focusSide} />
      </GridItem>
    </Grid>
  );
}

export default App;
