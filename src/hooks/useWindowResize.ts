import { useState, useEffect } from "react";

const useWindowResize = () => {
  const [windowInnerWidth, setWindowInnerWidth] = useState<number>(
    window.innerWidth
  );
  const handleResize = () => {
    setWindowInnerWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { windowInnerWidth };
};

export default useWindowResize;
