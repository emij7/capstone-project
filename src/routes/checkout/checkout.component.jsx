import { CheckoutItem } from "../../components/checkout-item/checkout-item.component";
import { getCartItems, getCartTotalPrice } from "../../store/cart/cartSlice";
import { useAppSelector } from "../../store/hooks";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  TotalPrice,
} from "./checkout.styles";
const Checkout = () => {
  const cartTotalPrice = useAppSelector(getCartTotalPrice);
  const cartItems = useAppSelector(getCartItems);
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

export default Checkout;
