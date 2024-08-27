import React from "react";
import image1 from "../utils/image1.jpg";
import image2 from "../utils/image2.jpg";
import image3 from "../utils/image3.jpg";
const Cards = () => {
  return (
    <div className="container">
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card">
            <img src={image1} class="card-img-top" alt="image1" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={image2} class="card-img-top" alt="image2" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Cards;
