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
var name = "John Doe, ";
var message = "Your Order is Ready!";

//Concatenate of the three variables to the welcome mesage

var welcome = greeting + name + message;

//Variables that hold details about the sign.

var itemOrdered = ["espresso", "Americano", "Latte"];
var itemPrice = [9, 5, 4];

var subTotal = itemPrice[0] + itemPrice[1] + itemPrice[2];
var tip = 20;
var status = "Ready for Pick up";
var grandTotal = subTotal + tip;

//Get the element that has an id of greeting
var el = document.getElementById("greeting");
if (el) {
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

  //get the element that has an id for itemPrice
  var elItemPrice1 = document.getElementById("itemPrice1");
  var elItemPrice2 = document.getElementById("itemPrice2");
  var elItemPrice3 = document.getElementById("itemPrice3");
  elItemPrice1.textContent = itemPrice[0];
  elItemPrice2.textContent = itemPrice[1];
  elItemPrice3.textContent = itemPrice[2];

  //get the element that has an id of subtotal

  var elSubTotal = document.getElementById("subTotal");
  elSubTotal.textContent = "$" + subTotal;

  //get the element that has an id of tip
  var elTip = document.getElementById("tip");
  elTip.textContent = "$" + tip;

  //get the element that has an id of grandTotal
  var elGrandTotal = document.getElementById("grandTotal");
  elGrandTotal.textContent = "$" + grandTotal;
}

//***********************************
//this is script for limited offer
//***********************************

var limitedOffer = {
  item: "Caramel Frappe",
  orgPrice: 9, // Original price in dollars
  discount: 50, // Percentage discount
  offerPrice: function () {
    var offerRate = this.orgPrice * ((100 - this.discount) / 100);
    return offerRate;
  },
};

var itemName, orgPrice, specialPrice;

itemName = document.getElementById("itemName");
orgPrice = document.getElementById("originalPrice");
specialPrice = document.getElementById("newPrice");

itemName.textContent = limitedOffer.item;
orgPrice.textContent = "$" + limitedOffer.orgPrice.toFixed(2);
specialPrice.textContent = "$" + limitedOffer.offerPrice();

var expiryMsg; // message display to user
var today; // date today
var elEnds; // the element that show the message about the offer ending

function offerExpires(today) {
  //variable for local scope
  var weekFromToday, day, date, month, year, dayNames, monthNames;
  // 7 days time (added in milliseconds)
  weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  // array to hold the names of the days & months
  dayNames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  monthNames = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //collect part of the date to show on the page

  day = dayNames[weekFromToday.getDay()];
  date = weekFromToday.getDate();
  month = monthNames[weekFromToday.getMonth()];
  year = weekFromToday.getFullYear();

  //Create the message
  expiryMsg = "Expires: ";
  expiryMsg += day + " " + date + " " + month + " " + year + " ";
  return expiryMsg;
}

today = new Date(); //put today's date in a variable
elEnds = document.getElementById("offerEnds"); //get the offerEnds element
elEnds.innerHTML = offerExpires(today); //add the expiry meesage
