import React from "react";

export default function Grid() {
  return (
    <>
      <div className="w-[80%] mx-auto mt-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-2 mb-5">
          <div className="relative col-span-2 row-span-2 h-full ">
            <img
              className=" h-full object-cover "
              src="https://new-basel2.myshopify.com/cdn/shop/files/cat-bag-5_570x.jpg?v=1613716577"
              alt="hand_bag"
            />
            <div className="bg-white shadow-md p-1 px-2 w-[100px] text-center left-[240px] bottom-[14px] absolute">
              Bag
            </div>
          </div>
          <div className="relative col-span-1 row-span-1 h-full ">
            <img
              className=" h-full object-cover"
              src="https://new-basel2.myshopify.com/cdn/shop/files/boot-category-1-3-min_270x.jpg?v=1613716583"
              alt="boot_show"
            />
            <div className="bg-white shadow-md p-1 px-2 w-[100px] text-center left-[80px] bottom-[14px] absolute">
              Show
            </div>
          </div>
          <div className="col-span-1 row-span-2 relative h-full ">
            <img
              className="h-full object-cover"
              src="https://new-basel2.myshopify.com/cdn/shop/files/cat-watch-2_270x.jpg?v=1613716577"
              alt="watch"
            />
            <div className="bg-white shadow-md p-1 px-2 w-[100px] text-center left-[80px] bottom-[14px] absolute">
              Watch
            </div>
          </div>
          <div className="col-span-1 row-span-2 relative h-[277px] ">
            <img
              className="col-span-1 row-span-1 h-full object-cover"
              src="https://new-basel2.myshopify.com/cdn/shop/files/wooman-cat_270x.jpg?v=1613716577"
              alt="women"
            />
            <div className="bg-white shadow-md p-1 px-2 w-[100px] text-center left-[80px] bottom-[14px] absolute">
              Women
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
