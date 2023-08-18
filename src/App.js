import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
} from "./pages";
import { useProductsContext } from "./context/products_context";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Fragment>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route exact path="/about" element={<About />} />

            <Route exact path="/cart" element={<Cart />} />

            <Route exact path="products">
              <Route index element={<Products />} />
              <Route exact path=":productId" element={<SingleProduct />} />
            </Route>

            <Route
              path="/checkout"
              element={
                <PrivateRoute>
                  <Checkout />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Fragment>
      </Router>
    </AuthWrapper>
  );
}

export default App;
