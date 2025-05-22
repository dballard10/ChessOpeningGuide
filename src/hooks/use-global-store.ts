import { create } from "zustand";
import { Chess } from "chess.js";

// Define available themes
export type BoardTheme = {
  light: string;
  dark: string;
  name: string;
};

interface ChessState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  clearSearch: () => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  clickedOpeningId: string | null;
  handleOpeningClick: (id: string) => void;

  // New states for opening selection
  selectedOpening: string;
  selectedVariation: string;
  parentOpeningName: string;
  focusSide: "white" | "black";
  moveList: string[];
  currentMove: number;
  game: Chess;

  // Board and piece customization
  boardTheme: BoardTheme;
  setBoardTheme: (theme: BoardTheme) => void;

  // New function for opening selection
  setSelectedOpening: (opening: string) => void;
  setFocusSide: (side: "white" | "black") => void;
  setMoveList: (moves: string[]) => void;
  setCurrentMove: (move: number) => void;
  setGame: (game: Chess) => void;
  clearSelectedOpening: () => void;
  handleSelectOpening: (
    opening: { name: string; moves: string[]; parentName?: string },
    side: "white" | "black"
  ) => void;
}

// Define default themes
const DEFAULT_BOARD_THEMES: BoardTheme[] = [
  { name: "Classic", light: "#F0D9B5", dark: "#B58863" },
  { name: "Forest", light: "#E8EAD6", dark: "#7C9448" },
  { name: "Ocean", light: "#D9E4EC", dark: "#5A7A99" },
  { name: "Midnight", light: "#ADADAD", dark: "#312E2B" },
  { name: "Coral", light: "#F7CFC1", dark: "#CD5E5E" },
  { name: "Cotton Candy", light: "#FF008D", dark: "#00B8FF" },
];

export const useChessStore = create<ChessState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
  clearSearch: () => set({ searchQuery: "" }),
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
  clickedOpeningId: null,
  handleOpeningClick: (id) => {
    set({ clickedOpeningId: id });
    setTimeout(() => set({ clickedOpeningId: null }), 150);
  },

  // Initialize new states
  selectedOpening: "Chess Opening Guide",
  selectedVariation: "",
  parentOpeningName: "",
  focusSide: "white",
  moveList: [],
  currentMove: 0,
  game: new Chess(),

  // Initialize board and piece customization
  boardTheme: DEFAULT_BOARD_THEMES[0],
  setBoardTheme: (theme) => set({ boardTheme: theme }),

  // Initialize new functions
  setSelectedOpening: (opening) => set({ selectedOpening: opening }),
  setFocusSide: (side) => set({ focusSide: side }),
  setMoveList: (moves) => set({ moveList: moves }),
  setCurrentMove: (move) => set({ currentMove: move }),
  setGame: (game) => set({ game }),
  handleSelectOpening: (opening, side) => {
    const isVariation = opening.parentName && opening.name;
    const displayName = isVariation ? opening.parentName : opening.name;
    const variationName = isVariation ? opening.name : "";

    set({
      selectedOpening: displayName,
      selectedVariation: variationName,
      parentOpeningName: opening.parentName || "",
      moveList: opening.moves,
      focusSide: side,
      currentMove: 0,
      game: new Chess(),
    });
  },
  clearSelectedOpening: () =>
    set({
      selectedOpening: "Chess Opening Guide",
      selectedVariation: "",
      parentOpeningName: "",
      moveList: [],
    }),
}));

// Export the theme options for use elsewhere
export const BOARD_THEMES = DEFAULT_BOARD_THEMES;
