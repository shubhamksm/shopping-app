import React from "react";
import { STATIC_BASE_URL } from "../api/constants";

const ProductCard = ({ data: { name, imageURL, price, description } }) => {
  return (
    <div className="w-[300px] m-2 p-5 flex flex-col justify-between items-center bg-white rounded-lg shadow-md">
      <img
        className="h-[236px] mx-auto"
        src={`${STATIC_BASE_URL}${imageURL}`}
        alt="product image"
      />
      <h6 className="text-xl font-semibold tracking-tight text-gray-900">
        {name}
      </h6>
      <div className="my-3 font-normal text-xs md:text-sm lg:text-sm text-gray-700">
        {description}
      </div>
      <div className="flex justify-between items-center w-full">
        <span className="text-xl font-bold text-gray-900">₹{price}</span>
        <a
          tabIndex={1}
          className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
