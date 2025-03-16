import React from "react";
import { CiHeart } from "react-icons/ci";

export default function AboutTheShop() {
  return (
    <>
      <div className="bg_image p-5">
        <div className="w-[80%] mx-auto mt-[50px] p-3 h-auto bg-white border-gray-500 border-2 mb-[50px]">
          <div className="flex flex-col xl:flex-row justify-between items-center h-auto">
            <div className="flex flex-col  justify-between items-center p-4 pt-[70px]">
              <img
                src="/logo.svg"
                className="w-[200px] h-[50px] flex justify-center"
                alt=""
              />
              <h3 className="text-sm text-gray-500 text-center mt-3">
                MINIMALISTIC AJAX E-COMMERCE THEME
              </h3>
              <p className="text-center text-xs text-gray-500 mt-3 w-full lg:w-[500px]">
                Adipiscing dignissim euismod ad venenatis volutpat sociis
                feugiat purus ridiculus rhoncus nullam sodales euismod ad
                venenatis volutpa ridiculus.
              </p>
              <button className="text-white bg-black p-2 px-3 mt-5 ">
                PURCHASE BASEL
              </button>
            </div>
            <div className="flex flex-col  justify-between items-center p-4 pt-[70px]">
              <h4 className="italic text-lg">About the shop</h4>
              <CiHeart className="mt-5 text-3xl" />
              <p className="text-center text-xs text-gray-500 mt-3 w-full lg:w-[400px]">
                <b> Basel & Company –</b>is a famous worldwide fashion store
                dipiscing dignissim euismod ad venenatis volutpat sociis feugiat
                purus ridiculus.
              </p>
              <button className="text-black bg-white hover:text-white hover:bg-black border-black border-2 p-2 px-3 mt-5 ">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
