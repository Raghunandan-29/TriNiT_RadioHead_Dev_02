import React from "react";
import Logo from '../Assets/logo.jpeg'
function Navbar() {
  return (
    <div className="bg-gray-100 border-b border-b-gray-300 ">
      <nav
        className="bg-white pl-8 pr-8 p-2 md:p-2 lg:p-3 lg:flex lg:justify-center"
        data-headlessui-state=""
      >
        <div className="max-w-full sm:px-6 lg:px-2 md:w-full lg:w-full  ">
          <div className="flex items-center justify-between md:h-14 lg:h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 ">
                <a href="/">
                  <img
                    className="h-10"
                    src={Logo}
                    alt="Your Company"
                  />
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    className="bg-blue-gray-500 text-white font-semibold hover:bg-gray-300  rounded-md px-3 py-2 text-sm font-medium"
                    href="/"
                    aria-current="page"
                  >
                    Home
                  </a>
                  <a
                    className="text-blue-gray-600 hover:text-blue-gray-800 font-semibold hover:bg-gray-300  rounded-md px-3 py-2 text-sm font-medium"
                    href="/courses"
                  >
                    Courses
                  </a>
                  <a
                    className="text-blue-gray-600 hover:text-blue-gray-800 font-semibold hover:bg-gray-300  rounded-md px-3 py-2 text-sm font-medium"
                    href="/tutors"
                  >
                    Tutors
                  </a>
                  <a
                    className="text-blue-gray-600 hover:text-blue-gray-800 font-semibold hover:bg-gray-300  rounded-md px-3 py-2 text-sm font-medium"
                    href="/community"
                  >
                    Community
                  </a>
                  <a
                    className="text-blue-gray-600 hover:text-blue-gray-800 font-semibold hover:bg-gray-300  rounded-md px-3 py-2 text-sm font-medium"
                    href="/about"
                  >
                    About
                  </a>
                  <a
                    className="text-blue-gray-600 hover:text-blue-gray-800 font-semibold hover:bg-gray-300  rounded-md px-3 py-2 text-sm font-medium"
                    href="/contact"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="hidden h-8 w-64 lg:mt-3 lg:h-12 lg:w-72 md:flex">
                <div className="space-x-4 ">
                  <a href="/login">
                    <button className="bg-blue-gray-300 hover:bg-blue-gray-500 text-xs lg:text-sm text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline">
                      Login
                    </button>
                  </a>
                  <a href="/register">
                    <button className="bg-blue-gray-300 hover:bg-blue-gray-500  text-xs lg:text-sm text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline">
                      Register
                    </button>
                  </a>
                  <a href="/instructors/login">
                    <button className="bg-purple-800 hover:bg-purple-900 text-xs text-white lg:text-sm font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline">
                      Instructor Login
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white"
                id="headlessui-disclosure-button-:r5:"
                type="button"
                aria-expanded="false"
                data-headlessui-state=""
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="block h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
