const queryParameters = window.location.search;

const username = queryParameters.split("=")[1];

const span = document.querySelector("span");
document.getElementsByTagName("span")[0];

span.textContent = username;

// h1.textContent = `${username}, Welcome to your Dashboard`;
