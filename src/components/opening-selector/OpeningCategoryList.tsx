import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import OpeningVariationsList from "./OpeningVariationsList";

interface OpeningCategory {
  id: string;
  name: string;
  variations: {
    id: string;
    name: string;
    variations: any[];
  }[];
}

const OpeningCategoryList = ({
  openingCategories,
  side = "white",
}: {
  openingCategories: OpeningCategory[];
  side?: "white" | "black";
}) => {
  // Track which items are open
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col gap-4">
      {openingCategories.map((category) => (
        <div key={category.id}>
          <Collapsible
            open={openItems.includes(category.id)}
            onOpenChange={() => toggleItem(category.id)}
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full text-white bg-gray-800 p-2 hover:scale-105 hover:bg-white/5 rounded-lg transition-all">
              <div className="flex items-center gap-2 font-bold">
                {category.name}
              </div>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  openItems.includes(category.id) ? "rotate-180" : ""
                }`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="animate-accordion-down overflow-hidden">
              <div className="p-2">
                <OpeningVariationsList
                  openingVariations={category.variations || []}
                  side={side}
                />
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      ))}
    </div>
  );
};

export default OpeningCategoryList;
