import { useState } from "react";

import data from "../../../data/categories";

import Category from "./Category";
import { CategoriesDataInterface } from "../../../interfaces/CategoriesInterface";

import tvImage1 from "../../../assets/megamenu-image0-1.png";
import tvImage2 from "../../../assets/megamenu-image1-1.png";

interface CategoriesProps {
  className: string;
}

const Categories: React.FC<CategoriesProps> = ({ className }) => {
  const [showAccordion, setShowAccordion] = useState<number>(0);

  return (
    <div className={className}>
      <div className="relative side-space flex items-center py-1">
        {data.categories.map(
          (category: CategoriesDataInterface, index: number) => {
            return (
              <Category
                key={category.name}
                categoryIndex={index + 1}
                categoryTitle={category.name}
                onSetShowAccordion={setShowAccordion}
                showAccordion={showAccordion}
                accordionImages={[tvImage1, tvImage2]}
                subCategories={category.childs}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Categories;
