import Carousel from "../components/ui/Carousel";
import data from "../data/banners";

const Home = () => {
  return (
    <div className="main-container bg-white">
      <Carousel imgArr={data} />
    </div>
  );
};

export default Home;
