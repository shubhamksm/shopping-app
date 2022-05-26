import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../contexts";
import { CategorySelect, ProductCard } from "../components";
import classNames from "classnames";

const ProductListing = () => {
  const {
    productState: { products, selectedCategory, categories, isMobileView },
    productActions,
  } = useContext(ProductContext);

  const [filteredData, updateFilteredData] = useState([]);

  const updateData = () => {
    if (selectedCategory === null) {
      updateFilteredData(products);
    } else {
      updateFilteredData(
        products.filter((product) => product.category === selectedCategory)
      );
    }
  };

  const handleCategoryClick = (id) => {
    productActions.updateProductData({
      selectedCategory: id === "null" ? null : id,
    });
  };

  useEffect(() => {
    updateData();
  }, [selectedCategory, products]);

  return (
    <div className={classNames("flex", isMobileView && "flex-col")}>
      <CategorySelect
        categories={categories}
        isMobileView={isMobileView}
        selectedCategory={selectedCategory}
        handleCategoryClick={handleCategoryClick}
      />
      <div className="flex items-center justify-center flex-wrap mx-auto">
        {filteredData.map((data) => (
          <ProductCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
