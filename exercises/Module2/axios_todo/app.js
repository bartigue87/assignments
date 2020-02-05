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
            document.body.appendChild(h1)
            delButton = document.createElement("button")
            delButton.textContent = "Remove"
            delButton.style.margin = "10px"
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

axios.get("https://api.vschool.io/brandonartigue/todo").then(function(response){
    var todoList = response.data;
})

var deleteTodo = function(id) {
    
        axios.delete("https://api.vschool.io/brandonartigue/todo/" + id).then(function(response) {
            alert("Your todo was successfully deleted!")
        }, function(response) {
            alert("There was a problem deleting your todo :(");
        });
    };

    