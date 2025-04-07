let recipes = [
    { name: 'Борщ', time: 90, image: 'https://st2.depositphotos.com/1373322/10100/i/450/depositphotos_101009204-stock-photo-ukrainian-borscht-red-soup-close.jpg', comments: [] },
    { name: 'Вареники', time: 45, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQkrjc0AmymtWWuZ_5o7g5bH7xMVgZkfe1qw&s', comments: [] }
];

document.addEventListener('DOMContentLoaded', () => {
    renderRecipes();
    addHoverEffect();
});

function renderRecipes() {
    let container = document.querySelector('.container');
    container.innerHTML = '';
    
    recipes.forEach((recipe, index) => {
        let card = document.createElement('div');
        card.className = 'recipe-card';
        
        if (index % 2 === 0) {
            card.style.backgroundColor = '#f8f8f8';
        }
        
        card.innerHTML = `
            <img src='${recipe.image}' alt='${recipe.name}'>
            <div class='recipe-info'>
                <h3>${recipe.name}</h3>
                <p>Час приготування: ${recipe.time} хв</p>
                <button class='edit-btn' data-index='${index}'>Редагувати</button>
                <button class='toggle-comments' data-index='${index}'>Показати коментарі</button>
            </div>
            <div class='comments' id='comments-${index}' style='display: none;'>
                <h4>Коментарі</h4>
                <div>${recipe.comments.map(comment => `<p>${comment}</p>`).join('')}</div>
                <input type='text' class='comment-input' id='comment-input-${index}' placeholder='Додати коментар'>
                <button class='comment-btn' data-index='${index}'>Додати</button>
            </div>
        `;
        container.appendChild(card);
    });
    
    document.querySelectorAll('.edit-btn').forEach(btn => btn.addEventListener('click', editRecipe));
    document.querySelectorAll('.comment-btn').forEach(btn => btn.addEventListener('click', addComment));
    document.querySelectorAll('.toggle-comments').forEach(btn => btn.addEventListener('click', toggleComments));
}

function addRecipe() {
    document.getElementById('recipe-form').style.display = 'block';
}

function saveRecipe() {
    let name = document.getElementById('recipe-name').value.trim();
    let time = document.getElementById('recipe-time').value;
    let image = document.getElementById('recipe-image').value.trim();
    
    if (!name || !time || isNaN(time) || time <= 0) {
        alert('Будь ласка, введіть коректні дані!');
        return;
    }
    
    recipes.push({ name, time, image: image || 'https://via.placeholder.com/300', comments: [] });
    document.getElementById('recipe-form').style.display = 'none';
    renderRecipes();
}

function editRecipe(event) {
    let index = event.target.dataset.index;
    let recipe = recipes[index];
    document.getElementById('recipe-name').value = recipe.name;
    document.getElementById('recipe-time').value = recipe.time;
    document.getElementById('recipe-image').value = recipe.image;
    document.getElementById('recipe-form').style.display = 'block';
    recipes.splice(index, 1);
}

function addComment(event) {
    let index = event.target.dataset.index;
    let input = document.getElementById(`comment-input-${index}`);
    if (input.value.trim() !== '') {
        recipes[index].comments.push(input.value);
        input.value = '';
        renderRecipes();
    }
}

function toggleComments(event) {
    let index = event.target.dataset.index;
    let commentSection = document.getElementById(`comments-${index}`);
    if (commentSection.style.display === 'none') {
        commentSection.style.display = 'block';
        event.target.textContent = 'Сховати коментарі';
    } else {
        commentSection.style.display = 'none';
        event.target.textContent = 'Показати коментарі';
    }
}

function addHoverEffect() {
    document.querySelectorAll('.recipe-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = '0.3s';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
}