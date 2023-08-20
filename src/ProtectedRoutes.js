import React, { useContext, useEffect } from "react";
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { LogInContext } from "./LogInContextComponent";
import NotFound from "./NotFound";
import { Bag } from "./pages/Bag";
import Carts from "./pages/Carts";
import Dashboard from "./pages/Dashboard";
import { LogIn } from "./pages/LogIn";
import { ModalWindow } from "./pages/Modal";
import Posts from "./pages/Posts";
import Products from "./pages/Products";
import Quotes from "./pages/Quotes";
import ToDos from "./pages/ToDos";
import Users from "./pages/Users";

export const ProtectedRoutes = ({ children }) => {
  const { user } = useContext(LogInContext);

  return <>{user ? <Outlet /> : <Navigate to={"/login"} />}</>;
};
