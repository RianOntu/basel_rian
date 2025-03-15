import React from "react";
import SliderSection from "../SliderSection/SliderSection";

export default async function AllProducts() {
  const response = await fetch(`http://localhost:3000/products`);
  const products = await response.json();
  return (
    <>
      <div className="w-[80%] mx-auto mt-[50px]">
        <p className="text-md text-gray-500 text-center">MADE THE HARD WAY</p>
        <h3 className="text-2xl text-center mt-5 font-thin">ALL PRODUCTS</h3>

        <SliderSection  clothes={products} />
      </div>
    </>
  );
}
