import React, { useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ArticleCart({ cat1, cat2, des, Image }) {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".article-parent",
        },
      });
  
      tl.fromTo(
        ".article-cart",
        {
          xPercent: -50,
          opacity: 0,
        },
        { xPercent: 0, opacity: 1, duration: 1 ,stagger:0.25}
      );
    }, []);
 
  return (
    <>
      <div className="w-[37.5rem] h-[14rem] bg-[#242731] rounded-3xl flex flex-row article-cart">
        <div className="w-[260px] h-[200px] m-3">
          <img src={Image} className="h-full" alt="" />
        </div>
        <div className="flex flex-col">
          <div className="flex gap-4 mt-5">
            <div className="w-20 h-8  rounded-lg bg-[#6d5dd342] flex items-center justify-center">
              <p className="text-primary-blue text-Pinar-Medium text-[16px]">
                {cat1}
              </p>
            </div>
            {cat2 && <div className="w-auto px-3 h-8  rounded-lg bg-[#6d5dd342] flex items-center justify-center">
              <p className="text-primary-blue text-Pinar-Medium text-[16px]">
                {cat2}
              </p>
            </div>}
          </div>
          <div className="pl-6 mt-2">
            <p className="text-white text-Pinar-Bold">{des}</p>
          </div>
          <div className="flex flex-row items-center gap-x-3 mt-2">
            <GoDotFill className="text-primary-blue" />
            <p className="text-primary-gray text-Pinar-Regular">
              ۲۵۷ نفر خرید کرده اند.
            </p>
          </div>
          <div className="mt-5">
            <button className="w-32 h-12 text-white flex items-center justify-center bg-primary-blue rounded-2xl text-Pinar-Medium">
              مشاهده مقاله
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleCart;
