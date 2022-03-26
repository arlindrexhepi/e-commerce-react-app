import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div
      className="absolute -left-[2%] -right-[2%] -bottom-[50%] md:static md:flex
       items-stretch md:bg-primary border-2
       md:rounded-r-full md:w-2/4
     md:rounded-l-full md:border-primary"
    >
      <input
        className="border-0 py-1 px-4 max-h-full
         focus:outline-none
       md:rounded-l-full w-[50%]"
        type="text"
        placeholder="Search for Products"
      />
      <select
        className="md:rounded-r-full focus:outline-none
       max-h-full px-4 py-1 w-[50%] md:w-[40%]"
      >
        <option>All Categories</option>
      </select>
      <AiOutlineSearch
        className="hidden md:block text-white w-[10%] text-3xl rounded-r-full
         max-h-full hover:bg-darkPrimary
       cursor-pointer"
      />
    </div>
  );
};

export default SearchBar;
