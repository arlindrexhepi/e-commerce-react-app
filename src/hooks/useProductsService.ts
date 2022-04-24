import { useState, useEffect } from "react";
import axios from "axios";

import { ProductsInterface } from "../interfaces/ProductsInterface";

interface Options {
  url: string;
}

const useProductsService = (options: Options) => {
  const [products, setProducts] = useState<ProductsInterface[] | null>(null);

  const fetchProducts = async () => {
    const collectedData = await axios.get<ProductsInterface, any>(options.url);
    setProducts(collectedData.data);
  };

  useEffect(() => {
    try {
      fetchProducts();
    } catch (err) {
      console.log(err, new Error("Something went wrong!"));
    }
  }, [options.url]);

  return { products };
};

export default useProductsService;
