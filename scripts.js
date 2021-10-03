
// Show return to top button on scroll
var topButton
window.onload = function() {
    topButton = document.getElementById("topBtn");
    //console.log(topButton);
    // show the button on scroll
    window.onscroll = function() {scroll()};

    function scroll() {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            topButton.style.display = "block";
            //console.log("show");
        } else {
            topButton.style.display = "none";
            //console.log("hide")
        }
    }
}


// Return to top button
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// submit contact form

submitContact = document.getElementById("submitContact");
submitContact.onsubmit = function() {formSubmitted()};
    function formSubmitted() {
        alert("Your form was submitted");
            }
