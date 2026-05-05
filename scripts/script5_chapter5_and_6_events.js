// Create eventListener that will close navigation container in mobile viewport
// when outside of the container is clicked
document.addEventListener("click", function (e) {
  var navbar = document.getElementById("mobile-navbar");
  if (!navbar.contains(e.target)) {
    resetNavbar();
  }
});

//Create eventListener that will pop up message when submit button is click
// on contact form.

var form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("thank you! Your message has been sent.");
    this.reset();
  });
}

// Create an eventListener that disable I'm here button once clicked
// and change the label into a message.

var imHereBtn = document.querySelector(".imHereBtn");
if (imHereBtn) {
  imHereBtn.addEventListener("click", function (e) {
    e.preventDefault();
    this.textContent = "Staff has been notified!";
    this.style.color = "green";
    this.style.pointerEvents = "none";
  });
}
