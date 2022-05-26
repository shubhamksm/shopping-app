import React, { useContext, useEffect } from "react";
import { Header, Footer } from "./components";
import { Dashboard, ProductListing } from "./pages";
import { Routes, Route } from "react-router-dom";
import { ProductContext } from "./contexts";
import apiClient from "./api";

function App() {
  const { productActions } = useContext(ProductContext);

  const checkView = () => {
    const matches = window.matchMedia("(max-width: 500px)").matches;
    productActions.updateProductData({ isMobileView: matches });
  };

  const getAllData = async () => {
    const { data: banners } = await apiClient.get("/banners");
    const { data: products } = await apiClient.get("/products");
    const { data: categories } = await apiClient.get("/categories");
    productActions.updateProductData({ banners, products, categories });
  };

  useEffect(() => {
    getAllData();
    checkView();
    window.addEventListener("resize", checkView);
    return () => {
      window.removeEventListener("resize", checkView);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="product-listing" element={<ProductListing />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
