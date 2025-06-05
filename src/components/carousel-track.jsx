import React from "react";
import CarouselSlide from "./carousel-slide";

const CarouselTrack = ({ sliderRef }) => {
  return (
    <div ref={sliderRef} className="keen-slider carousel-track">
      <CarouselSlide />
      <CarouselSlide />
    </div>
  );
};

export default CarouselTrack;
