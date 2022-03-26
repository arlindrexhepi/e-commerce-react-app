import { useState, useEffect } from "react";

const TopLoader: React.FC = () => {
  const [loaderWidth, setLoaderWidth] = useState<number>(0);
  const [showLoader, setShowLoader] = useState<boolean>(true);

  useEffect(() => {
    const increaseWidth = () => {
      if (loaderWidth > 80) {
        setShowLoader(false);
        return;
      }
      setLoaderWidth((prev) => prev + 20);
    };
    const widthInterval = setInterval(increaseWidth, 500);

    return () => {
      clearInterval(widthInterval);
    };
  }, [loaderWidth]);
  return (
    <div
      id="top-loader-container"
      className={!showLoader ? "invisible" : "bg-white"}
    >
      <div
        id="top-loader"
        className="bg-primary"
        style={{ width: `${loaderWidth}%` }}
      />
    </div>
  );
};

export default TopLoader;
