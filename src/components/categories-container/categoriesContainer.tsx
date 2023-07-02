import { CategoryItem } from "../category-item/category-item.component";
import { StyledCategoriesContainer } from "./categoriesContainer.styles";

export type Category = {
  category?: string;
  id?: number;
  title?: string;
  imageUrl?: string;
};

export type Categories = {
  categories: Category[];
};
export const CategoriesContainer = ({ categories }: Categories) => {
  return (
    <StyledCategoriesContainer>
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </StyledCategoriesContainer>
  );
};
