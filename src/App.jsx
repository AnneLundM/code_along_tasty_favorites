import Navigation from "./components/Navigation";
import Footer from "./components/footer/Footer";
import { useRoutes } from "react-router-dom";
import About from "./pages/About";
import RecipeDetails from "./pages/recipeDetails/RecipeDetails";
import Home from "./pages/Home";
import Recipes from "./pages/recipes/Recipes";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/recipes", element: <Recipes /> },
    { path: "/recipe/:id", element: <RecipeDetails /> },
  ]);

  return (
    <div className='app'>
      <Navigation />
      <div className='content'>{routes}</div>
      <Footer />
    </div>
  );
}

export default App;
