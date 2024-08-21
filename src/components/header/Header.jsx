import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { IoSearch,IoMoon  } from "react-icons/io5";

function Header() {
  useEffect(() => {
      gsap.fromTo(
        ".header",
        { y: -200 },
        { y: 0, stagger: 0.2, duration: 2.5, ease: "power4.out" }
      );
  }, []);
  return (
    <>
      <div className="px-6 w-full flex flex-row justify-between mt-10">
        <div className="flex flex-row gap-x-3">
          <div>
            <img className="header" src="public\image\logo.png" alt="" />
          </div>
          <div>
            <ul className="flex flex-row gap-x-4 text-white text-Pinar-Medium items-center">
              <li className="cursor-pointer header">خانه</li>
              <li className="cursor-pointer header">فروشگاه</li>
              <li className="cursor-pointer header">درباره ما</li>
              <li className="cursor-pointer header">تماس با ما</li>
              <li className="cursor-pointer header">وبلاگ</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row gap-7">
          <div className="flex flex-row gap-x-5 items-center">
          <IoSearch className="header w-6 h-6 text-white cursor-pointer"/>
          <IoMoon className="header w-6 h-6 text-white cursor-pointer"/>
          </div>
          <div>
            <button className="header w-36 h-10 bg-primary-blue rounded-md">
              <p className="text-white text-Pinar-SemiBold">ثبت نام</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
