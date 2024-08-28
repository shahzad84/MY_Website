import React from 'react';
import Cards from './Cards';
import Small_cards from './Small_cards';
import Carousel from './Carousel';
import './Home.css'; // Ensure to import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <Carousel />
      <div className="container">
        <Small_cards />
        <Cards />
      </div>
    </div>
  );
};

export default Home;
