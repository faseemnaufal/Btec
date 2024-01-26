"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

interface Slide {
  image: string;
}

interface SliderProps {
  slides: Slide[];
}

const Gallery: React.FC<SliderProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const length = slides.length;

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    updateWindowWidth();

    // Update window width when the window is resized
    window.addEventListener('resize', updateWindowWidth);

    // Remove the event listener when the component is unmounted
    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id='gallery' className='max-w-[1240px] mx-auto '>
      <p className="volkhov text-[3.125rem] text-title font-[700] text-center">
        Gallery
      </p>
      <div className='relative flex justify-center p-4'>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={
              index === current
                ? 'opacity-[1] ease-in duration-1000'
                : 'opacity-0'
            }
          >
            <FaArrowCircleLeft
              onClick={prevSlide}
              className='absolute top-[50%] left-[30px] text-black/70 cursor-pointer select-none z-[2]'
              size={50}
            />
            {index === current && (
              <Image
                src={slide.image}
                alt='/'
                width={windowWidth >= 1440 ? '1440' : '800'}
                height='600'
                objectFit='cover'
              />
            )}
            <FaArrowCircleRight
              onClick={nextSlide}
              className='absolute top-[50%] right-[30px] text-black/70 cursor-pointer select-none z-[2]'
              size={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
