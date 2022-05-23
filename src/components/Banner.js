import React, { useContext, useEffect } from "react";
import { ProductContext } from "../contexts";
import apiClient from "../api";

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

  return <div>Banner will come here</div>;
};

export default Banner;
