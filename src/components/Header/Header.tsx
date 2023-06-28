import React, { useEffect, useState, useRef } from "react";
import Logo from "../logo/Logo";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);
      if (scrollPosition > 0) {
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

  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ): void => {
    event.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`z-50 transition-none delay-150 ease-in-out header h-[80px] fixed top-0 w-full md:flex-row flex justify-between left-0 right-0 items-center px-5  xl:px-40
      ${isScrolled ? "bg-[#2B2D33]/60" : "bg-primary"}
       `}
    >
      <Logo />

      <ul
        ref={menuRef}
        className={`fixed md:static flex-col text-sm flex md:w-full md:flex-row md:justify-between md:items-center gap-10 md:gap-1 text-white font-semibold capitalize font-openSans 
      ${isMenuOpen ? "w-full  top-[80px]" : "-top-[400px]"}
      `}
      >
        <NavLink className={"py-3 hover:text-secondary"} to="#home" onClick={(e) => handleSmoothScroll(e, "#home")}>
          home
        </NavLink>
        <NavLink
          className={" py-3 hover:text-secondary"}
          to="#projects"
          onClick={(e) => handleSmoothScroll(e, "#projects")}
        >
          projects
        </NavLink>
        <NavLink
          className={"hover:text-secondary py-3"}
          to="#about"
          onClick={(e) => handleSmoothScroll(e, "#about")}
        >
          about
        </NavLink>
        <NavLink
          className={"py-3 hover:text-secondary"}
          to="#contact"
          onClick={(e) => handleSmoothScroll(e, "#contact")}
        >
          Contact
        </NavLink>
        <NavLink
          className={
            " py-2 rounded-3xl px-5 border-2 border-secondary text-center"
          }
          to=""
        >
          dowload CV
        </NavLink>
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
