import React from "react";
import arrowLeft from "../assets/icons/arrow-left.svg";
import arrowRight from "../assets/icons/arrow-right.svg";

const CarouselArrows = ({ instanceRef, currentSlide }) => {
  const totalSlides = instanceRef.current?.track.details.slides.length || 0;

  return (
    <>
      {instanceRef.current && currentSlide > 0 && (
        <button
          className="carousel-arrow left"
          onClick={() => instanceRef.current.prev()}>
          <img src={arrowLeft} alt="Left" />
        </button>
      )}

      {instanceRef.current &&
        instanceRef.current.track.details.rel <
          instanceRef.current.track.details.slides.length - 1 && (
          <button
            className="carousel-arrow right"
            onClick={() => instanceRef.current.next()}>
            <img src={arrowRight} alt="Right" />
          </button>
        )}
    </>
  );
};

export default CarouselArrows;
