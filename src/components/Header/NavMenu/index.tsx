import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

import ParentAccordion from "./ParentAccordion";

import tvImage1 from "../../../assets/megamenu-image0-1.png";
import tvImage2 from "../../../assets/megamenu-image1-1.png";

interface NavMenuProps {
  className: string;
}

const NavMenu: React.FC<NavMenuProps> = ({ className }) => {
  const [showAccordion, setShowAccordion] = useState<boolean>(false);

  return (
    <div className={className}>
      <div className="relative side-space flex items-center py-1">
        <ParentAccordion
          menuTitle="TV &amp; Audio"
          onSetShowAccordion={setShowAccordion}
          showAccordion={showAccordion}
          accordionImages={[tvImage1, tvImage2]}
        />

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
