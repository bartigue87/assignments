let square = document.getElementById("container");

function handleMouseOver() {
  square.style.backgroundColor = "blue";
}

function handleClick() {
  square.style.backgroundColor = "red";
}

function handleDblClick() {
  square.style.backgroundColor = "green";
}

function handleWheel() {
  square.style.backgroundColor = "orange";
}
square.addEventListener("mouseover", handleMouseOver);

square.addEventListener("click", handleClick);

square.addEventListener("dblclick", handleDblClick);

document.body.addEventListener("wheel", handleWheel);
