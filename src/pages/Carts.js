import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useData } from "../Hooks/useData";
import { LogInContext } from "../LogInContextComponent";
import { ThemeContext } from "../ThemeContextComponent";

const Carts = () => {
  const { user } = useContext(LogInContext);
  const { id } = user;
  console.log();
  const url = `https://dummyjson.com/carts/user/${id}`;
  const { data, error } = useData(url);
  const { classToBe2 } = useContext(ThemeContext);

  return (
    <>
      <div>
        <h1>Carts</h1>
      </div>
      <div className="carts">
        {error ? (
          <p>Error</p>
        ) : (
          data?.carts.map((cart) => {
            return (
              <div
                className={"cart-div" + " " + "divs" + " " + classToBe2}
                key={cart.id}
              >
                <h3 className="title">{cart.userId}</h3>

                <div className="prices">
                  <p>
                    <span className="first">Total:</span>
                    {cart.total}$
                  </p>
                  <p>
                    <span className="first">Discounted total:</span>
                    <span className="dis">{cart.discountedTotal}$</span>
                  </p>
                  <p>
                    <span className="first">Total products:</span>
                    <span className="bold">{cart.totalProducts}</span>
                  </p>
                </div>
                <Link to={`/carts/${cart.id}`}>
                  <button className="btn cart-btn">Cart</button>
                </Link>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Carts;
