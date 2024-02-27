import React, { useState } from "react";
import ScoreCard from "./ScoreCard";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;

  const next = () => {
    if (currentIndex >= Math.ceil(totalItems / 3) - 1) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prev = () => {
    if (currentIndex <= 0) {
      const noDecimal = (totalItems / 3) % 1;
      if (noDecimal) setCurrentIndex(Math.floor(totalItems / 3));
      else {
        setCurrentIndex(Math.floor(totalItems / 3 - 1));
      }
      return;
    }
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className="relative px-14">
      <div className="flex overflow-x-hidden">
        <button
          onClick={prev}
          className="absolute bg-blue-500 px-4 py-2 rounded-2xl text-white left-0 top-1/2 transform -translate-y-1/2 z-10"
        >
          Prev
        </button>
        <div
          className="flex transition-transform duration-400 w-screen"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-1/3 flex-shrink-0">
              <div className="bg-white min-w-fit h-56 rounded-lg m-2  ">
                <ScoreCard item={item} />
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={next}
          className="absolute bg-blue-500 px-4 py-2 rounded-2xl text-white right-0 top-1/2 transform -translate-y-1/2 z-10"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
