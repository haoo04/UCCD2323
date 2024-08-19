
//remove food from favorite
function removeFavorite(event, foodId) {
    var confirmation = confirm('Do you want to Remove this food?');
    if(confirmation == true){
        //prevent jump to food page
        event.stopPropagation();
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites = favorites.filter(f => f.id !== foodId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        renderFavorites();
    }
}

//generate the url of food format: food-food.html
//exp: Roasted Chicken -> roasted-chicken.html
function generateFoodPageUrl(foodName) {
    return foodName.toLowerCase().replace(/ /g, '-') + '.html';
}

//jump to the food page
function goToFoodPage(food) {
    const url = generateFoodPageUrl(food.name);
    window.location.href = url;
}

//display the food
function renderFavorites() {
    const favoritesList = document.getElementById('favoritesList');
    favoritesList.innerHTML = '';
    
    //read the food from local storage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if(favorites.length === 0){
        const nullmessage = document.createElement('h1');
        nullmessage.className = 'empty-message';
        nullmessage.textContent = 'Oops... It looks like you have not saved any food yet';
        favoritesList.appendChild(nullmessage);
    }

    //Traverse the foods collection from local storage and create a element for food
    favorites.forEach(food => {
        const foodContainer = document.createElement('div');
        foodContainer.className = 'food-container';
        foodContainer.dataset.name = food.region;
        
      
        // Food Title
        const foodTitle = document.createElement('div');
        foodTitle.className = 'food-title';
        
        
        const favoriteButton = document.createElement('button');
        favoriteButton.classList.add('favorite-btn', 'active');
        favoriteButton.innerHTML = `
        <svg viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        `;

        favoriteButton.onclick = (event) => removeFavorite(event, food.id);

        const title = document.createElement('h1');
        title.textContent = 'Nasi Lemak';
        title.onclick = () => goToFoodPage(food);
        
        const subtitle = document.createElement('p');
        subtitle.textContent = 'Malaysia Fat Rice';
        
        foodTitle.appendChild(favoriteButton);
        foodTitle.appendChild(title);
        foodTitle.appendChild(subtitle);
        
        
        const nav = document.createElement("div");

        const ul = document.createElement("ul");
        ul.classList.add("content-navigation");
        
        const liOverview = document.createElement("li");
        liOverview.classList.add("overview", "selected");
        liOverview.textContent = "Overview";
        
        ul.appendChild(liOverview);
        nav.appendChild(ul);
      
        // Overview Content
        const overviewContent = document.createElement('div');
        overviewContent.className = 'overview-content';
        
        const foodDescription = document.createElement('div');
        foodDescription.className = 'food-description';
        
        const introTitle = document.createElement('h1');
        introTitle.textContent = 'Introduction';
        
        const introText1 = document.createElement('p');
        introText1.textContent = 'Nasi lemak was mentioned in a book The Circumstances of Malay Life, written by Sir Richard Olof Winstedt in 1909. With roots in Malay culture and Malay cuisine, its name in Malay literally means "fat rice", but is taken in this context to mean "rich" or "creamy". The name is derived from the cooking process which involves soaking the rice in coconut cream and steaming the mixture. The rice is normally cooked with pandan leaves that gives its distinct flavour.';
        
        const introText2 = document.createElement('p');
        introText2.textContent = 'Traditionally, nasi lemak is wrapped and served in banana leaves, added with a hot spicy sauce (sambal) and various garnishes, including fresh cucumber slices, small fried anchovies (ikan bilis), roasted peanuts, and hard-boiled or fried eggs.';

        const introText3 = document.createElement('p');
        introText3.textContent = 'As a more substantial meal, nasi lemak may also be served with an additional protein dish such as ayam goreng (fried chicken), sambal sotong (cuttlefish in chili), small fried fish, cockles, and rendang daging (beef stewed in coconut milk and spices). Other accompaniments include stir fried water convolvulus (kangkong), and spicy pickled vegetables salad acar. Traditionally most of these accompaniments are spicy in nature.';

        foodDescription.appendChild(introTitle);
        foodDescription.appendChild(introText1);
        foodDescription.appendChild(introText2);
        foodDescription.appendChild(introText3);
        
        overviewContent.appendChild(foodDescription);
      
        // Origin Container
        const originContainer = document.createElement('div');
        originContainer.className = 'origin-container';
        
        const originTitle = document.createElement('h1');
        originTitle.textContent = 'Origin Country';
        
        const originContent = document.createElement('div');
        originContent.className = 'origin-content';
        
        const countryName = document.createElement('h2');
        countryName.textContent = 'Malaysia';
        countryName.className = 'country-name';
        
        const flag = document.createElement('img');
        flag.src = 'pictures/malaysia-rect-flag.png';
        flag.className = 'flag';
        flag.width = 200;
        
        const map = document.createElement('img');
        map.src = 'pictures/malaysia_map.png';
        map.className = 'map';
        map.width = 300;
        
        originContent.appendChild(countryName);
        originContent.appendChild(flag);
        originContent.appendChild(map);
        
        originContainer.appendChild(originTitle);
        originContainer.appendChild(originContent);
        
        overviewContent.appendChild(originContainer);
      
        // Food Ingredients Container
        const ingredientsContainer = document.createElement('div');
        ingredientsContainer.className = 'food-ingredients-container';
        
        const ingredientsTitle = document.createElement('h1');
        ingredientsTitle.textContent = 'Main Ingredients';
        
        const ingredients = document.createElement('div');
        ingredients.className = 'food-ingredients';
        
        const ingredientsList = [
          { name: 'Pandan Leaf', image: 'pictures/pandan-leaf.png' },
          { name: 'Coconut Milk', image: 'pictures/coconut-milk.png' },
          { name: 'Dried Chili', image: 'pictures/dried-chili.png' },
          { name: 'Sambal', image: 'pictures/sambal.png' },
          { name: 'Dried Anchovy', image: 'pictures/dried-anchovy.png' },
          { name: 'Dried Peanuts', image: 'pictures/dried-peanut.png' }
        ];
        
        ingredientsList.forEach(item => {
          const ingredient = document.createElement('div');
          const img = document.createElement('img');
          img.src = item.image;
          img.className = 'ingredient-image';
          img.width = 100;
          const name = document.createElement('p');
          name.textContent = item.name;
          ingredient.appendChild(img);
          ingredient.appendChild(name);
          ingredients.appendChild(ingredient);
        });
        
        ingredientsContainer.appendChild(ingredientsTitle);
        ingredientsContainer.appendChild(ingredients);
        
        overviewContent.appendChild(ingredientsContainer);
      
        // Append all elements to the main container
        foodContainer.appendChild(foodTitle);
        foodContainer.appendChild(nav);
        foodContainer.appendChild(overviewContent);
      

        favoritesList.appendChild(foodContainer);
    });

    //Monitors whether an element enters the viewport
    const observer = new IntersectionObserver((entries) => {

        //animation for the food-item (down -> up)
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 200); 
                observer.unobserve(entry.target);
            }
        });
    }, 
    {
        threshold: 0.1 
    });
    
    //Elements that enter the viewport at the same time will be displayed one by one
    const eventItems = document.querySelectorAll('.food-container');
    eventItems.forEach(item => {
        observer.observe(item);
    });
}

