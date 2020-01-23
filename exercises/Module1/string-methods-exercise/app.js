// capilizeAndLowercase("Hello") // => "HELLOhello"

// function capitlizeAndLowercase(string){
//     return string.toUpperCase() + string.toLowerCase()
// }

// var result = capitlizeAndLowercase("hello")
// console.log(result)

// findMiddleIndex("Hello") // => 2

function findMiddleIndex(string){
    return Math.floor(string.length / 2)
}
var result = findMiddleIndex("hello world")
console.log(result)

function returnFirstHalf(string){
    return string.slice(0, Math.floor(string.length / 2))
}

var result = returnFirstHalf("Hello World")
console.log(result)

function capilizeAndLowercase(string){
    return string.toUpperCase(string.slice(0, string.toUpperCase(Math.floor(string.length / 2)))) 
}

var result = capilizeAndLowercase("Hello World")
console.log(result)