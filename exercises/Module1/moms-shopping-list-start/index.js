document.getElementById("add-todo").addEventListener("submit", function(e) {
  e.preventDefault();
  const input = document.getElementById("title");
  const newItem = document.createElement("li");

  newItem.textContent = input.value;
  document.getElementById("list").appendChild(newItem);

  input.value = "";
  const editButton = document.createElement("button");
  const xButton = document.createElement("button");

  editButton.textContent = "edit";
  xButton.textContent = "X";

  newItem.appendChild(editButton);
  newItem.appendChild(xButton);

  xButton.addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("list").removeChild(newItem);
    newItem.removeChild(editButton);
    newItem.removeChild(xButton);
  });

  editButton.addEventListener("click");
});

// add-todo.addEventlistener("submit", (e) =>{
//     e.preventDefault()
//     const li = document.createElement("li")
//     const div = document.createElement("div")
//     const xButton = document.createElement("button")
//     const eButton = document.createElement("button")
//     div.textContent = addTodo.title.value
//     div.className = "title"
//     eButton.type = "submit"
//     eButton.textContent = "edit"
//     xButton.type = "click"
//     xButton.textContent = "x"

//     xButton.addEventListener("click", (e) =>{
//         e.preventDefault()
//         list.removeChild(li)
//         li.removeChild(div)
//         li.removeChild(eButton)
//         li.removeChild(xButton)
//     })
//     list.appendChild(li)
//     li.appendChild(div)
//     li.appendChild(eButton)
//     li.appendChild(xButton)
// })
