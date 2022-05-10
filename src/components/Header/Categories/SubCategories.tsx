import { Link } from "react-router-dom";
import { CategoriesInterface } from "./Category";

const SubCategories: React.FC<CategoriesInterface> = ({
  showAccordion,
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
      <div className="flex items-center justify-around">
        {subCategories.map((subCategory: { title: string; image: string }) => {
          const categoryLinks = subCategory.title.replace(/\s+/g, "");
          return (
            <Link key={subCategory.title} to={`/${categoryLinks}`}>
              <div
                className="p-3 rounded gap-x-4 gap-y-2 flex flex-col items-center
                justify-center hover:bg-lightGrey"
              >
                <p>{subCategory.title}</p>
                <img
                  className="max-w-[90px]"
                  src={subCategory.image}
                  alt={subCategory.title}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SubCategories;
