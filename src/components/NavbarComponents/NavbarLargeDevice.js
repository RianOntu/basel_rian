"use client";
import React from "react";
import { FaUser } from "react-icons/fa";
import NavbarLowerPortion from "./NavbarLowerPortion";

export default function NavbarLargeDevice() {
  return (
    <>
      <div className="primary_bg_color">
        <div className="w-[80%] mx-auto justify-center hidden lg:flex lg:justify-between items-center p-2">
          <p className="text-sm text-white">
            OUR PHONE NUMBER :{" "}
            <span className="underline">+77 (756) 334 876</span>
          </p>
          <ul className="text-white flex items-center">
            <li className="flex mr-4 items-center border-r-[0.5px] w-[126px]">
              <FaUser className="mr-1" />
              <p className="text-sm text-white">MY ACCOUNT</p>
            </li>
            <li className="mr-4 flex border-r-[0.5px] w-[53px]">
              <p className="text-sm text-white">CART</p>
            </li>
            <li className="mr-4 flex border-r-[0.5px] w-[126px]">
              <p className="text-sm text-white">OUR LOCATION</p>
            </li>
            <li className="mr-4 flex">
              <p className="text-sm text-white">CONTACT US</p>
            </li>
          </ul>
        </div>
        <NavbarLowerPortion />
      </div>
    </>
  );
}
