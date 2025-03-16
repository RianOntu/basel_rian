"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import ProductCard from "../ProductCard/ProductCard";

export default function SliderSection({ clothes = [] }) {
  console.log("clothes", clothes);

  if (!Array.isArray(clothes)) {
    return <p className="text-center text-white">Error loading products</p>;
  }

  return (
    <div className="slider-container">
      {clothes.length > 0 ? (
        <Swiper
          modules={[Grid, Pagination, Navigation]}
          slidesPerView={3} // Adjust the number of slides visible at once
          grid={{ rows: 2, fill: "row" }} // Grid layout with 2 rows
          spaceBetween={20} // Space between slides
          navigation={true}
          breakpoints={{
            1024: { slidesPerView: 3, grid: { rows: 2 } },
            768: { slidesPerView: 2, grid: { rows: 2 } },
            375: { slidesPerView: 1, grid: { rows: 2 } },
          }}
          className="mySwiper"
        >
          {clothes.map((clothe) => (
            <SwiperSlide key={clothe.id}>
              <div className="p-2">
                <ProductCard product={clothe} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-center text-white">Loading...</p>
      )}
    </div>
  );
}
