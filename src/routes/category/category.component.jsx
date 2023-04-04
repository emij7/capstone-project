import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/product-card/product-card.component";
import { getCategories } from "../../store/categories/categoriesSlice";
import { useAppSelector } from "../../store/hooks";
import { CategoryTitle, ShopCategoryContainer } from "./category.styles";

export const Category = () => {
  const { category } = useParams();
  const categoriesMap = useAppSelector(getCategories);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <ShopCategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ShopCategoryContainer>
    </Fragment>
  );
};
