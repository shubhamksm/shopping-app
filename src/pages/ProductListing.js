import React, { useContext, useEffect, useState } from "react";
import apiClient from "../api";
import { ProductContext } from "../contexts";
import { ProductCard } from "../components";

const ProductListing = () => {
  const {
    productState: { products, selectedCategory },
    productActions,
  } = useContext(ProductContext);

  const [filteredData, updateFilteredData] = useState([]);

  const getAllData = async () => {
    const { data: banners } = await apiClient.get("/banners");
    const { data: products } = await apiClient.get("/products");
    productActions.updateProductData({ banners, products });
  };

  const updateData = () => {
    if (selectedCategory === null) {
      updateFilteredData(products);
    } else {
      updateFilteredData(
        products.filter((product) => product.category === selectedCategory)
      );
    }
  };

  useEffect(() => {
    updateData();
  }, [selectedCategory, products]);

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="flex flex-wrap mx-auto px-12">
      {filteredData.map((data) => (
        <ProductCard key={data.id} data={data} />
      ))}
    </div>
  );
};

export default ProductListing;
