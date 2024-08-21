import React, { useEffect } from "react";
import GameCart from "../gameCart/GameCart";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function NewGame() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".parent",

      },
    });

    tl.fromTo(
      ".game-title",
      {
        xPercent: 200,
      },
      { xPercent: 0, duration: 1 }
    ).fromTo(".best-sellers",{
      xPercent: -200,
    },
    { xPercent: 0, duration: 1 },"-=1");

    
  }, []);

  return (
    <>
      <div className="flex flex-col px-6 mt-24 w-full parent">
        <div className="flex flex-row justify-between">
          <div className="flex items-center game-title">
            <p className="text-2xl text-white text-Pinar-ExtraBold">
              جدیدترین بازی های فروشگاه
            </p>
          </div>
          <div className="w-56 h-16 bg-[#FFFFFF0F] rounded-2xl px-2 best-sellers">
            <select className="w-full h-full bg-transparent border-none outline-none text-white text-Pinar-Medium rounded-2xl ">
              <option className="text-black" value="bestSellers" selected>
                پر فروش ترین ها
              </option>
              <option className="text-black" value="mostVisited">
                پر بازدید ترین ها{" "}
              </option>
            </select>
          </div>
        </div>
        <div className="h-auto">
          <div className="flex 2xl:gap-5 3xl:justify-between flex-nowrap">
            <GameCart />
            <GameCart />
            <GameCart />
            <GameCart />
            <GameCart />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewGame;
