import { useState, useEffect } from "react";
import axios from "axios";

import { CarouselImagesInterface } from "../interfaces/CaroselImagesInterface";

interface Options {
  url: string;
}

const useBannerService = (options: Options) => {
  const [banners, setBanners] = useState<CarouselImagesInterface | null>(null);

  const getData = async () => {
    const collectedData = await axios.get<CarouselImagesInterface, any>(
      options.url
    );
    setBanners(collectedData.data);
  };
  useEffect(() => {
    try {
      getData();
    } catch (err) {
      console.error(err, new Error("Something went wrong!!"));
    }
  }, [options.url]);
  return { banners };
};
export default useBannerService;
