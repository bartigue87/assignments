var header = document.getElementById("header")
var h1 = document.createElement("h1")
h1.textContent = "JavaScript Made This!!"
header.appendChild(h1)

var name1 = document.createElement("span")
name1.textContent = "Brandon "
name1.style.color = "peachpuff"
header.appendChild(name1)

var wrote = document.createElement("span")
wrote.textContent = "wrote the JavaScript"
wrote.style.color = "black"
name1.appendChild(wrote)


var message1 = document.getElementById("message-left1")
message1.textContent = "Hey, how do you like V School?"

var message2 = document.getElementById("message-right1")
message2.textContent = "I love it! Its great!"

var message3 = document.getElementById("message-left2")
message3.textContent = "Awesome! I think I'm going to sign up"

var message4 = document.getElementById("message-right2")
message4.textContent = "Yeah you definitely should, you will love it too"

document.getElementById("clear").addEventListener("click", function() {
    message1.textContent = ""
    message1.style.backgroundColor = "white"
    message2.textContent = ""
    message2.style.backgroundColor = "white"
    message3.textContent = ""
    message3.style.backgroundColor = "white"
    message4.textContent = ""
    message4.style.backgroundColor = "white"
})

document.getElementById("theme-drop-down").addEventListener("change", function() {
     document.body.style.backgroundColor = "red"
})










