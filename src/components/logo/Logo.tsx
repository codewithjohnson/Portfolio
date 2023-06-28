import React from "react";
import { Link } from "react-router-dom";
import { handleSmoothScroll } from "../hero/funcs";



const Logo = () => {
  return (
    <Link
      to="#home"
      onClick={(e) => handleSmoothScroll(e, "#home")}
      className="w-full text-2xl font-extrabold text-white lg:text-3xl font-raleway xl:animated-bounce"
    >
      <span className="text-secondary ">Muyiwa</span>
      {""}. J
    </Link>
  );
};

export default Logo;
