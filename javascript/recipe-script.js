
// Function to get query parameters from the URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to perform the search
function filterRecipes(searchQuery) {
    const foodItems = document.querySelectorAll('.food-item');
    const lowerCaseQuery = searchQuery.toLowerCase();
    let found = false;

    foodItems.forEach(item => {
        const countryName = item.getAttribute('data-name').toLowerCase();
        const dishName = item.querySelector('h2').textContent.toLowerCase();
        

        if (countryName.includes(lowerCaseQuery) || dishName.includes(lowerCaseQuery)) {
            item.classList.remove('hide');
            found=true;
        } else {
            item.classList.add('hide');
        }
    });

    if(!found){
        alert("No matches found. Try a different search.");
    }
}

// On page load, check for search query in URL
window.onload = function() {
    const searchQuery = getQueryParam('search');
    if (searchQuery) {
        document.getElementById('recipe-search-input').value = decodeURIComponent(searchQuery);
        filterRecipes(searchQuery);
    }

    // Add an event listener to the search bar for manual input
    document.querySelector('.search-icon').addEventListener('click', function() {
        filterRecipes(document.getElementById('recipe-search-input').value);
    });
}


document.querySelectorAll('.filter-parameters input').forEach((inputField) => {
    inputField.addEventListener('click', () => {
        document.querySelectorAll('.selection-container > div').forEach((selection) => {selection.style.display = 'none'});
        document.querySelector('.'+ inputField.id + '-selection').style.display = 'block';
    });
});

var items = Array.from(document.querySelectorAll('.food-item'));
document.querySelector('.filter-button').addEventListener('click', () => {
    document.querySelectorAll('.selection-container > div').forEach((selection) => {selection.style.display = 'none'});
    var sorting = document.querySelector('.sorting input').value;
    var category = document.querySelector('.category input').value.replace(' ', '-');
    var cookingTime = document.querySelector('.cooking-time input').value;
    
    var gallery = document.querySelector('.food-gallery');
    gallery.innerHTML = '';

    if(sorting == 'Best Rated') {
        items.sort((a, b) => {
            return parseFloat(a.getAttribute('data-rating')) - parseFloat(b.getAttribute('data-rating'));
        });
        items.reverse();
    }else if(sorting == 'Most Popular'){
        items.sort((a, b) => {
            return parseFloat(a.dataset.views) - parseFloat(b.dataset.views);
        });
        items.reverse();
    }else if(sorting == 'New'){
        items.sort((a, b) => {
            var date1 = parseDate(a.getAttribute('data-upload-date'));
            var date2 = parseDate(b.getAttribute('data-upload-date'));
            return date1 - date2;
        });
        items.reverse();
    }
    else if(sorting == 'Alphabetically'){
        items.sort((a,b) => {
            return a.querySelector('.flagIcon-foodName h2').innerText.trim().localeCompare(b.querySelector('.flagIcon-foodName h2').innerText.trim());
        });
    }

    items.forEach((item)=>{
        item.classList.remove('hide');
        if(category != '' && category != 'All'){
            if(!item.classList.contains(category)){
                item.classList.add('hide');
            }
        }

        if(cookingTime != '' && cookingTime != 'All'){
            if(item.getAttribute('data-cooking-time') != cookingTime){
                item.classList.add('hide');
            }
        }
        gallery.appendChild(item);
    });

});

function parseDate(dateString) {
    const [day, month, year] = dateString.split('-').map(Number);
    return new Date(year, month-1, day);
}

document.querySelectorAll('.sorting-selection li').forEach(function(selection) {
    selection.addEventListener('click', () => {
        var input = document.querySelector('.sorting input');
        input.value = selection.innerHTML;
    });
});

document.querySelectorAll('.category-selection li').forEach(function(selection) {
    selection.addEventListener('click', () => {
        var input = document.querySelector('.category input');
        input.value = selection.innerHTML;
    });
});

document.querySelector('.cooking-time-selection input').addEventListener('input', (event) => {
    var input = document.querySelector('.cooking-time input');
    switch (event.target.value) {
        case '1':
            input.value = 'All';
            break;
        case '2':
            input.value = '15min';
            break;
        case '3':
            input.value = '30min';
            break;
        case '4':
            input.value = '45min';
            break;
        case '5':
            input.value = '1h';
            break;
        case '6':
            input.value = '2h';
            break;
        case '7':
            input.value = '3h';
            break;
        default:
            input.value = '>5h';
    }
});

function animation(){
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
    const eventItems = document.querySelectorAll('.food-item');
    eventItems.forEach(item => {
        observer.observe(item);
    });
}
document.addEventListener('DOMContentLoaded', animation);