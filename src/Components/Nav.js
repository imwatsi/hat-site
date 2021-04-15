import { useState } from "react";
import Search from "./Search";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav
        className="shadow-md relative flex flex-wrap items-center justify-between px-2 py-4 navbar-expand-lg mb-1"
        style={{ backgroundColor: "#042437" }}
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
            <a
              className="leading-relaxed text-white flex-inline flex mr-2 py-1"
              href="/"
            >
              <img
                src="logo.png"
                alt=""
                srcSet=""
                width="10%"
                height="10%"
                className="mr-3"
              />
              <span className="align-middle m-auto">
                {" "}
                Hive Attention Tokens
              </span>
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setOpen(!open)}
            >
              <div style={{ transform: "scale(-1, 1)" }}>
                <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                <span className="block relative w-3 h-px rounded-sm mt-1 bg-white"></span>
                <span className="block relative w-4 h-px rounded-sm mt-1 bg-white"></span>
              </div>
            </button>
          </div>
          <div
            className={`${
              open ? "lg:flex flex-grow items-center" : "hidden"
            } lg:flex flex-grow items-center`}
          >
            <ul className="flex flex-col lg:flex-row list-none ml-auto mt-3 md:mt-0 text-center">
              <li className="relative text-gray-600 mb-3 md:mb-0">
                <Search />
              </li>
              {/*<li className="md:ml-5">
                <a
                  href="/"
                  className="inline-block py-2 px-8 text-white bg-green hover:bg-green rounded-lg shadow"
                >
                  Create Account
                </a>
          </li>*/}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
