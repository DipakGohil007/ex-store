import React from "react";
import "./HeaderSection.scss";
// import { Button } from "antd";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { Button } from "antd";

const HeaderSection = () => {
  return (
    <div className="header-section">
      {/* <div className="content">
        <h1 className="heading">MultiVersus</h1>
        <p className="description">
          Now officially free to play for all Xbox users.
        </p>
        <Button type="primary">Get in now!</Button>
      </div> */}

      <Swiper
        navigation={true}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
      >
        <SwiperSlide className="banner1">
          <div className="content">
            <h1 className="heading">MultiVersus</h1>
            <p className="description">
              Now officially free to play for all Xbox users.
            </p>
            <Button type="primary">Get in now!</Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="banner2">
          <div className="content">
            <h1 className="heading">Best Offers</h1>
            <p className="description">Save up to 85% on select Xbox games.</p>
            <Button type="primary">Get in now!</Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="banner3">
          <div className="content">
            <h1 className="heading">Ultimate Sale</h1>
            <p className="description">
              Get it now with 34% discount for all users.
            </p>
            <Button type="primary">Get in now!</Button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeaderSection;
