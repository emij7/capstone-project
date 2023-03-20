import { CategoryItem } from "../category-item/category-item.component";
import "./categoriesContainer.styles.scss";

export const CategoriesContainer = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};
