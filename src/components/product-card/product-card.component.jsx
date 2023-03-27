import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Button } from "../button/button.component";
import { CardContainer, Footer } from "./product.card.styles";

export const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  const addToCart = () => {
    addItemToCart(product);
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
