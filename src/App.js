import React, { useContext, useState } from "react";

import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Carts from "./pages/Carts";
import { Checkout } from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Posts";
import Products from "./pages/Products";
import Quotes from "./pages/Quotes";
import { SingleCart } from "./pages/Single/SingleCart";
import { SingleProduct } from "./pages/Single/SingleProduct";
import ToDos from "./pages/ToDos";
import Users from "./pages/Users";
import "../src/style/app.css";
import Nav from "./Nav";
import { ThemeContext } from "./ThemeContextComponent";
import { Bag } from "./pages/Bag";
import { LogIn } from "./pages/LogIn";
import { LogInContext } from "./LogInContextComponent";
import { Modal } from "bootstrap";
import { ModalWindow } from "./pages/Modal";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { ModalMenu } from "./pages/ModalMenu";
import { MenuContext } from "./MenuContextComponent";

export const App = () => {
  const { classToBe } = useContext(ThemeContext);
  const { user } = useContext(LogInContext);
  const { menuOpen, setMenuOpen } = useContext(MenuContext);
  console.log(menuOpen);

  return (
    <div className={classToBe}>
      <Nav />
      <div className="sec">
        {menuOpen && <ModalMenu />}
        <Header />
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="" element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/posts/user/:id" element={<Posts />} />
            <Route path="/todos/user/:id" element={<ToDos />} />
            <Route path="/carts/user/:id" element={<Carts />} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/carts/:id" element={<SingleCart />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/modal" element={<ModalWindow />} />
          <Route path="/modalmenu" element={<ModalMenu />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};
