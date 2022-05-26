import React, { useContext } from "react";
import { ProductContext } from "../contexts";
import { CategoryCard, Banner } from "../components";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const {
    productState: { banners, categories },
    productActions,
  } = useContext(ProductContext);

  const handleCategoryClick = (id) => {
    productActions.updateProductData({ selectedCategory: id });
    navigate("/product-listing");
  };

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
