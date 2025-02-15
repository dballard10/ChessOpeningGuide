import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import OpeningSelector from "./components/OpeningSelector";
import ChessGame from "./components/ChessGame";
import NavBar from "./components/NavBar";

function App() {
  const templateAreas = useBreakpointValue({
    base: `"nav" " main"`,
    lg: `"nav nav" "aside main"`,
  });

  const templateColumns = useBreakpointValue({
    base: "1fr",
    lg: "200px 1fr",
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
        <OpeningSelector />
      </GridItem>
      <GridItem area="main">
        <ChessGame />
      </GridItem>
    </Grid>
  );
}

export default App;
