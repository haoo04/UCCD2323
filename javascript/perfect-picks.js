document.querySelector(".play-icon").addEventListener("click", function(){
    document.body.style.overflow = "hidden";
    document.querySelector(".perfect-picks-recipe-video-container").classList.add("show");
    document.querySelector(".perfect-picks-recipe-video-container video").play();
});

document.querySelector(".close-button").addEventListener("click", function(){
    document.body.style.overflow = "scroll";
    document.querySelector(".perfect-picks-recipe-video-container").classList.remove("show");
    document.querySelector(".perfect-picks-recipe-video-container video").currentTime = 0;
    document.querySelector(".perfect-picks-recipe-video-container video").pause();
});

document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}

document.getElementById('previous').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}