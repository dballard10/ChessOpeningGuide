import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import OpeningSelector from "./components/OpeningSelector";
import Chessboard from "./components/Chessboard";
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
      <GridItem area="nav" color="blue">
        <NavBar />
      </GridItem>
      <Show when="lg">
        <GridItem area="aside" color="green">
          <OpeningSelector />
        </GridItem>
      </Show>
      <GridItem area="main" color="red">
        <Chessboard />
      </GridItem>
    </Grid>
  );
}

export default App;
