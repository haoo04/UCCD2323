document.addEventListener("DOMContentLoaded", function() {
    console.log('Document loaded');
    
    const images = document.querySelectorAll('.restaurant-image img');
    if (images.length === 0) {
        console.error('No images found');
        return;
    }

    let currentIndex = 0;
    let intervalId;

    function changeImage() {
        console.log('Changing image to index:', currentIndex);
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    function startImageRotation() {
        console.log('Start image rotation');
        if (!intervalId) {
            intervalId = setInterval(changeImage, 2000); // 每2秒切换一次图片
        }
    }

    function stopImageRotation() {
        console.log('Stop image rotation');
        clearInterval(intervalId);
        intervalId = null;
    }

    images[currentIndex].classList.add('active');

    const container = document.querySelector('.restaurant-image');
    if (container) {
        container.addEventListener('mouseover', function() {
            console.log('Mouse over event triggered');
            startImageRotation();
        });
        container.addEventListener('mouseleave', function() {
            console.log('Mouse leave event triggered');
            stopImageRotation();
        });
    } else {
        console.error('Container element not found');
    }
});
