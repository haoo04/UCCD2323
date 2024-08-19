const video = document.getElementById('food-video');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            video.play();
        } else {
            video.pause();
        }
    });
}, { threshold: 0.2 });

observer.observe(video);

var leftButton = document.querySelector('.food-media-container .left-button');
var rightButton = document.querySelector('.food-media-container .right-button');
var rightButtonClicked = false;

document.querySelector('.food-media').addEventListener('mouseover', () => {
    if(rightButtonClicked == false){
        rightButton.classList.add('show');
    }else{
        leftButton.classList.add('show');
    }
});

document.querySelector('.food-media-container').addEventListener('mouseleave', () => {
    leftButton.classList.remove('show');
    rightButton.classList.remove('show');
});

leftButton.addEventListener('click', () => {
    videoContainerScroll(-1);
    rightButtonClicked = false;
    leftButton.classList.remove('show');
});

rightButton.addEventListener('click', () => {
    videoContainerScroll(1);
    rightButtonClicked = true;
    rightButton.classList.remove('show');
});

function videoContainerScroll(direction){
    var videoContainer = document.querySelector('.food-media');
    videoContainer.style.scrollBehavior = "smooth";
    if(direction<0){
        videoContainer.scrollLeft -= videoContainer.offsetWidth;
    }else{
        videoContainer.scrollLeft += videoContainer.offsetWidth;
    }
    
}

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