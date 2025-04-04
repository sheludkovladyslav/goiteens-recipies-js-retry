import { CiTimer, CiPizza } from "react-icons/ci";
import { FaPlateWheat } from "react-icons/fa6";
import { RecipeInfo } from "./RecipeInfo";

export const RecipeItem = ({ recipe }) => {
  const icons = {
    time: <CiTimer />,
    servings: <CiPizza />,
    calories: <FaPlateWheat />,
  };

  return (
    <article className="recipe">
      <img src={recipe.image} alt={recipe.name} className="recipe__image" />
      <h2 className="recipe__title">{recipe.name}</h2>
      <RecipeInfo
        icons={icons}
        time={recipe.time}
        servings={recipe.servings}
        calories={recipe.calories}
      ></RecipeInfo>
    </article>
  );
};
