import { useState, useRef } from "react";
import { useChessStore, BOARD_THEMES } from "@/hooks/use-global-store";
import { FaChessBoard } from "react-icons/fa";

const BoardCustomizer = () => {
  const { boardTheme, setBoardTheme } = useChessStore();
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="p-2 relative">
      <button
        ref={buttonRef}
        onClick={toggleOpen}
        className="p-2 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 hover:scale-105 transition-all"
        title="Customize board theme"
      >
        <FaChessBoard />
      </button>

      {isOpen && (
        <div className="absolute z-50 top-full left-0 -mt-12 w-72 bg-gray-800/95 backdrop-blur-md border border-white/20 rounded-lg shadow-xl p-4 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <FaChessBoard className="mr-2" /> Board Theme
            </h3>
            <button
              onClick={toggleOpen}
              className="text-gray-400 hover:text-white"
              title="Close"
            >
              ✕
            </button>
          </div>

          {/* Board Theme Section */}
          <div className="mb-6">
            <div className="grid grid-cols-2 gap-2">
              {BOARD_THEMES.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => setBoardTheme(theme)}
                  className={`
                    p-2 rounded-md transition-all
                    ${
                      boardTheme.name === theme.name
                        ? "ring-2 ring-blue-500 scale-105"
                        : "hover:bg-white/10"
                    }
                  `}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex">
                      <div
                        style={{ backgroundColor: theme.light }}
                        className="w-6 h-6 rounded-tl-sm"
                      ></div>
                      <div
                        style={{ backgroundColor: theme.dark }}
                        className="w-6 h-6 rounded-tr-sm"
                      ></div>
                    </div>
                    <div className="flex">
                      <div
                        style={{ backgroundColor: theme.dark }}
                        className="w-6 h-6 rounded-bl-sm"
                      ></div>
                      <div
                        style={{ backgroundColor: theme.light }}
                        className="w-6 h-6 rounded-br-sm"
                      ></div>
                    </div>
                    <span className="text-xs mt-1 text-gray-300">
                      {theme.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoardCustomizer;
