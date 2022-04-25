import { useState, useEffect } from "react";
import useWindowResize from "../../hooks/useWindowResize";

import StoreUpdates from "./StoreUpdates";
import NavLeftSide from "./NavLeftSide";
import SearchBar from "./SearchBar";
import NavRightSide from "./NavRightSide";
import Categories from "./Categories";
// import Loader from "../ui/Loader";

const Header = () => {
  const [showStoreUpdate, setShowStoreUpdate] = useState<boolean>(false);
  const [showSearchBar, setShowSearchBar] = useState<boolean>(true);
  const { windowInnerWidth } = useWindowResize();
  // const [showLoader, setShowLoader] = useState<boolean>(false);

  const showStoreUpdateHandler = () => {
    setShowStoreUpdate(true);
  };
  const showSearchBarHandler = () => {
    setShowSearchBar((prevState) => !prevState);
  };

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
        <StoreUpdates showStoreUpdateHandler={showStoreUpdateHandler} />
      )}
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
            showSearchBarHandler={showSearchBarHandler}
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
