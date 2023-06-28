import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useInView } from "framer-motion";
import Logo from "../logo/Logo";
import { NavLink } from "react-router-dom";
import { handleSmoothScroll } from "../hero/funcs";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCurrentRoute, setIsCurrentRoute] = useState({
    home: false,
    projects: false,
    about: false,
    contact: false,
  });

  const location = useLocation();
  const menuRef = useRef<HTMLUListElement>(null);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // close menu when a link is clicked
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      scrollPosition > 0 ? setIsScrolled(true) : setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // change nav bg color on scroll
  useEffect(() => {
    const navBarLimit = window.matchMedia("(min-width: 768px)");
    const handleResize = () => {
      if (navBarLimit.matches) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <nav
      className={`z-50 bg-primary transition-all duration-200 delay-200 ease-in-out header h-[80px] fixed top-0 w-full md:flex-row flex justify-between left-0 right-0 items-center px-8  xl:px-40
      ${isScrolled ? "bg-[#2B2D33]/80" : "bg-primary"}
       `}
    >
      <Logo />

      <ul
        ref={menuRef}
        className={`fixed left-0 right-0  w-full md:static md:top-0 flex-col text-sm flex md:flex-row md:justify-between md:items-center gap-10 md:gap-1 text-white font-semibold capitalize font-openSans 
      ${isMenuOpen ? " bg-primary/80 top-[80px]  px-8 " : "hidden md:flex"}`}
      >
        <NavLink
          className={
            "py-3 hover:text-secondary transition-all delay-150 ease-in-out duration-300 text-white"
          }
          to="#home"
          onClick={(e) => handleSmoothScroll(e, "#home")}
        >
          home
        </NavLink>
        <NavLink
          className={`py-3 hover:text-secondary transition-all delay-150 ease-in-out duration-300 text-white `}
          to="#projects"
          onClick={(e) => handleSmoothScroll(e, "#projects")}
        >
          projects
        </NavLink>
        <NavLink
          className={
            "py-3 hover:text-secondary transition-all delay-150 ease-in-out duration-300 text-white"
          }
          to="#about"
          onClick={(e) => handleSmoothScroll(e, "#about")}
        >
          about
        </NavLink>
        <NavLink
          className={
            "py-3 hover:text-secondary transition-all delay-150 ease-in-out duration-300 text-white "
          }
          to="#contact"
          onClick={(e) => handleSmoothScroll(e, "#contact")}
        >
          Contact
        </NavLink>
        <a
          className={` py-2 rounded-3xl px-5 border-2 border-secondary text-center  hover:bg-black bg-primary transition-all duration-200 ease-in-out delay-100`}
          target="_blank"
          href="https://drive.google.com/file/d/1t6QFZHgrwgBUaGVfbVgFQUiFzGJ2knrI/view?usp=drive_link"
        >
          dowload CV
        </a>
      </ul>

      <button
        onClick={handleMenuToggle}
        className={`inline-flex md:hidden text-white text-lg`}
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
    </nav>
  );
};

export default Header;
