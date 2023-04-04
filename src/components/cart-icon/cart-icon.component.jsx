import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { setIsCartOpen } from "../../store/cart/cartSlice";
import { useAppDispatch } from "../../store/hooks";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

export const CartIcon = () => {
  const { cartTotalQuantity } = useContext(CartContext);

  const dispatch = useAppDispatch();
  const toogleIsCartOpen = () => dispatch(setIsCartOpen());

  return (
    <CartIconContainer onClick={toogleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartTotalQuantity}</ItemCount>
    </CartIconContainer>
  );
};
