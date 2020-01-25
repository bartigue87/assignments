var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click me: " + count;
};
const counter = count
localStorage.setItem("click", counter)
const click = localStorage.getItem("click")
