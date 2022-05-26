import React from "react";
import { STATIC_BASE_URL } from "../api/constants";
import classNames from "classnames";

const CategoryCard = ({
  category: { imageUrl, id, name, description },
  index,
  handleCategoryClick,
}) => {
  return (
    <div
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
          onClick={() => handleCategoryClick(id)}
          className="text-white text-xs md:text-sm lg:text-sm bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg px-3 py-2 mr-2 mb-2"
        >{`Explore ${name}`}</button>
      </div>
    </div>
  );
};

export default CategoryCard;
