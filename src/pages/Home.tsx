import { useState, useEffect, useMemo } from "react";
import useWindowResize from "../hooks/useWindowResize";
import useBannerService from "../hooks/useBannerService";
import randomArray from "../utils/randomArray";

import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ui/ProductCardSkeleton";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { windowInnerWidth } = useWindowResize();
  const { data } = useBannerService({
    url: "/data/banners.json"
  });
  const productsNumber = 22;
  const newArr = useMemo(() => randomArray(productsNumber), [productsNumber]);
  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loaderTimeout);
  }, [data]);
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
        className="flex items-center flex-wrap gap-y-[100px] place-content-center
       md:place-content-start side-space my-5 pt-5 pb-12"
      >
        {isLoading &&
          newArr.map((el: number) => {
            return <ProductCardSkeleton key={el} />;
          })}
        {!isLoading &&
          newArr.map((el: number) => {
            return <ProductCard key={el} />;
          })}
      </div>
    </div>
  );
};

export default Home;
