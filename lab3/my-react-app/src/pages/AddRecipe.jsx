import Header from '../components/Header';
import Navigation from '../components/Navigation';
import RecipeForm from '../components/RecipeForm';
import { useNavigate } from 'react-router-dom';

function AddRecipe() {
  const navigate = useNavigate();

  const handleAddRecipe = (newRecipe) => {
    // Передаємо новий рецепт через state у navigate
    navigate('/my-recipes', { state: { newRecipe } });
  };

  return (
    <div className="app-container">
      <Header />
      <Navigation />
      <RecipeForm 
        onSave={handleAddRecipe} 
        onCancel={() => navigate('/')} 
      />
    </div>
  );
}

export default AddRecipe;