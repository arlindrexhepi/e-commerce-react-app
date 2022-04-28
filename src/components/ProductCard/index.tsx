import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

import { ProductInterface } from "../../interfaces/ProductInterface";
import RatingStars from "./RatingStars";
import Button from "../ui/Button";
import Card from "../ui/Card";

const ProductCard: React.FC<ProductInterface> = ({
  _id,
  category,
  on_sale,
  price,
  rating,
  thumbnail,
  title,
  new_price
}) => {
  return (
    <Card
      className="product-card-container w-[320px] hover:shadow-xl relative 
      flex flex-col
      justify-center my-4"
    >
      <div
        className="absolute w-full px-4 py-2 left-0 top-0 flex items-center
        justify-between rounded-tl rounded-tr"
      >
        <p>{category}</p>
      </div>
      <Link to={`/${_id}`} className="flex items-center justify-center">
        <img
          className="object-contain w-[200px] p-2"
          src={thumbnail}
          alt={title}
        />
      </Link>
      <div className="px-4 py-2">
        <RatingStars rating={rating} />
      </div>
      <div className="product-card-title px-4 h-[48px]">
        <p>{title}</p>
      </div>
      {on_sale && (
        <div className="flex items-baseline justify-center px-4 pt-2 pb-4">
          <span className="line-through mr-2 font-semibold text-muted text-lg">
            {price.toFixed(2)} &euro;
          </span>
          <span className="font-semibold text-secondary text-2xl">
            {new_price?.toFixed(2)} &euro;
          </span>
        </div>
      )}
      {!on_sale && (
        <div className="flex items-baseline justify-center px-4 pt-2 pb-4">
          <span className="font-semibold text-secondary text-2xl">
            {price.toFixed(2)} &euro;
          </span>
        </div>
      )}
      <div
        className="product-card-button shadow-xl rounded-bl rounded-br bg-white 
        absolute top-[100%] px-4 flex items-center py-4 justify-center w-full"
      >
        <Button
          className="flex items-center justify-center bg-secondary rounded
          hover:bg-darkSecondary font-semibold py-2 px-4 text-white w-[80%]"
        >
          ADD TO CART
          <FaShoppingCart className="ml-4" />
        </Button>
        <Button
          className="flex items-center ml-1 justify-center bg-secondary rounded
          hover:bg-darkSecondary font-semibold py-3 px-4 text-white w-[20%]"
        >
          <FaHeart />
        </Button>
      </div>
    </Card>
  );
};
export default ProductCard;
