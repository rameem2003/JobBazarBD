import { useParams } from "react-router";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaDollarSign,
  FaClipboardList,
} from "react-icons/fa";

const JobDetails = ({ job }) => {
  const { id } = useParams();

  return (
    <div className="flex w-full items-center justify-center bg-gray-100 py-28">
      <div className="w-full max-w-6xl rounded-2xl bg-white p-10 shadow-2xl">
        <h2 className="text-center text-3xl font-bold text-[#6300b3]">
          job.jobTitle
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-6">
          <div className="flex items-center gap-2">
            <FaBriefcase className="text-[#6300b3]" />
            <p className="font-semibold text-gray-700">Job Role:</p>
            <p className="text-gray-600">job.jobRole</p>
          </div>
          <div className="flex items-center gap-2">
            <FaClipboardList className="text-[#6300b3]" />
            <p className="font-semibold text-gray-700">Job Level:</p>
            <p className="text-gray-600 capitalize">job.jobLevel</p>
          </div>
          <div className="flex items-center gap-2">
            <FaDollarSign className="text-[#6300b3]" />
            <p className="font-semibold text-gray-700">Salary Range:</p>
            <p className="text-gray-600">$job.minSalary - $job.maxSalary</p>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#6300b3]" />
            <p className="font-semibold text-gray-700">Location:</p>
            <p className="text-gray-600">job.city, job.country</p>
          </div>
          <div className="col-span-2">
            <p className="font-semibold text-gray-700">Job Description:</p>
            <p className="mt-2 text-gray-600">job.jobDescription</p>
          </div>
          <div className="col-span-2 flex justify-center">
            <button className="hover:bg-opacity-90 rounded-lg bg-[#6300b3] px-8 py-3 text-lg text-white transition">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
