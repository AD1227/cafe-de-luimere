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
