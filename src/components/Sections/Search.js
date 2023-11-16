import { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const Search = ({setShowSearch}) => {
    // handle the location change
    const navigate = useNavigate();
    // access the DOM nodes
    const searchRef = useRef();

    const handleSearch = (event) => {
        event.preventDefault();
        // hide search bar after searching
        setShowSearch(false);
        // navigate to the filtered products
        console.log(`navigating to /products?q=${searchRef.current.value}`);
        navigate(`/products?q=${searchRef.current.value}`);
    };

  return (
    <div className="flex flex-col justify-center px-8 my-8 mx-auto max-w-screen-xl">
      <form
        onSubmit={ handleSearch }
        className="flex sticky justify-between items-center p-1 mb-4 w-full bg-white rounded-full shadow-lg dark:bg-slate-400"
      >
        <input
          name="search"
          ref={searchRef}
          className="py-4 pl-4 w-full text-xs font-bold leading-tight rounded-full lg:text-sm focus:outline-none text-slate-700 bg-slate-100 dark:bg-slate-800 dark:text-slate-100 focus:shadow-outline"
          type="text"
          autoComplete="off"
          placeholder="Search Here..."
        />

        <div className="justify-center p-2 mx-2 rounded-full cursor-pointer hover:bg-blue-400 bg-slate-600">
          <button type="submit" className="p-1 text-xl font-semibold text-white">
            <AiOutlineSearch />
          </button>
        </div>
      </form>

      <div className="flex flex-col gap-2 p-2 m-2 rounded-lg lg:p-4">
        <div className="p-1 text-lg font-black text-slate-600 dark:text-slate-300 md:text-xl lg:p-3 lg:text-2xl font-serif">
          Search Results
        </div>
      </div>
    </div>
  );
};
