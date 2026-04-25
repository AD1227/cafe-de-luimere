//******************************************************* */
// if/else checks the order status and updates the greeting message
//and the status color accordingly.
//********************************************************************* */
var elStatus = document.getElementById("status");
var elGreeting = document.getElementById("greeting");
if (elStatus) {
  if (status === "Ready for Pick up") {
    elStatus.style.backgroundColor = "green";
    if (elGreeting)
      elGreeting.textContent = "Welcome Back " + name + "Your order is ready!";
  } else if (status === "Preparing") {
    elStatus.style.backgroundColor = "orange";
    if (elGreeting)
      elGreeting.textContent =
        "Welcome Back " + name + "We're preparing your order...";
  } else {
    elStatus.style.backgroundColor = "grey";
    if (elGreeting)
      elGreeting.textContent =
        "Welcome Back " + name + "Order recieved. Hang tinght!";
  }
}

//********************************************************* */
//for loop iterates though itemOrdered array and display everything one the list
// in the order tracker page.
//****************************************** */
for (var count = 0; count < itemOrdered.length; count++) {
  var elItem = document.getElementById("item" + (count + 1));
  var elPrice = document.getElementById("itemPrice" + (count + 1));
  if (elItem) elItem.textContent = itemOrdered[count];
  if (elPrice) elPrice.textContent = "$" + itemPrice[count];
}

//************************************************* */
// for loop iterates through itemPrice array to calculate the subtiotal.
//***************************************** */
var subTotal = 0;
for (var count = 0; count < itemPrice.length; count++) {
  subTotal += itemPrice[count];
}
//update subtotal, tip, grand total in the tracker tab

var elSubTotal = document.getElementById("subTotal");
if (elSubTotal) elSubTotal.textContent = "$" + subTotal;

var elTip = document.getElementById("tip");
var tip = subTotal * (20 / 100); // gets the 20% of the subtotal as tip
if (elTip) elTip.textContent = "$" + tip;

var grandTotal = subTotal + tip;
var elGrandTotal = document.getElementById("grandTotal");
if (elGrandTotal) elGrandTotal.textContent = "$" + grandTotal;
