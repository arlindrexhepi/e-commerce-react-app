import { useState } from "react";

import StoreUpdates from "./StoreUpdates";
import NavLeftSide from "./NavLeftSide";
import SearchBar from "./SearchBar";
import NavRightSide from "./NavRightSide";
import NavMenu from "./NavMenu";
// import Loader from "../ui/Loader";

const Header = () => {
  const [showStoreUpdate, setShowStoreUpdate] = useState<boolean>(false);
  const [showSearchBar, setShowSearchBar] = useState<boolean>(true);
  // const [showLoader, setShowLoader] = useState<boolean>(false);

  const showStoreUpdateHandler = () => {
    setShowStoreUpdate(true);
  };
  const showSearchBarHandler = () => {
    setShowSearchBar((prevState) => !prevState);
  };

  return (
    <header className="bg-white mb-1 lg:mb-0 shadow lg:shadow-none">
      {!showStoreUpdate && (
        <StoreUpdates showStoreUpdateHandler={showStoreUpdateHandler} />
      )}
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
      <NavMenu
        className="hidden lg:block bg-primary text-white 
      font-semibold"
      />
    </header>
  );
};

export default Header;
