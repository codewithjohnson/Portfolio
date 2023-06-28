import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={`w-full h-screen bg-white`}>
      <div className="flex flex-col items-center justify-center px-4 py-24 lg:px-24 lg:py-24 md:py-20 md:px-44 lg:flex-row md:gap-26 gap-14">
        <div className="relative w-full pb-12 xl:pt-24 xl:w-1/2 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div className="">
                <div className="text-[50px] font-dark font-bold">
                  <h1 className="text-[50px] font-dark font-bold">404</h1>
                </div>
                <p className="my-2 text-gray-800">
                  Sorry about that! Please visit the homepage to get where you
                  need to go.
                </p>
                <button className="px-8 py-4 my-2 text-center text-white bg-indigo-500 border rounded lg:w-auto sm:text-center md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                   <Link to="/">Back To Homepage</Link>
                </button>
              </div>
            </div>
            <div>
              <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
