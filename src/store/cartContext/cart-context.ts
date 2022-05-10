import { createContext } from "react";
import { ProductInterface } from "../../interfaces/ProductInterface";

const initialState = {
  products: new Map<string, { product: ProductInterface; qty: number }>(),
  totalAmount: 0,
  addItem: (item: ProductInterface): ProductInterface | void => {
    return item;
  },
  removeItem: (itemId: string): string | void => {
    return itemId;
  }
};

const CartContext = createContext(initialState);

export default CartContext;
