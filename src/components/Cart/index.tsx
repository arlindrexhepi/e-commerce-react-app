import React, { useContext } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import CartContext from "../../store/cartContext/cart-context";

import Modal from "../ui/Modal";
import Container from "../ui/Container";
import Button from "../ui/Button";

interface CartInterface {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart: React.FC<CartInterface> = ({ showCart, setShowCart }) => {
  const { products, totalAmount, addItem, removeItem } =
    useContext(CartContext);
  return (
    <Modal side="right" showModal={showCart} onClose={() => setShowCart(false)}>
      <Container className="h-full flex flex-col justify-between">
        <div
          className={`cart-items-container ${
            products.size === 0 ? "my-auto" : "overflow-y-scroll"
          }`}
        >
          {products &&
            products.size > 0 &&
            Array.from(products).map(([key, value]) => {
              const { product } = value;
              const quantity = value.qty;
              return (
                <div key={key}>
                  <Container className="py-4">
                    <div className="flex items-center pl-3">
                      <div className="w-[15%]">
                        <img
                          className="object-contain h-[100px]"
                          src={product.thumbnail}
                          alt={product.title}
                        />
                      </div>
                      <div className="flex flex-col px-3 w-[85%]">
                        <p className="font-semibold mb-2">{product.title}</p>
                        <div className="flex flex-col">
                          <div className="flex items-center justify-between h-full text-center mb-2">
                            <div className="w-1/3 font-semibold">Price</div>
                            <div className="w-1/3 font-semibold">Quantity</div>
                            <div className="w-1/3 font-semibold">Total</div>
                          </div>
                          <div className="flex items-center justify-between h-full text-center">
                            <div className="flex items-center text-xl font-semibold px-3 w-1/3">
                              <p className="w-full">{product.price} &euro;</p>
                            </div>
                            <div className="flex items-center justify-between px-3 w-1/3">
                              <Button
                                className="flex items-center justify-center px-4 bg-lightGrey text-2xl 
                                 hover:bg-darkGrey rounded"
                                onClick={() => removeItem(product._id)}
                              >
                                - {/* <FaMinus /> */}
                              </Button>
                              <p className="font-semibold text-lg">
                                {quantity}
                              </p>
                              <Button
                                className="flex items-center justify-center px-4 bg-lightGrey text-2xl 
                                 hover:bg-darkGrey rounded"
                                onClick={() => addItem(product)}
                              >
                                + {/* <FaPlus /> */}
                              </Button>
                            </div>
                            <div className="flex items-center text-xl font-semibold px-3 w-1/3">
                              <p className="w-full">
                                {Number((product.price * quantity).toFixed(2))}
                                &euro;
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Container>
                  <hr className="horizontal-line my-3" />
                </div>
              );
            })}
          {products.size === 0 && (
            <div className="flex flex-col items-center justify-center">
              <div className="text-8xl text-lightGrey">
                <FaShoppingBasket />
              </div>
              <div className="text-4xl text-lightGrey font-semibold">
                CART IS EMPTY
              </div>
            </div>
          )}
        </div>
        <div
          className="bg-primary flex items-center justify-between w-full p-4 text-white
         max-h-[10%] md:text-xl text-lg font-semibold"
        >
          <h1 className="w-[80%]">
            TOTAL AMOUNT: {totalAmount.toFixed(2)} &euro;
          </h1>
          <Button className="border border-white py-2 px-4 text-base font-semibold hover:bg-lightPrimary">
            Checkout
          </Button>
        </div>
      </Container>
    </Modal>
  );
};

export default Cart;
