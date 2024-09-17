import React from "react";
import { FaPlay } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
const Trailer = () => {
  return (
    <>
      <div className="flex flex-col px-6 mt-24 justify-center items-center">
        <div className="flex justify-center items-center ">
          <p className="text-white text-Pinar-Medium text-3xl border-b-2 border-white pb-6">
            تریلر بازی ها
          </p>
        </div>
        <div className="w-[77.5rem] h-[51.375rem] rounded-[32px] flex flex-col bg-[#242731] mt-9">
          <div className="w-full h-[30.75rem] relative">
            <div className="w-full h-full absolute z-0">
              <img src="image/metalgear.png" alt="" />
            </div>
            <div className="absolute z-30 w-24 h-24 left-[572px] top-[192px] cursor-pointer">
              <div className="w-full h-full flex items-center justify-center bg-[#02020257] backdrop-blur-lg rounded-2xl ">
                <FaPlay className="text-primary-orange text-5xl" />
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-12 mt-10 gap-y-5">
            <p className="text-white text-4xl text-Pinar-SemiBold">
              تریلر رسمی بازی Metal Gear Solid Delta: Snake Eater
            </p>
            <p className="text-white text-justify text-Pinar-Regular text-xl">
              شایعه ساخت Metal Gear Solid Delta: Snake Eater قوت گرفت. طبق گفته
              ها و نشریات وابسته به استودیو های سازنده این عنوان خاطره انگیز،
              خبر های خوبی از ساخت نسخه ریمیک و یا همان بهبود یافته در راه است.
            </p>
          </div>
          <div className="flex flex-row justify-between w-full h-auto border-t-2 border-[#F0F3F61A] mt-8">
            <div className="flex flex-row">
              <div className="flex flex-row">
                <CiCirclePlus/>
              </div>
              <div></div>
              <div></div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trailer;
