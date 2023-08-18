import React from "react";
import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { FaHammer } from "react-icons/fa";

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title="checkout" />
      <h2>Under Construction</h2>
      <FaHammer style={{ fontSize: "100px" }} />
    </main>
  );
};

export default CheckoutPage;
