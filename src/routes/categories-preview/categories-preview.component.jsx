import { Fragment } from "react";
import { CategoryPreview } from "../../components/category-preview/category-preview.component";
import { getCategories } from "../../store/categories/categoriesSlice";
import { useAppSelector } from "../../store/hooks";
import { Spinner } from "../../components/spinner/spinner.component";

export const CategoriesPreview = () => {
  const categoriesMap = useAppSelector(getCategories);
  return (
    <Fragment>
      {categoriesMap.length === 0 ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};
