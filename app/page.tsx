"use client"

import { useRef, useState } from "react";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Products from "@/components/sections/Products";
import Reviews from "@/components/sections/Reviews";
import Sale from "@/components/sections/Sale";
import ThreeCanvas from "./ThreeCanvas";
import StartWindow from "@/components/StartWindow";
import ImageSlider from "@/components/sections/ImageSlider";
import Slider from "react-slick";

export default function Home() {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const sliderRef = useRef<Slider>(null);
  
  // Create a function to update the selected index that can be passed to Products
  const handleProductSelect = (index: number) => {
    setSelectedProductIndex(index);
  };
  
  return (
    <div>
      <StartWindow/>
      <ThreeCanvas />
      <div className="text-slate-100">
        <Navbar />
        <Hero />
        {/* The ImageSlider is outside any constraining container */}
        <div className="w-full">
          <ImageSlider selectedIndex={selectedProductIndex} sliderRef={sliderRef} />
        </div>
        <Products onProductSelect={handleProductSelect} />
        <Features />
        <Reviews />
        <div className="bg-stone-800">
          <Sale />
          <Footer />
        </div>
      </div>
    </div>
  );
}