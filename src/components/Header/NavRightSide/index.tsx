/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useContext } from "react";
import {
  AiOutlineShopping,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineClose
} from "react-icons/ai";
import CartContext from "../../../store/cartContext/cart-context";

interface NavRightSideProps {
  showSearchBar: boolean;
  showSearchBarHandler: () => void;
  showCartHandler: () => void;
}

const NavRightSide: React.FC<NavRightSideProps> = ({
  showSearchBar,
  showSearchBarHandler,
  showCartHandler
}) => {
  const { totalAmount } = useContext(CartContext);
  return (
    <div className="flex items-center text-5xl text-black">
      {!showSearchBar ? (
        <AiOutlineSearch
          onClick={showSearchBarHandler}
          className="md:hidden mx-1 md:mx-3 hover:bg-lightGrey
       lg:cursor-pointer p-3 rounded-full"
        />
      ) : (
        <AiOutlineClose
          onClick={showSearchBarHandler}
          className="md:hidden mx-1 md:mx-3 hover:bg-lightGrey
        lg:cursor-pointer p-3 rounded-full"
        />
      )}
      <AiOutlineHeart
        className="mx-1 md:mx-3 hover:bg-lightGrey
       lg:cursor-pointer p-3 rounded-full"
      />
      <AiOutlineUser
        className="mx-1 md:mx-3 hover:bg-lightGrey
       lg:cursor-pointer p-3 rounded-full"
      />
      <div
        onClick={showCartHandler}
        className="flex items-center mx-1 pr-2 py-2 md:mx-3 select-none
        hover:bg-lightGrey lg:cursor-pointer rounded-full"
      >
        <AiOutlineShopping className="hidden md:block p-3" />
        <div className="text-xl font-semibold">
          <span>{totalAmount.toFixed(2)} &euro;</span>
        </div>
      </div>
    </div>
  );
};

export default NavRightSide;
