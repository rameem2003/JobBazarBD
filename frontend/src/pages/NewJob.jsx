import { useState } from "react";

const NewJob = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [jobLevel, setJobLevel] = useState("full_time");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Title:", jobTitle);
    console.log("Job Role:", jobRole);
    console.log("Job Description:", jobDescription);
    console.log("Min Salary:", minSalary);
    console.log("Max Salary:", maxSalary);
    console.log("Job Level:", jobLevel);
    console.log("Country:", country);
    console.log("City:", city);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl rounded-2xl bg-white p-8 shadow-lg">
        <h2 className="text-center text-2xl font-semibold text-[#6300b3]">
          Post a Job
        </h2>
        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Job Title</label>
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-[#6300b3] focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Job Role</label>
            <input
              type="text"
              value={jobRole}
              onChange={(e) => setJobRole(e.target.value)}
              className="mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-[#6300b3] focus:outline-none"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Job Description</label>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              className="mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-[#6300b3] focus:outline-none"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700">Min Salary</label>
            <input
              type="number"
              value={minSalary}
              onChange={(e) => setMinSalary(e.target.value)}
              className="mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-[#6300b3] focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Max Salary</label>
            <input
              type="number"
              value={maxSalary}
              onChange={(e) => setMaxSalary(e.target.value)}
              className="mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-[#6300b3] focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Job Level</label>
            <select
              value={jobLevel}
              onChange={(e) => setJobLevel(e.target.value)}
              className="mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-[#6300b3] focus:outline-none"
              required
            >
              <option value="full_time">Full Time</option>
              <option value="part_time">Part Time</option>
              <option value="onsite">Onsite</option>
              <option value="remote">Remote</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-[#6300b3] focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-[#6300b3] focus:outline-none"
              required
            />
          </div>
          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="hover:bg-opacity-90 rounded-lg bg-[#6300b3] px-6 py-2 text-white transition"
            >
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewJob;
