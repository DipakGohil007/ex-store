import React from "react";
import { Button } from "antd";
import "./ComingSoonCard.scss";

const ComingSoonCard = ({ gameImg, title, btnValue, medium }) => {
  return (
    <div className={`coming-soon-card ${medium ? "medium" : ""}`}>
      <img src={gameImg} alt="Game" />
      <div className="wrapper">
        <p className="title">{title}</p>
        <Button>{btnValue}</Button>
      </div>
    </div>
  );
};

export default ComingSoonCard;
