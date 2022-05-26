import React, { useContext, useEffect } from "react";
import apiClient from "../api";
import { ProductContext } from "../contexts";
import Banner from "../components/Banner";
import { STATIC_BASE_URL } from "../api/constants";
import classNames from "classnames";

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
      {productState.categories
        .filter((item) => item.enabled)
        .map((category, index) => {
          const { imageUrl, id, name, description } = category;
          return (
            <div
              key={id}
              className={classNames(
                index % 2 === 0 && "flex-row-reverse",
                "flex items-center shadow-md my-8 p-4 hover:shadow-lg"
              )}
            >
              <img
                className="object-cover md:h-48 lg:h-48 h-24"
                src={`${STATIC_BASE_URL}${imageUrl}`}
              />
              <div className="flex flex-col items-center justify-between w-full">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  {name}
                </h5>
                <p className="mb-3 font-normal text-xs md:text-sm lg:text-sm text-gray-700">
                  {description}
                </p>
                <button
                  type="button"
                  className="text-white text-xs md:text-sm lg:text-sm bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg px-3 py-2 mr-2 mb-2"
                >{`Explore ${name}`}</button>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Dashboard;
