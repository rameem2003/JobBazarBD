import { useState } from "react";
import { Link } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 py-28">
      <div className="w-96 rounded-2xl bg-white p-8 shadow-lg">
        <h2 className="text-primary text-center text-2xl font-semibold">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="focus:ring-primary mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="focus:ring-primary mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="hover:bg-opacity-90 bg-primary w-full cursor-pointer rounded-lg px-4 py-2 text-white transition"
          >
            Login
          </button>

          <p className="mt-5 text-center">
            Create an account{" "}
            <Link className="text-primary" to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
