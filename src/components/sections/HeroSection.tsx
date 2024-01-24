import React from "react";
import MainButton from "../common/MainButton";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="flex justify-between items-center mt-16 md:z-[9999]">
      <div className="pt-32 md:pt-4">
        <p className="text-[1.128rem] font-[700] text-slate-900 uppercase mb-4">
        Empowering future generation through the Education.
        </p>
        <div className="flex flex-col">
          

          <p className="volkhov font-[700] text-[3rem] md:text-[4.43756rem] leading-large inline-flex bg-blue-800 text-white">
          BUSINESS & TECHNOLOGICAL EDUCATION COLLEGE
          </p>
        </div>

        <p className="my-[1.6rem] font-bold leading-[1.692rem] text-lightGray text-[1rem]">
        Our Mission : To create a future generation that can benefit the national welfare by building an individual human economy.
        </p>

        <div className="flex gap-6 items-center ">
          <div>
            <Link href="https://maps.app.goo.gl/RRVdtNGGKHdsGoij9">
            <MainButton
              text="Trincomalee"
              classes="bg-secondary text-white font-[600] shadow-none rounded-[0.564rem] border-none hover:bg-secondary  w-[9.58788rem] h-[3rem]"
            />
            </Link>
          </div>
          {/* <div className="flex items-center mt-6 hover:cursor-pointer">
            <img
              src="/images/play-shadow.png"
              alt="rounded play icon with shadow"
            />
            <p className="text-lightGrayAlt -mt-6">Play Demo</p>
          </div> */}
        </div>
      </div>
      {/* <div className="hidden md:block">
        <img
          src="/images/college.jpg"
          alt="girl with phone with aircrafts on the background"
        />
      </div> */}
    </section>
  );
}

export default HeroSection;
