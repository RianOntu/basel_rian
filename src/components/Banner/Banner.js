"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation buttons
import "swiper/css/pagination"; // Pagination
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="w-full mx-auto mt-[3px]">
      <Swiper
        className="w-full h-full"
        style={{ width: "100%" }}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation // Enable Next/Prev buttons
        autoplay={{ delay: 3000 }} // Auto-slide every 3 seconds
        loop={true} // Infinite scrolling
      >
        <SwiperSlide>
          <img
            className="w-full h-auto lg:h-[500px] object-cover slider_img "
            src="/first_slide.jpg"
            alt="Slide 1"
          />

          {/* Overlay */}
          <div className="absolute block  inset-0 bg-black bg-opacity-50"></div>
          {/* Centered Text */}
          <div className="w-[80%] mx-auto absolute inset-0 flex items-center justify-start">
            <div className="mx-auto">
              <h1 className="text-white  text-md md:text-5xl font-bold text-center">
                ON TREND JERSEY
              </h1>
              <h1 className="text-white  text-sm md:text-3xl font-semibold text-center mt-5 w-[300px] md:w-[500px] lg:w-[600px]">
                Everything 40% Discount On Handbags, Clothes, and All Girl Items
              </h1>
              <div className="mt-6">
                <button className="text-white text-sm primary_bg_color px-3 p-2">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-auto lg:h-[500px] object-cover slider_img "
            src="/second_slide.jpg"
            alt="Slide 1"
          />

          {/* Overlay */}
          <div className="absolute block  inset-0 bg-black bg-opacity-50"></div>
          {/* Centered Text */}
          <div className="w-[80%] mx-auto absolute inset-0 flex items-center justify-start">
            <div className="mx-auto">
              <h1 className="text-white  text-md md:text-5xl font-bold text-center">
                ON TREND JERSEY
              </h1>
              <h1 className="text-white  text-sm md:text-3xl font-semibold text-center mt-5 w-[300px] md:w-[500px] lg:w-[600px]">
                Everything 40% Discount On Handbags, Clothes, and All Girl Items
              </h1>
              <div className="mt-6">
                <button className="text-white text-sm primary_bg_color px-3 p-2">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
