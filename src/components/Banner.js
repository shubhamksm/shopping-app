import React, { useContext, useEffect } from "react";
import { ProductContext } from "../contexts";
import apiClient from "../api";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { STATIC_BASE_URL } from "../api/constants";

const Banner = () => {
  const { productState, productActions } = useContext(ProductContext);

  const getAllData = async () => {
    const { data: banners } = await apiClient.get("/banners");
    const { data: categories } = await apiClient.get("/categories");
    productActions.updateProductData({ banners, categories });
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      onChange={() => {}}
      onClickItem={() => {}}
    >
      {productState.banners.map((banner) => (
        <div key={banner.id}>
          <img src={`${STATIC_BASE_URL}${banner.bannerImageUrl}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
