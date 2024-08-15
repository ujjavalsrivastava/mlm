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
