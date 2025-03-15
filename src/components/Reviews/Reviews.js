"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Reviews() {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    dots: true,
  };
  return (
    <>
      <div className="w-[80%] mx-auto lg:w-[400px]">
        <h1 className="text-center text-xl mt-8">WHAT THEY SAY ABOUT US</h1>
        <Slider {...settings}>
          <div className="flex flex-col items-center justify-center text-center mx-auto">
            <img
              src="https://new-basel2.myshopify.com/cdn/shop/files/testimonial1-100x100_100x100.progressive.jpg"
              className="w-[80px] h-[80px] rounded-full mx-auto mt-5"
              alt=""
            />
            <p className="text-sm w-full lg:w-[400px] mt-3 text-center">
              Adipiscing dignissim euismod ad venenatis volutpat sociis feugiat
              purus ridiculus rhoncus nullam sodales euismod ad venenatis
              volutpa ridiculus.
            </p>
            <h4 className="text-sm mt-5 mb-5">
              <b>John Doe-</b>The happy customer
            </h4>
          </div>
          <div className="flex flex-col justify-center text-center">
            <img
              src="https://new-basel2.myshopify.com/cdn/shop/files/testimonial2-1-100x100_100x100.progressive.jpg"
              className="flex justify-center w-[80px] h-[80px] rounded-full mx-auto mt-5"
              alt=""
            />
            <div className="w-full lg:w-[400px] text-center">
              <p className="text-sm  mt-3 text-center">
                Adipiscing dignissim euismod ad venenatis volutpat sociis
                feugiat purus ridiculus rhoncus nullam sodales euismod ad
                venenatis volutpa ridiculus.
              </p>
            </div>

            <h4 className="text-sm text-center mt-5 mb-5">
              <b>John Doe-</b>The happy customer
            </h4>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Reviews;
