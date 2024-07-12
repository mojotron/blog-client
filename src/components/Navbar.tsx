import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center gap-2">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          <li>home</li>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          <li>about</li>
        </NavLink>
        <NavLink
          to="/posts"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          <li>posts</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
