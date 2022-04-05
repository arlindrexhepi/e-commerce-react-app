import useWindowResize from "../utils/useWindowResize";

import Carousel from "../components/ui/Carousel";
import data from "../data/banners";

const Home: React.FC = () => {
  const { windowInnerWidth } = useWindowResize();
  return (
    <div className="main-container bg-white">
      <Carousel imgArr={windowInnerWidth <= 768 ? data.Mobile : data.Desktop} />
    </div>
  );
};

export default Home;
