import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./BestSellerSlider.scss";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import GameCard from "../../../../components/GameCard/GameCard";
import { images } from "../../../../assets/images/images";

const BestSellerSlider = () => {
  const bestSellerData = [
    {
      gameImage: images.Minecraft,
      gameName: "Minecraft",
      currentPrize: "Rp 260.000",
      offerPercentage: "90%",
      actualPrize: "Rp 260.000",
    },
    {
      gameImage: images.Asphalt,
      gameName: "Asphalt 9: Legends",
      currentPrize: "Rp 260.000",
      offerPercentage: "90%",
      actualPrize: "Rp 260.000",
    },
    {
      gameImage: images.Witcher,
      gameName: "The Witcher 3",
      currentPrize: "Rp 420.000",
      offerPercentage: "25%",
      actualPrize: "Rp 590.000",
    },
    {
      gameImage: images.SurvingMars,
      gameName: "Surving Mars",
      currentPrize: "Rp 440.000",
      offerPercentage: "90%",
      actualPrize: "Rp 260.000",
    },
    {
      gameImage: images.Minecraft,
      gameName: "Minecraft",
      currentPrize: "Rp 260.000",
      offerPercentage: "90%",
      actualPrize: "Rp 260.000",
    },
    {
      gameImage: images.Asphalt,
      gameName: "Asphalt 9: Legends",
      currentPrize: "Rp 260.000",
      offerPercentage: "90%",
      actualPrize: "Rp 260.000",
    },
    {
      gameImage: images.Witcher,
      gameName: "The Witcher 3",
      currentPrize: "Rp 420.000",
      offerPercentage: "25%",
      actualPrize: "Rp 590.000",
    },
    {
      gameImage: images.SurvingMars,
      gameName: "Surving Mars",
      currentPrize: "Rp 440.000",
      offerPercentage: "90%",
      actualPrize: "Rp 260.000",
    },
  ];

  return (
    <div className="best-seller-slider">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          440: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1080: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        grabCursor={true}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        className="mySwiper"
      >
        {bestSellerData.map((card, index) => (
          <SwiperSlide key={index}>
            <GameCard
              gameImage={card.gameImage}
              gameName={card.gameName}
              currentPrize={card.currentPrize}
              offerPercentage={card.offerPercentage}
              actualPrize={card.actualPrize}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestSellerSlider;
