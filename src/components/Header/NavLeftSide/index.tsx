import { Link } from "react-router-dom";

import Logo from "../../ui/Logo";

const NavLeftSide = () => {
  return (
    <div className="px-2">
      <Link to="/">
        <Logo />
      </Link>
    </div>
  );
};

export default NavLeftSide;
