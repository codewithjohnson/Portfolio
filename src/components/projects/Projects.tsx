import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const Projects = () => {
  const projectRef = useRef(null);
  const isInView = useInView(projectRef, {
    once: true,
  });

  return (
    <div className="py-16 bg-black/40 ">
      <div className="flex flex-col justify-between px-5 text-white xl:px-40">
        {/* title */}
        <h1 className="text-5xl font-semibold capitalize font-jost">
          My <span className="text-secondary">Projects</span>
          <p className="py-5 text-sm font-thin normal-case font-raleway">
            Responsive and Adaptive Web Applications
          </p>
        </h1>

        {/* project one */}
        <div className="">project one</div>

        {/* project two */}
        <div className="right">project two</div>
      </div>
    </div>
  );
};

export default Projects;
