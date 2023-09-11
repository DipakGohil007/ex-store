import React from "react";
import "./GenreCard.scss";

const GenreCard = ({ genre, genreImg }) => {
  return (
    <div className="genre-card">
      <img src={genreImg} alt="genre img" />
      <p className="genre">{genre}</p>
    </div>
  );
};

export default GenreCard;
