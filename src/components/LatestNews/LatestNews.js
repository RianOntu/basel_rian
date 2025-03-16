import Link from "next/link";
import React from "react";

export default function LatestNews() {
  return (
    <>
      <div className="w-[80%] mx-auto mt-[50px] mb-[30px]">
        <h1 className="text-xl font-semibold text-center">LATEST NEWS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-5 max-w-[1056px] mx-auto">
          {["news1", "news2", "news3", "news4", "news5", "news6"].map(
            (img, index) => (
              <div
                key={index}
                className="flex flex-col overflow-hidden relative group"
              >
                <div className="relative overflow-hidden">
                  <img
                    className="w-full lg:w-[396px] h-[230px] group-hover:scale-125 transition-all duration-300"
                    src={`${img}.jpg`}
                    alt=""
                  />
                  <div className="flex flex-col bg-white p-2 px-3 top-2 left-2 absolute">
                    <p className="text-sm">18</p>
                    <p className="text-sm">Sep</p>
                  </div>
                  <div className="absolute bottom-0 left-[40%] text-white text-sm bg-cyan-300 p-1 px-3">
                    Hobbie
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
                </div>
                <div className="text-center">
                  <h1 className="text-lg mt-2">Dapibus a at gravida</h1>
                  <p className="text-sm italic mt-1">
                    By{" "}
                    <Link href="#" className="underline primary_color">
                      Shopify API
                    </Link>{" "}
                    / Leave a comment
                  </p>
                  <p className="mt-3 text-justify text-sm">
                    Ut cubilia metus sagittis rhoncus non suspendisse vestibulum
                    a taciti posuere urna scelerisque neque scelerisque
                    condimentum sed hac sem
                  </p>
                </div>
              </div>
            )
          )}
        </div>
        <div className="flex justify-center mt-5">
          <button className="bg-white text-black hover:text-white hover:bg-black border-[1px] border-black py-2 px-4">
            LOAD MORE POSTS
          </button>
        </div>
      </div>
    </>
  );
}
