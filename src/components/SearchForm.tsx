import { FormEvent, useState } from "react";
import { FaSearch as IconSearch } from "react-icons/fa";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchTerm);
    setSearchTerm("");
  };
  return (
    <form className="w-[250px]" onSubmit={handleSubmit}>
      <div className="flex items-center relative">
        <input
          className="w-full border border-black py-0.5 pl-1 pr-5 rounded-md outline-none focus:ring focus:ring-red-400"
          type="search"
          maxLength={50}
          minLength={3}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="absolute right-[3px] py-0.5 px-1" type="submit">
          <IconSearch className="hover:text-red-400" />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
