import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="font-display flex items-center gap-1">
        <span className="bg-black rounded-full text-white px-1 text-md">L</span>
        <span className="text-xl">Logo</span>
      </div>
    </Link>
  );
};

export default Logo;
