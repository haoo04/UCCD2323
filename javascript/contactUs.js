// function saveToCookie() {

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const feedback = document.getElementById('feedback').value;
    
//     const formData = {
//       name: name,
//       email: email,
//       feedback: feedback
//     };
    
//     const formDataString = JSON.stringify(formData);
    
//     document.cookie = "formData=" + encodeURIComponent(formDataString) + "; max-age=604800; path=/";
//  }

// function thanks(){
//     alert('Thanks for your feedback!');
//     location.reload();
// }

// document.querySelector('.btn').onclick = function() {
//     saveToCookie();
//     thanks(); 
// };

// function saveToCookie() {
//   const name = $('#name').val();
//   const email = $('#email').val();
//   const feedback = $('#feedback').val();
  
//   const formData = {
//     name: name,
//     email: email,
//     feedback: feedback
//   };
  
//   const formDataString = JSON.stringify(formData);
  
//   document.cookie = "formData=" + encodeURIComponent(formDataString) + "; max-age=604800; path=/";
// }

// function thanks() {
//   alert('Thanks for your feedback!');
//   location.reload();
// }

// function getCookie(cName) {
//   const name = cName + "=";
//   const decodedCookie = decodeURIComponent(document.cookie);
//   const cookieArr = decodedCookie.split(';');
//   for(let i = 0; i < cookieArr.length; i++) {
//       let cookie = cookieArr[i].trim();
//       if (cookie.indexOf(name) === 0) {
//           return cookie.substring(name.length, cookie.length);
//       }
//   }
//   return "";
// }

// $('.btn').on('click', function() {
//   const cookieConsent = getCookie("cookie");
  
//   if (cookieConsent === "accepted") {
//       saveToCookie();
//       thanks();
//   } else {
//       alert('Please accept cookies before submitting feedback.');
//   }
// });

$(document).ready(function() {

  function saveToCookie() {
      const name = $('#name').val();
      const email = $('#email').val();
      const feedback = $('#feedback').val();
      
      const formData = {
          name: name,
          email: email,
          feedback: feedback
      };
      
      const formDataString = JSON.stringify(formData);
      
      document.cookie = "formData=" + encodeURIComponent(formDataString) + "; max-age=604800; path=/";
  }

  function thanks() {
      alert('Thanks for your feedback!');
      location.reload();
  }

  function getCookie(cName) {
      const name = cName + "=";
      const decodedCookie = decodeURIComponent(document.cookie);
      const cookieArr = decodedCookie.split(';');
      for (let i = 0; i < cookieArr.length; i++) {
          let cookie = cookieArr[i].trim();
          if (cookie.indexOf(name) === 0) {
              return cookie.substring(name.length, cookie.length);
          }
      }
      return "";
  }

  $('.btn').on('click', function(event) {
      event.preventDefault(); // Prevent the default form submission behavior
      const cookieConsent = getCookie("cookie");
      
      if (cookieConsent === "accepted") {
          saveToCookie();
          thanks();
      } else {
          alert('Please accept cookies before submitting feedback.');
      }
  });
});