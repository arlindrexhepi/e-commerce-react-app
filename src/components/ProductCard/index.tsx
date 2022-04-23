import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

import RatingStars from "./RatingStars";
import Button from "../ui/Button";
import Card from "../ui/Card";

const ProductCard: React.FC = () => {
  const link =
    "https://demo2wpopal.b-cdn.net/technocy/wp-content/uploads/2021/07/11-460x460.jpg";
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
        <p>Computers &amp; Laptops</p>
      </div>
      <Link to="/">
        <img className="object-contain p-2" src={link} alt="laptop" />
      </Link>
      <div className="px-4">
        <RatingStars rating={5} />
      </div>
      <div className="product-card-title px-4">
        <p>
          Touchscreen, AMD Ryzen 5 5500U Processor 17.3″ HD+ Touchscreen, AMD
          Ryzen 5 5500U Processor, 17.3″ HD+
        </p>
      </div>
      <div className="flex items-baseline justify-evenly px-4 pt-2 pb-4">
        <span className="line-through mr-2 font-semibold text-muted text-lg">
          1500.00 &euro;
        </span>
        <span className="font-semibold text-secondary text-2xl">
          1400.00 &euro;
        </span>
      </div>
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
