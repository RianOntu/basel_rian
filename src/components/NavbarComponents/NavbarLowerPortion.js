import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { IoMdCart } from "react-icons/io";

export default function NavbarLowerPortion() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="bg-white sticky top-0 z-50">
        <div className="w-[80%] mx-auto flex justify-between p-2 py-5">
          {/* Hamburger Menu Icon for Mobile */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>

          {/* Navigation Links */}
          <ul className={`lg:flex items-center ${isMobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
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

          {/* Logo */}
          <Link href="/">
            <img src="/logo.svg" alt="logo" className="w-[200px] h-[50px]" />
          </Link>

          {/* Login/Register Links */}
          <div className="hidden lg:flex items-center mr-4">
            <Link className="italic" href="/login">
              Login
            </Link>{" "}
            /{" "}
            <Link className="italic" href="/register">
              Register
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center">
            <HiMagnifyingGlass className="text-[24px] mr-3" />
            <CiHeart className="text-[24px] mr-3" />
            <IoMdCart className="text-[24px] mr-3" />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white p-4">
            <ul>
              <li className="mb-3">
                <h3 className="font-thin">Home</h3>
              </li>
              <li className="mb-3">
                <h3 className="font-thin">Shop</h3>
              </li>
              <li className="mb-3">
                <h3 className="font-thin">Blog</h3>
              </li>
              <li className="mb-3">
                <h3 className="font-thin">Pages</h3>
              </li>
              <li className="mb-3">
                <h3 className="font-thin">Features</h3>
              </li>
            </ul>
            <div className="mt-4">
              <Link className="italic" href="/login">
                Login
              </Link>{" "}
              /{" "}
              <Link className="italic" href="/register">
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}