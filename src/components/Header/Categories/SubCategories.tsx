import { Link } from "react-router-dom";
import { CategoriesInterface } from "./Category";
import { SubCategoriesInterface } from "../../../interfaces/CategoriesDataInterface";

const SubCategories: React.FC<CategoriesInterface> = ({
  showAccordion,
  accordionImages,
  onSetShowAccordion,
  subCategories,
  categoryIndex
}) => {
  return (
    <div
      className={`${
        showAccordion === categoryIndex
          ? "visible opacity-100"
          : "invisible opacity-0"
      } 
          childAccordion absolute z-10 bg-white px-8 py-4 top-[100%] w-full flex 
          rounded-b-lg shadow-lg text-black`}
      onMouseEnter={() => onSetShowAccordion(categoryIndex)}
      onMouseLeave={() => onSetShowAccordion(0)}
    >
      <div className="w-[80%] grid grid-cols-3 gap-y-4">
        {subCategories.map((subCategory: SubCategoriesInterface) => {
          return (
            <div key={subCategory.name}>
              <p className="text-lg font-semibold text-secondary">
                <Link to="/">{subCategory.name}</Link>
              </p>
              <ul>
                {subCategory.subChilds.map((link: string) => {
                  return (
                    <li key={link}>
                      <Link to={`/${link}`}>{link}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="w-[20%]">
        {accordionImages.map((el: string) => {
          return <img key={el} className="max-w-[75%]" src={el} alt={el} />;
        })}
      </div>
    </div>
  );
};

export default SubCategories;
