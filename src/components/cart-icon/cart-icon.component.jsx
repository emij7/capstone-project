import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer } from "./cart-icon.styles";

export const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartTotalQuantity } =
    useContext(CartContext);

  const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toogleIsCartOpen}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">{cartTotalQuantity}</span>
    </CartIconContainer>
  );
};
