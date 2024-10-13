import { FaSearch } from "react-icons/fa";

const TextInputComponent = () => {
  return (
    <div className="relative w-full">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search"
        className="w-full pl-4 pr-10 py-2 text-sm text-white bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-gold-1 focus:border-transparent transition duration-200 ease-in-out placeholder-white"
        aria-label="Search through site content"
        autoComplete="off"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <FaSearch className="text-white" />
      </div>
    </div>
  );
};

export default TextInputComponent;
