import { useState, useEffect, useMemo } from "react";
import useWindowResize from "../hooks/useWindowResize";
import useBannerService from "../hooks/useBannerService";
import useProductsService from "../hooks/useProductsService";

import randomArray from "../utils/randomArray";
import Carousel from "../components/Carousel";
import { ProductsInterface } from "../interfaces/ProductsInterface";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ui/ProductCardSkeleton";
import Button from "../components/ui/Button";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { windowInnerWidth } = useWindowResize();
  const limit = 23;
  const [page, setPage] = useState<number>(1);
  const [allProducts, setAllProducts] = useState<ProductsInterface[] | null>(
    null
  );
  const { data } = useBannerService({
    url: "/data/banners.json"
  });
  const { products } = useProductsService({
    url: `https://e-commerce-backend-app.herokuapp.com/api/products?page=${page}&limit=${limit}`
  });
  const newArr = useMemo(() => randomArray(limit), [limit]);

  useEffect(() => {
    if (products) {
      setAllProducts((prev) => {
        if (prev) {
          return [...prev, ...products];
        }
        return [...products];
      });
      setIsLoading(false);
    }
  }, [data, products]);

  const showCarosel = (): JSX.Element | null => {
    if (data && windowInnerWidth <= 768) {
      return <Carousel imgArr={data.mobile} />;
    }
    if (data && windowInnerWidth >= 768) {
      return <Carousel imgArr={data.desktop} />;
    }
    return null;
  };

  return (
    <div className="main-container bg-white">
      {showCarosel()}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-[100px]
        place-content-center side-space my-5 pt-5 pb-12"
      >
        {isLoading &&
          newArr.map((el: number) => {
            return <ProductCardSkeleton key={el} />;
          })}
        {!isLoading &&
          allProducts &&
          allProducts.map((el: ProductsInterface) => {
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
      </div>
      <div className="w-full flex items-center justify-center">
        <Button
          className="bg-primary py-2 px-4 rounded text-white"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Show More Products
        </Button>
      </div>
    </div>
  );
};

export default Home;
