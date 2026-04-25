// This script is for Greeting

//Variables for the Welcome message

var greeting = "Welcome Back ";
var name = "John Doe, ";
var message = "Your Order is Ready!";

//Concatenate of the three variables to the welcome mesage

var welcome = greeting + name + message;

//Variables that hold details about the sign.
var itemOrdered,
  itemPrice,
  subTotal = 0,
  tip,
  status,
  grandTotal = 0;
itemOrdered = ["espresso", "Americano", "Latte"];
itemPrice = [5, 5, 5];

//subTotal = itemPrice[0] + itemPrice[1] + itemPrice[2];
tip = 20;
status = "Preparing";
grandTotal = subTotal + tip;

//Get the element that has an id of greeting
var el = document.getElementById("greeting");
if (el) {
  el.textContent = welcome;

  // get the element that has an id of status
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
