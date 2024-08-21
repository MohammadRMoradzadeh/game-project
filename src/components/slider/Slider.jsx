import React from "react";
import { useEffect, useState } from "react";
import { PiArrowBendDownLeftBold } from "react-icons/pi";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";

import gsap from "gsap";

export default function Slider() {
  const images = [
    {
      imageurl: "image/sl1.jpg",
      title: "battlefield V",
      des: "مانند دیگر بازی‌های بتل رویال سوار یک هواپیما خواهید شد و روی نقشه فرود خواهید آمد. وجه تفاوت این بازی نسبت به بقیه در تعداد بازیکنان آن است.",
    },
    {
      imageurl: "image/sl2.jpg",
      title: "God Of War",
      des: "مانند دیگر بازی‌های بتل رویال سوار یک هواپیما خواهید شد و روی نقشه فرود خواهید آمد. وجه تفاوت این بازی نسبت به بقیه در تعداد بازیکنان آن است.",
    },
    {
      imageurl: "image/sl3.jpg",
      title: "ghost of tsushima",
      des: "مانند دیگر بازی‌های بتل رویال سوار یک هواپیما خواهید شد و روی نقشه فرود خواهید آمد. وجه تفاوت این بازی نسبت به بقیه در تعداد بازیکنان آن است.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval); // پاک کردن تایمر هنگامUnmount
  }, []);

  useEffect(() => {
    console.log("ok");
    gsap.fromTo(
      ".image-slide",
      { xPercent: 200 },
      { xPercent: 0, duration: 3, ease: "power4.out",scale:1.05 ,onComplete:scaleImage }
    );
    gsap.fromTo(
      ".caption",
      { xPercent: -100 },
      { xPercent: 0, duration: 5, ease: "power4.out" }
    );
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  const scaleImage=()=>{
    gsap.to(".image-slide",{
      scale:1,
      duration:2.5
    })
  }
  return (
    <>
      <div className="px-6 mt-10 flex flex-col ">
        <div className="flex justify-center image-slide">
          <img
            className="w-[103.333rem] h-[47rem] rounded-3xl"
            src={images[currentIndex].imageurl}
            alt=""
          />
        </div>
        <div className="relative  rounded-3xl caption">
          <div className="absolute w-[35rem] h-[318px] rounded-2xl bg-[#00000012] backdrop-blur-lg   border-2 border-[#FFFFFF59] 2xl:left-36 3xl:left-80 -top-60">
            <div className="flex flex-col w-full h-full">
              <div className="mt-5 mr-9">
                <div className="w-24 h-8 bg-[#FF754C2B] rounded-full flex justify-center items-center">
                  <p className="text-primary-orange text-Pinar-Medium">
                    مقاله جدید
                  </p>
                </div>
              </div>
              <div className="mt-4 mr-9">
                <p className="text-white text-Pinar-Bold text-2xl ">
                  {images[currentIndex].title}
                </p>
              </div>
              <div className="mx-9 mt-4">
                <p className="text-white text-Pinar-Regular">
                  مانند دیگر بازی‌های بتل رویال سوار یک هواپیما خواهید شد و روی
                  نقشه فرود خواهید آمد. وجه تفاوت این بازی نسبت به بقیه در تعداد
                  بازیکنان آن است.
                </p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="absolute bottom-0 right-0-0 w-20 h-7 mr-1.5 mb-1.5 rounded-full bg-primary-blue">
                  <div className="flex flex-row items-center gap-x-2">
                    <img src="image\pseudo.png" alt="" />
                    <p className="text-white text-Pinar-Regular text-sm">
                      20 نظر
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary-blue rounded-tr-2xl rounded-bl-2xl ml-1.5 mb-1.5 cursor-pointer">
                  <div className="flex items-center justify-center h-full w-full">
                    <PiArrowBendDownLeftBold className="text-white text-3xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-x-3 mt-2 3xl:mr-28">
          <button className="text-white bg-primary-blue flex items-center justify-center w-7 h-7 rounded-full" onClick={prevSlide}>
            <IoIosArrowForward />
          </button>
          <button className="text-white bg-primary-blue flex items-center justify-center w-7 h-7 rounded-full" onClick={nextSlide}>
            <IoIosArrowBack />
          </button>
        </div>
      </div>
    </>
  );
}
