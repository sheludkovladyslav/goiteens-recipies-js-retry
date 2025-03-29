export const RecipeInfo = ({ time, servings, calories, icons }) => (
  <div className="recipe__info">
    <p className="recipe__time">
      {time} <span>{icons.time}</span>
    </p>
    <p className="recipe__servings">
      {servings} <span>{icons.servings}</span>
    </p>
    <p className="recipe__calories">
      {calories} <span>{icons.calories}</span>
    </p>
  </div>
);
