// ImageSlider.tsx
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ImageSliderProps {
  selectedIndex: number;
  sliderRef: React.RefObject<Slider>;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ selectedIndex, sliderRef }) => {
  const [activeSlide, setActiveSlide] = useState(selectedIndex);
  
  const images = [
    '/assets/slider1.png',
    '/assets/slider2.png',
    '/assets/slider3.png',
    '/assets/slider4.png',
    '/assets/slider5.png',
    '/assets/slider6.png',
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    swipeToSlide: true,
    draggable: true,
    pauseOnHover: false,
    centerMode: true,
    centerPadding: '10%',
    arrows: false,
    beforeChange: (current: number, next: number) => {
      setActiveSlide(next);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '0%',
        },
      },
    ],
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(selectedIndex);
      setActiveSlide(selectedIndex);
    }
  }, [selectedIndex, sliderRef]);

  return (
    <div id="slider" className="relative w-full overflow-hidden my-8">
      <FaRegArrowAltCircleLeft className="absolute left-1/10 top-1/2 transform -translate-y-1/2 w-8 h-8 lg:w-15 lg:h-15 z-10 opacity-70 pointer-events-none text-3xl animate-ping" />
      <FaRegArrowAltCircleRight className="absolute right-1/10  top-1/2 transform -translate-y-1/2 w-8 h-8 lg:w-15 lg:h-15 z-10 opacity-70 pointer-events-none text-3xl animate-ping" />

      <div className="max-w-full mx-auto">
        <Slider ref={sliderRef} {...settings}>
          {images.map((src, i) => (
            <div key={i} className="px-2">
               <div className={`transition-all duration-300 ${activeSlide === i ? 'p-1 md:bg-stone-900 rounded-4xl transform scale-105' : ''}`}>
                <img
                  src={src}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-auto rounded-lg select-none"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;