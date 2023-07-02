import { addCartItem } from "../../store/cart/cartSlice";
import { useAppDispatch } from "../../store/hooks";
import { Button } from "../button/button.component";
import { CartItemProps } from "../cart-item/cart-item.component";
import { CardContainer, Footer } from "./product.card.styles";

export const ProductCard = ({ cartItem }: CartItemProps) => {
  const { name, price, imageUrl } = cartItem ?? {};
  const dispatch = useAppDispatch();

  const addToCart = () => {
    dispatch(addCartItem(cartItem));
  };

  return (
    <CardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <span>{name}</span>
        <span>${price}</span>
      </Footer>
      <Button onClick={addToCart} inverted>
        Add to cart
      </Button>
    </CardContainer>
  );
};
