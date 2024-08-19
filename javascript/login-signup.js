const signUpLogInCont = document.querySelector('.sign-up-log-in-container');
const signupLogin = document.querySelector(".sign-up-log-in");
const registerbtn = document.getElementById("register");
const loginbtn = document.getElementById("login");
const account = document.querySelector('.account-info');
const signUpForm = document.querySelector(".sign-up form");
const signInForm = document.querySelector(".sign-in form");

registerbtn.addEventListener("click", () => {
    signupLogin.classList.add("active");
});

loginbtn.addEventListener("click", () => {
    signupLogin.classList.remove("active");
});

account.addEventListener('click', (evt) => {
    evt.stopPropagation();
    showSignUpLogin();
});

signupLogin.addEventListener('click', (evt) => {
    evt.stopPropagation();
})



function showSignUpLogin(){
    document.body.style.overflowY = "hidden";
    signUpLogInCont.style.display = 'flex';
    window.addEventListener('click', () => {
        closeSignUpLogIn();
    })
}

function closeSignUpLogIn(){
    document.body.style.overflowY = "scroll";
    signUpLogInCont.style.display = 'none';
    window.removeEventListener('click', () => {
        closeSignUpLogIn();
    })
}

// Function to save user data to localStorage
function saveUserData(name, email, password) {
    const user = {
        name: name,
        email: email,
        password: password
    };
    localStorage.setItem(email, JSON.stringify(user));
}

// Function to check if user exists and password matches
function validateUser(email, password) {
    const user = JSON.parse(localStorage.getItem(email));
    if (user && user.password === password) {
        return true;
    } else {
        return false;
    }
}

// Handle sign-up form submission
signUpForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = signUpForm.querySelector("input[type='text']").value;
    const email = signUpForm.querySelector("input[type='email']").value;
    const password = signUpForm.querySelector("input[type='password']").value;

    //Clear the input value after sign up
    signUpForm.querySelector("input[type='text']").value = '';
    signUpForm.querySelector("input[type='email']").value = '';
    signUpForm.querySelector("input[type='password']").value = '';

    if (name && email && password) {
        saveUserData(name, email, password);
        alert("Sign Up successful! Please log in.");
        signupLogin.classList.remove("active");
    } else {
        alert("Please fill out all fields.");
    }
});

// Handle sign-in form submission
signInForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = signInForm.querySelector("input[type='email']").value;
    const password = signInForm.querySelector("input[type='password']").value;

    if (validateUser(email, password)) {
        let username = JSON.parse(localStorage.getItem(email)).name;
        alert("Login successful! Welcome, " + username);
        sessionStorage.setItem("isSignedIn", email);
        account.innerHTML = "<span>"+ username + "</span>";
        closeSignUpLogIn();
    } else {
        alert("Invalid email or password. Please try again.");
    }
});