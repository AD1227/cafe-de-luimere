(function () {
  var form = document.getElementById("login");
  var submit = document.getElementById("submit");
  var submitted = false;

  submit.disabled = true;
  submit.className = "disabled";
  var inputs = form.querySelectorAll(
    "input[type='text'],input[type='password']"
  );

  function checkInputs() {
    var allFilled = true;

    inputs.forEach(function (input) {
      if (!input.value) {
        allFilled = false;
      }
    });
    submit.disabled = submitted || !allFilled;
    submit.className = submitted || !allFilled ? "disabled" : "enable";
  }
  inputs.forEach(function (input) {
    input.addEventListener("input", checkInputs);
  });

  // this function show error on span element if the condition has not been met.

  function showError(inputId, message) {
    document.getElementById(inputId + "-error").textContent = message;
    document.getElementById(inputId).classList.add("input-error");
  }
  function clearError(inputId) {
    document.getElementById(inputId + "-error").textContent = "";
    document.getElementById(inputId).classList.remove("input-error");
  }
  function validateUsername(value) {
    if (!value) return "Username is required.";
    if (value.length < 8) return "Username must be at least 8 characters.";
    return null;
  }

  function validatePassword(value) {
    if (!value) return "Password is required.";
    if (value.length < 8) return "Password must be at least 8 characters.";
    return null;
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (submit.disabled || submitted) return;

    var usernameVal = this.elements.username.value;
    var passwordVal = this.elements.pwd.value;

    var usernameError = validateUsername(usernameVal);
    var passwordError = validatePassword(passwordVal);

    // show or clear errors
    if (usernameError) {
      showError("username", usernameError);
    } else {
      clearError("username");
    }

    if (passwordError) {
      showError("pwd", passwordError);
    } else {
      clearError("pwd");
    }

    if (usernameError || passwordError) return; // stop if any errors

    submit.disabled = true;
    submitted = true;
    submit.className = "disabled";

    alert("Welcome " + usernameVal + "! You have successfully logged in.");
    window.location.href = "index.html";
  });

  var pwd = document.getElementById("pwd");
  var chk = document.getElementById("showPwd");

  /***
   * this function listen to the radio "show password and change the input type
   * whenever the condition is true or false"
   */
  chk.addEventListener("change", function (e) {
    var target = e.target || e.srcElement;

    try {
      if (target.checked) {
        pwd.type = "text";
      } else {
        pwd.type = "password";
      }
    } catch (error) {
      alert("This browser cannot switch type");
    }
  });
})();
