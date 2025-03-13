import Link from "next/link";
import React from "react";

export default function Featured() {
  return (
    <>
      <div className="w-[80%] mx-auto mt-[50px]">
        <p className="text-md text-gray-500 text-center">MADE THE HARD WAY</p>
        <h3 className="text-2xl text-center mt-5 font-thin">
          FEATURED CATEGORIES
        </h3>
        <div className="mt-[20px] w-full lg:w-[500px] mx-auto">
          <p className="italic text-center">
            Basel & Co. is a powerful eCommerce theme for Shopify. Visit our
            shop page to see all main features for{" "}
            <Link href="#" className="primary_color underline">
              Your Store
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
