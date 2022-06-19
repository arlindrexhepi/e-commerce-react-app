import { useState, useEffect, useMemo, memo } from "react";
import useWindowResize from "../hooks/useWindowResize";
import useBannerService from "../hooks/useBannerService";
import useFetchData from "../hooks/useFetchData";

import Products from "../components/Products";
import randomArray from "../utils/randomArray";
import Carousel from "../components/Carousel";
import { ProductInterface } from "../interfaces/ProductInterface";
import ProductCardSkeleton from "../components/ui/ProductCardSkeleton";
import Button from "../components/ui/Button";

const MemoedProducts = memo(Products);

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { windowInnerWidth } = useWindowResize();
  const limit = 23;
  const [page, setPage] = useState<number>(1);
  const [allProducts, setAllProducts] = useState<ProductInterface[] | null>(
    null
  );
  const { banners } = useBannerService({
    url: "/api/v1/banners"
  });
  const { data } = useFetchData<ProductInterface[]>(
    `/api/v1/products?page=${page}&limit=${limit}`
  );
  const newArr = useMemo(() => randomArray(limit), [limit]);
  const memoProps = useMemo(() => allProducts, [allProducts]);

  useEffect(() => {
    if (data) {
      setAllProducts((prev) => {
        if (prev) {
          return [...prev, ...data];
        }
        return [...data];
      });
      setIsLoading(false);
    }
  }, [data]);

  const showCarosel = (): JSX.Element | null => {
    if (banners && windowInnerWidth <= 768) {
      return <Carousel imgArr={banners.mobile} />;
    }
    if (banners && windowInnerWidth >= 768) {
      return <Carousel imgArr={banners.desktop} />;
    }
    return null;
  };

  return (
    <div className="main-container bg-white">
      {showCarosel()}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-[100px]
        place-content-center side-space my-5 pt-5 pb-12 container mx-auto"
      >
        {isLoading &&
          newArr.map((el: number) => {
            return <ProductCardSkeleton key={el} />;
          })}
        {!isLoading && memoProps && <MemoedProducts allProducts={memoProps} />}
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
