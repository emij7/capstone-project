import {
  getCartTotalQuantity,
  setIsCartOpen,
} from "../../store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

export const CartIcon = () => {
  const cartTotalQuantity = useAppSelector(getCartTotalQuantity);
  const dispatch = useAppDispatch();
  const toogleIsCartOpen = () => dispatch(setIsCartOpen());

  return (
    <CartIconContainer onClick={toogleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartTotalQuantity}</ItemCount>
    </CartIconContainer>
  );
};
