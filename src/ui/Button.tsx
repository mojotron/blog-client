import { ReactNode } from "react";

type PropsType = {
  type?: "submit" | "button";
  disabled?: boolean;
  children: ReactNode;
};

const Button = ({ type = "submit", disabled = false, children }: PropsType) => {
  return (
    <button
      className="w-full flex items-center justify-center gap-1 border border-black  px-2 h-8 rounded-md outline-none focus:ring focus:ring-red-400 hover:bg-black hover:text-white disabled:border-gray-400 disabled:text-gray-400"
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
