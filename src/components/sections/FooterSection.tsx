import React from "react";
import { AtSign, Landmark, Phone } from 'lucide-react'

function FooterSection() {
  return (
    <section id="contact" className="bg-slate-50" 
    style={{ backgroundImage: "url('/images/bookrackk.jpg')" }} 
    >
      <div className="flex flex-col md:flex-row  justify-between gap-8 mt-2">
        <div>
          <p>
            <img src="/images/logoo.jpg" alt="footer logo" />
          </p>
          <p className="text-lightGray mt-[1.19rem]">
           EMPOWER YOUR FUTURE THROUGH EDUCATION.
          </p>
        </div>
        {/* <div className="flex gap-8 flex-grow justify-between">
          <div className="flex flex-col gap-4">
            <p className="text-lightBlack font-[700] text-[1.3125rem]">
              Company
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-lightGray text-[1.125rem] font-[500]">About</p>
              <p className="text-lightGray text-[1.125rem] font-[500]">
                Careers
              </p>
              <p className="text-lightGray text-[1.125rem] font-[500]">
                Mobile
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-lightBlack font-[700] text-[1.3125rem]">
              Contact
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-lightGray text-[1.125rem] font-[500]">
                Help/FAQ
              </p>
              <p className="text-lightGray text-[1.125rem] font-[500]">Press</p>
              <p className="text-lightGray text-[1.125rem] font-[500]">
                Affilates
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-lightBlack font-[700] text-[1.3125rem]">More</p>
            <div className="flex flex-col gap-2">
              <p className="text-lightGray text-[1.125rem] font-[500]">
                Airlinefees
              </p>
              <p className="text-lightGray text-[1.125rem] font-[500]">
                Airline
              </p>
              <p className="text-lightGray text-[1.125rem] font-[500]">
                Low fare tips
              </p>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col gap-4 items-center">
          <div className="px-1 gap-4 items-center">
            <div className='flex items-center space-x-4 '>
              <AtSign className='text-white' />
              <p className='text-white'>bteccampus@gmail.com</p>
              {/* <h2 className='font-sans text-xl'>bteccampus@gmail.com</h2> */}
            </div>
            <div className='flex items-center space-x-4'>
              <Phone className='text-white' />
              <p className='text-white'>026 2224335 / 0778973896</p>
            </div>
            <div className='flex items-center space-x-4'>
              <Landmark className='text-white' />
              <p className='text-white'>N0, 41, Sea View Road, Trincomalee</p>
            </div>
            {/* <img src="/images/facebook-icon.png" alt="social icon" />
            <img src="/images/instagram-icon.png" alt="social icon" /> */}
            {/* <img src="/images/x-icon.png" alt="social icon" /> */}
          </div>
          {/* <p className="text-lightGray font-[500] text-[1.25rem]">
            Discover our app
          </p>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-lightBlack rounded-extraLarge px-[1.06rem] py-[0.58rem] w-[11rem]">
              <div className="flex gap-4 items-center">
                <div>
                  <img
                    src="/images/google-play-icon.png"
                    alt="google play icon"
                  />
                </div>

                <div>
                  <p className="uppercase font-[700] text-white text-[0.7rem]">
                    get it on
                  </p>
                  <p className="uppercase font text-white text-[0.7rem]">
                    Google play
                  </p>
                </div>
              </div>
              <div></div>
            </div>
            <div className="bg-lightBlack rounded-extraLarge px-[1.06rem] py-[0.58rem] w-[14rem]">
              <div className="flex gap-4 items-center">
                <div>
                  <img src="/images/app-icon.png" alt="google play icon" />
                </div>

                <div>
                  <p className="uppercase font-[700] text-white text-[0.7rem]">
                    Available on the
                  </p>
                  <p className="uppercase font text-white text-[0.7rem]">
                    Apple store
                  </p>
                </div>
              </div>
              <div></div>
            </div>
          </div> */}
        </div>
      </div>
      <p className=" text-lightGray text-[0.875rem] font-[600] flex justify-center">
        All rights reserved@btec
      </p>
    </section>
  );
}

export default FooterSection;
