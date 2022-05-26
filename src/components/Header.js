import React from "react";
import { STATIC_BASE_URL } from "../api/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-2 sm:px-4 py-2.5 md:px-5 lg:px-10 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center">
          <Link
            to="/"
            className="flex items-center hover:cursor-pointer"
            tabIndex={0}
          >
            <img
              src={`${STATIC_BASE_URL}/static/images/logo.png`}
              className="mr-3 h-6 sm:h-9"
              alt="Main Logo"
            />
          </Link>
          <Link
            className="block mx-4 py-2 pr-4 pl-3 text-sm rounded cursor-pointer"
            tabIndex={0}
            aria-current="page"
            to="/product-listing"
          >
            Products
          </Link>
        </div>
        <div className="flex items-center md:order-2">
          <button
            type="button"
            className="flex mr-3 text-sm text-primary rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open Cart</span>
            <img
              className="w-8 h-8 rounded-full"
              src={`${STATIC_BASE_URL}/static/images/cart.svg`}
              alt="Cart Icon"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
