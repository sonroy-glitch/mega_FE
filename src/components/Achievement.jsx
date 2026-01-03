import React, { useState, useEffect } from "react";
import img1 from "../assets/achievements/img01.jpg";
import img2 from "../assets/achievements/img02.png";
import img3 from "../assets/achievements/img03.png";
import img4 from "../assets/achievements/img04.png";
import img5 from "../assets/achievements/img05.jpg";
import img6 from "../assets/achievements/img06.jpg";
import img7 from "../assets/achievements/img07.jpg";
import img8 from "../assets/achievements/img08.jpg";
import img9 from "../assets/achievements/img09.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const Achievement = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = images.length - visibleCount;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, visibleCount]);

  return (
    <div className="w-full max-w-8xl mx-auto px-5 py-10 rounded-3xl">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
        <div className="lg:w-1/4 w-full text-center lg:text-left">
          <h2
            className="text-4xl sm:text-5xl font-serif leading-tight"
            style={{ color: "rgb(230, 253, 136)" }}
          >
            <span className="text-6xl sm:text-7xl text-white">OUR</span>
            <br />
            ACHIEVEMENTS
          </h2>
          <div className="w-16 h-1 bg-gray-300 mt-6 mx-auto lg:mx-0 rounded-full"></div>
        </div>

        <div className="lg:w-3/4 w-full overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-3 box-border"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <div className="relative h-56 sm:h-64 lg:h-72 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
                  <img
                    src={src}
                    alt={`Achievement ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
