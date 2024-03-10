/* Sticky Navigation */
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
}

// responsive Navigation
$(".main-nav a").click(function () {
    document.getElementById("nav").checked = false;
});