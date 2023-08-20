import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const ProductGetContext = createContext(null);
export const ProductGetComponent = ({ children }) => {
  const [data, setData] = useState([]);

  const url = "https://dummyjson.com/products";

  const promise = async () => {
    try {
      const axios1 = await axios.get(url);
      axios1.data.products.map((product) => {
        product.favourite = false;
        product.quantity = 1;
        product.total =
          (
            product.price -
            (product.discountPercentage / 100) * product.price
          ).toFixed(2) * product.quantity;
      });
      return setData(axios1.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    promise();
  }, [url]);

  const value = { data, setData };
  return (
    <ProductGetContext.Provider value={value}>
      {children}
    </ProductGetContext.Provider>
  );
};
