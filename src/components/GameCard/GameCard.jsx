import React from "react";
import "./GameCard.scss";

const GameCard = ({
  gameImage,
  gameName,
  currentPrize,
  offerPercentage,
  actualPrize,
}) => {
  return (
    <div className="game-card">
      <div className="game-img">
        <img src={gameImage} alt="Game" />
      </div>
      <div className="game-description">
        <p className="game-name">{gameName}</p>
        <div className="game-prize">
          <p className="current-prize">{currentPrize}</p>
          {/* <div className="offer">
            <p className="offer-percentage">{offerPercentage}</p>
            <p className="actual-prize">{actualPrize}</p>
          </div> */}

          <div
            className={`offer ${offerPercentage || actualPrize ? "" : "hide"}`}
          >
            {offerPercentage && (
              <p className="offer-percentage">{offerPercentage}</p>
            )}
            {actualPrize && <p className="actual-prize">{actualPrize}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
