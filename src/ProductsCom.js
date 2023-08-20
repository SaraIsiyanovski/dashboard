import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "./FavouriteProductsContext";
import { ThemeContext } from "./ThemeContextComponent";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export const ProductsCom = ({ product, openModal }) => {
  const { classToBe2 } = useContext(ThemeContext);

  const { productt, setProductt, count, setCount } = useContext(ProductContext);

  const handleClick = (item) => {
    const { id } = item;
    console.log(id);
    if (!item.favourite) {
      item.favourite = true;
      setProductt([...productt, item]);
      setCount(Number(count + 1));
    } else {
      item.favourite = false;
      setCount(Number(count - 1));
      const filterPost = productt.filter((prod) => {
        return prod.id !== id;
      });
      setProductt(filterPost);
    }
  };

  useEffect(() => {
    if (productt.length === 0) setCount("");
  }, [productt]);

  return (
    <div
      className={"product-div" + " " + "divs" + " " + classToBe2}
      key={product.id}
    >
      <h3 className="title">{product.title}</h3>

      <img
        onClick={() => openModal(product)}
        className="pr-img"
        src={product.images[1]}
      />

      <div className="prices">
        <p>
          <span className="first">Price:</span>
          {product.price}$
        </p>
        <p>
          <span className="first">Discount:</span>
          <span className="dis">{product.discountPercentage}%</span>
        </p>
        <p>
          <span className="first">Total:</span>
          <span className="bold pink">
            {(
              product.price -
              (product.discountPercentage / 100) * product.price
            ).toFixed(2)}
            $
          </span>
        </p>
      </div>
    </div>
  );
};
