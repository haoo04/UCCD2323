let lastScroll = window.scrollY;
var backTopBtn = document.getElementById('back-to-top');
var worldCuisine = document.querySelector(".world-cuisines");
var dropDownMenu = document.querySelector('.drop-down-menu');

// Check if user has already signed in
var isSignedIn = sessionStorage.getItem('isSignedIn');
if(isSignedIn){
    const username = JSON.parse(localStorage.getItem(sessionStorage.getItem("isSignedIn"))).name;
    account.innerHTML = "<span>"+ username + "</span>";
}

window.addEventListener('scroll', () => {
    if(window.scrollY > 140 && lastScroll < window.scrollY){
        document.querySelector('.sticky-header').classList.add('hidden');
    } else {
        document.querySelector('.sticky-header').classList.remove('hidden');
    }
    lastScroll = window.scrollY;

    if(window.scrollY > 140){
        backTopBtn.style.display = 'block';
    }else{
        backTopBtn.style.display = 'none';
    }
});

backTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


worldCuisine.addEventListener('click', (event) => {
    event.stopPropagation();
    if(dropDownMenu.style.display=='block'){
        worldCuisine.querySelector('.fa-solid').classList.replace('fa-angle-up', 'fa-angle-down');
        dropDownMenu.style.display = 'none';
    }else{
        worldCuisine.querySelector('.fa-solid').classList.replace('fa-angle-down', 'fa-angle-up');
        dropDownMenu.style.display = 'block';
    }

});

window.addEventListener('click', () => {
    if(dropDownMenu.style.display=='block'){
        worldCuisine.querySelector('.fa-solid').classList.replace('fa-angle-up', 'fa-angle-down');
        dropDownMenu.style.display = 'none';
    }
});

const menuBar = document.querySelector('.menu-bar');
const menuCloseBtn = document.querySelector('.menu-close-button');
const navMenu = document.querySelector('nav');

menuBar.addEventListener('click', showNavMenu);

function showNavMenu() {
    navMenu.classList.add('open');
    document.body.style.overflowY = 'hidden';
    menuCloseBtn.addEventListener('click', closeNavMenu);
}

function closeNavMenu() {
    navMenu.classList.remove('open');
    document.body.style.overflowY = 'scroll';
    menuCloseBtn.removeEventListener('click', closeNavMenu);
}

$(document).ready(function() {
    $('#subscription-form').on('submit', function(e) {
        e.preventDefault();

        const email = $('#subscription-email').val();

        // Check if the email field is not empty
        if (email === '') {
            alert('Please enter a valid email address.');
            return;
        }

        // Prepare the data to be sent to Mailchimp
        const data = {
            email_address: email,
            status: 'subscribed'
        };

        // Mailchimp API details
        const mailchimpUrl = 'https://us12.api.mailchimp.com/3.0/lists/a325a241be/members/';
        const apiKey = '399ad50c07e5c8651cba530e3edbcffb-us12';

        $.ajax({
            type: 'POST',
            url: mailchimpUrl,
            data: JSON.stringify(data),
            headers: {
                'Authorization': 'apikey ' + apiKey,
                'Content-Type': 'application/json'
            },
            success: function(response) {
                alert('Thank you for subscribing!');
                $('#subscription-email').val(''); // Clear the input field
            },
            error: function(error) {
                alert('There was an issue with your subscription. Please try again later.');
                console.log(error);
            }
        });
    });
});