import { Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";

import tvImage1 from "../../../assets/megamenu-image0-1.png";
import tvImage2 from "../../../assets/megamenu-image1-1.png";

interface NavMenuProps {
  className: string;
}

const NavMenu: React.FC<NavMenuProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="relative side-space flex items-center py-1">
        <div
          id="parent-1"
          className="flex items-center border-r hover:bg-darkPrimary 
         px-4 py-3 lg:cursor-pointer"
        >
          <p>TV &amp; Audio</p> <AiOutlineDown className="ml-1 text-2xl p-1" />
        </div>
        <div
          id="child-1"
          className="absolute bg-white px-8 py-4 top-[100%] w-full
           flex items-center rounded-b-lg shadow-lg text-black"
        >
          <div className="w-[80%] grid grid-cols-3">
            <div>
              <p className="text-lg font-semibold text-darkPrimary">
                <Link to="/">Televisions</Link>
              </p>
              <ul>
                <li>
                  <Link to="/">Smart TVs</Link>
                </li>
                <li>
                  <Link to="/">4K TVs</Link>
                </li>
                <li>
                  <Link to="/">Full HD TVs</Link>
                </li>
                <li>
                  <Link to="/">Large Screen TVs</Link>
                </li>
                <li>
                  <Link to="/">32 inch TVs</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-lg font-semibold text-darkPrimary">
                <Link to="/">Shop by Brand</Link>
              </p>
              <ul>
                <li>
                  <Link to="/">Samsung</Link>
                </li>
                <li>
                  <Link to="/">LG</Link>
                </li>
                <li>
                  <Link to="/">Sony</Link>
                </li>
                <li>
                  <Link to="/">Philips</Link>
                </li>
                <li>
                  <Link to="/">Panasonic</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-lg font-semibold text-darkPrimary">
                Other Home Entertainment
              </p>
              <ul>
                <li>
                  <Link to="/">Home Theater Systems</Link>
                </li>
                <li>
                  <Link to="/">Projectors &amp; Accesories</Link>
                </li>
                <li>
                  <Link to="/">Set top Boxes</Link>
                </li>
                <li>
                  <Link to="/">Streaming Media Players</Link>
                </li>
                <li>
                  <Link to="/">DVD &amp; Blu-ray Players</Link>
                </li>
                <li>
                  <Link to="/">Cables</Link>
                </li>
                <li>
                  <Link to="/">Audio-video Accessories</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-lg font-semibold text-darkPrimary">
                Home Audio/Video
              </p>
              <ul>
                <li>
                  <Link to="/">Speakers</Link>
                </li>
                <li>
                  <Link to="/">Home Theaters</Link>
                </li>
                <li>
                  <Link to="/">Projectors</Link>
                </li>
                <li>
                  <Link to="/">Headphones</Link>
                </li>
                <li>
                  <Link to="/">Noise Cancelling Headphones</Link>
                </li>
                <li>
                  <Link to="/">Soundbars</Link>
                </li>
                <li>
                  <Link to="/">Headphones with Mic</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-lg font-semibold text-darkPrimary">
                Shop by Brand
              </p>
              <ul>
                <li>
                  <Link to="/">JBL</Link>
                </li>
                <li>
                  <Link to="/">Sony</Link>
                </li>
                <li>
                  <Link to="/">Sennheiser</Link>
                </li>
                <li>
                  <Link to="/">Bose</Link>
                </li>
                <li>
                  <Link to="/">AKG</Link>
                </li>
                <li>
                  <Link to="/">SteelSeries</Link>
                </li>
                <li>
                  <Link to="/">Razer</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-darkPrimary w-[20%]">
            <img className="max-w-[75%]" src={tvImage1} alt="tv-1" />
            <img className="max-w-[75%]" src={tvImage2} alt="tv-2" />
          </div>
        </div>
        <div
          className="flex items-center border-r hover:bg-darkPrimary 
         px-4 py-3 lg:cursor-pointer"
        >
          <p>Smartphones</p> <AiOutlineDown className="ml-1 text-2xl p-1" />
        </div>
        <div
          className="flex items-center border-r hover:bg-darkPrimary 
         px-4 py-3 lg:cursor-pointer"
        >
          <p>Laptops &amp; Desktops</p>
          <AiOutlineDown className="ml-1 text-2xl p-1" />
        </div>
        <div
          className="flex items-center border-r hover:bg-darkPrimary 
         px-4 py-3 lg:cursor-pointer"
        >
          <p>Gadgets</p> <AiOutlineDown className="ml-1 text-2xl p-1" />
        </div>
        <div
          className="flex items-center border-r hover:bg-darkPrimary 
         px-4 py-3 lg:cursor-pointer"
        >
          <p>GPS &amp; Cars</p> <AiOutlineDown className="ml-1 text-2xl p-1" />
        </div>
        <div
          className="flex items-center border-r hover:bg-darkPrimary 
         px-4 py-3 lg:cursor-pointer"
        >
          <p>Cameras &amp; Accessories</p>
          <AiOutlineDown className="ml-1 text-2xl p-1" />
        </div>
        <div
          className="flex items-center border-r hover:bg-darkPrimary 
         px-4 py-3 lg:cursor-pointer"
        >
          <p>Movies &amp; Games</p>
          <AiOutlineDown className="ml-1 text-2xl p-1" />
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
