import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

export const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartTotalQuantity } =
    useContext(CartContext);

  const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toogleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartTotalQuantity}</ItemCount>
    </CartIconContainer>
  );
};
