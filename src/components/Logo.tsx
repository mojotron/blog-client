import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="font-display flex items-center gap-1">
        <span className="bg-black rounded-full text-white px-1 text-md">
          Mojo's
        </span>
        <span className="text-xl">Blog</span>
      </div>
    </Link>
  );
};

export default Logo;
