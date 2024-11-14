import { FcLike, FcDislike } from "react-icons/fc";
import styles from "./recipeCard.module.css";
import { Link } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";

const RecipeCard = ({ recipe }) => {
  // Opret et array til favoritopskrifter i localeStorage
  const [favorites, setFavorites] = useLocalStorage("Favorites", []);

  // Boolean der returnere true/false alt efter om opskriften findes i localeStorage eller ej
  const isFavorite = favorites.includes(recipe.id);

  /*
  Opdatér favorites-arrayet i localeStorage:
  Hvis opskriften er i favorites-arrayet, fjern den fra arrayet
  Hvis opskriften ikke er i favorites-arrayet, tilføj den til arrayet
  */
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
      <figcaption>
        <h2>{recipe.name}</h2>
        {isFavorite ? (
          <FcDislike size={30} onClick={handleLike} />
        ) : (
          <FcLike size={30} onClick={handleLike} />
        )}
      </figcaption>
    </figure>
  );
};

export default RecipeCard;
