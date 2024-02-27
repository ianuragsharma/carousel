import "./App.css";
import IndicatorCarousel from "./components/IndicatorCarousel";
import Carousel from "./components/SlidingCarousel";
import { cardData, indicatorCardData } from "./dummyData";

function App() {
  return (
    <div className="bg-gray-200 h-screen">
      <h2 className="text-2xl py-5">Carousel 1</h2>
      <Carousel items={cardData} />
      <h2 className="text-2xl py-5">Carousel 2</h2>
      <IndicatorCarousel items={indicatorCardData} />
    </div>
  );
}

export default App;
