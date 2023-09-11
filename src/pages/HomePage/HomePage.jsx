import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeaderSection from "./HeaderSection/HeaderSection";
import WhyUsSection from "./WhyUsSection/WhyUsSection";
import GamesGenreSection from "./GamesGenreSection/GamesGenreSection";
import BestSellerSection from "./BestSellerSection/BestSellerSection";
import PopularGamesSection from "./PopularGamesSection/PopularGamesSection";
import ComingSoonSection from "./ComingSoonSection/ComingSoonSection";
import UserReviewSection from "./UserReviewSection/UserReviewSection";
import FooterSection from "./FooterSection/FooterSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeaderSection />
      <WhyUsSection />
      <GamesGenreSection />
      <BestSellerSection />
      <PopularGamesSection />
      <ComingSoonSection />
      <UserReviewSection />
      <FooterSection />
    </>
  );
};

export default HomePage;
