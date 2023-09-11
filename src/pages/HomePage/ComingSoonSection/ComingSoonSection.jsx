import React from "react";
import ComingSoonCard from "./ComingSoonCard/ComingSoonCard";
import { images } from "../../../assets/images/images";
import "./ComingSoonSection.scss";

const ComingSoonSection = () => {
  return (
    <div className="coming-soon-section">
      <div className="container">
        <h2 className="main-title">Coming Soon</h2>
        <div className="game-cards-galary">
          <div className="large-cards-wrapper">
            <ComingSoonCard
              gameImg={images.Cod}
              title="Call of Duty®: Modern Warfare® II"
              btnValue="Pre-order now!"
            />
            <ComingSoonCard
              gameImg={images.Nba2k22}
              title="NBA 2k22"
              btnValue="Pre-order now!"
            />
          </div>
          <div className="med-cards-wrapper">
            <ComingSoonCard
              gameImg={images.Fifa}
              title="Fifa 2k23"
              btnValue="Pre-order now!"
              medium={true}
            />
            <ComingSoonCard
              gameImg={images.ResidentEvil}
              title="Resident Evil 4"
              btnValue="Pre-order now!"
              medium={true}
            />
            <ComingSoonCard
              gameImg={images.Alien}
              title="Alien: Dark Descent"
              btnValue="Pre-order now!"
              medium={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonSection;
