import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const BagContext = createContext(null);

export const BagProductsContext = ({ children }) => {
  const [bag, setBag] = useState([]);
  const url = "https://dummyjson.com/posts";

  const [error1, setError1] = useState();
  const [count2, setCount2] = useState(null);

  const value = { bag, setBag, count2, setCount2 };

  return <BagContext.Provider value={value}>{children}</BagContext.Provider>;
};
