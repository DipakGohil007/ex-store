import React from "react";
import "./ExpertiseCard.scss";

const ExpertiseCard = ({ Icon, Description }) => {
  return (
    <div className="expertise-card">
      <div className="expertise-icon">{Icon}</div>
      <p className="expertise-desc">{Description}</p>
    </div>
  );
};

export default ExpertiseCard;
