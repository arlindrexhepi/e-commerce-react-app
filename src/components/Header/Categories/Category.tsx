import { SetStateAction, Dispatch } from "react";
import { FaCaretDown } from "react-icons/fa";

import SubCategories from "./SubCategories";

export interface CategoriesInterface {
  categoryName?: string;
  showAccordion: number;
  onSetShowAccordion: Dispatch<SetStateAction<number>>;
  accordionImages: string[];
  subCategories: string[];
  categoryIndex: number;
}

const Category: React.FC<CategoriesInterface> = ({
  categoryName: categoryTitle,
  showAccordion,
  onSetShowAccordion,
  accordionImages,
  subCategories,
  categoryIndex
}) => {
  return (
    <>
      <div
        className="parentAccordion flex items-center border-r text-sm
      hover:bg-darkPrimary px-4 py-3 lg:cursor-pointer"
        onMouseEnter={() => onSetShowAccordion(categoryIndex)}
        onMouseLeave={() => onSetShowAccordion(0)}
      >
        <p>{categoryTitle}</p> <FaCaretDown className="ml-1 text-2xl p-1" />
      </div>
      <SubCategories
        accordionImages={accordionImages}
        showAccordion={showAccordion}
        onSetShowAccordion={onSetShowAccordion}
        subCategories={subCategories}
        categoryIndex={categoryIndex}
      />
    </>
  );
};

export default Category;
