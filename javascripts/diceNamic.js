// jshint esversion: 7

//define helper functions here

let rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};

//Define a controller to handle the button click
let controller = function() {
  let target, d1, d2, rollCount = 0, d1url, d2url, imgElem1, imgElem2, outputMsg;

//get the target number
target = document.querySelector("input").value;
console.log(target);


//roll target number and count rolls

do {
  d1 = rollDie();
  d2 = rollDie();

  rollCount = rollCount + 1;
  console.log(`d1= ${d1},d2= ${d2},rollcount= ${rollCount}`);

} while (d1 + d2 != target);



//update images

d1url = `images/die${d1}.gif`;
console.log(d1url);
imgElem1 = document.querySelector("img");
imgElem1.setAttribute("src", d1url);

d2url = `images/die${d2}.gif`;
console.log(d2url);
imgElem2 = document.querySelectorAll("img")[1];
imgElem2.setAttribute("src", d2url);

//display roll number on webpage

outputMsg = `You hit your number in ${rollCount} roll${(rollCount == 1)?"":"s"}!`;
document.querySelector("div").innerHTML = outputMsg;

};

//Register the controller after the DOM is complete
window.addEventListener("load", function() {
  //select the button
  let button = document.querySelector("button");

  //register the click handler for the button
  button.addEventListener("click", controller);
});
