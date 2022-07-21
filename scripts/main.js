const month = "July";
var day = "Thursday"
let year = 2022;

console.log(month);
console.log(day);
console.log(year);

day = "Friday"

year = year + 1

console.log(day)
console.log(year)
day += " Satudery "

var zamir = document.getElementById("zamir")

setInterval (function () {
    var date = new Date()
    var currentime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    zamir.innerHTML = currentime
}, 1000)


var firstNumber = document.getElementById("first-number")
var secondNumber = document.getElementById("second-number")

var calculateButton = document.getElementById("Calculate")
var result = document.getElementById("result")

calculateButton.addEventListener("click", function name() {
    result.innerHTML = parseInt(firstNumber.value) + parseInt(secondNumber.value);
})