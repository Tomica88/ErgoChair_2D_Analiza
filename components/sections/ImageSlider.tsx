import React from 'react';
import Slider from 'react-slick';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';

const ImageSlider = () => {
  // Array of image URLs (update with your actual assets)
  const images = [
    '/assets/slider1.png',
    '/assets/slider2.png',
    '/assets/slider3.png',
    '/assets/slider4.png',
    '/assets/slider5.png',
    '/assets/slider6.png',
  ];

  const settings = {
    infinite: true,               // Enable infinite looping
    speed: 500,                   // Transition speed (ms)
    slidesToShow: 3,              // Number of images to show at once on desktop
    slidesToScroll: 1,            // Number of images to scroll at a time
    autoplay: true,               // Enable auto-scrolling
    autoplaySpeed: 3000,          // Auto-scroll interval (ms)
    cssEase: "ease-in-out",       // Use ease-in-out for smooth transition
    swipeToSlide: true,           // Allow swiping
    draggable: true,              // Allow dragging
    pauseOnHover: false,          // Do not pause on hover
    centerMode: true,             // Enable center mode (offset effect)
    centerPadding: '10%',         // Adjust the padding to control how much of adjacent slides are visible
    arrows: false,                // Remove arrow buttons
    responsive: [
      {
        breakpoint: 768,          // For mobile screens...
        settings: {
          slidesToShow: 1,        // ...show 1 slide at a time
          centerPadding: '0%'     // Also apply offset on mobile (adjust as needed)
        }
      }
    ]
  };

  return (
    <div id="slider" className="carousel-container">

      <FaRegArrowAltCircleLeft className="md:flex absolute w-10 h-10 lg:w-15 lg:h-15 opacity-70 animate-ping left-1/11 mt-30 pointer-events-none" />
              <FaRegArrowAltCircleRight className="md:flex absolute w-10 h-10 lg:w-15 lg:h-15 opacity-70 animate-ping right-1/11 mt-30 pointer-events-none" />

      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index}`}
              style={{ 
                width: '100%', 
                height: 'auto', 
                border: 'none', 
                outline: 'none',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                MozUserSelect: 'none',
                msUserSelect: 'none',
                WebkitTapHighlightColor: 'transparent',
                pointerEvents: 'none'
              }}
              tabIndex={-1}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
