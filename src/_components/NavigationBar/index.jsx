"use client";
import { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { routes } from "@/routes";

export default function NavigationBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  function handleClick() {
    setOpen(!open);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`section-padding-x fixed top-0 w-full z-[999] text-dark-base normal-font-size transition-all duration-300 ${
        scrolled ? "bg-light-base/80 shadow-sm" : "bg-light-base/50"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto xl:px-0 py-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/favicon.png" className="h-8" alt="DevFlex Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Jack's
          </span>
        </a>
        <button
          type="button"
          className="lg:hidden text-dark-base w-8"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-full"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
        <div
          className={`w-full lg:block lg:w-auto ${open ? "block" : "hidden"}`}
        >
          <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border rounded-lg lg:flex-row rtl:space-x-reverse lg:mt-0 lg:border-0 gap-2 lg:gap-0">
            {routes.map((route, index) => (
              <NavLink key={index} url={route.url}>
                {route.title}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
