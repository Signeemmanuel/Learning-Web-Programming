// The HTML DOM allows JavaScript to change the content of HTML elements.
document.getElementById("into").innerHTML = "Hello World!";

// To change the value of an HTML attribute, use this syntax:
document.getElementById("logo").src = "picture3.jpg";

// Dynamic HTML content. JavaScript can create dynamic HTML content:
document.getElementById("demo").innerHTML = "Date: " + Date();

//document.write() .In JavaScript, document.write() can be used to write directly to the HTML output stream:
// Never use document.write() after the document is loaded. It will overwrite the document.
document.write(Date());
