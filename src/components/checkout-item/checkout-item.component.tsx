import {
  addCartItem,
  clearCartItem,
  removeCartItem,
} from "../../store/cart/cartSlice";
import { useAppDispatch } from "../../store/hooks";
import { CartItemProps } from "../cart-item/cart-item.component";
import {
  CheckoutItemContainer,
  CheckoutSpan,
  ImageContainer,
  RemoveButton,
} from "./checkout-item.styles";

export const CheckoutItem = ({ cartItem }: CartItemProps) => {
  const dispatch = useAppDispatch();

  const { name, imageUrl, price, quantity } = cartItem;
  const clearItemFromCartHandler = () => dispatch(clearCartItem(cartItem));
  const addItemToCartHandler = () => dispatch(addCartItem(cartItem));
  const removeItemToCartHandler = () => dispatch(removeCartItem(cartItem));

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
