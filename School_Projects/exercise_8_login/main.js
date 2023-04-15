const correctUsername = "John";
const correctPassword = "JohnDoe";

function loginUser(e) {
  e.preventDefault();
  const usernameElement = document.getElementById("username");
  const passwordElement = document.getElementById("password");

  passwordElement.type = "text";
  passwordElement.setAttribute("type", "text");

  const username = usernameElement.value;

  const password = passwordElement.value;

  //check if username and password match correct values
  if (username == correctUsername && password == correctPassword) {
    // Redirect to Home page

    window.location = `home.html?username=${username}`;
  } else {
    alert("Invalid credentials, please try again");
  }
}
