import { useEffect, useState } from "react";
import RecipeCard from "../recipeCard/RecipeCard";

const Favorites = () => {
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

  let ratings = recipes.filter((r) => r.rating > 4.8);
  return (
    <section>
      {ratings.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </section>
  );
};

export default Favorites;
