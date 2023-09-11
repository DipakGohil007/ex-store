import React from "react";
import { Link } from "react-router-dom";
import "./PopularGamesSection.scss";
import { images } from "../../../assets/images/images";
import GameCard from "../../../components/GameCard/GameCard";

const PopularGamesSection = () => {
  const popularGamesData = [
    {
      gameImage: images.Gta5,
      gameName: "GTA V",
      currentPrize: "Rp 354.000",
      offerPercentage: "40%",
      actualPrize: "Rp 590.000",
    },
    {
      gameImage: images.roblox,
      gameName: "ROBLOX",
      currentPrize: "Rp 300.000",
      offerPercentage: "40%",
      actualPrize: "Rp 590.000",
    },
    {
      gameImage: images.Nba,
      gameName: "NBA 2K22",
      currentPrize: "Rp 297.000",
      offerPercentage: "70%",
      actualPrize: "Rp 990.000",
    },
    {
      gameImage: images.Dbd,
      gameName: "Dead by Daylight",
      currentPrize: "Rp 214.500",
      offerPercentage: "50%",
      actualPrize: "Rp 429.000",
    },
    {
      gameImage: images.Ark,
      gameName: "ARK: Survival Evolved",
      currentPrize: "Rp 430.000",
      offerPercentage: "10%",
      actualPrize: "Rp 590.000",
    },
    {
      gameImage: images.RocketLeague,
      gameName: "Rocket League",
      currentPrize: "Rp 354.000",
      offerPercentage: "40%",
      actualPrize: "Rp 590.000",
    },
    {
      gameImage: images.Forza,
      gameName: "Forza Horizon 5",
      currentPrize: "Rp 356.000",
      offerPercentage: "60%",
      actualPrize: "Rp 890.000",
    },
    {
      gameImage: images.Cities,
      gameName: "Cities: Skylines",
      currentPrize: "Rp 590.000",
      offerPercentage: "40%",
      actualPrize: "Rp 590.000",
    },
  ];

  return (
    <div className="popular-games-section">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="title">Popular Games</h2>
          <Link to="/" className="browse-games">
            Browse all games
          </Link>
        </div>
        <div className="popular-games-wrapper">
          {popularGamesData.map((card, index) => (
            <GameCard
              key={index}
              gameImage={card.gameImage}
              gameName={card.gameName}
              currentPrize={card.currentPrize}
              offerPercentage={card.offerPercentage}
              actualPrize={card.actualPrize}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularGamesSection;
