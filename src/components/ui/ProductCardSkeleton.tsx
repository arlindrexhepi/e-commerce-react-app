import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import Card from "./Card";

const ProductCardSkeleton: React.FC = () => {
  return (
    <Card
      className="product-card-skeleton w-[320px] hover:shadow-xl relative 
      flex flex-col
      justify-center my-4"
    >
      <div
        className="absolute w-full px-4 py-4 left-0 top-0 flex items-center
        justify-between rounded-tl rounded-tr"
      >
        <div className="skeleton-loading h-[10px] rounded w-[40%]" />
      </div>
      <Link to="/">
        <div
          className="flex items-center justify-center object-contain p-2
         h-[320px] w-[320px]"
        >
          <div className="skeleton-loading h-[80%] w-[95%] rounded" />
        </div>
      </Link>
      <div className="flex items-center justify-center text-grey px-4">
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <div className="product-card-title px-4">
        <div className="flex items-center">
          <div className="skeleton-loading my-4 h-[10px] rounded w-[100%]" />
        </div>
        <div className="flex items-center">
          <div className="skeleton-loading h-[10px] rounded w-[70%]" />
          <div className="skeleton-loading ml-2 h-[10px] rounded w-[30%]" />
        </div>
      </div>
      <div className="flex items-center px-4 pt-4 pb-4">
        <div className="skeleton-loading h-[14px] rounded w-[30%]" />
        <div
          className="skeleton-loading-price opacity-20 ml-4 h-[18px]
        rounded w-[40%]"
        />
      </div>
    </Card>
  );
};
export default ProductCardSkeleton;
