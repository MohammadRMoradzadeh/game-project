
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPlay } from "react-icons/fa";
function CartCriticism({ image, title }) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".criticism-parent",
      },
    });

    tl.fromTo(
      ".criticism-cart",
      {
        yPercent: -50,
        opacity: 0,
      },
      { yPercent: 0, opacity: 1, duration: 1 ,stagger:0.5}
    );
  }, []);

  return (
    <div className="w-[24.063rem] h-[573px] group criticism-cart">
      <div className="relative w-full h-full bg-[ur]">
        <div className="absolute z-0 w-full h-full">
          <img className="w-full h-full scale-100 group-hover:scale-95 group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out transition-all duration-500 ease-in-out" src={image} alt="" />
        </div>
        <div className="absolute z-10 w-full h-full none group-hover:bg-[#00000012] group-hover:backdrop-blur-lg group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out transition-all duration-500 ease-in-out  rounded-3xl"></div>
        <div className="absolute z-20 w-full bottom-8 group-hover:bottom-48 group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out transition-all duration-500 ease-in-out  rounded-3xl">
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col justify-center items-center gap-y-3">
              <p className="text-white text-Pinar-Medium text-2xl">
                ویدیو نقد و بررسی بازی
              </p>
              <p className="text-white text-Pinar-Medium">{title}</p>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-14 h-14 bg-[#c4c4c412] backdrop-blur-lg flex items-center justify-center rounded-full group-hover:bg-primary-orange group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out transition-all duration-500 ease-in-out  cursor-pointer">
                <FaPlay className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCriticism;
