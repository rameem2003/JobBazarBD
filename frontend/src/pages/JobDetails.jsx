import { useParams } from "react-router";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaDollarSign,
  FaClipboardList,
  FaTimes,
} from "react-icons/fa";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";

const JobDetails = () => {
  const { id } = useParams();
  const [jobData, setJobData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [bottomSheet, setBottomSheet] = useState(false);
  const fromRef = useRef();

  const [formData, setFormData] = useState({
    userName: "",
    address: "",
    city: "",
    country: "",
    resume: null, // For file input
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // Add your API call or form handling logic here

    const data = new FormData();
    data.append("userName", formData.userName);
    data.append("address", formData.address);
    data.append("city", formData.city);
    data.append("country", formData.country);
    data.append("jobID", jobData.id);
    data.append("cv", formData.resume);

    try {
      let res = await axios.post(
        "http://localhost:8000/api/v1/application/new",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      fromRef.current.reset();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  // fetch single jon info http://localhost:8000/api/v1/job/single/:id
  const getSingleJob = async () => {
    setLoading(true);
    try {
      let res = await axios.get(
        `http://localhost:8000/api/v1/job/single/${id}`,
      );
      setLoading(false);
      setJobData(res.data.data[0]);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleJob();
  }, []);

  return (
    <main className={`${bottomSheet && "max-h-screen overflow-y-hidden"}`}>
      <Container>
        {loading ? (
          <h1>LoaDing....</h1>
        ) : (
          <section className="flex w-full items-center justify-center py-28">
            <div className="w-full max-w-6xl rounded-2xl bg-white p-10 shadow-2xl">
              <h2 className="text-primary text-center text-3xl font-bold">
                {jobData?.title}
              </h2>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="flex items-center gap-2">
                  <FaBriefcase className="text-primary" />
                  <p className="font-semibold text-gray-700">Job Role:</p>
                  <p className="text-gray-600">{jobData?.jobRole}</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaClipboardList className="text-primary" />
                  <p className="font-semibold text-gray-700">Job Type:</p>
                  <p className="text-gray-600 capitalize">{jobData?.jobType}</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaDollarSign className="text-primary" />
                  <p className="font-semibold text-gray-700">Salary Range:</p>
                  <p className="text-gray-600">
                    {jobData?.minSalary} BDT - {jobData?.maxSalary} BDT
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-primary" />
                  <p className="font-semibold text-gray-700">Location:</p>
                  <p className="text-gray-600">
                    {" "}
                    {jobData?.city}, {jobData?.country}
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="font-semibold text-gray-700">
                    Job Description:
                  </p>
                  <p className="mt-2 text-gray-600">{jobData?.description}</p>
                </div>
                <div className="col-span-2 flex justify-center">
                  <button
                    onClick={() => setBottomSheet(!bottomSheet)}
                    className="bg-primary hover:bg-primary/90 cursor-pointer rounded-lg px-8 py-3 text-lg text-white transition"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </Container>

      <section
        className={`bg-primary/90 absolute ${bottomSheet ? "top-0 h-screen" : "top-[-200px] h-0"} left-0 w-full rounded-b-2xl p-20 duration-700 ease-in-out`}
      >
        <FaTimes
          className="cursor-pointer text-2xl text-white"
          onClick={() => setBottomSheet(false)}
        />

        <div
          className={`${bottomSheet ? "scale-100 duration-500 ease-in-out" : "scale-0 duration-500 ease-in-out"} mx-auto max-w-2xl rounded-2xl bg-white p-4 shadow-lg`}
          style={{ borderColor: "#7219BA" }}
        >
          <h2
            className="mb-4 text-center text-2xl font-bold"
            style={{ color: "#7219BA" }}
          >
            Apply for Job
          </h2>
          <form
            ref={fromRef}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            <div className="mb-4">
              <label
                htmlFor="userName"
                className="mb-1 block font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={formData.userName}
                onChange={handleInputChange}
                className="w-full rounded-md border p-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="address"
                className="mb-1 block font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full rounded-md border p-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="city"
                className="mb-1 block font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full rounded-md border p-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="country"
                className="mb-1 block font-medium text-gray-700"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full rounded-md border p-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                required
              />
            </div>

            <div className="col-span-1 mb-4 md:col-span-2">
              <label
                htmlFor="resume"
                className="mb-1 block font-medium text-gray-700"
              >
                Upload Resume
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                className="w-full rounded-md border p-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                required
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                className="w-full rounded-md bg-purple-700 px-4 py-2 font-bold text-white hover:bg-purple-800 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                style={{ backgroundColor: "#7219BA" }}
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default JobDetails;
