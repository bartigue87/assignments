const addForm = document.addForm;
const subForm = document.subForm;
const multForm = document.multForm;

addForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const firstAdd = Number(addForm.firstAdd.value);
  const secondAdd = Number(addForm.secondAdd.value);
  addForm.firstAdd.value = "";
  addForm.secondAdd.value = "";

  function sum(num1, num2) {
    return num1 + num2;
  }
  var addResult = sum(firstAdd, secondAdd);
  const h1 = document.createElement("h1");
  h1.textContent = addResult;
  document.getElementById("addition").appendChild(h1);
});

subForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const firstSub = Number(subForm.firstSub.value);
  const secondSub = Number(subForm.secondSub.value);
  subForm.firstSub.value = "";
  subForm.secondSub.value = "";

  function subtract(num1, num2) {
    return num1 - num2;
  }
  var subResult = subtract(firstSub, secondSub);
  const h1 = document.createElement("h1");
  h1.textContent = subResult;
  document.getElementById("subtraction").appendChild(h1);
});

multForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const firstMult = Number(multForm.firstMult.value);
  const secondMult = Number(multForm.secondMult.value);
  multForm.firstMult.value = "";
  multForm.secondMult.value = "";

  function mult(num1, num2) {
    return num1 * num2;
  }
  var multResult = mult(firstMult, secondMult);
  const h1 = document.createElement("h1");
  h1.textContent = multResult;
  document.getElementById("multiplication").appendChild(h1);
});
