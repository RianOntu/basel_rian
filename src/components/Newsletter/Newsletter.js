import React from "react";
import { FaEnvelope } from "react-icons/fa";

export default function Newsletter() {
  return (
    <>
      <div className="image-container h-[500px] w-full relative">
        <img
          src="https://images.unsplash.com/photo-1664575601711-67110e027b9b?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Newsletter"
          className="image image_height object-cover w-full h-full"
        />
        <div className="overlay absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Black overlay with 50% opacity */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
          <h3 className="italic text-md text-white">Connect to Basel & Co.</h3>
          <h1 className="text-7xl mt-[30px] text-white">Join Our Newsletter</h1>
          <p className="w-full lg:w-[400px] text-white mt-5">
            Hey you, sign up it only takes a second to be the first to find out
            about our latest news and promotionsâ¦
          </p>
          <div className="relative mt-5 ">
            <div className="flex items-center gap-1 ">
              <div className="">
                <input
                  className="border-b-[2px] border-white bg-transparent text-white placeholder-white pl-5 focus:outline-none w-full news_input"
                  type="text"
                  placeholder="Your email address"
                />
                <FaEnvelope className="text-white absolute left-0 top-[14px]" />
              </div>
                 <button className="text-black font-thin p-2 px-5 bg-white sign_up_btn">SIGN UP</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
