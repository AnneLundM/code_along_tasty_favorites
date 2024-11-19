import { useEffect, useState } from "react";

const useFetchRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRecipes = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      setRecipes(data.recipes);
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  let dinner = recipes.filter((d) => d.mealType.includes("Dinner"));
  let lunch = recipes.filter((d) => d.mealType.includes("Lunch"));
  let ratings = recipes.filter((r) => r.rating > 4.8);

  useEffect(() => {
    fetchRecipes();
  }, []);

  return { recipes, dinner, lunch, ratings, isLoading, error };
};

export { useFetchRecipes };
