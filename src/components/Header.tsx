import { Link } from "react-router-dom";
import { MdLogin as IconLogin } from "react-icons/md";

import Logo from "./Logo";
import SearchForm from "./SearchForm";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="w-full px-8 py-4 flex items-center justify-between border-b-2 border-black">
      <Logo />
      <SearchForm />
      <Navbar />
      <Link to="/login" className="flex items-center gap-1">
        <IconLogin />
        login
      </Link>
    </header>
  );
};

export default Header;
