import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Button from "./Button";
import {
  CaroselImagesInterface,
  CaroselImageInterface
} from "../../interfaces/CaroselImagesInterface";

const Carousel: React.FC<CaroselImagesInterface> = ({ imgArr }) => {
  const [showCurrentImg, setShowCurrentImg] = useState<number>(0);
  const [slideAmount, setSlideAmount] = useState<number>(0);
  const refActiveImg = useRef<any>();
  useEffect(() => {
    const caroselAutoPlay = setInterval(() => {
      if (showCurrentImg === imgArr.length - 1) {
        return;
      }
      setShowCurrentImg((prev) => prev + 1);
      setSlideAmount((prev) =>
        refActiveImg.current.nextElementSibling === null
          ? prev - 1528
          : prev - refActiveImg.current.nextElementSibling.offsetWidth
      );
    }, 5000);

    return () => {
      clearInterval(caroselAutoPlay);
    };
  }, [imgArr.length, showCurrentImg]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="carosel-track h-[554px] w-full"
        style={{
          transform: `translateX(${slideAmount}px)`
        }}
      >
        {imgArr.map((banner: CaroselImageInterface, bannerIndex: number) => {
          return (
            <div
              ref={showCurrentImg === bannerIndex ? refActiveImg : null}
              style={{
                left: `${
                  (refActiveImg.current === undefined
                    ? 1528
                    : refActiveImg.current.offsetWidth) * bannerIndex
                }px`
              }}
              key={banner.id}
              className="absolute top-0 w-full"
            >
              <img
                loading="lazy"
                className="object-contain max-h-full"
                src={banner.path}
                alt={banner.title}
              />
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-0 h-[200px] w-full">
        <div className="fade-carosel select-none h-full" />
      </div>
      <Button
        className={`${
          showCurrentImg === 0 ? "hidden" : ""
        } absolute top-[50%] left-[4%] text-white p-8 text-2xl bg-black
        rounded-full opacity-50 hover:opacity-100 flex justify-center items-center
        -translate-y-1/2`}
        onClick={() => {
          setShowCurrentImg((prev) =>
            prev === 0 ? imgArr.length - 1 : prev - 1
          );
          setSlideAmount(
            (prev) =>
              prev + refActiveImg.current.previousElementSibling.offsetWidth
          );
        }}
      >
        <FaChevronLeft />
      </Button>
      <Button
        className={`${
          showCurrentImg === imgArr.length - 1 ? "hidden" : ""
        } absolute top-[50%] right-[4%] text-white p-8 text-2xl bg-black
        rounded-full opacity-50 hover:opacity-100 flex justify-center items-center
        -translate-y-1/2`}
        onClick={() => {
          setShowCurrentImg((prev) =>
            prev === imgArr.length - 1 ? 0 : prev + 1
          );
          setSlideAmount(
            (prev) => prev - refActiveImg.current.nextElementSibling.offsetWidth
          );
        }}
      >
        <FaChevronRight />
      </Button>
    </div>
  );
};

export default Carousel;
