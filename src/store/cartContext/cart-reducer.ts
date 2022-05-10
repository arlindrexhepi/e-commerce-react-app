import { ProductInterface } from "../../interfaces/ProductInterface";

export const initialCartState = {
  products: new Map<string, { product: ProductInterface; qty: number }>(),
  totalAmount: 0
};

type ACTIONTYPES =
  | { type: "ADD_TO_CART"; payload: ProductInterface }
  | { type: "REMOVE_FROM_CART"; payload: string };

export const cartReducer = (
  state: typeof initialCartState,
  action: ACTIONTYPES
) => {
  const { products, totalAmount } = state;
  const { type, payload } = action;

  if (type === "ADD_TO_CART") {
    const currentCart = products;
    /*
    productId -> {product, quantity}
    productId -> {product, quantity}
    */
    // PRODUCT IS NOT IN SHOPPING CART
    if (!currentCart.has(payload._id)) {
      const newCart = new Map(products);
      newCart.set(payload._id, { product: payload, qty: 1 });
      const updateTotalAmount = Number(
        (totalAmount + payload.price).toFixed(2)
      );

      return {
        products: newCart,
        totalAmount: updateTotalAmount
      };
    }

    // PRODUCT IS ALREADY IN SHOPPING CART -> UPDATE QUANTITY OF PRODUCT AND UPDATE TOTAL AMOUNT
    const updateCart = new Map(products);
    const productToUpdate = JSON.parse(
      JSON.stringify(updateCart.get(payload._id))
    );

    productToUpdate.qty += 1;
    updateCart.set(payload._id, productToUpdate);
    const updateTotalAmount = Number((totalAmount + payload.price).toFixed(2));

    return {
      products: updateCart,
      totalAmount: updateTotalAmount
    };
  }
  if (type === "REMOVE_FROM_CART") {
    const currentCart = new Map(products);
    const selectedProduct = currentCart.get(payload);

    // IF QUANTITY OF PRODUCT IS MORE THAN 1 -> DECREASE THE QUANTITY AND UPDATE THE TOTAL AMOUNT
    if (selectedProduct && selectedProduct.qty > 1) {
      const updateCart = new Map(products);
      const productToUpdate = JSON.parse(
        JSON.stringify(updateCart.get(payload))
      );
      productToUpdate.qty -= 1;
      updateCart.set(payload, productToUpdate);

      const updateTotalAmount = Number(
        (totalAmount - productToUpdate.product.price).toFixed(2)
      );

      return {
        products: updateCart,
        totalAmount: updateTotalAmount
      };
    }

    // IF QUANTITY OF PRODUCT IS 1 -> REMOVE FROM CART
    if (selectedProduct && selectedProduct.qty === 1) {
      const oldCart = new Map(products);
      const chosenProduct = JSON.parse(JSON.stringify(oldCart.get(payload)));

      const updateTotalAmount = Number(
        (totalAmount - chosenProduct.product.price).toFixed(2)
      );

      oldCart.delete(payload);

      return {
        products: oldCart,
        totalAmount: updateTotalAmount
      };
    }
  }

  // IF ACTION TYPE IS WRONG THEN DO NOTHING RETURN THE PREVIOUS STATE
  return {
    products,
    totalAmount
  };
};
