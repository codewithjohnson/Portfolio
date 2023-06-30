import React from "react";
import { ProjectType } from "./types";

const Project = (props: ProjectType) => {
  return (
    <div className="w-full py-20 hover:bg-black/10 bg:black/40">
      <div
        className={`flex flex-col text-white gap-y-14 gap-x-20 ${
          props.direction === "left"
            ? "flex md:flex-row justify-between"
            : "md:flex-row-reverse"
        }`}
      >
        {/* info */}
        <div className="info md:w-[30%]">
          {/* project number */}
          <h1
            className={`text-5xl  font-semibold capitalize font-jost
          ${props.direction === "left" ? "md:text-right" : "md:text-left"}
          `}
          >
            {props.projectNumber}{" "}
          </h1>

          {/* project title */}
          <p
            className={`text-secondary py-5 text-left text-4xl font-thin normal-case font-raleway
            ${props.direction === "left" ? "md:text-right" : "md:text-left"}
            `}
          >
            {props.title}
          </p>

          {/* project description */}
          <p
            className={`text-sm sm:text-lg leading-7 font-light md:leading-[40px] text-gray-300 font-jost
          ${props.direction === "left" ? "md:text-right" : "md:text-left"}
          `}
          >
            {props.description}
          </p>
        </div>

        {/* image */}
        <div className="image w-full md:w-[70%]">
          <img
            src={props.image}
            alt={props.title}
            className={`w-full h-full scale-100 hover:brightness-100 duration-500 ease-in-out hover:scale-105`}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
