import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import OpeningSelector from "./components/OpeningSelector";
import Chessboard from "./components/Chessboard";
import NavBar from "./components/NavBar";

function App() {
  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
  });

  return (
    <Grid
      templateAreas={[
        `"nav" "main"`, // base
        `"nav" "main"`, // sm
        `"nav" "main"`, // md
        `"nav nav" "main main"`, // lg
        `"nav nav" "main main"`, // xl
      ]}
      templateColumns={[
        "1fr", // base
        "1fr", // sm
        "1fr", // md
        "200px 1fr", // lg
        "200px 1fr", // xl
      ]}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show when={isLargeScreen}>
        <GridItem area="aside">
          <OpeningSelector />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Chessboard />
      </GridItem>
    </Grid>
  );
}

export default App;
