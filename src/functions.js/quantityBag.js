import React, { useContext } from "react";

export const quantityBag = (x, y, i) => {
  const newList = [...x];
  const newProd = newList.find((product) => product.id === i.id);

  newProd.quantity = newProd.quantity + 1;
  y(newList);
};
