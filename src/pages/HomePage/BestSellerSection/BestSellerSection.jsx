import React from "react";
import "./BestSellerSection.scss";
import BestSellerSlider from "./BestSellerSlider/BestSellerSlider";

const BestSellerSection = () => {
  return (
    <div className="best-seller-section">
      <div className="container">
        <h2 className="title">Best Seller Games</h2>
        <div className="best-seller">
          <BestSellerSlider />
        </div>
      </div>
    </div>
  );
};

export default BestSellerSection;
