import React, { useReducer } from "react";
import CartContext from "./cart-context";

import { initialCartState, cartReducer } from "./cart-reducer";
import { ProductInterface } from "../../interfaces/ProductInterface";

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, initialCartState);

  const addToCartHandler = (item: ProductInterface) => {
    dispatchCart({
      type: "ADD_TO_CART",
      payload: item
    });
  };

  const removeFromCartHandler = (itemId: string) => {
    dispatchCart({
      type: "REMOVE_FROM_CART",
      payload: itemId
    });
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    products: cartState.products,
    totalAmount: cartState.totalAmount,
    addItem: addToCartHandler,
    removeItem: removeFromCartHandler
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
