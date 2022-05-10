import { useContext } from "react";
import CartContext from "../../store/cartContext/cart-context";

import ProductCard from "../ProductCard";
import { ProductInterface } from "../../interfaces/ProductInterface";

const Products = ({ allProducts }: { allProducts: ProductInterface[] }) => {
  const { addItem } = useContext(CartContext);

  return (
    <>
      {allProducts.map((item: ProductInterface) => {
        return (
          <ProductCard
            key={item._id}
            _id={item._id}
            title={item.title}
            thumbnail={item.thumbnail}
            category={item.category}
            price={item.price}
            rating={item.rating}
            on_sale={item.on_sale}
            new_price={item.new_price}
            addItem={() => addItem(item)}
          />
        );
      })}
    </>
  );
};
export default Products;
