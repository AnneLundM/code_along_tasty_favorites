import styles from "./recipes.module.css";
import PageHeader from "../../components/pageHeader/PageHeader";
import headerImg from "../../assets/header.webp";
import { useEffect, useState } from "react";
import RecipeCard from "../../components/recipeCard/RecipeCard";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  let dinner = recipes.filter((d) => d.mealType.includes("Dinner"));
  let lunch = recipes.filter((d) => d.mealType.includes("Lunch"));

  // Tilstand der indeholder de filtrerede opskrifter
  const [filtered, setFiltered] = useState([...dinner, ...lunch]);

  const [activeFilter, setActiveFilter] = useState("All");

  // Objekt der indeholder arrays af opskrifter baseret på 'mealType'
  const filters = {
    All: recipes,
    Dinner: dinner,
    Lunch: lunch,
  };

  // Håndterer ændring af filter
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setFiltered(filters[filter]);
  };

  const recipesArray = filtered?.length > 0 ? filtered : recipes;

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

  return (
    <section>
      <PageHeader headerImg={headerImg} />
      <div className={styles.filters}>
        <button onClick={() => handleFilterChange("All")}>All</button>
        <button onClick={() => handleFilterChange("Dinner")}>Dinner</button>
        <button onClick={() => handleFilterChange("Lunch")}>Lunch</button>
      </div>
      <div className='grid'>
        {recipesArray.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </section>
  );
};

export default Recipes;
