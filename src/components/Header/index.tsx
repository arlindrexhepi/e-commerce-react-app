import { useState, useEffect } from "react";
import useWindowResize from "../../hooks/useWindowResize";

import StoreUpdates from "./StoreUpdates";
import NavLeftSide from "./NavLeftSide";
import SearchBar from "./SearchBar";
import NavRightSide from "./NavRightSide";
import Categories from "./Categories";
import Cart from "../Cart";
// import Loader from "../ui/Loader";

const Header = () => {
  const [showStoreUpdate, setShowStoreUpdate] = useState<boolean>(false);
  const [showSearchBar, setShowSearchBar] = useState<boolean>(true);
  const { windowInnerWidth } = useWindowResize();
  const [showCartModal, setShowCartModal] = useState<boolean>(false);
  // const [showLoader, setShowLoader] = useState<boolean>(false);

  useEffect(() => {
    if (windowInnerWidth <= 768) {
      setShowSearchBar(false);
      return;
    }
    setShowSearchBar(true);
  }, [windowInnerWidth]);

  return (
    <>
      {!showStoreUpdate && (
        <StoreUpdates showStoreUpdateHandler={() => setShowStoreUpdate(true)} />
      )}
      <Cart setShowCart={setShowCartModal} showCart={showCartModal} />
      <header
        className="main-header active sticky top-0 z-20 bg-white mb-1 
      lg:mb-0 shadow-lg"
      >
        {/* {showLoader && <Loader />} */}
        <div
          className="side-space py-4 relative flex items-center
          justify-between"
        >
          <NavLeftSide />
          {showSearchBar && <SearchBar />}
          <NavRightSide
            showSearchBar={showSearchBar}
            showSearchBarHandler={() => setShowSearchBar((v) => !v)}
            showCartHandler={() => setShowCartModal((v) => !v)}
          />
        </div>
      </header>
      <Categories
        className="hidden lg:block relative z-10 bg-primary text-white 
          font-semibold"
      />
    </>
  );
};

export default Header;
