import React from "react";
import { ProductInterface } from "../../interfaces/ProductInterface";

type MappedProductsType = {
  [key: string]: { product: ProductInterface; qty: number };
};

export type InitialContextType = {
  products: MappedProductsType[] | null;
  totalAmount: number;
  addItem: (item: ProductInterface) => void;
  removeItem: (itemId: string) => void;
};

export const initialState: InitialContextType = {
  products: null,
  totalAmount: 0,
  addItem: (item) => {
    return item;
  },
  removeItem: (itemId) => {
    return itemId;
  }
};

const CartContext = React.createContext(initialState);

export default CartContext;
