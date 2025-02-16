// Openings
export const openings = [
  {
    name: "Benko Gambit",
    moves: ["d4", "Nf6", "c4", "c5", "d5", "b5"],
  },
  {
    name: "Bird's Opening",
    moves: ["f4", "d5", "Nf3", "Nf6", "g3", "c5"],
  },
  {
    name: "Budapest Gambit",
    moves: ["d4", "Nf6", "c4", "e5", "dxe5", "Ng4"],
  },
  {
    name: "Catalan Opening",
    moves: ["d4", "Nf6", "c4", "e6", "g3", "d5", "Bg2"],
  },
  {
    name: "Colle System",
    moves: ["d4", "Nf6", "Nf3", "e6", "e3", "d5", "Bd3", "c5", "O-O"],
  },
  {
    name: "Giuoco Piano",
    moves: ["e4", "e5", "Nf3", "Nc6", "Bc4", "Bc5"],
  },
  {
    name: "English Opening",
    moves: ["c4", "e5", "Nc3", "Nf6", "Nf3", "Nc6", "g3"],
  },
  {
    name: "Evans Gambit",
    moves: ["e4", "e5", "Nf3", "Nc6", "Bc4", "Bc5", "b4"],
  },
  {
    name: "Four Knights Game",
    moves: ["e4", "e5", "Nf3", "Nc6", "Nc3", "Nf6"],
  },
  {
    name: "Italian Game",
    moves: ["e4", "e5", "Nf3", "Nc6", "Bc4"],
  },
  {
    name: "King's Gambit",
    moves: ["e4", "e5", "f4", "exf4"],
  },
  {
    name: "King's Indian Attack",
    moves: ["Nf3", "d5", "g3", "Nf6", "Bg2", "e6", "O-O"],
  },
  {
    name: "King's Pawn Game",
    moves: ["e4", "e5"],
  },
  {
    name: "London System",
    moves: ["d4", "Nf6", "Nf3", "e6", "Bf4", "c5", "e3", "Nc6", "c3"],
  },
  {
    name: "Queen's Pawn Game",
    moves: ["d4", "d5"],
  },
  {
    name: "Queen's Gambit Accepted",
    moves: ["d4", "d5", "c4", "dxc4"],
  },
  {
    name: "Réti Opening",
    moves: ["Nf3", "d5", "c4"],
  },
  {
    name: "Ruy Lopez",
    moves: ["e4", "e5", "Nf3", "Nc6", "Bb5"],
  },
  {
    name: "Scotch Game",
    moves: ["e4", "e5", "Nf3", "Nc6", "d4"],
  },
  {
    name: "Torre Attack",
    moves: ["d4", "Nf6", "Nf3", "e6", "Bg5"],
  },
  {
    name: "Vienna Game",
    moves: ["e4", "e5", "Nc3", "Nf6", "f4"],
  },
];

// Defenses
export const defenses = [
  {
    name: "Alekhine's Defense",
    moves: ["e4", "Nf6"],
  },
  {
    name: "Benoni Defense",
    moves: ["d4", "Nf6", "c4", "c5", "d5", "e6"],
  },
  {
    name: "Bogo-Indian Defense",
    moves: ["d4", "Nf6", "c4", "e6", "Nf3", "Bb4+"],
  },
  {
    name: "Caro-Kann Defense",
    moves: ["e4", "c6", "d4", "d5"],
  },
  {
    name: "Dutch Defense",
    moves: ["d4", "f5"],
  },
  {
    name: "French Defense",
    moves: ["e4", "e6", "d4", "d5"],
  },
  {
    name: "Grünfeld Defense",
    moves: ["d4", "Nf6", "c4", "g6", "Nc3", "d5"],
  },
  {
    name: "King's Indian Defense",
    moves: ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7", "e4", "d6"],
  },
  {
    name: "Modern Defense",
    moves: ["e4", "g6"],
  },
  {
    name: "Nimzo-Indian Defense",
    moves: ["d4", "Nf6", "c4", "e6", "Nc3", "Bb4"],
  },
  {
    name: "Nimzowitsch Defense",
    moves: ["e4", "Nc6"],
  },
  {
    name: "Petrov's Defense",
    moves: ["e4", "e5", "Nf3", "Nf6"],
  },
  {
    name: "Philidor's Defense",
    moves: ["e4", "e5", "Nf3", "d6"],
  },
  {
    name: "Pirc Defense",
    moves: ["e4", "d6", "d4", "Nf6", "Nc3", "g6"],
  },
  {
    name: "Queen's Gambit Declined",
    moves: ["d4", "d5", "c4", "e6"],
  },
  {
    name: "Queen's Indian Defense",
    moves: ["d4", "Nf6", "c4", "e6", "Nf3", "b6"],
  },
  {
    name: "Scandinavian Defense",
    moves: ["e4", "d5"],
  },
  {
    name: "Sicilian Defense",
    moves: ["e4", "c5"],
  },
  {
    name: "Slav Defense",
    moves: ["d4", "d5", "c4", "c6"],
  },
  {
    name: "Two Knights Defense",
    moves: ["e4", "e5", "Nf3", "Nc6", "Bc4", "Nf6"],
  },
  {
    name: "Wade Defense",
    moves: ["d4", "Nf6", "c4", "e6", "Nc3", "c6", "Nf3", "d5"],
  },
];

/*
Alternative variations (non-exhaustive):

- Benko Gambit: Alternatives include lines with ...a6 or ...Bb7.
- Bird's Opening: Other move orders such as 1.f4 d5 2.Nf3 c5 3.g3 Nf6.
- Budapest Gambit: Some lines continue 7.exd5 Nxd5 after 6...Ng4.
- Catalan: Variations include the Open Catalan with an early ...dxc4.
- Colle System: White may opt for an early Bd3 or c3 before Nf3.
- King's Gambit: Other lines involve declining the gambit or playing the Fischer Defense.
- London System: Many move orders exist—e.g., 1.d4 followed immediately by Bf4.
- Vienna Game: An alternate is 1.e4 e5 2.Nc3 followed by 3.f4.
- King's Indian Defense: Black sometimes delays ...d6 or plays an early ...e5.
- Wade Defense: Being less common, move orders may vary significantly.

Each opening/defense has rich theory. The above lists provide one representative move sequence per item.
*/
