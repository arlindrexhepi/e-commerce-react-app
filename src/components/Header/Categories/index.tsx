import { useState } from "react";
import useFetchData from "../../../hooks/useFetchData";

import Category from "./Category";
import { CategoriesDataInterface } from "../../../interfaces/CategoriesDataInterface";

interface CategoriesProps {
  className: string;
}

const Categories: React.FC<CategoriesProps> = ({ className }) => {
  const [showAccordion, setShowAccordion] = useState<number>(0);
  const { data } = useFetchData<CategoriesDataInterface[]>(
    "/data/categories.json"
  );
  return (
    <div className={className}>
      <nav className="nav-bar relative active side-space flex items-center py-1">
        {data &&
          data.map((category: CategoriesDataInterface, index: number) => {
            return (
              <Category
                key={category.categoryId}
                categoryIndex={index + 1}
                categoryName={category.name}
                onSetShowAccordion={setShowAccordion}
                showAccordion={showAccordion}
                subCategories={category.childs}
                categoryId={category.categoryId}
              />
            );
          })}
      </nav>
    </div>
  );
};

export default Categories;
