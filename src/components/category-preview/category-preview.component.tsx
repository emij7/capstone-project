import { TCartItem } from "../cart-item/cart-item.component";
import { ProductCard } from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from "./category-preview-styles";

type CategoryProps = {
  products: TCartItem[];
  title: string;
};

export const CategoryPreview = ({ title, products }: CategoryProps) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title} className="title">
          {title}
        </Title>
      </h2>
      <Preview>
        {products
          .filter((cartItem, index) => index < 4)
          .map((cartItem) => (
            <ProductCard key={cartItem.id} cartItem={cartItem} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};
