import React from "react";
import { Link } from "react-router-dom";
import "./GamesGenreSection.scss";
import GenreCard from "./GenreCard/GenreCard";
import { images } from "../../../assets/images/images";

const GamesGenreSection = () => {
  const genreCardData = [
    {
      genre: "Strategy",
      genreImg: images.Strategy,
    },
    {
      genre: "Fps",
      genreImg: images.Fps,
    },
    {
      genre: "Rpg",
      genreImg: images.Rpg,
    },
    {
      genre: "Puzzle",
      genreImg: images.Puzzle,
    },
    {
      genre: "RolePlaying",
      genreImg: images.RolePlaying,
    },
    {
      genre: "Sports",
      genreImg: images.Sports,
    },
  ];

  return (
    <div className="games-genre-section ">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="title">Games Genres</h2>
          <Link to="/" className="all-genres">
            See all genres
          </Link>
        </div>
        <div className="genre-card-wrapper">
          {genreCardData.map((card, index) => (
            <GenreCard
              key={index}
              genreImg={card.genreImg}
              genre={card.genre}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamesGenreSection;
