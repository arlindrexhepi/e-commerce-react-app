import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useWindowResize from "../../hooks/useWindowResize";

import NavButtons from "./NavButtons";
import Button from "../UI/Button";
import { CarouselImageInterface } from "../../interfaces/CaroselImagesInterface";

interface CarouselProps {
  imgArr: CarouselImageInterface[];
}

const Carousel: React.FC<CarouselProps> = ({ imgArr }) => {
  const [showCurrentImg, setShowCurrentImg] = useState<number>(0);
  const [slideAmount, setSlideAmount] = useState<number>(0);
  const { windowInnerWidth } = useWindowResize();
  const refActiveImg = useRef<any>();
  useEffect(() => {
    const caroselAutoPlay = setInterval(() => {
      if (showCurrentImg === imgArr.length - 1) {
        setShowCurrentImg(0);
        setSlideAmount(0);
        return;
      }
      setShowCurrentImg((prev) => prev + 1);
      if (windowInnerWidth <= 768) {
        setSlideAmount((prev) =>
          refActiveImg.current.nextElementSibling === null
            ? prev - 375
            : prev - refActiveImg.current.nextElementSibling.offsetWidth
        );
        return;
      }
      setSlideAmount((prev) =>
        refActiveImg.current.nextElementSibling === null
          ? prev - 1528
          : prev - refActiveImg.current.nextElementSibling.offsetWidth
      );
    }, 5000);

    return () => {
      clearInterval(caroselAutoPlay);
    };
  }, [imgArr.length, showCurrentImg, windowInnerWidth]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="carosel-track h-[400px] lg:h-[554px] w-full"
        style={{
          transform: `translateX(${slideAmount}px)`
        }}
      >
        {imgArr.map((banner: CarouselImageInterface, bannerIndex: number) => {
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
        } absolute top-[50%] left-[4%] text-white p-4 lg:p-8 text-xl lg:text-2xl bg-black
         rounded-full opacity-50 hover:text-primary hover:opacity-100 flex justify-center
         items-center -translate-y-1/2`}
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
        } absolute top-[50%] right-[4%] text-white p-4 lg:p-8 text-xl lg:text-2xl bg-black
         rounded-full opacity-50 hover:text-primary hover:opacity-100 flex justify-center
         items-center -translate-y-1/2`}
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
      <NavButtons
        arrLength={imgArr.length}
        showCurrentImg={showCurrentImg}
        setShowCurrentImg={setShowCurrentImg}
        setSlideAmount={setSlideAmount}
        refActiveImg={refActiveImg}
      />
    </div>
  );
};

export default Carousel;
