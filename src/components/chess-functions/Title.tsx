import { useChessStore } from "@/hooks/use-global-store";
import { FaChessKing } from "react-icons/fa";
// import { FaChessBoard } from "react-icons/fa";
import { FaChessBoard } from "react-icons/fa6";

interface TitleProps {
  selectedOpening: string;
}

const Title = ({ selectedOpening }: TitleProps) => {
  const { selectedVariation } = useChessStore();
  // Format the title based on requirements
  const formatTitle = () => {
    // If no variation or it's "Main Line", just return the opening name
    if (!selectedVariation || selectedVariation === "Main Line") {
      return selectedOpening;
    }
    // Otherwise, return "Opening: Variation"
    return `${selectedOpening}: ${selectedVariation}`;
  };
  return (
    <div>
      <h3 className="text-3xl font-bold pt-8 flex items-center gap-2">
        <FaChessBoard />
        {formatTitle()}
      </h3>
    </div>
  );
};

export default Title;
