document.addEventListener('DOMContentLoaded', function() {

    const countElement = document.getElementById('country-count');
    const featureItems = document.querySelectorAll('.feature-item');
    const animateUpElements = document.querySelectorAll('.animate-up');
    const targetCount = 200;
    let currentCount = 0;

    //animation of features section -- country , count from 0 to 200
    function updateCount() {
        if (currentCount < targetCount) {
            currentCount++;
            countElement.textContent = currentCount + "++";
            setTimeout(updateCount, 5);
        }
    }

    // Checks if an element is within the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    //animation of feature section (left -> right)
    function animateFeatureItems() {
        featureItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (itemTop < windowHeight * 0.8) {
                item.classList.add('animate');
            } else {
                item.classList.remove('animate');
            }
        });
    }   

    window.addEventListener('scroll', animateFeatureItems);
    animateFeatureItems();

    // Check and start animation when the page is scrolled
    function checkScroll() {
        if (isElementInViewport(countElement) && currentCount === 0) {
         updateCount();
            window.removeEventListener('scroll', checkScroll);
        }
    }

    //animation for logo description and our mission section (down -> up)
    window.addEventListener('scroll', function() {
        animateUpElements.forEach(function(element) {
            if (isInViewport(element)) {
                element.classList.add('animate');
            }
        });
    });

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial checking
});