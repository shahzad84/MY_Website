import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Cards from "./components/Cards"
import Small_cards from "./components/Small_cards";
import Footer from "./components/Footer";
import VideoPage from "./components/VideoPage";
import ShopPage from "./components/ShopPage";
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Carousel/>
      <div className="spacing">
        <Cards/>
      </div>
      <div className="spacing">
        <Small_cards/>
      </div> */}
      {/* <div className="spacing">
        <VideoPage/>
      </div> */}
      <div className="spacing">
        <ShopPage/>
      </div>
      <div className="spacing"><Footer/></div>
      
    </div>
  );
}

export default App;
