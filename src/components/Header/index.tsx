import { useState } from "react";

import StoreUpdates from "./StoreUpdates";
import NavLeftSide from "./NavLeftSide";
import SearchBar from "./SearchBar";
import NavRightSide from "./NavRightSide";
import TopLoader from "../ui/TopLoader";

const Header = () => {
  const [showStoreUpdate, setShowStoreUpdate] = useState<boolean>(false);
  const [showSearchBar, setShowSearchBar] = useState<boolean>(true);

  const showStoreUpdateHandler = () => {
    setShowStoreUpdate(true);
  };
  const showSearchBarHandler = () => {
    setShowSearchBar((prevState) => !prevState);
  };

  return (
    <header className="bg-white mb-1 shadow">
      {!showStoreUpdate && (
        <StoreUpdates showStoreUpdateHandler={showStoreUpdateHandler} />
      )}
      <TopLoader />
      <div className="side-space relative flex items-center justify-between">
        <NavLeftSide />
        {showSearchBar && <SearchBar />}
        <NavRightSide
          showSearchBar={showSearchBar}
          showSearchBarHandler={showSearchBarHandler}
        />
      </div>
    </header>
  );
};

export default Header;
