import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form className="flex flex-col max-w-[450px]" onSubmit={handleSubmit}>
        <label>email</label>
        <input
          className="border border-slate-300 outline-none focus:ring focus:ring-emerald-300"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>password</label>
        <input
          className="border border-slate-300 outline-none focus:ring focus:ring-emerald-300"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">login</button>
      </form>

      <Link to="/signup">Don't have account? Register!</Link>
    </div>
  );
};

export default Login;
