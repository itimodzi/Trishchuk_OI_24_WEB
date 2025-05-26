import { useState } from 'react';

const DEFAULT_FORM = {
  name: '',
  time: '',
  image: '',
  category: 'Перші страви',
  text: '',
};

function RecipeForm({ onSave, onCancel }) {
  const [formData, setFormData] = useState(DEFAULT_FORM);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const isValid = () => {
    const { name, time } = formData;
    if (!name.trim()) return false;
    const parsedTime = parseInt(time, 10);
    return !isNaN(parsedTime) && parsedTime > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid()) {
      alert('Будь ласка, введіть коректні дані!');
      return;
    }

    onSave({ ...formData, comments: [] });
    setFormData(DEFAULT_FORM);
  };

  return (
    <form id="recipe-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Назва рецепту:</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="time">Час приготування (хв):</label>
        <input
          type="number"
          id="time"
          value={formData.time}
          onChange={handleChange}
          min="1"
          required
        />
      </div>

      <div>
        <label htmlFor="image">Посилання на зображення:</label>
        <input
          type="url"
          id="image"
          value={formData.image}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="text">Текст рецепту:</label>
        <textarea
          id="text"
          value={formData.text}
          onChange={handleChange}
          placeholder="Введіть текст рецепту"
          rows={5}
          style={{
            width: '65%',
            marginTop: '5px',
            borderRadius: '10px',
            border: '1px solid #ccc',
          }}
        />
      </div>

      <div>
        <label htmlFor="category">Категорія:</label>
        <select
          id="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Перші страви">Перші страви</option>
          <option value="Головні страви">Головні страви</option>
          <option value="Десерти">Десерти</option>
          <option value="Салати">Салати</option>
        </select>
      </div>

      <div style={{ marginTop: '20px' }}>
        <button type="submit"
         style={{ marginLeft: '20px', backgroundColor: '#777', color: '#fff' }}
        >
        Зберегти</button>
        <button
          type="button"
          onClick={onCancel}
          style={{ marginLeft: '20px', backgroundColor: '#777', color: '#fff' }}
        >
          Скасувати
        </button>
      </div>
    </form>
  );
}

export default RecipeForm;
