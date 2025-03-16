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
        <div className="w-[80%] mx-auto flex justify-between gap-5 p-2 py-5">
          {/* Hamburger Menu Icon for Mobile */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMobileMenu}>
              <FaBars className="text-2xl" />
            </button>
          </div>

          {/* Navigation Links (Hidden on Mobile) */}
          <ul className="hidden lg:flex items-center">
            {["Home", "Shop", "Blog", "Pages", "Features"].map((item, index) => (
              <li key={index} className="flex items-center mr-5">
                <h3 className="font-thin mr-2">{item}</h3>
                <FaChevronDown />
              </li>
            ))}
          </ul>

          {/* Logo */}
          <Link href="/">
            <img src="/logo.svg" alt="logo" className="w-[100px] h-[50px]" />
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
            <HiMagnifyingGlass className="text-[24px] mr-3 hidden lg:block" />
            <CiHeart className="text-[24px] mr-3 hidden lg:block" />
            <IoMdCart className="text-[24px] mr-3" />
          </div>
        </div>

        {/* Mobile Sidebar Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          {/* Close Button */}
          <div className="p-4 flex justify-end">
            <button onClick={toggleMobileMenu}>
              <FaTimes className="text-2xl" />
            </button>
          </div>

          {/* Mobile Links */}
          <ul className="p-4 text-left">
            {["Home", "Shop", "Blog", "Pages", "Features"].map((item, index) => (
              <li key={index} className="mb-3">
                <h3 className="font-thin">{item}</h3>
              </li>
            ))}
          </ul>

          {/* Mobile Login/Register */}
          <div className="p-4">
            <Link className="italic" href="/login">
              Login
            </Link>{" "}
            /{" "}
            <Link className="italic" href="/register">
              Register
            </Link>
          </div>
        </div>

        {/* Overlay (Optional: Click outside to close) */}
        {isMobileMenuOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
            onClick={toggleMobileMenu}
          ></div>
        )}
      </div>
    </>
  );
}
