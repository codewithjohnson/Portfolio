import React from "react";

const OnLoad = (isLoading: boolean) => {
  return (
    <div
      className={`text-white min-h-screen text-5xl  flex flex-col justify-center items-center mx-auto font-bold font-spartan`}
    >
      <p
        className={`text-gray-600
    ${isLoading ? "animate-pulse" : ""}
    `}
      >
        MUYIWA
      </p>
      <p
        className={`text-secondary/50
    ${isLoading ? "animate-pulse" : ""}
    `}
      >
        JOHNSON
      </p>
    </div>
  );
};

export default OnLoad;
