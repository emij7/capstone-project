import { CartItemContainer, ItemDetails } from "./cart-item.styles";

export type TCartItem = {
  name: string;
  imageUrl?: string;
  price: number;
  quantity: number;
  id: string;
};
export type CartItemProps = {
  cartItem: TCartItem;
};

export const CartItem = ({ cartItem }: CartItemProps) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};
