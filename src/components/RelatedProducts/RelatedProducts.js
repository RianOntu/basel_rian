import React from "react";
import SliderSection from "../SliderSection/SliderSection";

export default async function RelatedProducts() {
  const response = await fetch(`http://localhost:3000/products`);
  const products = await response.json();
  return (
    <>
      <div className="w-[80%] mx-auto mt-[50px]">
        <h3 className="text-2xl text-center mt-5 font-thin">
          RELATED PRODUCTS
        </h3>

        <SliderSection clothes={products} />
      </div>
    </>
  );
}
