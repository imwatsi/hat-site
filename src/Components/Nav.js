import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="shadow-md relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg mb-1 bg-white">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
            <a
              className="leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap"
              href="/"
            >
              <h1>Hive Attention Tokens</h1>
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setOpen(!open)}
            >
              <div style={{ transform: "scale(-1, 1)" }}>
                <span className="block relative w-6 h-px rounded-sm bg-black"></span>
                <span className="block relative w-3 h-px rounded-sm mt-1 bg-black"></span>
                <span className="block relative w-4 h-px rounded-sm mt-1 bg-black"></span>
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
                <input
                  type="search"
                  name="serch"
                  placeholder="Search"
                  className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none border border-pink-500 focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 mt-3 mr-4 "
                >
                  <svg
                    className="hidden sm:block fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.966 56.966"
                    style={{ enableBackground: "new 0 0 56.966 56.966" }}
                    xmlSpace="preserve"
                    width="512px"
                    height="512px"
                  >
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                  </svg>
                </button>
              </li>
              <li className="md:ml-5">
                <a
                  href="/"
                  className="inline-block py-2 px-8 text-white bg-green hover:bg-green rounded-lg shadow"
                >
                  Create Account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
