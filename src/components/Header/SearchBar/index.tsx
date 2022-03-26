import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div
      className="absolute flex items-center -left-[2.1%] -right-[2.1%]
       -bottom-[50%] md:static md:flex items-stretch md:bg-primary border-2
       md:rounded-r-full md:w-2/4 md:border-primary md:rounded-l-full"
    >
      <input
        className="border-0 py-2 px-4 max-h-full
         focus:outline-none
         md:rounded-l-full w-[80%] md:w-[50%]"
        type="text"
        placeholder="Search for Products"
      />
      <select
        className="hidden md:block md:rounded-r-full focus:outline-none 
        cursor-pointer max-h-full px-4 py-2 md:w-[40%]"
      >
        <option>All Categories</option>
        <option>TV &amp; Audio</option>
        <option>Smartphones</option>
        <option>Laptops &amp; Desktops</option>
        <option>Gadgets</option>
        <option>GPS &amp; Cars</option>
        <option>Cameras &amp; Accessories</option>
        <option>Movies &amp; Games</option>
      </select>
      <AiOutlineSearch
        className="text-black bg-transparent md:text-white w-[20%] 
         md:w-[10%] text-3xl md:rounded-r-full max-h-full hover:bg-darkPrimary
         cursor-pointer my-auto"
      />
    </div>
  );
};

export default SearchBar;
