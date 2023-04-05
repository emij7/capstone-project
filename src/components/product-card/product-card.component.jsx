import { addCartItem } from "../../store/cart/cartSlice";
import { useAppDispatch } from "../../store/hooks";
import { Button } from "../button/button.component";
import { CardContainer, Footer } from "./product.card.styles";

export const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useAppDispatch();

  const addToCart = () => {
    dispatch(addCartItem(product));
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
