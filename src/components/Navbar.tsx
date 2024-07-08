import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center gap-2">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-red-400" : "")}
        >
          <li>home</li>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-red-400" : "")}
        >
          <li>about</li>
        </NavLink>
        <NavLink
          to="/posts"
          className={({ isActive }) => (isActive ? "text-red-400" : "")}
        >
          <li>posts</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
