import { ReactNode } from "react";

type PropsType = {
  type?: "submit" | "button";
  disabled?: boolean;
  children: ReactNode;
};

const Button = ({ type = "submit", disabled = false, children }: PropsType) => {
  return (
    <button
      className="w-full text-cta flex items-center justify-center gap-1 border border-cta  px-2 h-8 rounded-md outline-none focus:ring focus:ring-secondary hover:bg-cta hover:text-white disabled:border-disabled disabled:text-disabled"
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
