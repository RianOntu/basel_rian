"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaHeart } from "react-icons/fa";
import { FaPaste } from "react-icons/fa6";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/shop/${product.id}`}>
      <div
        className="bg-[#FFFFFF] relative overflow-hidden h-[388px] w-[300px] md:w-[230px] xl:w-[270px] rounded-lg mx-auto hover:shadow-lg transition duration-500 product_div margin_bottom"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Wrapper */}
        <div className="relative h-60 w-full overflow-hidden">
          {/* Default Image */}
          <img
            src={product?.image}
            alt={product?.name}
            className={`absolute top-0 left-0 w-full h-full object-cover rounded-md transition-opacity duration-700 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Alternative Image (Appears on Hover) */}
          <img
            src={product?.alternative_img}
            alt={product?.name}
            className={`absolute top-0 left-0 w-full h-full object-cover rounded-md transition-opacity duration-700 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Buttons Coming from Top */}
          <div
            className={`flex flex-col absolute top-[12px] right-1 transition-opacity duration-500 ${
              isHovered ? "opacity-100 delay-100" : "opacity-0"
            }`}
          >
            <button className="text-white text-sm p-2">
              <FaHeart className="text-white" />
            </button>
            <button className="text-white text-sm p-2 mt-2">
              <FaEye className="text-white" />
            </button>
            <button className="text-white text-sm p-2 mt-2">
              <FaPaste className="text-white" />
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="absolute bottom-0 w-full bg-white transition-all duration-500 ease-in-out p-3">
          <h2 className="text-lg font-semibold text-center">{product?.name}</h2>

          {/* Price moves up smoothly */}
          <p
            className={`text-gray-600 mt-2 text-sm text-center transition-all duration-500 ${
              isHovered ? "translate-y-[-10px]" : "translate-y-0"
            }`}
          >
            BDT {product?.price_bdt}
          </p>

          {/* Animated Add to Cart Button */}
          <div
            className={`flex justify-center transform transition-all duration-500 ${
              isHovered ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <button className="text-white text-sm bg-[#976797] transition-all duration-500 p-2 px-3">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
