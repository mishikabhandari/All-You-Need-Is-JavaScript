let increasebtn = document.getElementById("increment-button");
let decreasebtn = document.getElementById("decrement-button");
let counterDisplay = document.getElementById("value");
let resetbtn = document.getElementById("reset-button");
let counter = 0;
increasebtn.onclick = function () {
    counter++;
    counterDisplay.innerText = counter;
}
decreasebtn.onclick = function () {
    counter--;
    counterDisplay.innerText = counter;
}
resetbtn.onclick = function () {
    counter = 0;
    counterDisplay.innerText = counter;
}