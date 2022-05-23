import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { STATIC_BASE_URL } from "../api/constants";

const Banner = ({ banners }) => {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      onChange={() => {}}
      onClickItem={() => {}}
    >
      {banners.map((banner) => (
        <div key={banner.id}>
          <img src={`${STATIC_BASE_URL}${banner.bannerImageUrl}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
