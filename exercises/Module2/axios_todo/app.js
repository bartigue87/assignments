// const axios = require('axios');
// axios.get("https://api.vschool.io/brandonartigue/todo")
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))
let delButton

function getTodo(){
    axios.get("https://api.vschool.io/brandonartigue/todo")
        .then(response => {
        for(let i = 0; i < response.data.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = response.data[i].title
            h1.style.marginLeft = "20px"
            document.body.appendChild(h1)
            checkbox = document.createElement("input")
            checkbox.type = "checkbox"
            checkbox.style.margin = "10px"
            h1.appendChild(checkbox)
            checkbox.addEventListener("click", function(){
                if (response.data[i].completed === false){
                    putTodo1(response.data[i]._id)
                } else {
                    putTodo2(response.data[i]._id)
                }    
            })
            if (response.data[i].completed === true){
                h1.style.textDecoration = "line-through"
            }
            delButton = document.createElement("button")
            delButton.textContent = "Remove"
            delButton.style.margin = "5px"
            h1.appendChild(delButton)
            delButton.addEventListener("click", function(){
                deleteTodo(response.data[i]._id)
            })
        }
    })
.catch(error => console.log(error))
}

getTodo()

const todoForm = document.todoform
todoForm.addEventListener("submit", function(event){
    event.preventDefault()

    const newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value

    }
    todoForm.title.value = ""
    todoForm.price.value = ""
    todoForm.description.value = ""
    todoForm.imgUrl.value = ""


    axios.post("https://api.vschool.io/brandonartigue/todo", newTodo)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
})

// delButton.addEventListener("click", function(){
//     axios.delete()
//         .then(response => getTodo())
//         .catch(error => console.log(error))
// })

// axios.get("https://api.vschool.io/brandonartigue/todo").then(function(response){
//     var todoList = response.data;
// })

var deleteTodo = function(id) {
    
        axios.delete("https://api.vschool.io/brandonartigue/todo/" + id).then(function(response) {
            alert("Your todo was successfully deleted!")
        }, function(response) {
            alert("There was a problem deleting your todo :(");
        });
    };

    const update1 = {
        completed: "true"
    }

    const update2 = {
        completed: "false"
    }

 var putTodo1 = function(id){

     axios.put("https://api.vschool.io/brandonartigue/todo/" + id, update1).then(function(response) {
        alert("Your todo was successfully completed")
    }, function(response) {
        alert("There was a problem completing your todo :(");
    });
 }

 var putTodo2 = function(id){

    axios.put("https://api.vschool.io/brandonartigue/todo/" + id, update2).then(function(response) {
        alert("Your todo has not been completed")
    }, function(response) {
        alert("There was a problem :(");
    });
 }