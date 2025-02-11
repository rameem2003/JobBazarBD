import React from "react";
import Flex from "./Flex";
import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router";

const JobCard = ({ data, className }) => {
  return (
    <div className={` ${className} bg-primary/10 rounded-md px-5 py-[23px]`}>
      <h4 className="text-[18px] font-medium text-black">
        Technical Support Specialist
      </h4>

      <Flex className="mt-2 items-center gap-5">
        <span className="bg-primary rounded-md px-2 py-1 text-white uppercase">
          part-time
        </span>

        <p className="text-base font-medium text-gray-600">
          Salary: 20,000 INR - 25,000 INR
        </p>
      </Flex>

      <div className="my-10">
        <h2 className="text-primary text-3xl font-bold">
          ROL Studio Bangladesh
        </h2>

        <Flex className="mt-2 items-center gap-2">
          <FaLocationArrow className="text-primary text-xl" />
          <p className="text-primary text-xl font-bold">Mirpur - 10, Dhaka</p>
        </Flex>
      </div>
      <Flex className="mt-5 items-center justify-between gap-2">
        <Link
          to="/details"
          className="border-primary text-primary w-[50%] rounded-lg border-[2px] px-4 py-3 text-center text-lg font-bold"
        >
          View
        </Link>
        <button className="border-primary bg-primary w-[50%] rounded-lg border-[2px] px-4 py-3 text-center text-lg font-bold text-white">
          Apply Job
        </button>
      </Flex>
    </div>
  );
};

export default JobCard;
