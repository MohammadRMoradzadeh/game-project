import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CartCriticism from "../cartCriticism/CartCriticism";

export default function Criticism() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".criticism-parent",
      },
    });

    tl.fromTo(
      ".criticism-title",
      {
        yPercent: -50,
        opacity: 0,
      },
      { yPercent: 0, opacity: 1, duration: 1 }
    );
  },[])
  return (
    <>
      <div className="flex flex-col px-6 mt-24 criticism-parent">
        <div className="flex justify-center items-center ">
          <p className="text-white text-Pinar-Medium text-3xl border-b-2 border-white pb-6 criticism-title">
            جدیدترین نقد و بررسی ها
          </p>
        </div>
        <div className="flex justify-evenly mt-14">
          <CartCriticism image="image/metal.png" title="Metal Gear Solid Delta: Snake Eater"/>
          <CartCriticism image="image/last-of-us.png" title=" The Last of Us Part 1"/>
          <CartCriticism image="image/alan-wake.png" title="Alan Wake 2"/>
        </div>
      </div>
    </>
  );
}
