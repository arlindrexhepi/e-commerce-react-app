import { SetStateAction } from "react";
import { AiOutlineDown } from "react-icons/ai";

import ChildAccordion from "./ChildAccordion";

export interface ParentAccordionProps {
  menuTitle: string;
  showAccordion: boolean;
  onSetShowAccordion: React.Dispatch<SetStateAction<boolean>>;
  accordionImages: string[];
}

const ParentAccordion: React.FC<ParentAccordionProps> = ({
  menuTitle,
  showAccordion,
  onSetShowAccordion,
  accordionImages
}) => {
  return (
    <>
      <div
        className="parentAccordion flex items-center border-r 
    hover:bg-darkPrimary px-4 py-3 lg:cursor-pointer"
        onMouseEnter={() => onSetShowAccordion(true)}
        onMouseLeave={() => onSetShowAccordion(false)}
      >
        <p>{menuTitle}</p> <AiOutlineDown className="ml-1 text-2xl p-1" />
      </div>
      <ChildAccordion
        accordionImages={accordionImages}
        showAccordion={showAccordion}
        onSetShowAccordion={onSetShowAccordion}
      />
    </>
  );
};

export default ParentAccordion;
