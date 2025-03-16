import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavbarComponents/Navbar";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import SinglePageImg from "@/components/SinglePageImg/SinglePageImg";
import TabNavigation from "@/components/SinglePageTabs/SinglePageTabs";
import React from "react";
import {
  FaFacebook,
  FaHeart,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { IoMdMail } from "react-icons/io";

async function Page({ params }) {
  const { id } = params;

  const response = await fetch(`http://localhost:3000/products/${id}`);
  const product = await response.json();
  console.log("product", product);

  return (
    <>
      <Navbar />
      <div className="min-h-screen py-10">
        <div className="max-w-6xl mx-auto bg-white rounded-lg  overflow-hidden flex flex-col md:flex-row p-8">
          {/* Product Image Section */}
          <div className="md:w-1/2 flex justify-center items-start overflow-hidden">
            <SinglePageImg product={product} />
          </div>

          {/* Product Information Section */}
          <div className="md:w-1/2 p-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-xl">★★★★★</div>
              <a href="#" className="text-blue-500 hover:underline ml-2">
                2 reviews
              </a>
            </div>

            {/* Price */}
            <div className="text-3xl font-semibold text-gray-800 mb-4">
              BDT {product.price_bdt}
            </div>

            {/* Sales Info */}
            <div className="text-green-600 font-medium mb-4">
              7 sold in last 6 hours
            </div>

            {/* Stock Alert */}
            <div className="text-red-600 font-bold mb-4 flex items-center">
              <FaBoltLightning className="mr-2 animate-fadePulse" />
              <p> HURRY! ONLY 8 LEFT IN STOCK.</p>
            </div>

            {/* Countdown Timer */}
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <div className="flex space-x-4 text-gray-700 font-medium">
                <span>0 DAYS</span>
                <span>07 HOURS</span>
                <span>16 MINUTES</span>
                <span>57 SECONDS</span>
              </div>
            </div>

            {/* Color Option */}
            <div className="text-gray-700 mb-6">
              <span className="font-medium">Color:</span> Black
            </div>

            {/* Description */}
            <div className="text-gray-600 text-sm mb-8">
              <p>{product.description}</p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col ">
              <button className="primary_bg_color text-white px-8 py-3   transition-colors duration-300 w-full">
                Add to Cart
              </button>
              <button className="bg-black text-white px-8 py-3   transition-colors duration-300 w-full mt-3">
                Buy Now
              </button>
              <hr className="mt-5 mb-5 w-full" />
              <div className="flex gap-2 items-center">
                <FaHeart className="text-xl text-red-500" />
                <p className="text-md font-thin">Add to wishlist</p>
              </div>
              <div className="flex gap-2 mt-3 items-center">
                <HiOutlineArrowPathRoundedSquare className="text-xl" />
                <p className="text-md font-thin">Compare</p>
              </div>
              <div className="flex gap-2 mt-3 items-center">
                <p className="text-md font-semibold">SKU :</p>
                <p className="text-md font-thin">N/A</p>
              </div>
              <div className="flex gap-2 mt-3 items-center">
                <p className="text-md font-semibold">Category :</p>
                <p className="text-md font-thin">{product?.category}</p>
              </div>
              <div className="flex gap-2 mt-3 items-center">
                <p className="text-md font-semibold">Tags :</p>
                <p className="text-md font-thin">New,White</p>
              </div>
              <div className="flex gap-2 mt-3 items-center">
                <p className="text-md font-semibold">Share :</p>
                <div className="flex gap-2 items-center">
                  <FaFacebook className="text-xl text-[#333333]" />
                  <FaTwitter className="text-xl text-[#333333]" />
                  <IoMdMail className="text-xl text-[#333333]" />
                  <FaPinterest className="text-xl text-[#333333]" />
                  <FaLinkedinIn className="text-xl text-[#333333]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <TabNavigation />
        <RelatedProducts />
      </div>
      <Footer />
    </>
  );
}

export default Page;
