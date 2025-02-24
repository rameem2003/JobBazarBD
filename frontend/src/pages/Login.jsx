import axios from "axios";
import { useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    try {
      let res = await axios.post(
        "http://localhost:8000/api/v1/auth/login",
        { email, password },
        {
          withCredentials: true,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      console.log(res);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: error.response.data.msg,
        text: "Something went wrong!",
      });
    }
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
