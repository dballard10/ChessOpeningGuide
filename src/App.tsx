import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import OpeningSelector from "./components/OpeningSelector";
import ChessFunctions from "./components/ChessFunctions";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { Chess } from "chess.js";

function App() {
  const [selectedOpening, setSelectedOpening] = useState("");
  const [focusSide, setFocusSide] = useState<"white" | "black">("white");
  const [moveList, setMoveList] = useState<string[]>([]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const [game, setGame] = useState<Chess>(new Chess());

  const templateAreas = useBreakpointValue({
    base: `"nav nav" "aside main"`,
    lg: `"nav nav" "aside main"`,
  });

  const templateColumns = useBreakpointValue({
    base: "300px 1fr",
    lg: "300px 1fr",
  });

  // Handler to apply the next move
  const handleNextMove = () => {
    if (currentMove < moveList.length) {
      const move = moveList[currentMove];
      const result = game.move(move);
      if (result) {
        setGame(new Chess(game.fen())); // Update game state
        setCurrentMove(currentMove + 1);
      } else {
        console.error(`Invalid move: ${move}`);
      }
    }
  };

  // Handler to reset the game
  const handleReset = () => {
    const newGame = new Chess();
    setGame(newGame);
    setCurrentMove(0);
  };

  return (
    <Grid
      templateAreas={templateAreas}
      templateColumns={templateColumns}
      width="100vw"
      position="absolute"
      top="0"
      left="0"
    >
      <GridItem
        area="nav"
        backgroundColor={"#3f3f46"}
        boxShadow="0 0 5px rgba(0, 0, 0, 0.5)"
      >
        <NavBar />
      </GridItem>
      <GridItem area="aside" boxShadow="0 0 5px rgba(0, 0, 0, 0.5)">
        <OpeningSelector
          setSelectedOpening={setSelectedOpening}
          setFocusSide={setFocusSide}
          setMoveList={setMoveList}
          setCurrentMove={setCurrentMove}
          setGame={setGame}
        />
      </GridItem>
      <GridItem area="main" boxShadow="0 0 5px rgba(0, 0, 0, 0.5)">
        <ChessFunctions
          selectedOpening={selectedOpening}
          focusSide={focusSide}
          setFocusSide={setFocusSide}
          moveList={moveList}
          game={game}
          handleNextMove={handleNextMove}
          handleReset={handleReset}
          currentMove={currentMove}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
