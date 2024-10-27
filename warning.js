// var myText = 'Welcome to 22 - LIFE';
// var myArray = myText.split("");
// var loopTimer;
// function frameLooper() {
//     if(myArray.length > 0){
//         document.getElementById("type_text").innerHTML += myArray.shift();
//     } else {
//         clearTimeout(loopTimer);
//         return false;
//     }
//     loopTimer = setTimeout('frameLooper()', 100);
// }
// frameLooper();


document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup");
    const acceptBtn = document.getElementById("acceptBtn");

    // Check if the user has already accepted
    if (!localStorage.getItem("acceptedTerms")) {
        popup.style.display = "flex"; // Show the popup
    }

    acceptBtn.addEventListener("click", function() {
        localStorage.setItem("acceptedTerms", "true"); // Store acceptance in localStorage
        popup.style.display = "none"; // Hide the popup
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("acceptBtn").addEventListener("click", function() {
        window.location.href = "Login.html"; // Change to your target page
    });
});