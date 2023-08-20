import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeContextComponent } from "./ThemeContextComponent";
import { App } from "./App";
import {
  FavouriteProductsContext,
  ProductContext,
} from "./FavouriteProductsContext";
import { BagProductsContext } from "./BagProductsContext";
import { LogInContextComponent } from "./LogInContextComponent";
import { ProductGetComponent } from "./ProductGetComponent";
import { MenuContextComponent } from "./MenuContextComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeContextComponent>
        <MenuContextComponent>
          <LogInContextComponent>
            <FavouriteProductsContext>
              <BagProductsContext>
                <App />
              </BagProductsContext>
            </FavouriteProductsContext>
          </LogInContextComponent>
        </MenuContextComponent>
      </ThemeContextComponent>
    </Router>
  </React.StrictMode>
);
