import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Categories from '../components/Categories';
import RecipeList from '../components/RecipeList';
import initialRecipes from '../data/recipesData';
import { useState } from 'react';

function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('Усі');
  const [recipes] = useState(initialRecipes);

  // Фільтрація рецептів за вибраною категорією
  const filteredRecipes = selectedCategory === 'Усі'
    ? recipes
    : recipes.filter(recipe => recipe.category === selectedCategory);

  return (
    <div className="app-container">
      <Header />
      <Navigation />
      <Categories 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
}

export default CategoriesPage;