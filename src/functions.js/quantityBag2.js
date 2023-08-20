import React from "react";

export const quantityBag2 = (x, y, i) => {
  const newList = [...x];
  const newProd = newList.find((product) => product.id === i.id);
  const filterP = newList.filter((item) => {
    return i.id !== item.id;
  });

  newProd.quantity = newProd.quantity ? newProd.quantity - 1 : "";
  if (newProd.quantity === 0) {
    y(filterP);
  } else {
    y(newList);
  }
};
