import PageHeader from "../components/pageHeader/PageHeader";
import RecipeCard from "../components/recipeCard/RecipeCard";
import SectionHeader from "../components/sectionHeader/SectionHeader";
import headerImg from "../assets/header.webp";
import { useEffect, useState } from "react";

const Home = () => {
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
    <article>
      <PageHeader
        title='SMAGFULDE FAVORITTER'
        subTitle='En verden af smag lige ved hånden'
        headerImg={headerImg}
      />
      <SectionHeader title='Brugernes favoritter' />
      {ratings.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </article>
  );
};

export default Home;
