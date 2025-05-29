import React from "react";
import ArrowLeft from "../assets/icons/arrow-left.svg";
import ArrowRight from "../assets/icons/arrow-right.svg";

const CarouselArrows = ({ instanceRef, currentSlide }) => {
  if (!instanceRef.current) return null;

  const totalSlides = instanceRef.current.track.details.slides.length;

  const showLeftArrow = currentSlide > 0;
  const showRightArrow = currentSlide < totalSlides - 1;

  return (
    <>
      {showLeftArrow && (
        <button
          className="carousel-arrow left"
          onClick={() => instanceRef.current.prev()}>
          <img src={ArrowLeft} alt="Previous" />
        </button>
      )}

      {showRightArrow && (
        <button
          className="carousel-arrow right"
          onClick={() => instanceRef.current.next()}>
          <img src={ArrowRight} alt="Next" />
        </button>
      )}
    </>
  );
};

export default CarouselArrows;
