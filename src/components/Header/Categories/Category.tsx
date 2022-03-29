import { SetStateAction, Dispatch } from "react";
import { AiOutlineDown } from "react-icons/ai";

import SubCategories from "./SubCategories";
import { SubCategoriesInterface } from "../../../interfaces/CategoriesInterface";

export interface CategoriesInterface {
  categoryTitle?: string;
  showAccordion: number;
  onSetShowAccordion: Dispatch<SetStateAction<number>>;
  accordionImages: string[];
  subCategories: SubCategoriesInterface[];
  categoryIndex: number;
}

const Category: React.FC<CategoriesInterface> = ({
  categoryTitle,
  showAccordion,
  onSetShowAccordion,
  accordionImages,
  subCategories,
  categoryIndex
}) => {
  return (
    <>
      <div
        className="parentAccordion flex items-center border-r 
    hover:bg-darkPrimary px-4 py-3 lg:cursor-pointer"
        onMouseEnter={() => onSetShowAccordion(categoryIndex)}
        onMouseLeave={() => onSetShowAccordion(0)}
      >
        <p>{categoryTitle}</p> <AiOutlineDown className="ml-1 text-2xl p-1" />
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