function filterByRegion(region) {
    const foodItems = document.querySelectorAll('.food-container');
    foodItems.forEach(item => {
        if (region === 'all' || item.dataset.name === region) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    renderFavorites();
    const filterButtons = document.querySelectorAll('.food-filter button');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const region = this.dataset.region;
            filterByRegion(region);

            document.querySelector(".active").classList.remove("active");
            button.classList.add("active");
        });
    });
});


var overviewBtn = document.querySelector('.overview');
var recipeBtn = document.querySelector('.recipe');

overviewBtn.addEventListener('click', () => {
    overviewBtn.classList.add('selected');
    recipeBtn.classList.remove('selected');
    document.querySelector('.overview-content').classList.remove('hide');
    document.querySelector('.recipe-content').classList.add('hide');
});

recipeBtn.addEventListener('click', () => {
    overviewBtn.classList.remove('selected');
    recipeBtn.classList.add('selected');
    document.querySelector('.overview-content').classList.add('hide');
    document.querySelector('.recipe-content').classList.remove('hide');
});

// Select all the ingredient images
const ingredientImages = document.querySelectorAll('.ingredient-image');

// Loop through each image and add event listeners for 'mouseover' and 'mouseout' events
ingredientImages.forEach(image => {
    // Enlarge image on hover
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.2)';
        image.style.transition = 'transform 0.3s ease';
    });

    // Return image to original size when hover ends
    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
        image.style.transition = 'transform 0.3s ease';
    });
});

document.addEventListener('DOMContentLoaded', renderFavorites);