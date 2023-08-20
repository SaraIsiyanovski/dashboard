import React, { useContext, useState } from "react";
import { useData } from "../Hooks/useData";
import { LogInContext } from "../LogInContextComponent";
import { AiOutlineClose } from "react-icons/ai";

export const ModalWindow = ({ setState, user }) => {
  const { id } = user;
  const url = `https://dummyjson.com/carts/user/${id}`;
  const { data, error } = useData(url);
  console.log(data);

  return (
    <div className="darkBack" onClick={() => setState(false)}>
      <div className="centered">
        <div className="modal">
          <div className="modal-div">
            <div className="x-div">
              <AiOutlineClose
                className="close"
                onClick={() => setState(false)}
              />
            </div>
            <p className="bold mar pink bigger">Contact</p>
            <p className="small">Phone: {user.phone}</p>
            <p className="small">E-mail: {user.email}</p>
            {data?.carts.length > 0 ? (
              data?.carts.map((cart) => {
                return (
                  <div>
                    <div className="border">
                      <p className="bold mar ">Cart</p>
                      <p>
                        {" "}
                        Products:
                        {cart.products.map((product) => {
                          return <li> {product.title}</li>;
                        })}
                      </p>
                      <p>
                        <span className="bold">Total products:</span>
                        {cart.totalQuantity}{" "}
                      </p>
                      <p>
                        <span className="bold">Total: </span> {cart.total} $
                      </p>
                      <p>
                        <span className="bold">Discounted total:</span>{" "}
                        {cart.discountedTotal} $
                      </p>
                    </div>
                    <p className="mar">
                      <span className="bold pink">Shipping address: </span>
                      <span>{user.address.address}</span>
                    </p>
                  </div>
                );
              })
            ) : (
              <p className="pink bigger">{user.firstName}'s cart is empty!</p>
            )}{" "}
          </div>
          <button className="btn" onClick={() => setState(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
