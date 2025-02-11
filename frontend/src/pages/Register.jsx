import { useState } from "react";
import { Link } from "react-router";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("job_seeker");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Role:", role);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 py-28">
      <div className="w-96 rounded-2xl bg-white p-8 shadow-lg">
        <h2 className="text-center text-2xl font-semibold text-[#6300b3]">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-[#6300b3] focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-[#6300b3] focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-[#6300b3] focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-[#6300b3] focus:outline-none"
              required
            >
              <option value="job_seeker">Job Seeker</option>
              <option value="job_provider">Job Provider</option>
            </select>
          </div>
          <button
            type="submit"
            className="hover:bg-opacity-90 w-full rounded-lg bg-[#6300b3] px-4 py-2 text-white transition"
          >
            Register
          </button>

          <p className="mt-5 text-center">
            Login here
            <Link className="text-primary" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
