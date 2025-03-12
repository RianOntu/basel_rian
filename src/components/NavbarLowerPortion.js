import Link from "next/link";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { IoMdCart } from "react-icons/io";

export default function NavbarLowerPortion() {
  return (
    <>
      <div className="bg-white">
        <div className="w-[80%] mx-auto flex justify-between p-2 py-5 ">
          <ul className="hidden lg:flex items-center">
            <li className="flex items-center mr-5">
              <h3 className="font-thin mr-2">Home</h3>
              <FaChevronDown />
            </li>
            <li className="flex items-center mr-5">
              <h3 className="font-thin mr-2">Shop</h3>
              <FaChevronDown />
            </li>
            <li className="flex items-center mr-5">
              <h3 className="font-thin mr-2">Blog</h3>
              <FaChevronDown />
            </li>
            <li className="flex items-center mr-5">
              <h3 className="font-thin mr-2">Pages</h3>
              <FaChevronDown />
            </li>
            <li className="flex items-center mr-3">
              <h3 className="font-thin mr-2">Features</h3>
              <FaChevronDown />
            </li>
          </ul>
          <img
            src="https://new-basel2.myshopify.com/cdn/shop/files/logo-basel.svg?v=11944076954395008056"
            alt="logo"
            className="w-[200px] h-[50px]"
          />
          <div className="flex items-center mr-4">
            <Link className="italic" href="/login">
              Login
            </Link>{" "}
            /{" "}
            <Link className="italic" href="/register">
              Register
            </Link>
          </div>
          <div className="flex items-center">
            <HiMagnifyingGlass className="text-[24px] mr-3" />
            <CiHeart className="text-[24px] mr-3" />
            <IoMdCart className="text-[24px] mr-3" />
          </div>
        </div>
      </div>
    </>
  );
}
