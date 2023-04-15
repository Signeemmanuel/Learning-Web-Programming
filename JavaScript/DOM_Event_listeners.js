elm1.addEventListener("click", function(){alert("Hello World!")});


elm1.addEventListener("click", myFunction);
function myFunction() {
    alert("Hello World!");
}


element.addEventListener("mouseover", myFunction);
element.addEventListener("click", mySecondFunction);
element.addEventListener("mouseout", myThirdFunction);
window.addEventListener("resize", function(){
    document.getElementById("demo").innerHTML = Math.random();
});


// Removing Events
document.getElementById("myDIV").addEventListener("mousemove", myFunction);
function myFunction() {
  document.getElementById("demo").innerHTML = Math.random();
}
function removeHandler() {
  document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
}
