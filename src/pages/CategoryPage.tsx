import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import NotFound from "./NotFound";

import { ProductInterface } from "../interfaces/ProductInterface";

const CategoryPage = () => {
  const { category } = useParams();
  const { data } = useFetchData<ProductInterface>(
    `/api/v1/products/${category}`
  );

  if (category !== data?.category) {
    return <NotFound />;
  }
  return (
    <div className="main-container flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold text-secondary">
        CATEGORY PAGE IS NOT FINISHED YET!
      </h1>
    </div>
  );
};

export default CategoryPage;
