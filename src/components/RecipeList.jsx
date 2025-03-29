import { RecipeItem } from "./RecipeItem";

export const RecipeList = ({ recipes }) => {
  return (
    <ul className="recipes">
      {recipes.map((recipe) => (
        <li className="recipes__item">
          <RecipeItem recipe={recipe} />
        </li>
      ))}
    </ul>
  );
};
