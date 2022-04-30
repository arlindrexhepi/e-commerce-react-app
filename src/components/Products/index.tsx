import ProductCard from "../ProductCard";
import { ProductInterface } from "../../interfaces/ProductInterface";

const Products = ({ allProducts }: { allProducts: ProductInterface[] }) => {
  return (
    <>
      {allProducts.map((el: ProductInterface) => {
        return (
          <ProductCard
            key={el._id}
            _id={el._id}
            title={el.title}
            thumbnail={el.thumbnail}
            category={el.category}
            price={el.price}
            rating={el.rating}
            on_sale={el.on_sale}
            new_price={el.new_price}
          />
        );
      })}
    </>
  );
};
export default Products;
