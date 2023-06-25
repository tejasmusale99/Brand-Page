import React from "react";
import flipkart from "../images/flipkart.png";
import amazon from "../images/amazon.png";
import shoes from "../images/shoe_image.png";
const Main = () => {
  return (
      <main className="main container">
        <div className="main-content">
          <h1 className="main_heading">YOUR FEET DESERVE THE BEST</h1>
          <p className="main-para_content">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="main_btns">
            <button className="primary_btn">Shop Now</button>
            <button className="secondary_btn">Category</button>
          </div>
          <div className="shopping">
            <p>Also Available On</p>
            <div className="brand-icons">
              <img src={flipkart} alt="flipkart" />
              <img src={amazon} alt="amazon" />
            </div>
          </div>
        </div>
        <div className="main-shoes_image">
          <img src={shoes} alt="" />
        </div>
      </main>
  );
};

export default Main;
