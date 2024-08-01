import { initCollapses } from "flowbite";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import goerp from "@/assets/images/vm/goerp.png";

const Navbar = () => {
  useEffect(() => {
    initCollapses();
  });
  return (
    <>
      <nav className="bg-white border-gray-300 shadow-md fixed top-0 w-full h-14 z-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto h-14 px-2 py-1">
          <Link to={"/vm"} className="flex items-center">
            <img src={goerp} className="h-5 w-28" />
          </Link>

          {/* <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button> */}

          <div
            className="hidden w-2/3 ms-auto md:ms-0 md:block md:w-auto"
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col md:py-[0.25rem] py-[1rem] px-4 md:p-0 border-[1px] border-gray-100 rounded-lg bg-gray-200 md:flex-row md:space-x-6 md:mt-0 md:border-0 md:bg-white mt-[1rem] md:text-base md:space-y-0 space-y-2">
              <li>
                <Link
                  to={"/"}
                  className="block py-2 px-3 text-gray-50 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to={"/"}
                  className="block py-2 px-3 text-gray-50 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
