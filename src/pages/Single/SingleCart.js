import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useData } from "../../Hooks/useData";
import { LogInContext } from "../../LogInContextComponent";
import { ThemeContext } from "../../ThemeContextComponent";

export const SingleCart = () => {
  const { user } = useContext(LogInContext);
  const { id } = user;

  const { classToBe2 } = useContext(ThemeContext);

  const url = `https://dummyjson.com/carts/${id}`;
  const { data } = useData(url);

  if (!data) return null;
  return (
    <div key={data.id}>
      <div className={"table" + " " + classToBe2}>
        <h3 className="tb-h">{data.userId}</h3>
        <div className="head head-p big bold">
          <p className="id-p">Id</p>
          <p className="tit-p">Title</p>
          <p className="id-p">Price</p>
          <p>Quantity</p>
          <p className="id-p">Total</p>
          <p>Discount (%)</p>
          <p>Price</p>
        </div>
        {data.products.map((product) => {
          return (
            <div className="head">
              <p className="id-p">{product.id}</p>
              <p className="tit-p">{product.title}</p>
              <p className="id-p">{product.price}</p>
              <p>{product.quantity}</p>
              <p className="id-p">{product.total}</p>
              <p>{product.discountPercentage}</p>
              <p>{product.discountedPrice}</p>
            </div>
          );
        })}
        <div className="total">
          <div className="table-p">
            <span>Total:</span>
            <p>{data.discountedTotal}$</p>
          </div>
        </div>
      </div>
      <div className="checkout">
        <button className="btn check">
          <Link className="link" to={"/checkout"}>
            Checkout
          </Link>
        </button>
      </div>
      <button className="btn check-back">
        <Link className="white " to={`/carts/user/${id}`}>
          Back
        </Link>
      </button>
    </div>
  );
};
