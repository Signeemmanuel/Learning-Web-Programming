function toggleColors(e, course) {
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  const mainContent = document.querySelector(".main-content");
  const sideBar = document.querySelector(".side-bar");

  //Toggle the background-colors using the dark classname
  
  header.classList.toggle("dark");
  footer.classList.toggle("dark");
  mainContent.classList.toggle("dark");
  sideBar.classList.toggle("dark");

  console.log(sideBar.innerHTML);

  if (header.classList.contains("dark")) {
    e.target.innerText = "Dark Mode " + course;
  } else {
    e.target.innerText = "Light Mode";
  }
}
