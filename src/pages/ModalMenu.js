import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogInContext } from "../LogInContextComponent";
import { MenuContext } from "../MenuContextComponent";

export const ModalMenu = () => {
  const { menuOpen, setMenuOpen } = useContext(MenuContext);
  const { user, setUser } = useContext(LogInContext);
  const navigate = useNavigate();

  const logOut = () => {
    setUser("");
    navigate("/login");
  };

  return (
    <div className="darkBack darkBack3" onClick={() => setMenuOpen(false)}>
      <div className="centered white">
        <div>
          <ul className="menu-ul">
            <li className="li-link menu-li">
              <Link className="menu" to={"/dashboard"}>
                <span>Profile</span>
              </Link>
            </li>
            <li className="li-link menu-li">
              <Link className="menu" to={"/carts/user/:id"}>
                <span>Carts</span>
              </Link>
            </li>

            <li className="li-link menu-li">
              <Link className="menu" to={"/posts/user/:id"}>
                <span>Posts</span>
              </Link>
            </li>
            <li className="li-link menu-li">
              <Link className="menu" to={"/todos/user/:id"}>
                <span>To do</span>
              </Link>
            </li>
            <div className="dots-div menu-dots"></div>
            <li className="li-link menu-li">
              <Link className="menu" to={"/users"}>
                <span>Users</span>
              </Link>
            </li>
            <li className="li-link menu-li">
              <Link className="menu" to={"/products"}>
                <span>Products</span>
              </Link>
            </li>
            <li className="li-link menu-li">
              <Link className="menu" to={"/quotes"}>
                <span>Quotes</span>
              </Link>
            </li>
            {user ? (
              <li onClick={() => logOut()} className="white menu">
                Log Out
              </li>
            ) : (
              <li onClick={() => navigate("/login")} className="white menu ">
                Log In
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
