import { useState, useEffect } from "react";
import axios from "axios";

import { CarouselImagesInterface } from "../interfaces/CaroselImagesInterface";

interface Options {
  url: string;
}

const useBannerService = (options: Options) => {
  const [data, setData] = useState<CarouselImagesInterface | null>(null);

  const getData = async () => {
    const collectedData = await axios.get<CarouselImagesInterface, any>(
      options.url
    );
    setData(collectedData.data);
  };
  useEffect(() => {
    getData();
  }, [options.url]);
  return { data };
};
export default useBannerService;
