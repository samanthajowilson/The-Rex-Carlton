/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');

/* Document menas it's grabbing stuff from index.html andthis line is useless unless it's stored in a variable*/
document.getElementByID("image");
var theImage = document.getElementByID("image");
theImage.style.height = 200;
/*This function should be making the words have a black background when you click the button,*/
/*function makeDisappear() {
var thing = document.getElementById("divIntro");
thing.style.backgroundColor = "rgb(0,0,0)";
}*/
function makeDisappear() {
  var thing = document.getElementById("divLorem");
  thing.style.display = "none";
}
/*This function should be making the words "rex rex rex" smaller when you click the button*/
function makeSmaller() {
var thing = document.getElementByID("rex");
  thing.style.width = "25%";
}
function makeBigger() {
var thing = document.getElementByID("callToAction");
  thing.style.text.size = "300px";
}
/*This function should be making changing the intro div to text saying "hey" on a loop
var currentItem = 0; 
function changeContent (){
var myList = ["hi","hello","hey","howdy"];
document.getElementById("divIntro").innerHTML = myList[currentItem];
currentItem = currentItem + 1;
}*/
