import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VideoPage from "./components/VideoPage";
import ShopPage from "./components/ShopPage";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <div className="container-fluid">
      <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/video" element={<VideoPage />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/shop" element={<ShopPage />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/login" element={<Login />} />
        
      </Routes>
      </div>
      <Footer />
      
    </BrowserRouter>
    </div>
    
  );
}

export default App;
