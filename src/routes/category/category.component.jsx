import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/product-card/product-card.component";
import { getCategories } from "../../store/categories/categoriesSlice";
import { useAppSelector } from "../../store/hooks";
import { CategoryTitle, ShopCategoryContainer } from "./category.styles";
import { Spinner } from "../../components/spinner/spinner.component";

export const Category = () => {
  const { category } = useParams();
  const categoriesMap = useAppSelector(getCategories);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap, products]);
  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {products === undefined ? (
        <Spinner />
      ) : (
        <ShopCategoryContainer>
          {products &&
            products.map((product) => {
              return <ProductCard key={product.id} cartItem={product} />;
            })}
        </ShopCategoryContainer>
      )}
    </Fragment>
  );
};
