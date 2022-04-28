import { ProductInterface } from "../../interfaces/ProductInterface";

export type MappedProductsType = {
  [key: string]: { product: ProductInterface; qty: number };
};

type InitialCartStateType = {
  products: MappedProductsType[] | null;
  totalAmount: number;
};
export const initialCartState: InitialCartStateType = {
  products: null,
  totalAmount: 0
};

type ACTIONTYPES =
  | { type: "ADD_TO_CART"; payload: ProductInterface }
  | { type: "REMOVE_FROM_CART"; payload: string };

export const cartReducer = (
  state: typeof initialCartState,
  action: ACTIONTYPES
) => {
  if (action.type === "ADD_TO_CART") {
    console.log("Add to cart dispatch");
  }

  return initialCartState;
};
