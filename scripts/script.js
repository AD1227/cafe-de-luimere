/* -=============
burger menu
============
*/

// this function is for humberger menu in mobile viewport

function resetNavbar() {
  var menu = document.getElementById("navbar-links");
  if (menu) menu.classList.remove("open");

  var panel2 = document.querySelector(".panel2");
  var containers = document.querySelectorAll(".recommended ul, .slides");

  if (panel2) panel2.scrollTop = 0;

  containers.forEach(function (container) {
    container.scrollLeft = 0;
  });
}

function hamburger() {
  var menu = document.getElementById("navbar-links");
  if (menu) menu.classList.toggle("open");
}

window.addEventListener("resize", function () {
  var menu = document.getElementById("navbar-links");
  var navbar = document.getElementById("mobile-navbar");
  if (window.innerWidth < 1020) {
    resetNavbar();
  } else {
    // desktop — remove all inline styles so CSS takes over
    if (menu) menu.removeAttribute("style");
    if (navbar) navbar.removeAttribute("style");
  }
});

// auto close menu when a link is clicked
var links = document.querySelectorAll("#navbar-links a");
links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    var href = this.getAttribute("href");
    if (!href || !href.startsWith("#")) return; // let non anchor links behave normally

    e.preventDefault(); // stop default anchor jump, and allow scroll behavior to work
    var targetId = href.substring(1);
    var target = document.getElementById(targetId);
    if (window.innerWidth < 1020) {
      resetNavbar();
    }
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});
