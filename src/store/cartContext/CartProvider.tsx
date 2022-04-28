/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useReducer } from "react";
import CartContext, { InitialContextType } from "./cart-context";

import { initialCartState, cartReducer } from "./cart-reducer";
import { ProductInterface } from "../../interfaces/ProductInterface";

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // const [cartState, setCartState] = useState<CartType>(initialState);
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

  const UpdatedCartContext: InitialContextType = {
    products: cartState.products,
    totalAmount: cartState.totalAmount,
    addItem: addToCartHandler,
    removeItem: removeFromCartHandler
  };

  return (
    <CartContext.Provider value={UpdatedCartContext}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
