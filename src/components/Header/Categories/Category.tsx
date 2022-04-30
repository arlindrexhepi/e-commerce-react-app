import { SetStateAction, Dispatch } from "react";
import { FaCaretDown } from "react-icons/fa";

import SubCategories from "./SubCategories";
import { ChildsType } from "../../../interfaces/CategoriesDataInterface";

export interface CategoriesInterface {
  categoryName?: string;
  showAccordion: number;
  categoryId?: string;
  onSetShowAccordion: Dispatch<SetStateAction<number>>;
  subCategories: ChildsType[];
  categoryIndex: number;
}

const Category: React.FC<CategoriesInterface> = ({
  categoryName,
  showAccordion,
  onSetShowAccordion,
  subCategories,
  categoryIndex
}) => {
  return (
    <>
      <div
        className="parentAccordion flex items-center border-r text-sm
      hover:bg-darkPrimary px-4 py-2 lg:cursor-pointer"
        onMouseEnter={() => onSetShowAccordion(categoryIndex)}
        onMouseLeave={() => onSetShowAccordion(0)}
      >
        <p>{categoryName}</p> <FaCaretDown className="ml-1 text-2xl p-1" />
      </div>
      <SubCategories
        showAccordion={showAccordion}
        onSetShowAccordion={onSetShowAccordion}
        subCategories={subCategories}
        categoryIndex={categoryIndex}
      />
    </>
  );
};

export default Category;
