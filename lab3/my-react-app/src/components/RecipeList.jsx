import RecipeCard from './RecipeCard';

function RecipeList({ recipes, onAddComment }) {
  return (
    <div className="container">
      {recipes.map((recipe, index) => (
        <RecipeCard
          key={index}
          recipe={recipe}
          onAddComment={(comment) => onAddComment(index, comment)}
        />
      ))}
    </div>
  );
}

export default RecipeList;