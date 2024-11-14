import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import RecipeCard from "../recipeCard/RecipeCard";

const MyFavorites = () => {
  const [favorites] = useLocalStorage("Favorites", []);
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  const fetchRecipes = async () => {
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      setRecipes(data.recipes);
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const favoriteRecipes = recipes.filter((recipe) =>
    favorites.includes(recipe.id)
  );

  return (
    <section className='grid'>
      {favoriteRecipes?.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </section>
  );
};

export default MyFavorites;
