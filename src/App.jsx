import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RecipeList } from "./components/RecipeList";
import recipes from "./data/recipies.json";

function App() {
  return (
    <>
      <RecipeList recipes={recipes} />
    </>
  );
}

export default App;
