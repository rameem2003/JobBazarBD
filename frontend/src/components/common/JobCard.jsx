import React from "react";
import Flex from "./Flex";
import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router";

const JobCard = ({ data, className }) => {
  console.log(data);

  return (
    <div className={` ${className} bg-primary/10 rounded-md px-5 py-[23px]`}>
      <h4 className="text-[18px] font-medium text-black">{data.title}</h4>

      <Flex className="mt-2 items-center gap-5">
        <span className="bg-primary rounded-md px-2 py-1 text-white uppercase">
          {data.jobType}
        </span>

        <p className="text-base font-medium text-gray-600">
          Salary: {data.minSalary} BDT - {data.maxSalary} BDT
        </p>
      </Flex>

      <div className="my-10">
        <h2 className="text-primary text-3xl font-bold">{data.companyName}</h2>

        <Flex className="mt-2 items-center gap-2">
          <FaLocationArrow className="text-primary text-xl" />
          <p className="text-primary text-xl font-bold">
            {data.city}, {data.country}
          </p>
        </Flex>
      </div>
      <Flex className="mt-5 items-center justify-between gap-2">
        <Link
          to={`/details/${data.id}`}
          className="border-primary text-primary w-full rounded-lg border-[2px] px-4 py-3 text-center text-lg font-bold"
        >
          View
        </Link>
        {/* <button className="border-primary bg-primary w-[50%] rounded-lg border-[2px] px-4 py-3 text-center text-lg font-bold text-white">
          Apply Job
        </button> */}
      </Flex>
    </div>
  );
};

export default JobCard;
