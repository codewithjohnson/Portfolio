import React from "react";
import HeroText from "./HeroText";
import { DiJavascript1 } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";

type Props = {};

const Hero = () => {
  return (
    <div className="relative w-full bg-primary">
      <div className="flex flex-col-reverse justify-between py-16 md:flex-row xl:px-40">
        <HeroText />

        {/* hero image */}
        <div className="w-full realtive">
          <img
            src="../../../public/assets/hero.png"
            alt="hero"
            className="w-[60%] mx-auto h-[60%] md:w-full md:h-full hover:brightness-100 hover:animate-pulse"
          />
          <DiJavascript1
            title="JavaScript"
            className="absolute bg-black rounded-lg h-9 w-9 text-secondary right-20 md:h-10 md:w-10 hover:animate-spin md:right-60 top-36 animated-bounce"
          />
          <SiTypescript
            className="absolute rounded-lg h-9 w-9 text-secondary right-[400px] md:h-10 md:w-10 md:right-[650px] top-36 animated-bounce"
            title="Typescript"
          />
          <GrReactjs
            className="absolute rounded-lg h-9 w-9 text-green-500 right-[400px] hover:animate-spin md:h-10 md:w-10 md:right-[650px] top-72 md:top-80 animated-bounce"
            title="React"
          />
        </div>
      </div>

      <img
        src="../../../public/assets/design.png"
        alt=""
        className="hidden md:block md:absolute md:left-2 md:top-28"
      />
    </div>
  );
};

export default Hero;


