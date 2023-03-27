import React, { useContext } from "react";
import { CheckoutItem } from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  TotalPrice,
} from "./checkout.styles";

export const Checkout = () => {
  const { cartItems, cartTotalPrice } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>DeSctiption</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <TotalPrice>Total ${cartTotalPrice}</TotalPrice>
    </CheckoutContainer>
  );
};
