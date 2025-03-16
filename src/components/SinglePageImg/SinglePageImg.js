"use client";
import React, { useState } from "react";

function SinglePageImg({ product }) {
  // Set the default main image
  const [mainImage, setMainImage] = useState(product.image);

  // Image list (should be an array of URLs, not JSX elements)
  const images = ["/bag.jpg", "/shoe.jpg", "/watch.jpg"];

  return (
    <div className="flex gap-1">
      {/* Side Images */}
      <div className="flex flex-col">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className="h-[200px] w-[150px] cursor-pointer border-2 border-transparent hover:border-gray-500 transition duration-300"
            alt=""
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>

      {/* Main Image */}
      <img
        src={mainImage}
        alt={product.name}
        className="w-[400px] lg:h-[608px] rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}

export default SinglePageImg;
