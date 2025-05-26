import Header from '../components/Header';
import Navigation from '../components/Navigation';
import RecipeList from '../components/RecipeList';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function MyRecipes() {
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();

  // Отримуємо новий рецепт із state, якщо він є
  useEffect(() => {
    if (location.state?.newRecipe) {
      setRecipes(prev => [...prev, location.state.newRecipe]);
    }
  }, [location.state]);

  // Функція для додавання коментаря до рецепту
  const handleAddComment = (recipeIndex, comment) => {
    setRecipes(prev => {
      const updatedRecipes = [...prev];
      updatedRecipes[recipeIndex] = {
        ...updatedRecipes[recipeIndex],
        comments: [...updatedRecipes[recipeIndex].comments, comment]
      };
      return updatedRecipes;
    });
  };

  return (
    <div className="app-container">
      <Header />
      <Navigation />
      {recipes.length > 0 ? (
        <RecipeList recipes={recipes} onAddComment={handleAddComment} />
      ) : (
        <p className="no-recipes">Ви ще не додали жодного рецепту.</p>
      )}
    </div>
  );
}

export default MyRecipes;