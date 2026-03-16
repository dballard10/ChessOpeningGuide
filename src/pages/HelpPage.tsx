import { Navigation } from "@/components/page-layout/Navigation";
import PageHeading from "@/components/page-layout/PageHeading";

const HelpPage = () => {
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white flex flex-col">
      <Navigation />
      <PageHeading title="Chess Help & Rules" />
      <main className="flex-1 overflow-hidden">
        <div className="h-full px-4 py-6 sm:px-6 lg:px-8">
          <div className="h-full max-w-4xl mx-auto overflow-y-auto pr-2">
            {/* Introduction */}
            <section id="introduction">
              <h2 className="text-2xl font-bold text-white mb-4">
                Welcome to Chess Opening Guide
              </h2>
              <p className="text-gray-300">
                This application helps you learn and practice chess openings.
                Whether you're a beginner or an experienced player looking to
                expand your repertoire, understanding openings is crucial to
                improving at chess.
              </p>
            </section>
            {/* How to Use This App */}
            <section id="how-to-use-this-app" className="pt-4">
              <h2 className="text-2xl font-bold text-white mb-4">
                How to Use This App
              </h2>
              <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
                <ol className="list-decimal pl-6 text-gray-300 space-y-3">
                  <li>
                    Select an opening from the side panel (white or black
                    openings; the openings are grouped by their starting move).
                  </li>
                  <li>
                    Watch how the pieces move on the board by using the
                    navigation buttons below the board.
                  </li>
                  <li>
                    You can step through the moves forward and backward using
                    the "Next" and "Previous" buttons. Use the "Reset" button to
                    return to the starting position.
                  </li>
                  <li>
                    Drag pieces on the board to explore your own variations.
                  </li>
                  <li>
                    Use the "Flip Sides" button to view the board from either
                    white or black's perspective.
                  </li>
                  <li>
                    Use the "Move Sequence" section to view the sequence of
                    moves for the opening. You can click on any move in the
                    sequence to go to that part of the opening.
                  </li>
                  <li>
                    When you drag a piece, the move will appear in "Move
                    Sequence" section and will replace the following moves (if
                    any).
                  </li>
                  <li>
                    Reseting the chessboard or going back to a position before
                    you dragged a piece will reset the "Move Sequence" to its
                    initial state.
                  </li>
                </ol>
              </div>
            </section>
            {/* What is a Chess Opening */}
            <section id="what-is-a-chess-opening" className="pt-4">
              <h2 className="text-2xl font-bold text-white mb-4">
                What is a Chess Opening?
              </h2>
              <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
                <p className="text-gray-300 mb-4">
                  A chess opening refers to the initial moves of a chess game.
                  These first 10-15 moves often follow established patterns that
                  have been studied and refined over centuries of chess history.
                </p>
                <p className="text-gray-300 mb-4">Good openings help you:</p>
                <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
                  <li>Develop your pieces efficiently</li>
                  <li>Control the center of the board</li>
                  <li>Establish a safe position for your king</li>
                  <li>Create a foundation for middle-game strategies</li>
                </ul>
                <p className="text-gray-300">
                  Each opening has a name (like "Sicilian Defense" or "Queen's
                  Gambit") and follows specific move sequences. Learning these
                  patterns gives you a blueprint for starting games with
                  confidence.
                </p>
              </div>
            </section>
            {/* White vs Black Openings */}
            <section id="white-vs-black-openings" className="pt-4">
              <h2 className="text-2xl font-bold text-white mb-4">
                White Openings vs. Black Openings
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="inline-block w-4 h-4 bg-white rounded-full mr-2"></span>
                    White Openings
                  </h3>
                  <p className="text-gray-300 mb-3">
                    White always moves first in chess, giving this player the
                    initiative.
                  </p>
                  <p className="text-gray-300 mb-3">
                    White openings are often more aggressive and attempt to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300">
                    <li>Establish early control of the center</li>
                    <li>Create attacking opportunities</li>
                    <li>Force Black to respond defensively</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="inline-block w-4 h-4 bg-gray-900 border border-white rounded-full mr-2"></span>
                    Black Openings
                  </h3>
                  <p className="text-gray-300 mb-3">
                    Black responds to White's first move, often with different
                    goals.
                  </p>
                  <p className="text-gray-300 mb-3">
                    Black openings typically focus on:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300">
                    <li>Equalizing the position</li>
                    <li>Contesting central control</li>
                    <li>Setting up solid defensive structures</li>
                    <li>Creating counter-attacking opportunities</li>
                  </ul>
                </div>
              </div>
            </section>
            {/* Chess Notation */}
            <section id="chess-notation" className="pt-4">
              <h2 className="text-2xl font-bold text-white mb-4">
                Understanding Chess Notation
              </h2>
              <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
                <p className="text-gray-300 mb-4">
                  Chess notation is the language used to record and communicate
                  chess moves. The standard system used today is Algebraic
                  Notation.
                </p>

                <h3 className="text-xl font-semibold mb-3">The Basics</h3>
                <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
                  <li>
                    The board is labeled with letters (a-h) for columns and
                    numbers (1-8) for rows
                  </li>
                  <li>Each square has a unique coordinate (e.g., e4, b7)</li>
                  <li>
                    Pieces are represented by capital letters: K (King), Q
                    (Queen), R (Rook), B (Bishop), N (Knight)
                  </li>
                  <li>
                    Pawns don't have a letter, just the destination square is
                    given
                  </li>
                </ul>
              </div>
            </section>
            {/* Basic Chess Rules */}
            <section className="pt-4">
              <h2 className="text-2xl font-bold text-white mb-4">
                Basic Chess Rules
              </h2>
              <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3">
                  The Board and Pieces
                </h3>
                <p className="text-gray-300 mb-4">
                  Chess is played on an 8×8 square board alternating between
                  light and dark squares. Each player starts with 16 pieces:
                </p>
                <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
                  <li>1 King: Moves one square in any direction</li>
                  <li>
                    1 Queen: Moves any number of squares diagonally,
                    horizontally, or vertically
                  </li>
                  <li>
                    2 Rooks: Move any number of squares horizontally or
                    vertically
                  </li>
                  <li>2 Bishops: Move any number of squares diagonally</li>
                  <li>
                    2 Knights: Move in an L-shape (two squares in one direction,
                    then one square perpendicular)
                  </li>
                  <li>
                    8 Pawns: Move forward one square (or two squares on their
                    first move) and capture diagonally
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Basic Gameplay</h3>
                <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
                  <li>White always moves first</li>
                  <li>Players take turns moving one piece per turn</li>
                  <li>
                    A piece can capture an opponent's piece by moving to its
                    square
                  </li>
                  <li>
                    The goal is to checkmate your opponent's king (put it under
                    attack with no legal escape)
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Special Moves</h3>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>
                    <span className="font-medium">Castling:</span> The king
                    moves two squares toward a rook, and the rook moves to the
                    square the king crossed
                  </li>
                  <li>
                    <span className="font-medium">En passant:</span> A pawn can
                    capture an enemy pawn that has just moved two squares
                    forward
                  </li>
                  <li>
                    <span className="font-medium">Promotion:</span> When a pawn
                    reaches the opposite end of the board, it can be upgraded to
                    any other piece (usually a queen)
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HelpPage;
