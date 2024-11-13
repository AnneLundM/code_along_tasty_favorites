import { FcLike, FcDislike } from "react-icons/fc";
import styles from "./recipeCard.module.css";
import { Link } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";

const RecipeCard = ({ recipe }) => {
  const [favorites, setFavorites] = useLocalStorage("Favorites", []);
  const isFavorite = favorites.includes(recipe.id);

  const handleLike = () => {
    setFavorites((prevFavorites) =>
      isFavorite
        ? prevFavorites.filter((fav) => fav !== recipe.id)
        : [...prevFavorites, recipe.id]
    );
  };

  return (
    <figure className={styles.recipeCard}>
      <Link to={`/recipe/${recipe.id}`}>
        <img src={recipe.image} alt={recipe.name} />
      </Link>
      <h2>{recipe.name}</h2>
      {isFavorite ? (
        <FcDislike size={30} onClick={handleLike} />
      ) : (
        <FcLike size={30} onClick={handleLike} />
      )}
    </figure>
  );
};

export default RecipeCard;
