import React,{useEffect} from "react";
import { useRef } from "react";
import { PiArrowBendDownLeftBold } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function GameCart() {
  const cardRef = useRef(null);
  const buttonRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".game-card",
   
        

      },
    });

    tl.fromTo(
      ".game-card",
      {
        opacity: 0,
      },
      { opacity: 1, duration: 1,stagger:0.5,ease:"circ.inOut" }
    );

    
  }, []);

  function mouseEnter() {
    gsap.fromTo(cardRef.current, { scale: 1 }, { scale: 1.05 });
    gsap.to(buttonRef.current, { backgroundColor: "#FF754C" });
  }
  function mouseLeave() {
    gsap.fromTo(cardRef.current, { scale: 1.05 }, { scale: 1 });
    gsap.to(buttonRef.current, { backgroundColor: "#FF754C2B" });
  }
  return (
    <>
      <div
        className="flex flex-col w-72 h-auto rounded-3xl cart bg-[#00000012] backdrop-blur-lg mt-4 game-card"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        ref={cardRef}
      >
        <div className="w-full h-auto">
          <img
            className="w-full h-full rounded-t-3xl"
            src="/image/fortnite.jpg"
            alt=""
          />
        </div>
        <div className="flex  items-center justify-center mt-5 mx-7">
          <p className="text-white text-Pinar-Regular text-xl">
            بازی FIFA 23 برای کنسول پلی استیشن ۵
          </p>
        </div>
        <div className="flex items-center justify-center bg-gradient-to-t from-[#FF754C1A] via-[#FF754C1A] to-[#F0F3F600] pb-6">
          <p className="text-primary-orange text-xl text-Pinar-Regular mt-4 ">
            قیمت ۴/۵۰۰ هزار تومان
          </p>
        </div>
        {/* <div className="bg-gradient-to-t from-[#FF754C1A] via-[#FF754C1A] to-[#F0F3F600] h-10"></div> */}
        <div className="flex flex-row justify-between mt-6">
          <div className="flex flex-row items-center mx-6">
            <GoDotFill className="text-primary-blue"/>
            <p className="text-primary-gray text-Pinar-Regular">۲۵۷ نفر خرید کرده اند.</p>
          </div>
          <div className="w-16 h-16">
            <div
              className="flex items-center justify-center h-full w-full button bg-[#FF754C2B] rounded-ee-3xl rounded-ss-2xl"
              ref={buttonRef}
            >
              <PiArrowBendDownLeftBold className="text-white text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GameCart;
