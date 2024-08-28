import React from 'react';
import ShopCard from './ShopCard';
import image1 from '../utils/image1.jpg';
import image2 from '../utils/image2.jpg';
import image3 from '../utils/image3.jpg';

const ShopPage = () => {
  const products = [
    {
      image: image1,
      title: 'Product 1',
      description: 'This is a great product.',
      price: 29.99,
      link: '#',
    },
    {
      image: image2,
      title: 'Product 2',
      description: 'This is another great product.',
      price: 49.99,
      link: '#',
    },
    {
      image: image3,
      title: 'Product 3',
      description: 'This product is also great.',
      price: 39.99,
      link: '#',
    },
    {
        image: image1,
        title: 'Product 1',
        description: 'This is a great product.',
        price: 29.99,
        link: '#',
      },
      {
        image: image2,
        title: 'Product 2',
        description: 'This is another great product.',
        price: 49.99,
        link: '#',
      },
      {
        image: image3,
        title: 'Product 3',
        description: 'This product is also great.',
        price: 39.99,
        link: '#',
      },
  ];

  return (
    <div className="container my-4">
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
