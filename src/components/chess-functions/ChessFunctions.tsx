import FlipSidesButton from "@/components/buttons/FlipSidesButton";
import ChessGame from "./ChessGame";
import { FC, useEffect, useState } from "react";
import { Chess } from "chess.js";
import MagnifyingGlassButton from "../buttons/MagnifyingGlassButton";
import NextMoveButton from "../buttons/NextMoveButton";
import PrevMoveButton from "../buttons/PrevMoveButton";
import ResetButton from "../buttons/ResetButton";
import MoveSequence from "./MoveSequence";
import React from "react";
import BoardCustomizer from "./BoardCustomizer";

interface ChessFunctionsProps {
  selectedOpening: string;
  focusSide: "white" | "black";
  setFocusSide: (side: "white" | "black") => void;
  moveList: string[];
  setMoveList: (moveList: string[]) => void;
  game: Chess;
  setGame: (game: Chess) => void;
  handleNextMove: () => void;
  handlePrevMove: () => void;
  handleReset: () => void;
  currentMove: number;
  setCurrentMove: (move: number) => void;
  handleJumpToMove: (moveIndex: number) => void;
}

const ChessFunctions: FC<ChessFunctionsProps> = ({
  selectedOpening,
  focusSide,
  setFocusSide,
  moveList,
  setMoveList,
  game,
  setGame,
  handleNextMove,
  handlePrevMove,
  handleReset,
  currentMove,
  setCurrentMove,
  handleJumpToMove,
}) => {
  const [isLargeScreen, setIsLargeScreen] = React.useState(false);
  const [isFollowingOriginalSequence, setIsFollowingOriginalSequence] =
    useState(true);

  // Track the original move sequence
  const [originalMoveList, setOriginalMoveList] = useState<string[]>([]);

  // Reset effect when moveList changes completely
  useEffect(() => {
    console.log("ChessFunctions: moveList changed", moveList);
    // Reset when a new opening is selected
    setOriginalMoveList([...moveList]);
    setIsFollowingOriginalSequence(true);
  }, [moveList]);

  // Store the original move list when it first changes
  useEffect(() => {
    if (moveList.length > 0 && originalMoveList.length === 0) {
      setOriginalMoveList([...moveList]);
    }
  }, [moveList, originalMoveList]);

  // Check if we're following the original sequence and restore it when needed
  useEffect(() => {
    // If we have an original sequence to compare against
    if (originalMoveList.length > 0) {
      // Check if the current position's moves match the original sequence up to the current move
      const movesMatchOriginal = moveList
        .slice(0, currentMove)
        .every((move, idx) => move === originalMoveList[idx]);

      // If we're back on track with the original sequence or at the starting position
      if (movesMatchOriginal && (currentMove > 0 || currentMove === 0)) {
        // Restore the original move list for future moves
        const updatedMoveList = [
          ...moveList.slice(0, currentMove),
          ...originalMoveList.slice(currentMove),
        ];

        // Only update if the move list has actually changed
        if (JSON.stringify(updatedMoveList) !== JSON.stringify(moveList)) {
          setMoveList(updatedMoveList);
        }

        setIsFollowingOriginalSequence(true);
      } else if (currentMove > 0) {
        // Check if any moves deviate from the original sequence
        const hasDeviation = moveList
          .slice(0, currentMove)
          .some((move, idx) => move !== originalMoveList[idx]);

        setIsFollowingOriginalSequence(!hasDeviation);
      }
    }
  }, [moveList, originalMoveList, currentMove, setMoveList]);

  React.useEffect(() => {
    // Check for large screens (e.g., 1024px or larger)
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1400);
    };

    // Initial check
    checkScreenSize();

    // Add listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div
      className={`
        grid 
        ${!isLargeScreen ? "grid-cols-1 pt-10" : "grid-cols-2"} 
        pt-2 pl-[30px] pr-[20px] gap-10 items-start 
        overflow-y-auto h-screen 
        transition-all duration-500 ease-in-out
      `}
    >
      <div className="min-h-min">
        <div className="flex justify-left w-[500px]">
          <FlipSidesButton focusSide={focusSide} setFocusSide={setFocusSide} />
          <BoardCustomizer />
        </div>
        <ChessGame
          focusSide={focusSide}
          game={game}
          currentMove={currentMove}
          moveList={moveList}
          setGame={setGame}
          setCurrentMove={setCurrentMove}
          setMoveList={setMoveList}
        />
        <div className="relative w-[500px]">
          <div className="flex justify-center">
            <PrevMoveButton
              handlePrevMove={handlePrevMove}
              currentMove={currentMove}
            />
            <ResetButton handleReset={handleReset} currentMove={currentMove} />
            <NextMoveButton
              handleNextMove={handleNextMove}
              currentMove={currentMove}
              moveList={moveList}
              isEnabled={isFollowingOriginalSequence}
            />
          </div>
        </div>

        {/* Small screen move sequence - always render but conditionally show */}
        <div
          className={`
            mt-8
            transition-all duration-500 ease-in-out 
            will-change-transform will-change-opacity
            ${
              !isLargeScreen
                ? "opacity-100 translate-y-0"
                : "opacity-0 absolute -bottom-full pointer-events-none"
            }
          `}
        >
          <MoveSequence
            moveList={moveList}
            currentMove={currentMove}
            selectedOpening={selectedOpening}
            onMoveClick={handleJumpToMove}
          />
        </div>
      </div>

      {/* Large screen move sequence - always render but conditionally show */}
      <div
        className={`
          pt-8
          justify-center 
          transition-all duration-500 ease-in-out 
          will-change-opacity will-change-transform
          ${
            isLargeScreen
              ? "opacity-100 translate-x-0"
              : "opacity-0 absolute -right-full pointer-events-none"
          }
        `}
      >
        <MoveSequence
          moveList={moveList}
          currentMove={currentMove}
          selectedOpening={selectedOpening}
          onMoveClick={handleJumpToMove}
        />
      </div>
    </div>
  );
};

export default ChessFunctions;
