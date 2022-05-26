import React from "react";
import classNames from "classnames";

const CategorySelect = ({
  categories,
  selectedCategory,
  isMobileView,
  handleCategoryClick,
}) => {
  return isMobileView ? (
    <div className="p-2.5">
      <select
        id="categories"
        onChange={(e) => handleCategoryClick(e.target.value)}
        value={selectedCategory}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="null">All Options</option>
        {categories.map(({ id, name }) => (
          <option value={id} key={id}>
            {name}
          </option>
        ))}
      </select>
    </div>
  ) : (
    <ul className="text-xs font-medium text-gray-900 bg-white m-2 rounded-lg">
      {categories.map(({ id, name }) => {
        return (
          <li key={id}>
            <button
              type="button"
              aria-current={classNames(id === selectedCategory && "true")}
              tabIndex={0}
              className={classNames(
                id === selectedCategory && "bg-blue-700 text-white",
                "block w-[150px] px-4 py-2 border hover:border-blue-400 border-gray-200 cursor-pointer"
              )}
              onClick={() => handleCategoryClick(id)}
            >
              {name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default CategorySelect;
