import { RecipeItem } from "./RecipeItem";

export const RecipeList = ({ recipes }) => {
  return (
    <ul>
      {recipes.map((recipe) => (
        <li>
          <RecipeItem recipe={recipe} />
        </li>
      ))}
    </ul>
  );
};
