import { blackOpenings } from "@/data/openings";
import { useChessStore } from "../../hooks/use-global-store";
import OpeningCategoryList from "./OpeningCategoryList";

const BlackOpeningList = () => {
  const { searchQuery } = useChessStore();

  // Filter openings based on search query
  let filteredOpenings = blackOpenings;

  if (searchQuery.length > 0) {
    const query = searchQuery.toLowerCase();

    filteredOpenings = blackOpenings
      .map((category) => {
        // Check if the category name matches the search query
        const categoryMatches = category.name.toLowerCase().includes(query);

        // Filter the variations that match the search query
        const filteredVariations = category.openings.filter((opening) =>
          opening.name.toLowerCase().includes(query)
        );

        // Include the category if either the category name matches or there are matching variations
        return {
          ...category,
          openings: categoryMatches ? category.openings : filteredVariations,
        };
      })
      .filter((category) => category.openings.length > 0);
  }

  // Transform the data structure to match what OpeningCategoryList expects
  const processedOpenings = filteredOpenings.map((category) => ({
    id: category.name,
    name: category.name,
    variations: category.openings.map((opening, idx) => ({
      id: `${opening.name}-${idx}`,
      name: opening.name,
      variations: opening.variations,
    })),
  }));

  return (
    <div>
      <OpeningCategoryList openingCategories={processedOpenings} side="black" />
    </div>
  );
};

export default BlackOpeningList;
