import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext(null);

export const FavouriteProductsContext = ({ children }) => {
  const [productt, setProductt] = useState([]);
  const [count, setCount] = useState(null);
  const [data, setData] = useState([]);

  const value = {
    productt,
    setProductt,
    data,
    count,
    setCount,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
