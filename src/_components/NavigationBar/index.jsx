"use client";
"use strict";
import { useState, useEffect } from "react";
import NavLink from "./NavLink";
import HamburgerButton from "./HamburgerButton";
import { routes } from "@/routes";

export default function NavigationBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  function handleClick() {
    setOpen(!open);
  }

  return (
    <nav
      className={`section-padding-x fixed top-0 w-full z-[999] text-dark-base normal-font-size transition-all duration-300 ${
        scrolled ? "bg-light-base bg-opacity-20 shadow-sm" : "bg-light-base/50"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto xl:px-0 md:py-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/favicon.png" className="h-8" alt="DevFlex Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Jack's
          </span>
        </a>
        <HamburgerButton onClick={handleClick} />
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
