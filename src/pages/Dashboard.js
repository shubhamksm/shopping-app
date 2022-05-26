import React, { useContext, useEffect } from "react";
import apiClient from "../api";
import { ProductContext } from "../contexts";
import { CategoryCard, Banner } from "../components";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const {
    productState: { banners, categories },
    productActions,
  } = useContext(ProductContext);

  const getAllData = async () => {
    const { data: banners } = await apiClient.get("/banners");
    const { data: categories } = await apiClient.get("/categories");
    productActions.updateProductData({ banners, categories });
  };

  const handleCategoryClick = (id) => {
    productActions.updateProductData({ selectedCategory: id });
    navigate("/product-listing");
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <Banner banners={banners} />
      {categories
        .filter((item) => item.enabled)
        .map((category, index) => (
          <CategoryCard
            key={category.id}
            category={category}
            index={index}
            handleCategoryClick={handleCategoryClick}
          />
        ))}
    </>
  );
};

export default Dashboard;
