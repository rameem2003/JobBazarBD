import React from "react";
import Container from "./../components/common/Container";
import Flex from "./../components/common/Flex";
import { Link } from "react-router";

const DashboardHome = () => {
  return (
    <main>
      <Container>
        <Flex className="my-8 items-center justify-between">
          <h2 className="text-primary text-3xl font-bold">
            Welcome to dashboard
          </h2>

          <Link
            to="/newjob"
            className="bg-primary hover:bg-primary/80 rounded-md px-12 py-5 text-base font-semibold text-white"
          >
            Create a new job
          </Link>
        </Flex>
      </Container>
    </main>
  );
};

export default DashboardHome;
