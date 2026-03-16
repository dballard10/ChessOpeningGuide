import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect } from "react";
import { FaChessKnight, FaChessRook } from "react-icons/fa";
import WhiteOpeningList from "./WhiteOpeningList";
import BlackOpeningList from "./BlackOpeningList";
import SearchBar from "./SearchBar";
import { useChessStore } from "../../hooks/use-global-store";

const OpeningSelector = () => {
  const { setSelectedOpening } = useChessStore();

  useEffect(() => {
    setSelectedOpening("Chess Opening Guide");
  }, [setSelectedOpening]);

  return (
    <div className="flex flex-col gap-4 p-4">
      <SearchBar />
      <Accordion
        type="multiple"
        defaultValue={["white-openings", "black-openings"]}
        className="w-full"
      >
        <AccordionItem value="white-openings">
          <AccordionTrigger className="text-white hover:scale-105 no-underline">
            <div className="flex items-center gap-2">
              <FaChessKnight /> White Openings
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <WhiteOpeningList />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="black-openings">
          <AccordionTrigger className="text-white hover:scale-105 no-underline">
            <div className="flex items-center gap-2">
              <FaChessRook /> Black Openings
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <BlackOpeningList />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default OpeningSelector;
