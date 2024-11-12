import { FcLike } from "react-icons/fc";
import styles from "./recipeCard.module.css";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.id}`}>
      <figure className={styles.recipeCard}>
        <img src={recipe.image} alt={recipe.name} />
        <FcLike />
      </figure>
    </Link>
  );
};

export default RecipeCard;
