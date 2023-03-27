import { ProductCard } from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from "./category-preview-styles";

export const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title} className="title">
          {title}
        </Title>
      </h2>
      <Preview>
        {products
          .filter((product, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};
