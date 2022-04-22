import { useState } from "react";
import useCategoryService from "../../../hooks/useCategoryService";

import Category from "./Category";
import { CategoriesDataInterface } from "../../../interfaces/CategoriesDataInterface";

interface CategoriesProps {
  className: string;
}

const Categories: React.FC<CategoriesProps> = ({ className }) => {
  const [showAccordion, setShowAccordion] = useState<number>(0);
  const { data } = useCategoryService({
    url: "http://localhost:8000/api/categories"
  });
  return (
    <div className={className}>
      <nav className="nav-bar relative side-space flex items-center py-1">
        {data &&
          data.map((category: CategoriesDataInterface, index: number) => {
            return (
              <Category
                key={category.name}
                categoryIndex={index + 1}
                categoryName={category.name}
                onSetShowAccordion={setShowAccordion}
                showAccordion={showAccordion}
                accordionImages={category.images}
                subCategories={category.childs}
              />
            );
          })}
      </nav>
    </div>
  );
};

export default Categories;
