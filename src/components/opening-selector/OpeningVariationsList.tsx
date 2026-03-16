import { ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import OpeningListItem from "./OpeningListItem";

// Define proper types
interface OpeningVariation {
  id: string;
  name: string;
  variations: {
    name: string;
    moves: string[];
  }[];
}

const OpeningVariationsList = ({
  openingVariations,
  side = "white",
}: {
  openingVariations: OpeningVariation[];
  side?: "white" | "black";
}) => {
  if (!openingVariations || openingVariations.length === 0) {
    return <div className="text-white/50 p-2">No variations available</div>;
  }

  // Track which items are open
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col gap-4">
      {openingVariations.map((opening) => (
        <div key={opening.id} className="border-b border-white/10">
          <Collapsible
            open={openItems.includes(opening.id)}
            onOpenChange={() => toggleItem(opening.id)}
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full text-white p-2 hover:scale-105 hover:bg-white/5 rounded-lg transition-all">
              <div className="flex items-center gap-2">{opening.name}</div>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  openItems.includes(opening.id) ? "rotate-180" : ""
                }`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="animate-accordion-down overflow-hidden">
              <div className="flex flex-col gap-2 p-2">
                {opening.variations.map((variation, vIndex) => (
                  <OpeningListItem
                    key={`${opening.id}-var-${vIndex}`}
                    name={variation.name}
                    moves={variation.moves}
                    side={side}
                    parentOpeningName={opening.name}
                  />
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      ))}
    </div>
  );
};

export default OpeningVariationsList;
