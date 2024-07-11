"use client";
import React, { useState, useEffect } from "react";
import { BsSubstack } from "react-icons/bs";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div
          className={`navbar bg-base-300 w-full sm:px-40 py-5 fixed top-0 z-50 transition-shadow ${
            isScrolled ? "shadow-sm shadow-base-100" : ""
          }`}
        >
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 font-bold text-2xl uppercase items-end gap-2 ">
            <p>
              <span className="text-3xl font-extrabold">S</span>ecreto
            </p>
            <p>
              <span className="text-3xl font-extrabold">D</span>efi
            </p>
          </div>
          <div className="hidden flex-none lg:block">
            <div className="menu menu-horizontal flex items-center gap-5 text-3xl">
              {/* Navbar menu content here */}
              <div className="flex items-center justify-center p-3 bg-transparent hover:bg-primary cursor-pointer text-white hover:text-base-100">
                <FaXTwitter />
              </div>
              <div className="flex items-center justify-center p-3 bg-transparent hover:bg-primary cursor-pointer text-white hover:text-base-100">
                <FaTelegram />
              </div>
              <div className="flex items-center justify-center p-3 bg-transparent hover:bg-primary cursor-pointer text-white hover:text-base-100">
                <BsSubstack />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <FaXTwitter className=" text-white hover:text-primary cursor-pointer" />
          <FaTelegram className=" text-white hover:text-primary cursor-pointer" />
          <BsSubstack className=" text-white hover:text-primary cursor-pointer" />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
