const searchParameters = window.location.search;
const userName = searchParameters.split("=")[1];

document.querySelector("span").innerHTML = userName;