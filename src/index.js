import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// dev-5ejfslzpdn5khhws.us.auth0.com
// g2Tfa6Tv1p5d3x4UfHImjR3PINuP8g8c
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-5ejfslzpdn5khhws.us.auth0.com"
    clientId="g2Tfa6Tv1p5d3x4UfHImjR3PINuP8g8c"
    cacheLocation="localstorage"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <React.StrictMode>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <UserProvider>
              <App />
            </UserProvider>
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </React.StrictMode>
  </Auth0Provider>
);
