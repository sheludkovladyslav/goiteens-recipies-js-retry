export const RecipeInfo = ({ time, servings, calories, icons }) => (
  <div>
    <p>
      {time} <span>{icons.time}</span>
    </p>
    <p>
      {servings} <span>{icons.servings}</span>
    </p>
    <p>
      {calories} <span>{icons.calories}</span>
    </p>
  </div>
);
