import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CheckoutItemContainer,
  CheckoutSpan,
  ImageContainer,
  RemoveButton,
} from "./checkout-item.styles";

export const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);
  const clearItemFromCartHandler = () => clearItemFromCart(cartItem);
  const addItemToCartHandler = () => addItemToCart(cartItem);
  const removeItemToCartHandler = () => removeItemToCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <CheckoutSpan className="name">{name}</CheckoutSpan>
      <CheckoutSpan className="quantity">
        <CheckoutSpan className="arrow" onClick={removeItemToCartHandler}>
          &#10094;
        </CheckoutSpan>
        <CheckoutSpan className="value">{quantity}</CheckoutSpan>
        <CheckoutSpan className="arrow" onClick={addItemToCartHandler}>
          &#10095;
        </CheckoutSpan>
      </CheckoutSpan>
      <CheckoutSpan className="price">{price}</CheckoutSpan>
      <RemoveButton onClick={clearItemFromCartHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};
