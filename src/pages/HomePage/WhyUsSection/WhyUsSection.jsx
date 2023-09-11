import React from "react";
import ExpertiseCard from "./ExpertiseCard/ExpertiseCard";
import { ReactComponent as IconRemote } from "../../../assets/svgs/IconRemote.svg";
import { ReactComponent as IconVerified } from "../../../assets/svgs/IconVerified.svg";
import { ReactComponent as IconXbox } from "../../../assets/svgs/IconXbox.svg";
import "./WhyUsSection.scss";

const WhyUsSection = () => {
  return (
    <div className="why-us-section ">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="title">Why eXStore?</h2>
          <p className="description">
            We are the official Xbox partner in Indonesia that provides official
            video games.
          </p>
        </div>
        <div className="expertise-wrapper">
          <ExpertiseCard
            Icon={<IconRemote />}
            Description="5000+ video games available"
          />
          <ExpertiseCard
            Icon={<IconVerified />}
            Description="Trusted by 100.000+ customers"
          />
          <ExpertiseCard
            Icon={<IconXbox />}
            Description="Available for all Xbox consoles"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
