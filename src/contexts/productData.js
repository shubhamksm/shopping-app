import React, { useReducer } from "react";
import { UPDATE_PRODUCT_DATA } from "./types";

export const ProductContext = React.createContext();

export const initialState = {
  banners: [],
  categories: [],
  products: [],
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
  }
  return state;
};

export const ProductProvider = (props) => {
  const [productState, dispatch] = useReducer(reducer, initialState);
  const actions = {
    updateProductData: (payload) => {
      if (payload) {
        dispatch({ type: UPDATE_PRODUCT_DATA, payload });
      }
    },
  };
  return (
    <ProductContext.Provider
      value={{
        productState,
        productActions: actions,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
