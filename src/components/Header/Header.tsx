import React, { useEffect, useState, useRef } from "react";
import Logo from "../logo/Logo";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

  // close menu when outside is clicked
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className="sticky z-50 flex h-[60px] items-center justify-between w-full header bg-gray-200">
      <Logo />

      <button onClick={handleMenuToggle} className={`md:hidden flex p-2`}>
        menu
      </button>

      <ul
        ref={menuRef}
        className={`flex w-full md:flex-row md:w-fit md:static gap-6 justify-between flex-col fixed -z-50 transition-all ease-in-out delay-100  ${
          isMenuOpen ? "top-[60px]" : "-top-full"
        }`}
      >
        <NavLink className={"w-full "} to="home">
          contact
        </NavLink>
        <NavLink className={"w-full"} to="#projects">
          projects
        </NavLink>
        <NavLink className={"w-full"} to="#projects">
          projects
        </NavLink>
      </ul>
    </nav>
  );
};

export default Header;
