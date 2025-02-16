import React from "react";
import Container from "../../common/Container";
import JobCard from "../../common/JobCard";
import { Link } from "react-router";
import Flex from "../../common/Flex";
import { useSelector } from "react-redux";

const FeaturedJobs = () => {
  const jobs = useSelector((state) => state.allJobs.jobs);
  return (
    <section className="my-28">
      <Container>
        <h1 className="text-center text-[45px] font-bold text-black">
          Available Jobs
        </h1>

        <h3 className="mt-5 text-center text-[22px] text-gray-400">
          Choose jobs from the top employers and apply for the same.
        </h3>

        <section className="mt-10">
          <Flex className="items-center justify-between gap-5">
            {jobs.map((job, i) => (
              <JobCard data={job} key={i} className="w-[33%]" />
            ))}
          </Flex>
        </section>

        <div className="mt-10 text-center">
          <Link className="text-primary text-xl font-medium">
            View More......
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedJobs;
