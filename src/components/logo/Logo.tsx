import React from "react";
import { Link } from "react-router-dom";
import { handleSmoothScroll } from "../hero/funcs";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link
      to="#home"
      onClick={(e) => handleSmoothScroll(e, "#home")}
      className="w-full text-3xl font-extrabold text-white font-raleway animated-bounce"
    >
      <span className="text-secondary ">Muyiwa</span>
      {""}. J
    </Link>
  );
};

export default Logo;
