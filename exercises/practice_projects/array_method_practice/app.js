const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionaireBtn = document.getElementById("show-millionaire");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// fetch random user and add money

async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  };
  addData(newUser);
}

// Double money
function doubleMoney() {
  data = data.map(function(user) {
    return { ...user, money: user.money * 2 };
  });
  updateDOM();
}

//sort in order
function sortByRichest() {
  data.sort(function(a, b) {
    return b.money - a.money;
  });
  updateDOM();
}

//filter millionaires
function filterMillionaires() {
  data = data.filter(function(user) {
    return user.money > 1000000;
  });
  updateDOM();
}

//calculate total wealth
function totalWealth() {
  const wealth = data.reduce(function(acc, user) {
    return (acc += user.money);
  }, 0);
  const wealthEl = document.createElement("div");
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
    wealth
  )}</strong></h3>`;
  main.appendChild(wealthEl);
}

//add new obj to data arr
function addData(obj) {
  data.push(obj);

  updateDOM();
}

// update DOM
function updateDOM(providedData = data) {
  //clear the main div
  main.innerHTML = "<h2><strong>Person</strong>Wealth</h2>";

  providedData.forEach(item => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

// format number as money
function formatMoney(number) {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

//Event Listeners

addUserBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
sortBtn.addEventListener("click", sortByRichest);
showMillionaireBtn.addEventListener("click", filterMillionaires);
calculateWealthBtn.addEventListener("click", totalWealth);
