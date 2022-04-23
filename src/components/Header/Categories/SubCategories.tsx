import { Link } from "react-router-dom";
import { CategoriesInterface } from "./Category";

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
          childAccordion absolute z-10 bg-white px-8 py-4 top-[100%] w-full
          rounded-b-lg shadow-lg text-black`}
      onMouseEnter={() => onSetShowAccordion(categoryIndex)}
      onMouseLeave={() => onSetShowAccordion(0)}
    >
      <div className="flex items-center justify-around gap-x-4 gap-y-2">
        {subCategories.map((subCategory: string) => {
          return (
            <Link key={subCategory} to="/">
              <p>{subCategory}</p>
            </Link>
          );
        })}
      </div>
      <div className="flex items-center justify-around gap-x-4 gap-y-2">
        {accordionImages.map((el: string) => {
          return <img key={el} className="max-w-[80px]" src={el} alt={el} />;
        })}
      </div>
    </div>
  );
};

export default SubCategories;
