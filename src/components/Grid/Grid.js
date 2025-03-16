import React from "react";

export default function Grid() {
  return (
    <div className="w-[80%] mx-auto mt-3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-2 mb-5 max-w-[1056px] mx-auto">
        {/* Bag */}
        <div className="relative col-span-2 row-span-2 md:col-span-2 md:row-span-2 h-full overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-125"
            src="/bag.jpg"
            alt="hand_bag"
          />
          <div className="bg-white shadow-md p-1 px-2 w-[100px] text-center left-[32%] md:left-[40%] lg:left-[37%] bottom-[14px] absolute xl:left-[41%]">
            Bag
          </div>
        </div>

        {/* Shoe */}
        <div className="relative col-span-2 row-span-2 md:col-span-1 md:row-span-1 h-full overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-125"
            src="/shoe.jpg"
            alt="boot_shoe"
          />
          <div className="bg-white shadow-md p-1 px-2 w-[100px] text-center left-[32%] bottom-[14px] absolute lg:left-[37%] xl:left-[28%]">
            Shoe
          </div>
        </div>

        {/* Watch */}
        <div className="col-span-2 row-span-2 md:col-span-1 md:row-span-2 relative h-full overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-125"
            src="/watch.jpg"
            alt="watch"
          />
          <div className="bg-white shadow-md p-1 px-2 w-[100px] text-center left-[32%] bottom-[14px] absolute lg:left-[37%] xl:left-[28%]">
            Watch
          </div>
        </div>

        {/* Women */}
        <div className="col-span-2 row-span-2 md:col-span-1 md:row-span-2 relative h-[277px] overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-125"
            src="/women.jpg"
            alt="women"
          />
          <div className="bg-white shadow-md p-1 px-2 w-[100px] text-center left-[32%] bottom-[14px] absolute lg:left-[37%] xl:left-[28%]">
            Women
          </div>
        </div>
      </div>
    </div>
  );
}
