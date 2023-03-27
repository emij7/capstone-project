import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import { Button } from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.component";
import { CartDropdownContainer, CartItems } from "./cart-dropdown.styles";

export const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const navigateToCheckout = () => {
    navigate("checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </CartItems>
      <Button onClick={navigateToCheckout}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};
