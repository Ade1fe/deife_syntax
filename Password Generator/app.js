function updateSliderValue(value) {
    document.getElementById("sliderValue").textContent = "Length: " + value;
  }
  
  function generatePassword() {
    var length = document.getElementById("slider").value;
    var includeUppercase = document.getElementById("uppercaseCheckbox").checked;
    var includeLowercase = document.getElementById("lowercaseCheckbox").checked;
    var includeNumbers = document.getElementById("numbersCheckbox").checked;
    var includeSymbols = document.getElementById("symbolsCheckbox").checked;
  
    var charset = "";
    if (includeUppercase) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeLowercase) {
      charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeNumbers) {
      charset += "0123456789";
    }
    if (includeSymbols) {
      charset += "!@#$%^&*()_-+=[]{}|:;<>,.?/";
    }
  
    if (charset === "") {
      alert("Please select at least one checkbox.");
      return;
    }
  
    var password = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
  
    document.getElementById("password").value = password;
  }
  
  function copyField() {
    var copyButton = document.getElementById("copy");
    copyButton.addEventListener("click", () => {
      var passwordField = document.getElementById("password");
      passwordField.select();
      passwordField.setSelectionRange(0, 99999);
  
    document.execCommand("copy");
    alert("Copied");
    });
  }
  
  
  
  
  var btn = document.getElementById("btn");
  btn.addEventListener("click", generatePassword)