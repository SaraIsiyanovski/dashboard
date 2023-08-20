import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BagContext } from "../BagProductsContext";
import { quantityBag } from "../functions.js/quantityBag";
import { quantityBag2 } from "../functions.js/quantityBag2";
import { ThemeContext } from "../ThemeContextComponent";

export const Bag = () => {
  const { bag, setBag, setCount2, count2 } = useContext(BagContext);
  const { classToBe2, classToBe6 } = useContext(ThemeContext);
  const [total, setTotal] = useState(0);

  const handleClick1 = (i) => {
    quantityBag(bag, setBag, i);
    setCount2(count2 + 1);
  };

  const handleClick2 = (i) => {
    quantityBag2(bag, setBag, i);
    setCount2(count2 - 1);
  };

  const remove = (i) => {
    const { id } = i;
    const filterP = bag.filter((item) => {
      return id !== item.id;
    });

    setBag(filterP);
  };

  useEffect(() => {
    if (bag.length === 0) setCount2("");
  }, [bag]);

  useEffect(() => {
    const countTotal = () => {
      const totals = bag?.map((product) => product.total * product.quantity);
      const initialValue = 0;
      const sum = totals?.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
      );
      setTotal(sum);
    };
    countTotal();
  }, [bag]);

  return (
    <div>
      {bag.length > 0 ? (
        bag.map((item) => {
          return (
            <div className={"bag-div" + " " + classToBe2}>
              <div>
                <img className="bag-img" src={item.thumbnail} />
              </div>
              <div>
                <h4>{item.title}</h4>
                <p className="small">{item.description}</p>
                <p className="p ">
                  Price: <span className="price">{item.price}$</span>
                </p>
                <p className="p">
                  Discounted price:
                  {(
                    item.price -
                    (item.discountPercentage / 100) * item.price
                  ).toFixed(2)}
                  $
                </p>
                <p className="p ">
                  Total: {(item.total * item.quantity).toFixed(2)}$
                </p>
                <p className="pink bold p">QUANTITY</p>
                <p className={"quan" + " " + classToBe2}>
                  <span onClick={() => handleClick2(item)}>-</span>
                  {item.quantity}
                  <span onClick={() => handleClick1(item)}>+</span>
                </p>
                <button onClick={() => remove(item)} className="btn">
                  Remove
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p className="empty">Your bag is empty!</p>
      )}
      {bag.length > 0 ? (
        <div>
          <div className={classToBe6}>
            <p>
              <span> Total: </span>
              {total ? total.toFixed(2) : ""} $
            </p>
          </div>
          <button className="btn bag-btn">
            <Link className="white" to={"/checkout"}>
              Proceed to checkout
            </Link>
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
