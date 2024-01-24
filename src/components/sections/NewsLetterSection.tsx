"use client"

import React from "react";
import { Input } from "../ui/input";
import MainButton from "../common/MainButton";
import { ValidationError, useForm } from '@formspree/react';

function NewsLetterSection() {

  const [state, handleSubmit] = useForm("xvoeoqoa");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
}

  return (
    <div className="bg-[#DFD7F9] p-[4rem] rounded-[1.25rem] rounded-tl-extraLarge relative lg:-mt-[10rem]">
      <div className="z-20">
        <p className="text-lightGray text-[1.5rem] font-[600] text-center mb-[2.63rem]">
          Send a quick message to get more information{" "}
          <br className="hidden md:block" /> about BTEC
        </p>
        <form className='max-w-[600px] m-auto' onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 gap-2'>
        </div>
        <input className='border shadow-lg p-3 w-full my-2' name='name' type="text" placeholder='Your mail address' />
        <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
        <textarea className='border shadow-lg p-3 w-full' name="message" placeholder='Message'></textarea>
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        <button className='border shadow-lg p-3 w-full mt-2 bg-blue-400 text-white' type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
      </div>
      <div className="absolute bottom-0  left-4 z-0 opacity-25">
        <img
          src="/images/round-ring-left.png"
          alt="round ring left"
          className="w-[200px]"
        />
      </div>

      <div className="absolute -top-4 -right-4">
        <img src="/images/send-shape.png" alt="send icon" />
      </div>

      <div className="absolute top-0 right-0 opacity-25">
        <img
          src="/images/round-ring-right.png"
          alt="round ring right"
          className="w-[200px]"
        />
      </div>

      <div className="absolute -bottom-16 right-[-6rem] hidden md:block">
        <img src="/images/plus-group.png" alt="send icon" />
      </div>
    </div>
  );
}

export default NewsLetterSection;
