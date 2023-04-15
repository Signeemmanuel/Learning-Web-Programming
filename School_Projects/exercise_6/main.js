const firstName = prompt("Enter your first name:");
const secondName = prompt("Enter your second name:");

const h1 = document.querySelector("h1");

// h1.textContent = "Hello, world";

h1.innerHTML = `<span>Hello ${firstName} ${secondName}</span>`;
