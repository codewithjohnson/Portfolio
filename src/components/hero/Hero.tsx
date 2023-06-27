import React from "react";
import HeroText from "./HeroText";
import { DiJavascript1 } from "react-icons/di";

type Props = {};

const Hero = () => {
  return (
    <div className="relative w-full bg-primary">
      <div className="flex flex-col-reverse justify-between py-16 md:flex-row xl:px-40">
        <HeroText />

        {/* hero image */}
        <div className="w-full realtive">
          <img
            src="../../../public/assets/test4.png"
            alt="hero"
            className="w-[60%] mx-auto h-[60%] md:w-full md:h-full"
          />
          <DiJavascript1 className="absolute w-8 h-8 bg-black text-secondary right-20 animate-bounce md:h-12 md:w-12 md:right-60 top-36" />
        </div>
      </div>

      <img
        src="../../../public/assets/design.png"
        alt=""
        className="absolute md:left-2 md:top-28"
      />
    </div>
  );
};

export default Hero;
