import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/pageHeader/PageHeader";
import styles from "./recipeDetails.module.css";

const RecipeDetails = () => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);

  const fetchRecipeById = async (id) => {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await response.json();
    setRecipe(data);
  };

  useEffect(() => {
    fetchRecipeById(id);
  }, [id]);

  return (
    <>
      {recipe && (
        <article>
          <PageHeader title={recipe.name} headerImg={recipe.image} />
          <div className={styles.recipeContent}>
            <div className={styles.recipeIngredients}>
              <h2>Ingredients</h2>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className={styles.recipeInstructions}>
              <h2>Instructions</h2>
              <ol>
                {recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default RecipeDetails;
