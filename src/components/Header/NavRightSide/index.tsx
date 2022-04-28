// import { useContext } from "react";
import {
  AiOutlineShopping,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineClose
} from "react-icons/ai";
// import CartContext from "../../../store/cartContext/cart-context";

interface NavRightSideProps {
  showSearchBarHandler: () => void;
  showSearchBar: boolean;
}

const NavRightSide: React.FC<NavRightSideProps> = ({
  showSearchBarHandler,
  showSearchBar
}) => {
  // const { totalAmount } = useContext(CartContext);
  const totalAmount = 0;
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
