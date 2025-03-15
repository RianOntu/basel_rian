"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OurPartners() {
  var settings = {
    infinite: true, // Change to true for continuous scrolling
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0, // Fixing initialSlide issue
    autoplay: true, // Optional: Auto-slide feature
    autoplaySpeed: 1000, // Adjust speed for autoplay
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600, // For mobile devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For smaller mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-6 bg-[#F4F4F4] mt-[30px]">
      <div className="w-[80%] mx-auto">
        <Slider {...settings}>
          <div className="flex justify-center">
            <img
              src="https://new-basel2.myshopify.com/cdn/shop/files/logo-2_250x.png"
              className="w-[150px] h-auto"
              alt="Partner Logo"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://new-basel2.myshopify.com/cdn/shop/files/logo-6_250x.png"
              className="w-[150px] h-auto"
              alt="Partner Logo"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://new-basel2.myshopify.com/cdn/shop/files/logo-3_250x.png"
              className="w-[150px] h-auto"
              alt="Partner Logo"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://new-basel2.myshopify.com/cdn/shop/files/logo-4_250x.png"
              className="w-[150px] h-auto"
              alt="Partner Logo"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://new-basel2.myshopify.com/cdn/shop/files/logo-5_250x.png"
              className="w-[150px] h-auto"
              alt="Partner Logo"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://new-basel2.myshopify.com/cdn/shop/files/logo-1_250x.png"
              className="w-[150px] h-auto"
              alt="Partner Logo"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default OurPartners;
