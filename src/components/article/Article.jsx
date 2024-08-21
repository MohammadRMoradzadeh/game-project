import React from "react";
import ArticleCart from "../articleCart/ArticleCart";

function Article() {
  let articles = [
    {
      category: ["اخبار", "ورزشی"],
      des: "بازی NBA 2K 2023 رکورد پرفروش ترین بازی ورزشی را شکست.",
      Image: "image/nba.png",
    },
    {
      category: ["بازی های جدید ", "اکشن"],
      des: "نسخه جدید اساسینس کرید با عنوان (میراژ) منتشر شد.",
      Image: "image/assasine.png",
    },
    {
      category: ["موسیقی"],
      des: "موسیقی بازی The Last of Us رکورد دار بیشترین دانلود.",
      Image: "image/the-last.png",
    },
  ];
  return (
    <>
      <div className="flex flex-col mt-20 w-full px-6 h-auto ">
        <div className="flex justify-center items-center text-2xl ">
          <p className="text-white text-Pinar-SemiBold pb-4 border-b-2">
            مقالات جدید
          </p>
        </div>
        <div className="flex flex-row justify-center gap-x-5 mt-14">
          <div className="w-[36rem] h-[45rem] relative">
            <img
              src="image/sl4.png"
              className="w-full h-full absolute -z-10"
              alt=""
            />
            <div className="absolute bottom-12  mx-11">
              <div className="flex flex-row gap-x-3">
                <div className="w-24 h-8  rounded-full bg-[#6d5dd342] flex items-center justify-center">
                  <p className="text-white text-Pinar-Medium text-[16px]">
                    سبک پازل
                  </p>
                </div>
                <div className="w-28 h-8  rounded-full bg-[#6d5dd342] flex items-center justify-center">
                  <p className="text-white text-Pinar-Medium text-[16px]">
                    بازی های فکری
                  </p>
                </div>
              </div>
              <div className="flex flex-col mt-3">
                <p className="text-white text-Pinar-SemiBold text-2xl">
                  بازی Hello Neighbor منتشر شد
                </p>
                <p className="text-white text-Pinar-Regular mt-2">
                  سلام همسایه از خاص ترین، زیباترین و محبوب ترین بازیهای
                  ماجراجویی – ترسناک با ساخت فوق العاده از tinyBuild برای
                  اندروید است که دقایقی پیش ...
                </p>
              </div>
              <div className="mt-5">
                <button className="w-32 h-12 text-white flex items-center justify-center bg-primary-blue rounded-2xl text-Pinar-Medium">
                  مشاهده مقاله
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-6">
            <ArticleCart des="بازی NBA 2K 2023 رکورد پرفروش ترین بازی ورزشی را شکست." Image="image/nba.png" cat1="ورزشی" cat2="اخبار"/>
            <ArticleCart des="نسخه جدید اساسینس کرید با عنوان (میراژ) منتشر شد." Image="image/assasine.png" cat1="اکشن" cat2="بازی های جدید "/>
            <ArticleCart des="موسیقی بازی The Last of Us رکورد دار بیشترین دانلود." Image= "image/the-last.png" cat1="موسیقی"/>

            {/* <ArticleCart />
            <ArticleCart />
            <ArticleCart /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Article;
