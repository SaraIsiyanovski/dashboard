import { useContext, useEffect, useRef, useState } from "react";
import { PiRocketDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useData } from "../Hooks/useData";
import { ProductsCom } from "../ProductsCom";
import { SingleImage } from "./Single/SingleImage";
import { BsSearch } from "react-icons/bs";
import { Icon1 } from "../Icon";
import { ThemeContext } from "../ThemeContextComponent";
import { SingleProduct } from "./Single/SingleProduct";
import axios from "axios";
import {
  FavouriteProductsContext,
  ProductContext,
} from "../FavouriteProductsContext";
import { ProductGetContext } from "../ProductGetComponent";

const Products = () => {
  const [filtered, setFiltered] = useState([]);
  const [searchInput, setSearchInput] = useState();
  const [categoryInput, setCategoryInput] = useState();

  const [open, setOpen] = useState(false);
  const [activeP, setActiveP] = useState();
  const [products, setProducts] = useState([]);

  const url = "https://dummyjson.com/products";
  const { error } = useData(url);

  const promise2 = async () => {
    try {
      const axios1 = await axios.get(url);
      axios1.data.products.map((post) => {
        post.favourite = false;
        post.quantity = 1;
        post.total =
          (post.price - (post.discountPercentage / 100) * post.price).toFixed(
            2
          ) * post.quantity;
      });
      return setProducts(axios1.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    promise2();
  }, [url]);

  // za filtriranje
  useEffect(() => {
    if (!products) return null;
    const filterP = products.products?.filter((product) => {
      return product.category == categoryInput;
    });
    setFiltered(filterP);
  }, [categoryInput]);

  useEffect(() => {
    if (!products) return null;
    const searchp = products.products?.filter((product) => {
      if (product.title.includes(searchInput)) {
        return product;
      }
    });

    setFiltered(searchp);
  }, [searchInput]);

  // // za options

  const categoryArr = products.products?.map((category) => category.category);
  const reducedArr = [...new Set(categoryArr)];

  // za sortiranje
  function sortByPrice(a, b) {
    return a.price - b.price;
  }

  function sortByPrice2(a, b) {
    return b.price - a.price;
  }

  function resetPrice(products) {
    return products?.reverse();
  }

  function change(e) {
    const sortPrice = e.target.value;
    let sortedProducts = [...products?.products];

    if (sortPrice === "lowest") {
      const newArr1 = sortedProducts.sort(sortByPrice);
      setFiltered(newArr1);
    } else if (sortPrice === "highest") {
      const newArr2 = sortedProducts.sort(sortByPrice2);
      setFiltered(newArr2);
    } else {
      const newArr3 = resetPrice(sortedProducts);
      setFiltered(newArr3);
    }
  }

  const openModal = (product) => {
    setOpen(true);
    setActiveP(product);
  };

  return (
    <>
      <div>
        <h1>Products</h1>
      </div>
      <div className="inputs">
        <div className="divs-select">
          <select
            className="select"
            onChange={(e) => {
              setCategoryInput(e.target.value);
            }}
            defaultValue="select category"
          >
            <option className="white" value="select category" disabled>
              Select category
            </option>
            {reducedArr.map((x) => {
              return <option value={x}>{x}</option>;
            })}
          </select>
          <select className="select" onChange={(alex) => change(alex)}>
            <option value="">Sort by</option>
            <option value="lowest">Lowest Price</option>
            <option value="highest">Highest Price</option>
          </select>
        </div>
        <div className="inputs">
          <input
            className="search-input"
            onChange={(e) => setSearchInput(e.target.value)}
            type="search"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="products">
        {open && activeP && (
          <SingleProduct setOpen={setOpen} product={activeP} open={open} />
        )}
        {error ? (
          <p>Error</p>
        ) : filtered ? (
          filtered?.map((p) => {
            return <ProductsCom product={p} openModal={openModal} />;
          })
        ) : (
          products.products?.map((p) => {
            return <ProductsCom openModal={openModal} product={p} />;
          })
        )}
      </div>
    </>
  );
};

export default Products;
