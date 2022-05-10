import React, { useContext } from "react";
import CartContext from "../../store/cartContext/cart-context";
import Modal from "../ui/Modal";

interface CartInterface {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart: React.FC<CartInterface> = ({ showCart, setShowCart }) => {
  const { products } = useContext(CartContext);
  const { totalAmount } = useContext(CartContext);
  const { addItem } = useContext(CartContext);
  const { removeItem } = useContext(CartContext);
  return (
    <Modal side="right" showModal={showCart} onClose={() => setShowCart(false)}>
      <div className="flex flex-col justify-center">
        {products &&
          Array.from(products).map(([key, value]) => {
            const { product } = value;
            const quantity = value.qty;
            return (
              <div key={key}>
                <div className="flex flex-col">
                  <h1>{product.title}</h1>
                  <h1>{quantity}</h1>
                </div>
                <button type="button" onClick={() => addItem(product)}>
                  +
                </button>
                <button type="button" onClick={() => removeItem(product._id)}>
                  -
                </button>
              </div>
            );
          })}
        <h1>{totalAmount.toFixed(2)}</h1>
      </div>
    </Modal>
  );
};

export default Cart;
