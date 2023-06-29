import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-full py-3 font-mono text-sm text-gray-300 gap-y-4 md:flex-row footer md:px-40 ">
      <p className="left">&copy; {new Date().getFullYear()} Muyiwa Johnson.</p>
      <p className=" right">
        developed by <span>Muyiwa Johnson</span>
      </p>
    </div>
  );
};

export default Footer;
