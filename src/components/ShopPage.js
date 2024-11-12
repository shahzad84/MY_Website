import React from 'react';
import ShopCard from './ShopCard';
import image1 from '../utils/image1.jpg';
import image2 from '../utils/image2.jpg';
// import image3 from '../utils/image3.jpg';
import './ShopPage.css'; // Add a separate CSS file for styling

const ShopPage = () => {
  const products = [
    {
      image: image1,
      title: 'YouTube Clone',
      description: 'This is a News website.',
      // price: 29.99,
      link: 'https://grand-babka-c9e878.netlify.app/',
    },
    {
      image: image2,
      title: 'Buy Homes',
      description: 'Here you buy your dream home',
      // price: 49.99,
      link: 'https://verdant-licorice-777cb8.netlify.app/',
    },
    {
      image: image1,
      title: 'YouTube Clone',
      description: 'This is a News website.',
      // price: 29.99,
      link: 'https://grand-babka-c9e878.netlify.app/',
    },
    {
      image: image2,
      title: 'Buy Homes',
      description: 'Here you buy your dream home',
      // price: 49.99,
      link: 'https://verdant-licorice-777cb8.netlify.app/',
    },
    {
      image: image1,
      title: 'YouTube Clone',
      description: 'This is a News website.',
      // price: 29.99,
      link: 'https://grand-babka-c9e878.netlify.app/',
    },
    {
      image: image2,
      title: 'Buy Homes',
      description: 'Here you buy your dream home',
      // price: 49.99,
      link: 'https://verdant-licorice-777cb8.netlify.app/',
    },
  ];

  return (
    <div className="container shop-page-container my-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {products.map((product, index) => (
          <ShopCard
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            link={product.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
