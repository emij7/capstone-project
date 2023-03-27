import { CategoryItem } from "../category-item/category-item.component";
import { StyledCategoriesContainer } from "./categoriesContainer.styles";

export const CategoriesContainer = ({ categories }) => {
  return (
    <StyledCategoriesContainer>
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </StyledCategoriesContainer>
  );
};
