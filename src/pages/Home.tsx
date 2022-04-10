import useWindowResize from "../hooks/useWindowResize";
import useBannerService from "../hooks/useBannerService";

import Carousel from "../components/ui/Carousel";

const Home: React.FC = () => {
  const { windowInnerWidth } = useWindowResize();
  const { data } = useBannerService({
    url: "/data/banners.json"
  });
  const showCarosel = (): JSX.Element | null => {
    if (data && windowInnerWidth <= 768) {
      return <Carousel imgArr={data.mobile} />;
    }
    if (data && windowInnerWidth >= 768) {
      return <Carousel imgArr={data.desktop} />;
    }
    return null;
  };

  return <div className="main-container bg-white">{showCarosel()}</div>;
};

export default Home;
