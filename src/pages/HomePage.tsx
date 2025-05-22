import AsidePanel from "@/components/page-layout/Aside";
import { Navigation } from "@/components/page-layout/Navigation";
import useToggleAside from "../hooks/use-toggleAside.tsx";
import OpeningSelector from "@/components/opening-selector/OpeningSelector.tsx";
import { Chess } from "chess.js";
import ChessFunctions from "@/components/chess-functions/ChessFunctions.tsx";
import { useChessStore } from "../hooks/use-global-store.ts";
import { FaChessKing } from "react-icons/fa";
import Title from "@/components/chess-functions/Title.tsx";
import { useEffect } from "react";

const HomePage = () => {
  const {
    selectedOpening,
    focusSide,
    setFocusSide,
    moveList,
    setMoveList,
    currentMove,
    setCurrentMove,
    game,
    setGame,
  } = useChessStore();

  const { isCollapsed, toggleCollapse } = useToggleAside({
    initialState: false,
  });

  // Reset the game when the moveList changes to ensure proper updates
  useEffect(() => {
    // Only reset when moveList changes and we have moves
    if (moveList.length > 0) {
      console.log("Move list changed, resetting game state");
      const newGame = new Chess();
      setGame(newGame);
      setCurrentMove(0);
    }
  }, [moveList, setGame, setCurrentMove]);

  // Handler to move to the next move
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

  // Handler to move to the previous move
  const handlePrevMove = () => {
    if (currentMove > 0) {
      // Create a new game
      const newGame = new Chess();

      // Replay all moves up to currentMove - 1
      for (let i = 0; i < currentMove - 1; i++) {
        newGame.move(moveList[i]);
      }

      // Update the game state and decrement the current move counter
      setGame(newGame);
      setCurrentMove(currentMove - 1);
    }
  };

  // Handler to jump to a specific move
  const handleJumpToMove = (moveIndex: number) => {
    // Don't do anything if we're already at that move
    if (moveIndex === currentMove) return;

    // Create a new game
    const newGame = new Chess();

    // If we're going to the start position
    if (moveIndex === 0) {
      setGame(newGame);
      setCurrentMove(0);
      return;
    }

    // Replay all moves up to the target moveIndex
    for (let i = 0; i < moveIndex; i++) {
      newGame.move(moveList[i]);
    }

    // Update the game state and set the current move
    setGame(new Chess(newGame.fen()));
    setCurrentMove(moveIndex);
  };

  return (
    <div className="h-screen max-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      <Navigation />
      <div className="absolute top-20 pt-2 left-8">
        <AsidePanel isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
      </div>
      <main className="relative flex-1 overflow-x-hidden">
        <div className="flex flex-col items-center justify-center h-full">
          <Title selectedOpening={selectedOpening} />
          <ChessFunctions
            selectedOpening={selectedOpening}
            focusSide={focusSide}
            setFocusSide={setFocusSide}
            moveList={moveList}
            setMoveList={setMoveList}
            game={game}
            setGame={setGame}
            handleNextMove={handleNextMove}
            handlePrevMove={handlePrevMove}
            handleReset={handleReset}
            currentMove={currentMove}
            setCurrentMove={setCurrentMove}
            handleJumpToMove={handleJumpToMove}
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
