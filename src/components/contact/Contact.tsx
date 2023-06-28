import React from "react";
import { SlLocationPin, SlCallIn } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";

type Props = {};

const Contact = () => {
  return (
    <div id="contact" className="w-full bg-[#2B2D33]">
      <div className="w-full px-10 py-16 xl:px-40">
        {/* heading */}
        <h1 className="pb-8 mx-auto text-3xl text-center text-white capitalize border-b-4 md:text-5xl font-jost border-b-yellow-500/50 w-fit">
          contact details 😊
        </h1>

        {/* contact details */}
        <div className="flex flex-col justify-between mt-10 md:mt-20 md:flex-row gap-y-10">
          {/* left */}
          <div className="w-full ">
            <h1 className="pb-6 text-2xl capitalize border-b-2 text-secondary font-jost border-b-gray-400 w-fit">
              Find Me
            </h1>

            {/* introduction */}
            <p className="text-base leading-[26px] text-gray-200 md:pr-32 py-8 font-openSans pr-12 ">
              Connect with me for <span className="text-green-500">jobs</span>,
              inquiries, <span className="text-yellow-500">collaborations</span>
              , or any assistance. I'm just a message away.
            </p>

            {/* address */}
            <div className="flex flex-row items-center gap-5 py-3">
              <SlLocationPin className="inline-block w-5 h-5 text-2xl text-gray-500" />
              <span className="text-base text-gray-200">
                University road, ilorin, Nigeria
              </span>
            </div>

            {/* phone */}
            <div className="flex flex-row items-center gap-5 py-3">
              <SlCallIn className="inline-block w-5 h-5 text-2xl text-gray-500" />
              <a href="tel:+2349052000116" className="text-base text-gray-200">
                +234 90 520 001 16
              </a>
            </div>

            {/* email */}

            <div className="flex flex-row items-center gap-5 py-3">
              <MdOutlineEmail className="inline-block w-6 h-6 text-2xl text-gray-500" />
              <a
                href="mailto:oluwatuyimuyiwajohnson@gmail.com"
                className="text-base text-blue-500"
              >
                oluwatuyimuyiwajohnson
              </a>
            </div>
          </div>

          {/* right */}
          <div className="w-full h-full">
            <h1 className="pb-6 text-2xl capitalize text-secondary font-jost w-fit">
              please fill out the form below
            </h1>

            {/* form */}
            <form className="flex flex-col w-full gap-5">
              {/* name and email */}
              <div className="flex flex-row items-center justify-start w-full gap-8 pt-5">
                {/* name */}
                <div className="flex flex-col w-full gap-2">
                  <label htmlFor="name" className="text-base text-gray-200">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full px-3 py-5 rounded-xl text-base text-gray-200 bg-[#2B2D33] border-2 border-gray-600  focus:outline-none focus:border-secondary/50 hover:border-blue-500/40"
                  />
                </div>

                {/* email */}
                <div className="flex flex-col w-full gap-2">
                  <label htmlFor="email" className="text-base text-gray-200">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your Email"
                    className="w-full px-3 py-5 rounded-xl text-base text-gray-200 bg-[#2B2D33] border-2 border-gray-600  focus:outline-none focus:border-secondary/50 hover:border-blue-500/40"
                  />
                </div>
              </div>

              {/* phone and subject */}
              <div className="flex flex-row items-center justify-start w-full gap-8 pt-5">
                {/* phone */}
                <div className="flex flex-col w-full gap-2">
                  <label htmlFor="phone" className="text-base text-gray-200">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone"
                    className="w-full px-3 py-5 rounded-xl text-base text-gray-200 bg-[#2B2D33] border-2 border-gray-600  focus:outline-none focus:border-secondary/50 hover:border-blue-500/40"
                  />
                </div>

                {/* subject */}
                <div className="flex flex-col w-full gap-2">
                  <label htmlFor="subject" className="text-base text-gray-200">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Enter your Subject"
                    className="w-full px-3 py-5 rounded-xl text-base text-gray-200 bg-[#2B2D33] border-2 border-gray-600  focus:outline-none focus:border-secondary/50 hover:border-blue-500/40"
                  />
                </div>
              </div>

              {/* message */}
              <div className="flex flex-col w-full gap-2 pt-5">
                <label htmlFor="message" className="text-base text-gray-200">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter your message"
                  className="w-full px-3 py-5 rounded-xl text-base text-gray-200 bg-[#2B2D33] border-2 border-gray-600  focus:outline-none focus:border-secondary/50 hover:border-blue-500/40"
                ></textarea>
              </div>

              <button className="px-10 w-fit py-4 mt-3 text-sm font-semibold text-white  rounded-full bg-gradient-to-r from-secondary to-secondary/80 hover:bg-gradient-to-r hover:from-[#1FBE59] hover:to-[#F0C45C] transition-all  duration-300 ease-in-out capitalize">
                submit now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
