//Select all filter buttons and filterable food gallery
const filterButtons = document.querySelectorAll(".food-filter button");
const filterableFood = document.querySelectorAll(".food-gallery .food-item");

//Define the filterFood function
const filterFood = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    //Iterate over each food item
    filterableFood.forEach(food => {
        //Add "hide" class to hide the food initially
        food.classList.add("hide");
        //Check if the card matches the selected filter or "all" is selected
        if(food.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            food.classList.remove("hide");
        }
    });
};

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
filterButtons.forEach(button => button.addEventListener("click", filterFood));