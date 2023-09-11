import React from "react";
import { Rate } from "antd";
import "./ReviewCard.scss";

const ReviewCard = ({ userImage, userName, userRating, userReview }) => {
  return (
    <div className="review-card">
      <div className="user-image">
        <img src={userImage} alt="User" />
      </div>
      <div className="user-review-wrapper">
        <h4 className="user-name">{userName}</h4>
        <Rate disabled allowHalf defaultValue={userRating} />
        <p className="user-review">{userReview}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
