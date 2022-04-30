import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import NotFound from "./NotFound";

import { ProductInterface } from "../interfaces/ProductInterface";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  const { id } = useParams();
  const { data } = useFetchData<ProductInterface>(
    `https://e-commerce-backend-app.herokuapp.com/api/products/${id}`
  );
  if (!id) {
    console.log("okej");
    return <NotFound />;
  }
  return (
    <div className="main-container flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold text-secondary">
        PRODUCT PAGE IS NOT FINISHED YET!
      </h1>
      {data && (
        <ProductCard
          key={data._id}
          _id={data._id}
          category={data.category}
          on_sale={data.on_sale}
          price={data.price}
          rating={data.rating}
          thumbnail={data.thumbnail}
          title={data.title}
          description={data.description}
          new_price={data.new_price}
        />
      )}
      <div className="flex items-center justify-center py-4">
        {data &&
          data.images?.map((image) => {
            return (
              <img
                key={image}
                className="object-fit w-[200px]"
                alt={image}
                src={image}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ProductPage;
