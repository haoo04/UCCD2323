//array of food
const foods = [
    { id: 1, name: "Nasi Lemak",country: "Malaysia", region: "southeast-asia",}
];

//add or remove the food from local storage
function toggleFavorite(button, food) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const index = favorites.findIndex(f => f.id === food.id);
    
    if (index === -1) {
        favorites.push(food);
        button.classList.add('active');
    } else {
        favorites.splice(index, 1);
        button.classList.remove('active');
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

document.addEventListener('DOMContentLoaded', () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    foods.forEach(food =>{
        const favoriteButton = document.querySelector('.favorite-btn');

        if (favorites.some(f => f.id === food.id)) {
            favoriteButton.classList.add('active');
        }

        favoriteButton.onclick = () => toggleFavorite(favoriteButton, food); 
    })
});