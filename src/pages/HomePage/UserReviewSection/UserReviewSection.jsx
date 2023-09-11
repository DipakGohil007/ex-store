import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./UserReviewSection.scss";
import ReviewCard from "./ReviewCard/ReviewCard";
import { images } from "../../../assets/images/images";

const UserReviewSection = () => {
  const UserReviewData = [
    {
      userImage: images.User1,
      userName: "Jacob Jones",
      userRating: 4,
      userReview:
        "Navigating through the XStore website has been a pleasant experience. The user interface is clean and intuitive. ",
    },
    {
      userImage: images.User2,
      userName: "Cameron Williamson",
      userRating: 5,
      userReview:
        "My only suggestion would be to include more sorting options for the game listings, such as by genre or price range.",
    },
    {
      userImage: images.User3,
      userName: "Kristin Watson",
      userRating: 4,
      userReview:
        "The search functionality works well and helps me quickly locate specific titles. The website's design is visually appealing.",
    },
    {
      userImage: images.User1,
      userName: "Jacob Jones",
      userRating: 4,
      userReview:
        "Navigating through the XStore website has been a pleasant experience. The user interface is clean and intuitive. ",
    },
    {
      userImage: images.User2,
      userName: "Cameron Williamson",
      userRating: 5,
      userReview:
        "My only suggestion would be to include more sorting options for the game listings, such as by genre or price range.",
    },
    {
      userImage: images.User3,
      userName: "Kristin Watson",
      userRating: 4,
      userReview:
        "The search functionality works well and helps me quickly locate specific titles. The website's design is visually appealing.",
    },
  ];

  return (
    <div className="user-review-section">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="title">12,000+ gamers satisfied</h2>
          <p className="description">
            Let's hear what our customers have to say about their satisfaction
            with our services and products.
          </p>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={27}
          pagination={{
            dynamicBullets: true,
            dynamicMainBullets: 3,
          }}
          grabCursor={true}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            840: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="mySwiper"
        >
          {UserReviewData.map((card, index) => (
            <SwiperSlide key={index}>
              <ReviewCard
                userImage={card.userImage}
                userName={card.userName}
                userRating={card.userRating}
                userReview={card.userReview}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default UserReviewSection;
