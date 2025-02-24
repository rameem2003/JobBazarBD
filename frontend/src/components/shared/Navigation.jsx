import React, { useEffect } from "react";
import Cookies from "js-cookie";
import Container from "../common/Container";
import Flex from "../common/Flex";
import { Link, NavLink } from "react-router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { jobReducer } from "../../redux/features/JobSlice";
import { AccountReducer } from "../../redux/features/AuthSlice";

const Navigation = () => {
  const dispatch = useDispatch(); // dispatch instance
  const user = useSelector((state) => state.account.account);
  console.log(user);

  // fetch all jobs http://localhost:8000/api/v1/job/all
  const fetchAllJobs = async () => {
    const res = await axios.get("http://localhost:8000/api/v1/job/all");
    dispatch(jobReducer(res.data.data));
  };

  // function for logout
  const handleLogout = () => {
    dispatch(AccountReducer(""));
    Cookies.remove("token");
    location.reload();
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);
  return (
    <nav className="py-8">
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
            {/* <li>
              <NavLink
                to="/newjob"
                className={`text-primary text-lg font-semibold`}
              >
                Post a Job
              </NavLink>
            </li> */}
            <li>
              <NavLink className={`text-primary text-lg font-semibold`}>
                About
              </NavLink>
            </li>
          </ul>

          {user ? (
            <div class="flex cursor-pointer flex-wrap items-center justify-center gap-4">
              <img
                src="https://readymadeui.com/team-1.webp"
                class="h-12 w-12 rounded-full"
              />
              <div>
                <p class="text-primary text-base font-bold capitalize">
                  {user.user.name}
                </p>
                {/* <p class="mt-0.5 text-xs text-gray-500">{user.user.email}</p> */}
                <Flex className="gap-2">
                  <Link
                    to="/dashboard"
                    class="hover:text-primary mt-0.5 text-xs text-gray-500 hover:font-medium"
                  >
                    Dashboard
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="hover:text-primary mt-0.5 cursor-pointer text-xs text-gray-500 hover:font-medium"
                  >
                    Logout
                  </button>
                </Flex>
              </div>
            </div>
          ) : (
            <div>
              <Link
                to="/login"
                className="bg-primary hover:bg-primary/80 rounded-md px-12 py-5 text-base font-semibold text-white"
              >
                Login as Employer
              </Link>
            </div>
          )}
        </Flex>
      </Container>
    </nav>
  );
};

export default Navigation;
