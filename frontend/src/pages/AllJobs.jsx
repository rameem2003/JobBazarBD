import React from "react";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import JobCard from "../components/common/JobCard";

const AllJobs = () => {
  return (
    <main className="py-5">
      <Container>
        <h1 className="text-primary text-4xl font-semibold">Job Search</h1>

        <p className="mt-2 font-medium text-gray-500">
          Search for your desired job matching your skills
        </p>

        <section className="mt-10">
          <Flex className="flex-wrap items-center justify-between gap-5">
            <JobCard className="w-[32%]" />
            <JobCard className="w-[32%]" />
            <JobCard className="w-[32%]" />
            <JobCard className="w-[32%]" />
            <JobCard className="w-[32%]" />
            <JobCard className="w-[32%]" />
            <JobCard className="w-[32%]" />
            <JobCard className="w-[32%]" />
            <JobCard className="w-[32%]" />
          </Flex>
        </section>
      </Container>
    </main>
  );
};

export default AllJobs;
