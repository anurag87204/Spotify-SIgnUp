// Selectors
const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const eye = document.getElementById("eye");
const box = document.getElementById("checkbox");

//  Event Listnener
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Sign Up");

  checkInputs();
});

// Function: Eye, showPassword()
var state = false;
function showPassword() {
  if (state) {
    document.getElementById("password").setAttribute("type", "password");
    document.getElementById("eye").style.color = "#7d9096 ";
    state = false;
  } else {
    document.getElementById("password").setAttribute("type", "text");
    document.getElementById("eye").style.color = "#67e49b";
    state = true;
  }
}

/* Function: This function chekcs all Inputs, 
   if they're all valid when it's submitted */
function checkInputs() {
  // Values Form of Inputs
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // Full Name
  if (nameValue === "") {
    name.setAttribute("placeholder", "Please enter your full name!");
    name.style.borderBottom = ".1rem solid #F73331";
    console.error("Full name was not provided!");
  } else {
    name.style.borderBottom = ".1rem solid #03ef8e";
    console.log("Full name was provided");
  }

  // Email
  if (emailValue === "") {
    email.setAttribute("placeholder", "Please enter your Email-adress!");
    email.style.borderBottom = ".1rem solid #F73331";
    console.error("Email adress invalid");
  } else {
    email.style.borderBottom = ".1rem solid #03ef8e";
    console.log("Email adress valid");
  }

  // Password
  if (passwordValue.length < 6 || passwordValue === "") {
    password.setAttribute("placeholder", "Please enter a strong password!");
    password.style.borderBottom = ".1rem solid #F73331";
    console.error("Password was not provide");
  } else {
    password.style.borderBottom = ".1rem solid #03ef8e";
    console.log("Password was provided");
  }

  // Checkbox
}
