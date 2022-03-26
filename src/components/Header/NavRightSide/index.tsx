import {
  AiOutlineShopping,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineClose
} from "react-icons/ai";

interface NavRightSideProps {
  showSearchBarHandler: () => void;
  showSearchBar: boolean;
}

const NavRightSide: React.FC<NavRightSideProps> = ({
  showSearchBarHandler,
  showSearchBar
}) => {
  return (
    <div className="flex items-center text-4xl text-black">
      {!showSearchBar ? (
        <AiOutlineSearch
          onClick={showSearchBarHandler}
          className="md:hidden mx-1 md:mx-3 hover:bg-darkGrey
       cursor-pointer p-2 rounded-full"
        />
      ) : (
        <AiOutlineClose
          onClick={showSearchBarHandler}
          className="md:hidden mx-1 md:mx-3 hover:bg-darkGrey
        cursor-pointer p-2 rounded-full"
        />
      )}
      <AiOutlineHeart
        className="mx-1 md:mx-3 hover:bg-darkGrey
       cursor-pointer p-2 rounded-full"
      />
      <AiOutlineUser
        className="mx-1 md:mx-3 hover:bg-darkGrey
       cursor-pointer p-2 rounded-full"
      />
      <AiOutlineShopping
        className="mx-1 md:mx-3 hover:bg-darkGrey
       cursor-pointer p-2 rounded-full"
      />
    </div>
  );
};

export default NavRightSide;
