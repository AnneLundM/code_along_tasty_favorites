import styles from "./recipes.module.css";
import PageHeader from "../../components/pageHeader/PageHeader";
import headerImg from "../../assets/header.webp";
import { useState } from "react";
import RecipeCard from "../../components/recipeCard/RecipeCard";
import { useFetchRecipes } from "../../hooks/useFetchRecipes";
import Button from "../../components/button/Button";
import Loading from "../../components/loading/Loading";
import buttonStyles from "../../components/button/button.module.css";

const Recipes = () => {
  const { recipes, dinner, lunch, isLoading } = useFetchRecipes();

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

  return (
    <section>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageHeader headerImg={headerImg} />
          <div className={styles.filters}>
            <Button
              buttonText='All'
              onClick={() => handleFilterChange("All")}
              className={activeFilter === "All" ? `${buttonStyles.active}` : ""}
            />
            <Button
              buttonText='Dinner'
              onClick={() => handleFilterChange("Dinner")}
              className={
                activeFilter === "Dinner" ? `${buttonStyles.active}` : ""
              }
            />
            <Button
              buttonText='Lunch'
              onClick={() => handleFilterChange("Lunch")}
              className={
                activeFilter === "Lunch" ? `${buttonStyles.active}` : ""
              }
            />
          </div>
          <div className='grid'>
            {recipesArray.map((recipe) => (
              <RecipeCard recipe={recipe} key={recipe.id} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Recipes;
