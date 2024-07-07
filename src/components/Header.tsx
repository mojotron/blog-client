import Logo from "./Logo";
import SignControls from "./SignControls";

const Header = () => {
  return (
    <header className="w-full px-8 flex items-center justify-between border-b-2 border-black">
      <Logo />
      <SignControls />
    </header>
  );
};

export default Header;
