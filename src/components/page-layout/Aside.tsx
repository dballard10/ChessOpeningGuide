import CollapseButton from "@/components/buttons/CollapseButton";
import { useRef } from "react";
import OpeningSelector from "../opening-selector/OpeningSelector";

interface AsidePanelProps {
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

const AsidePanel = ({ isCollapsed, toggleCollapse }: AsidePanelProps) => {
  return (
    <div className={"relative"}>
      <aside
        className={`absolute -top-8 -left-8 m-0 h-[calc(100vh-4rem)] bg-gray-900 text-white overflow-y-auto z-30
            w-[370px] transition-transform ease-in-out duration-300
            ${
              isCollapsed
                ? "-translate-x-full shadow-none border-none"
                : "translate-x-0 shadow-2xl shadow-black/50 border-r border-gray-700"
            }`}
      >
        <div className="mt-2 px-3 pt-24 pb-14">
          <OpeningSelector />
        </div>
      </aside>

      <div className="absolute top-2 -left-2 z-40 transition-all duration-300 ease-in-out">
        <CollapseButton
          toggleCollapse={toggleCollapse}
          isCollapsed={isCollapsed}
        />
      </div>
    </div>
  );
};

export default AsidePanel;
