import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import { Link, NavLink } from "react-router";

const Navigation = () => {
  return (
    <nav className="py-[33px]">
      <Container>
        <Flex className="items-center justify-between">
          <div>
            <Link className="text-primary text-2xl font-bold" to="/">
              JOBBazarBD
            </Link>
          </div>

          <ul className="flex items-center justify-end gap-10">
            <li>
              <NavLink to="/" className={`text-primary text-lg font-semibold`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/jobs"
                className={`text-primary text-lg font-semibold`}
              >
                Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/newjob"
                className={`text-primary text-lg font-semibold`}
              >
                Post a Job
              </NavLink>
            </li>
            <li>
              <NavLink className={`text-primary text-lg font-semibold`}>
                About
              </NavLink>
            </li>
          </ul>

          <div>
            <Link
              to="/login"
              className="bg-primary hover:bg-primary/80 rounded-md px-12 py-5 text-base font-semibold text-white"
            >
              Login as Employer
            </Link>
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navigation;
