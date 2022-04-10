import { useState, useEffect } from "react";
import axios from "axios";

import { CategoriesDataInterface } from "../interfaces/CategoriesDataInterface";

interface Options {
  url: string;
}

const useCategoryService = (options: Options) => {
  const [data, setData] = useState<CategoriesDataInterface[] | null>(null);

  const getData = async () => {
    const collectedData = await axios.get<CategoriesDataInterface, any>(
      options.url
    );
    setData(collectedData.data);
  };
  useEffect(() => {
    getData();
  }, [options.url]);
  return { data };
};
export default useCategoryService;
