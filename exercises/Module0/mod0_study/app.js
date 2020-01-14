// for (var i = 0; i<=100; i++){
// function addLetter(i){
//     if (i <= 64){
//             return "F"
//         } else if (i >= 65 && i <= 74){
//             return "D"
//         } else if (i >= 75 && i <= 83){
//             return "C"
//         } else if (i >= 84 && i <= 93){
//             return "B"
//         } else {
//             return "A"
//         }
//     } 
// }

//     var result = addLetter(96)
//         console.log(result)

// function calibrateScale(unit, howMany){
//     return unit + " pounds" 
// }
// var result = calibrateScale(10)
// console.log(result)

// var door = {
//     height: "10 feet",
//     width: "4 feet"
// }
//  const animals = ["dog", "cat", "cow"]

// const houses = ["brick", "brown-stone", "small", "wooden"]
// for (var i = 0; i < houses.length; i++){
//     console.log(houses[i])
// }

// function add(string, letter){
//     return string + "s"
// }
// var result = add("dog")
// console.log(result)

// Write a function that takes an array 
// as an argument and returns the last element 
// of that array.  The array size can be any 
// size between 1 - 100.

// var arr = [1,2,3,4,5,6,7,8,9,10]
// function thisArray(arr){
//     return arr[arr.length-1]
 

// }
// var result = thisArray(arr)
// console.log(result)

// var button = document.getElementById("button")
// function handleButtonClick ()

// var root = document.getElementById("root")
// var header = document.createElement("h1")
// header.textContent = "Hello, please click me"
// root.appendChild(header)

// header.addEventListener("click", function(){
//     var newDiv = document.createElement("div")
//     newDiv.style.backgroundColor = "red"
//     newDiv.textContent = "hello, now click me"
//     header.appendChild(newDiv)
    

//     newDiv.addEventListener("click", function(){
//         var nextDiv = document.createElement("div")
//         nextDiv.textContent = "bye"
//         nextDiv.style.backgroundColor = "blue"
//         newDiv.appendChild(nextDiv)
//     })  
// // })

// var root = document.getElementById("root")
// var header = document.createElement("h1")
// header.textContent = "Click Me"
// root.appendChild(header)

// header.addEventListener("click", function(){
//     var newDiv = document.createElement("div")
//     newDiv.style.backgroundColor = "red"
//     newDiv.textContent = "bye"
//     newDiv.style.margin = "20pt"
//     header.appendChild(newDiv)
// })

// var root = document.getElementById("root")
// var header = document.createElement("h1")
// header.textContent = "Click Me"
// header.style.backgroundColor = "red"
// root.appendChild(header)

// header.addEventListener("click", function(){
//     var newDiv = document.createElement("div")
//     newDiv.textContent = "Hello"
//     newDiv.style.backgroundColor = "white"
//     newDiv.style.margin = "15pt"
//     header.appendChild(newDiv)
// })

var root = document.getElementById("root")
var header = document.createElement("h1")
header.textContent = "Click Me"
header.style.backgroundColor = "red"

root.appendChild(header)

header.addEventListener("click", function(){
    var newDiv = document.createElement("div")
    newDiv.textContent = "Hello"
    newDiv.style.backgroundColor = "white"
    newDiv.style.margin = "15pt"
    header.appendChild(newDiv)
})