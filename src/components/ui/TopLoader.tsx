import { useState, useEffect } from "react";

const TopLoader: React.FC = () => {
  const [loaderWidth, setLoaderWidth] = useState<number>(1);

  useEffect(() => {
    const increaseWidth = () => {
      if (loaderWidth >= 95) {
        setLoaderWidth(0);
        return;
      }
      setLoaderWidth((prev) => prev + 19);
    };
    const widthInterval = setInterval(increaseWidth, 500);

    return () => {
      clearInterval(widthInterval);
    };
  }, [loaderWidth]);
  return (
    <div id="top-loader-container" className="bg-white">
      <div
        id="top-loader"
        className="bg-primary"
        style={{ width: `${loaderWidth}%` }}
      />
    </div>
  );
};

export default TopLoader;
