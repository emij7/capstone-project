import { Fragment } from "react";
import { CategoryPreview } from "../../components/category-preview/category-preview.component";
import { getCategories } from "../../store/categories/categoriesSlice";
import { useAppSelector } from "../../store/hooks";

export const CategoriesPreview = () => {
  const categoriesMap = useAppSelector(getCategories);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};
