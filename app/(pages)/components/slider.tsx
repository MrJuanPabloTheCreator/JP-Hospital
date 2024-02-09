"use client"

import React, { useState } from 'react';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return ( 
    <div className="relative overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <img src={image} alt={`Slide ${index}`} className="object-cover w-full h-[390px] sm:h-[180px] md:h-[220px] lg:h-[320px] xl:h-[370px]"/> 
          </div>
        ))}
      </div>
      <button className="absolute top-1/2 left-0 transform -translate-y-1/2 h-full hover:bg-white hover:bg-opacity-15 px-4 py-2 text-lg text-blue-900" onClick={prevSlide}>❮</button>
      <button className="absolute top-1/2 right-0 transform -translate-y-1/2 h-full hover:bg-white hover:bg-opacity-15 px-4 py-2 text-lg text-blue-900" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default ImageSlider;

