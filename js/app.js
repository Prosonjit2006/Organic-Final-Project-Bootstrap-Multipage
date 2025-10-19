
/*

// navbar toggler JS
document.addEventListener("DOMContentLoaded", function () {
  const navToggler = document.querySelector(".navbar-toggler");
  const navMenu = document.querySelector("#navbarSupportedContent");

  navToggler.addEventListener("click", function (e) {
    e.preventDefault();

    // Check screen width; works only for 991px and below
    if (window.innerWidth <= 993) {
      navMenu.classList.toggle("show");
    }
  });

  // Optional: Auto-hide navbar after clicking any link (mobile behavior)
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 991) {
        navMenu.classList.remove("show");
      }
    });
  });

  // Optional: Reset menu when window resizes above 991px
  window.addEventListener("resize", function () {
    if (window.innerWidth > 991 && navMenu.classList.contains("show")) {
      navMenu.classList.remove("show");
    }
  });
});










let toggler=document.querySelector("#navTogglar");
let navlist=document.querySelector(".navlist");

// console.log(togglar, navlist);


toggler.addEventListener("click", listDisplay);

function listDisplay(){
    // alert('clicked')
    navlist.classList.toggle("showlist");
}


*/

