import { useState, useEffect } from "react";
import axios from "axios";

import { ProductsInterface } from "../interfaces/ProductsInterface";

interface Options {
  url: string;
}

const useSingleProduct = (options: Options) => {
  const [product, setProduct] = useState<ProductsInterface | null>(null);

  const fetchProducts = async () => {
    const collectedData = await axios.get<ProductsInterface, any>(options.url);
    setProduct(collectedData.data);
  };

  useEffect(() => {
    if (options.url) {
      try {
        fetchProducts();
      } catch (err) {
        console.log(err, new Error("Something went wrong!"));
      }
    }
  }, [options.url]);

  return { product };
};

export default useSingleProduct;
