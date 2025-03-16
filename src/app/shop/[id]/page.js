import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavbarComponents/Navbar";
import SinglePageImg from "@/components/SinglePageImg/SinglePageImg";
import React from "react";

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
          <div className="md:w-1/2 flex justify-center items-center overflow-hidden">
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
            <div className="text-red-600 font-bold mb-4">
              HURRY! ONLY 8 LEFT IN STOCK.
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
