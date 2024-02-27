import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

const IndicatorCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;
  const totalIndicator = Math.ceil(totalItems / 3);

  useEffect(() => {
    let intervalId = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const next = () => {
    if (currentIndex >= Math.floor(totalItems / 3) - 1) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleIndicatorClick = (idx) => {
    setCurrentIndex(idx);
  };

  return (
    <div className="relative">
      <div className="flex overflow-x-hidden">
        <div
          className="flex transition-transform duration-300 w-screen items-center "
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-1/3 flex-shrink-0">
              <div className="bg-white min-w-fit rounded-lg m-2  ">
                <NewsCard item={item} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mx-auto max-w-20 justify-between">
        {Array(totalIndicator)
          .fill(0)
          .map((item, idx) => (
            <div
              className="cursor-pointer"
              onClick={() => handleIndicatorClick(idx)}
            >
              <div
                className={`w-3 h-3 rounded-full ${
                  currentIndex === idx ? "bg-blue-700" : " bg-white"
                }  `}
              ></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default IndicatorCarousel;
