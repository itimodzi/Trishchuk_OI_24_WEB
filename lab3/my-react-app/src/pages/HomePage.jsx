import RecipeList from '../components/RecipeList';
import initialRecipes from '../data/recipesData';
import { useState } from 'react';

function HomePage() {
  const [recipes] = useState(initialRecipes);

  return (
    <div>
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default HomePage;