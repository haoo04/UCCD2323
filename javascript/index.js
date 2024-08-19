function searchRecipe() {
    const query = document.getElementById('search-input').value;
    if (query) {
        window.location.href = `recipes.html?search=${encodeURIComponent(query)}`;
    }
}

var zIndexCount = 1;
function toggleFlagBorder(name, childnum){
    //toggle the flag outline colour
    document.querySelectorAll(".flag").forEach(function(flags){
        flags.classList.remove('selected');
    })
    document.getElementById(name+'-flag').classList.add('selected');

    //display the food image
    var foodShowed = document.querySelector(".food-pictures img:nth-child(n+"+childnum+")");
    if(foodShowed.style.zIndex != (zIndexCount - 1)){
        foodShowed.classList.remove("foodImgShow");
    }
    void foodShowed.offsetWidth;
    foodShowed.style.zIndex = zIndexCount;
    zIndexCount++;
    foodShowed.classList.add("foodImgShow");

    //show food name and description
    document.querySelectorAll('.food-name-and-description div').forEach(function(content) {
        content.classList.remove('show');
    });
    document.querySelector('.food-name-and-description div:nth-child(' + childnum + ')').classList.add('show');

    //display country names
    document.querySelectorAll('.countries-name span').forEach(function(content) {
        content.classList.remove('show');
    });
    document.getElementById(name).classList.add('show');

    //change the show-more link location
    var foodName = document.querySelector('.food-name-and-description div:nth-child(' + childnum + ')').id;
    document.querySelector('.highlight-content a').href = foodName + ".html"
}

document.querySelector('.arrow-back').addEventListener('click', function(){
    var container = document.querySelector('.wrapper-container');
    var scrollSize = container.offsetWidth;
    container.style.scrollBehavior = "smooth";
    container.scrollLeft -= scrollSize;
});

document.querySelector('.arrow-forward').addEventListener('click', function(){
    var container = document.querySelector('.wrapper-container');
    var scrollSize = container.offsetWidth;
    container.style.scrollBehavior = "smooth";
    container.scrollLeft += scrollSize;
});

document.querySelector(".wrapper-container").addEventListener('wheel', function(event) {
    event.preventDefault();
    document.querySelector('.wrapper-container').scrollLeft += event.deltaY;
    container.style.scrollBehavior = "auto";
});

document.querySelector("#Chynna .play-icon").addEventListener("click", playChynnaVid);

document.querySelector(".close-button").addEventListener("click", closeChynnaVid);

function playChynnaVid(){
    document.body.style.overflowY = "hidden";
    document.querySelector(".chynna-video-container").classList.add("show");
    document.querySelector(".chynna-video-container video").play();
}

function closeChynnaVid(){
    document.body.style.overflowY = "scroll";
    document.querySelector(".chynna-video-container").classList.remove("show");
    document.querySelector(".chynna-video-container video").currentTime = 0;
    document.querySelector(".chynna-video-container video").pause();
}

document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}

document.getElementById('previous').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}