const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const mult = document.getElementById("mult");
const divide = document.getElementById("divide");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");

zero.addEventListener("click", () => {
  let display = document.getElementById("display");
  console.log(display);
  display.textContent += "0";
});

one.addEventListener("click", () => {
  let display = document.getElementById("display");
  console.log(display);
  display.textContent += "1";
});
two.addEventListener("click", () => {
  let display = document.getElementById("display");
  console.log(display);
  display.textContent += "2";
});
three.addEventListener("click", () => {
  let display = document.getElementById("display");
  console.log(display);
  display.textContent += "3";
});
four.addEventListener("click", () => {
  let display = document.getElementById("display");
  console.log(display);
  display.textContent += "4";
});

five.addEventListener("click", () => {
  let display = document.getElementById("display");
  console.log(display);
  display.textContent += "5";
});

six.addEventListener("click", () => {
  let display = document.getElementById("display");
  console.log(display);
  display.textContent += "6";
});
seven.addEventListener("click", () => {
  let display = document.getElementById("display");
  console.log(display);
  display.textContent += "7";
});
eight.addEventListener("click", () => {
  let display = document.getElementById("display");
  console.log(display);
  display.textContent += "8";
});
nine.addEventListener("click", () => {
  let display = document.getElementById("display");
  console.log(display);
  display.textContent += "9";
});

clear.addEventListener("click", () => {
  let display = document.getElementById("display");
  console.log(display);
  display.textContent = "";
});
