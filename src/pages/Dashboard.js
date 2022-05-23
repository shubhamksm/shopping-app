import React, { useContext, useEffect } from "react";
import apiClient from "../api";
import { ProductContext } from "../contexts";
import Banner from "../components/Banner";

const Dashboard = () => {
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
    <>
      <Banner banners={productState.banners} />
    </>
  );
};

export default Dashboard;
