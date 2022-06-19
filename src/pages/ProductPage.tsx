import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import NotFound from "./NotFound";

import { ProductInterface } from "../interfaces/ProductInterface";

const ProductPage = () => {
  const { id } = useParams();
  const { data } = useFetchData<ProductInterface>(`/api/v1/products/${id}`);

  if (id !== data?._id) {
    return <NotFound />;
  }
  return (
    <div className="main-container flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold text-secondary">
        PRODUCT PAGE IS NOT FINISHED YET!
      </h1>
      {data && (
        <div>
          <p>{data._id}</p>
          <p>{data.category}</p>
          <p>{data.description}</p>
          <p>{data.new_price}</p>
          <p>{data.on_sale}</p>
          <p>{data.thumbnail}</p>
        </div>
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
