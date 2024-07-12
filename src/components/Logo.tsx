import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="font-display flex items-center gap-1">
        <span className="bg-gradient-to-r from-primary to-secondary rounded-md text-white px-2 py-0.5 text-md">
          Mojo's
        </span>
        <span className="text-xl bg-gradient-to-r from-secondary to-primary text-transparent bg-clip-text">
          Blog
        </span>
      </div>
    </Link>
  );
};

export default Logo;
