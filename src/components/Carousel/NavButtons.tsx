import { useEffect, useMemo } from "react";
import randomArray from "../../utils/randomArray";
import Button from "../UI/Button";

interface NavButtonsProps {
  className?: string;
  arrLength: number;
  showCurrentImg: number;
  setShowCurrentImg: React.Dispatch<React.SetStateAction<number>>;
  setSlideAmount: React.Dispatch<React.SetStateAction<number>>;
  refActiveImg: any;
}

const NavButtons: React.FC<NavButtonsProps> = ({
  arrLength,
  showCurrentImg,
  setShowCurrentImg,
  setSlideAmount,
  className,
  refActiveImg
}) => {
  const newArr = useMemo(() => randomArray(arrLength), [arrLength]);
  useEffect(() => {}, [newArr]);
  return (
    <div
      className={`${className} absolute bottom-[10%] left-[50%] -translate-x-[50%]`}
    >
      {newArr.map((rndNumber: number, index: number) => {
        return (
          <Button
            key={rndNumber}
            onClick={() => {
              setShowCurrentImg(index);
              setSlideAmount(-refActiveImg.current.offsetWidth * index);
            }}
            className={`${
              showCurrentImg === index
                ? "opacity-100 bg-primary"
                : "opacity-50 bg-white"
            } p-2 rounded-full mx-[1px]`}
          />
        );
      })}
    </div>
  );
};
export default NavButtons;
