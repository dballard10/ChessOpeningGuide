import { useChessStore } from "../../hooks/use-global-store";

interface OpeningListItemProps {
  name: string;
  moves?: string[];
  side?: "white" | "black";
  parentOpeningName?: string;
}

const OpeningListItem = ({
  name,
  moves = [],
  side = "white",
  parentOpeningName,
}: OpeningListItemProps) => {
  const {
    clickedOpeningId,
    handleOpeningClick,
    handleSelectOpening,
    clearSelectedOpening,
  } = useChessStore();
  const openingId = name; // Using name as ID since it appears to be unique

  const handleClick = () => {
    // Visual feedback
    handleOpeningClick(openingId);

    // Clear previous selection
    clearSelectedOpening();

    // Actually select the opening with the provided side
    handleSelectOpening(
      {
        name,
        moves,
        parentName: parentOpeningName,
      },
      side
    );

    console.log(
      "selectedOpening:",
      parentOpeningName ? `${parentOpeningName}: ${name}` : name
    );
    console.log("Move sequence:", moves);

    // Force a small delay to ensure state updates have propagated
    setTimeout(() => {
      const storeState = useChessStore.getState();
      console.log("Store state after selection:", {
        selectedOpening: storeState.selectedOpening,
        moveList: storeState.moveList,
        game: storeState.game.fen(),
        currentMove: storeState.currentMove,
      });
    }, 50);
  };

  return (
    <div className="flex justify-between items-center">
      <button
        onClick={handleClick}
        className={`backdrop-blur-lg border border-white/20 rounded-lg p-2 gap-2 w-full hover:bg-white/20 transition-all duration-300 ${
          clickedOpeningId === openingId ? "bg-white/30 scale-95" : ""
        }`}
      >
        <span className="text-sm">{name}</span>
      </button>
    </div>
  );
};

export default OpeningListItem;
