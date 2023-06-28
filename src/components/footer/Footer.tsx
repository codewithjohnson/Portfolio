import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-between w-full px-10 py-4 font-mono text-gray-300 md:flex-row footer xl:px-40 gap-y-5">
      <p className="left">&copy; {new Date().getFullYear()} Muyiwa Johnson.</p>
      <p className="right">
        Designed and developed by <span>Muyiwa Johnson</span>
      </p>
    </div>
  );
};

export default Footer;
