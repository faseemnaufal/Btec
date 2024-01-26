import React from "react";
import MainButton from "../common/MainButton";
import Link from "next/link";
import { Phone } from "lucide-react";

function HeroSection() {
  return (
    <section className="flex justify-between items-center mt-2 pl-1 pr-1 pb-1 md:z-[9999] rounded-lg"
    style={{ backgroundImage: "url('/images/booksidee.jpg')" }} 
    >
      <div className="pt-32 md:pt-4 md:flex-row items-center md:justify-between mt-16 w-full"
      >
        <p className="text-[1.128rem] font-[700] text-slate-900 uppercase mb-4">
        Empowering future generation through the Education.
        </p>
        <div className="flex flex-col">
          
        <img
          src="/images/b.jpg"
          alt="logo group"
          // style={{ width: '100%', height: 'auto',  transition: 'opacity 0.5s ease-in-out', }}
          className="animated-image"
        />
        <img
          src="/images/t.jpg"
          alt="logo group"
          // style={{ width: '100%', height: 'auto',  transition: 'opacity 0.5s ease-in-out', }}
          className="animated-image1"
        />
        <img
          src="/images/e.jpg"
          alt="logo group"
          // style={{ width: '100%', height: 'auto',  transition: 'opacity 0.5s ease-in-out', }}
          
        />
        <img
          src="/images/c.jpg"
          alt="logo group"
          // style={{ width: '100%', height: 'auto' }}
          className="animated-image"
        />
          {/* <p className="volkhov font-[700] text-[1.7rem] sm:text-[2rem] md:text-[4.43756rem] leading-large inline-flex bg-blue-800 text-white">
          BUSINESS & TECHNOLOGICAL EDUCATION COLLEGE
          </p> */}
        </div>

        <p className="my-[1.6rem] font-bold leading-[1.692rem] text-lightGray text-[1rem]">
        Our Mission : To create a future generation that can benefit the national welfare by building an individual human economy.
        </p>

        <div className=" gap-6 items-center">
          <div className="mb-1">
            <Link href="https://maps.app.goo.gl/RRVdtNGGKHdsGoij9">
            <MainButton
              text="Trincomalee"
              classes="bg-secondary text-white font-[600] shadow-none rounded-[0.564rem] border-none hover:bg-secondary  w-[9.58788rem] h-[3rem]"
            />
            </Link>
          </div>
          <div>
            <MainButton
              text="026 2224335 / 0778973896"
              classes=" bg-red-500 text-white font-[600] shadow-none rounded-[0.564rem] border-none hover:bg-secondary  w-[11.58788rem] h-[3rem]"
            />
          </div>
          {/* <div>
            <MainButton
              text="bteccampus@gmail.com"
              classes=" bg-blue-500 text-white font-[600] shadow-none rounded-[0.564rem] border-none hover:bg-secondary  w-[11.58788rem] h-[3rem]"
            />
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
