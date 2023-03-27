import { Link } from "react-router-dom";
import "./category-item.styles.scss";

export const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <Link to={`/shop/${title}`} className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="category-body-container">
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </div>
    </Link>
  );
};
