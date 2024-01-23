"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import MainButton from "./MainButton";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:sticky md:top-0   md:shadow-none z-20 ">
      {/* DESKTOP */}
      <div className=" hidden lg:block animate-in fade-in zoom-in  p-4 ">
        <div className="flex justify-between items-center">
          <div>
            <img src="/images/logoo.jpg" alt="logo" />
          </div>
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
            <ul className="flex items-center gap-2">
              <li className='p-4 hover:text-slate-400'>
              <Link href='/'>Home</Link>
              </li>
              <li className='p-4 hover:text-slate-400'>
                <Link href='/#gallery'>Gallery</Link>
              </li>
              <li className='p-4 hover:text-slate-400'>
                <Link href='/#about'>About</Link>
              </li>
              <li className='p-4 hover:text-slate-400'>
                <Link href='/#academic'>Academic</Link>
              </li>
              <li className='p-4 hover:text-slate-400'>
                <Link href='/news'>News</Link>
              </li>
              <li className='p-4 hover:text-slate-400'>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999]   py-4 animate-in fade-in zoom-in  ${
          menu ? " bg-primary py-2" : "bg-white"
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <img src="/images/logoo.jpg" alt="logo" className="w-[7rem]" />
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <img
                src="/images/hamburger.svg"
                alt="logo"
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right ">
            <div className="flex flex-col gap-8 mt-8 mx-4 ">
            <div className="flex gap-[20px] xl:gap-[50px] text-[16px] flex-col select-none ">
                <ul>
                  <li onClick={toggleMenu} className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/'>Home</Link>
                  </li>
                  <li onClick={toggleMenu} className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/#gallery'>Gallery</Link>
                  </li>
                  <li onClick={toggleMenu} className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/#about'>About</Link>
                  </li>
                  <li onClick={toggleMenu} className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/#academic'>Academic</Link>
                  </li>
                  <li onClick={toggleMenu} className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/news'>News</Link>
                  </li>
                  <li onClick={toggleMenu} className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/contact'>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
