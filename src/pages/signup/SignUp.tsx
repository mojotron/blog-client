import { ChangeEvent, FormEvent, useState } from "react";
import Logo from "../../components/Logo";
import { useSignUp } from "../../hooks/useSignUp";
import type { SignUpFormType } from "../../types/formDataTypes";

const SignUp = () => {
  const { error, loading, signUp } = useSignUp();

  const [formData, setFormData] = useState<SignUpFormType>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((oldData) => ({
      ...oldData,
      [e.target.id]: e.target.value.trim(),
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await signUp({ ...formData });
  };

  return (
    <div className="p-5">
      <div className="flex gap-2 flex-col md:flex-row">
        {/* left */}
        <div className="flex-1">
          <Logo />
          <p>
            Welcome to the blog. You can sign up with your email and password or
            with your Google{" "}
          </p>
        </div>
        {/* right */}
        <form className="flex-1" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="username">username</label>
            <input
              className="w-full border border-black py-0.5 pl-1 pr-5 rounded-md outline-none focus:ring focus:ring-red-400"
              id="username"
              type="text"
              required
              placeholder="username"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="username">email</label>
            <input
              className="w-full border border-black py-0.5 pl-1 pr-5 rounded-md outline-none focus:ring focus:ring-red-400"
              id="email"
              type="email"
              required
              placeholder="name@provider.com"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="username">password</label>
            <input
              className="w-full border border-black py-0.5 pl-1 pr-5 rounded-md outline-none focus:ring focus:ring-red-400"
              id="password"
              type="password"
              required
              placeholder="password"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="username">confirm password</label>
            <input
              className="w-full border border-black py-0.5 pl-1 pr-5 rounded-md outline-none focus:ring focus:ring-red-400"
              id="confirmPassword"
              type="password"
              required
              placeholder="confirm password"
              onChange={handleChange}
            />
          </div>
          <button
            className="w-full border border-black py-0.5 pl-1 pr-5 rounded-md outline-none focus:ring focus:ring-red-400 hover:bg-black hover:text-white"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;