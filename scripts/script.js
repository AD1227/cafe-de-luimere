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

// This script is for Greeting

//Variables for the Welcome message

var greeting = "Welcome Back ";
var name = "Molly";
var message = "! , Here is your Order Status";

//Concatenate of the three variables to the welcome mesage

var welcome = greeting + name + message;

//Variables that hold details about the sign.

var itemOrdered = [
  "espresso---------- $9",
  "Americano--------$9",
  "Latte-------------- $9",
];

var subTotal = itemOrdered.length * 9;
var tip = 20;
var status = "Ready for Pick up";
var grandTotal = subTotal + tip;

//Get the element that has an id of greeting
var el = document.getElementById("greeting");
el.textContent = welcome;

// get the element that has an if of status
var elStatus = document.getElementById("status");
elStatus.textContent = status;

// get the element that has an id for the items

var el_item1 = document.getElementById("item1");
var el_item2 = document.getElementById("item2");
var el_item3 = document.getElementById("item3");
el_item1.textContent = itemOrdered[0];
el_item2.textContent = itemOrdered[1];
el_item3.textContent = itemOrdered[2];

//get the element that has an id of subtotal

var elSubTotal = document.getElementById("subTotal");
elSubTotal.textContent = "$" + subTotal;

//get the element that has an id of tip
var elTip = document.getElementById("tip");
elTip.textContent = tip;

//get the element that has an id of grandTotal
var elGrandTotal = document.getElementById("grandTotal");
elGrandTotal.textContent = "$" + grandTotal;
