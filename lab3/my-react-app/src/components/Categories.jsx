function Categories({ selectedCategory, onSelectCategory }) {
  const categories = ['Усі', 'Перші страви', 'Десерти', 'Головні страви', 'Салати'];

  return (
    <div className="categories">
      {categories.map(cat => (
        <button
          key={cat}
          className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
          onClick={() => onSelectCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default Categories;