import { useNavigate } from "react-router-dom";
import { getCartItems } from "../../store/cart/cartSlice";
import { useAppSelector } from "../../store/hooks";
import { Button } from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.component";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

export const CartDropdown = () => {
  const cartItems = useAppSelector(getCartItems);
  const navigate = useNavigate();
  const navigateToCheckout = () => {
    navigate("checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Empty cart.</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={navigateToCheckout}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};
