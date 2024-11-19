import RecipeCard from "../recipeCard/RecipeCard";
import Loading from "../loading/Loading";
import { useFetchRecipes } from "../../hooks/useFetchRecipes";

const Favorites = () => {
  const { isLoading, ratings } = useFetchRecipes();

  return (
    <section className='grid'>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {ratings.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </>
      )}
    </section>
  );
};

export default Favorites;
