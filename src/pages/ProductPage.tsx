import { useParams } from "react-router-dom";
import useSingleProduct from "../hooks/useSingleProduct";
import NotFound from "./NotFound";

import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  const { id } = useParams();
  const { product } = useSingleProduct({
    url: `https://e-commerce-backend-app.herokuapp.com/api/products/${id}`
  });
  console.log(id);
  console.log(product, "product");
  if (!id) {
    return <NotFound />;
  }
  return (
    <div className="main-container flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold text-secondary">PRODUCT PAGE</h1>
      {product && (
        <ProductCard
          _id={product._id}
          category={product.category}
          on_sale={product.on_sale}
          price={product.price}
          rating={product.rating}
          thumbnail={product.thumbnail}
          title={product.title}
          description={product.description}
          new_price={product.new_price}
        />
      )}
      <div className="flex items-center justify-center py-4">
        {product &&
          product.images?.map((image) => {
            return (
              <img className="object-fit w-[200px]" alt={image} src={image} />
            );
          })}
      </div>
    </div>
  );
};

export default ProductPage;
