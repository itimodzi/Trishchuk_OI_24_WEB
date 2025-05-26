import { useState } from 'react';
import CommentList from './CommentList';

function RecipeCard({ recipe, onAddComment }) {
  const [showComments, setShowComments] = useState(false);
  const [showText, setShowText] = useState(false);

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} />
      <div className="recipe-info">
        <h3>{recipe.name}</h3>
        <p>Час приготування: {recipe.time} хв</p>
        <button className="toggle-comments" onClick={() => setShowComments(!showComments)}>
          {showComments ? 'Сховати коментарі' : 'Показати коментарі'}
        </button>
        <button className="toggle-text" onClick={() => setShowText(!showText)} style={{ marginLeft: '10px' }}>
          {showText ? 'Сховати текст рецепту' : 'Показати текст рецепту'}
        </button>
      </div>
      {showText && (
        <div className="recipe-text" style={{ padding: '15px', borderTop: '1px solid #ddd', textAlign: 'left' }}>
          <h4>Текст рецепту</h4>
          <p>{recipe.text || 'Текст рецепту не додано'}</p>
        </div>
      )}
      {showComments && (
        <CommentList comments={recipe.comments} onAddComment={onAddComment} />
      )}
    </div>
  );
}

export default RecipeCard;