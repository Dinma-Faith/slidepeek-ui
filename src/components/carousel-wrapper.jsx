import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import CarouselTrack from "./carousel-track";
import CarouselArrows from "./carousel-arrows";
import "keen-slider/keen-slider.min.css";
import "../css/carousel.css";

const CarouselWrapper = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 1.5,
      spacing: 16,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <div className="carousel-wrapper">
      <CarouselTrack sliderRef={sliderRef} />
      <CarouselArrows
        instanceRef={instanceRef}
        currentSlide={currentSlide}
      />
    </div>
  );
};

export default CarouselWrapper;
