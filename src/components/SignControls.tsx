import { BiLogIn, BiLogOut, BiLogInCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const SignControls = () => {
  return (
    <div>
      <Link to="login" className="flex items-center gap-1">
        <BiLogIn />
        <span className="hover:underline">login</span>
      </Link>
      <Link to="logout" className="flex items-center gap-1">
        <BiLogOut />
        <span className="hover:underline">logout</span>
      </Link>
      <Link to="logout" className="flex items-center gap-1">
        <BiLogInCircle />
        <span className="hover:underline">register</span>
      </Link>
    </div>
  );
};

export default SignControls;
