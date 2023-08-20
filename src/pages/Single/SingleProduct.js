import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useData } from "../../Hooks/useData";
import { SingleImage } from "./SingleImage";
import { ThemeContext } from "../../ThemeContextComponent";
import { Bag } from "../Bag";
import { BagContext } from "../../BagProductsContext";
import { quantityBag } from "../../functions.js/quantityBag";
import { AiOutlineClose } from "react-icons/ai";

export const SingleProduct = ({ setOpen, open, product }) => {
  const { classToBe2 } = useContext(ThemeContext);
  const { bag, setBag, count2, setCount2, data2 } = useContext(BagContext);

  const handleClick = (prod) => {
    const { id } = prod;
    const findProd = bag.find((product) => product.id === id);

    if (findProd) {
      quantityBag(bag, setBag, prod);
      const newArr = [...bag];
      const product = newArr.find((p) => p.id === id);
      product.totalPrice = (
        prod.price -
        (prod.discountPercentage / 100) * prod.price
      ).toFixed(2);
    } else {
      setBag([...bag, prod]);
    }
    setCount2(Number(count2 + 1));
  };

  console.log(bag);
  if (!product) return null;
  return (
    <div className="darkBack2">
      <div className="centered">
        <div className={"s-prod" + " " + "divs" + " " + classToBe2}>
          <div className="x-div">
            <AiOutlineClose className="close" onClick={() => setOpen(false)} />
          </div>
          <div>
            <SingleImage data={product.images} />
          </div>
          <div className="single-p">
            <div>
              <h2 className="title-p">{product?.title}</h2>
              <h4 className="title-p">{product?.brand}</h4>
            </div>
            <div className="prod-p">
              <p className="rose">"{product?.description}"</p>
              <p>Rating: {product?.rating}</p>
              <p>
                <span className="first">Price:</span>
                {product?.price}$
              </p>
              <p>
                <span className="first">Discount:</span>
                <span className="dis">{product?.discountPercentage}%</span>
              </p>
            </div>
            <div>
              <button className="btn" onClick={() => handleClick(product)}>
                Add to bag
              </button>
              <div>
                <button className="btn" onClick={() => setOpen(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
