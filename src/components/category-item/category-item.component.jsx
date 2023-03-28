import {
  BackgroundImage,
  CategoryBody,
  CategoryContainer,
} from "./category-item.styles";

export const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <CategoryContainer to={`/shop/${title}`} className="category-container">
      <BackgroundImage
        className="background-image"
        imageUrl={imageUrl}
      ></BackgroundImage>
      <CategoryBody className="category-body-container">
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </CategoryBody>
    </CategoryContainer>
  );
};
