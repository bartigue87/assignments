const arr = [3, 43, 6, 7, 8, 2, 1]

// const result = arr.filter(function(num){
//     if (num >= 5){
//         return true
//     }
// })
// console.log(result)

// const result = arr.filter(function(num){
//     if (num %2 === 0){
//         return true
//     }
// })
// console.log(result)

const myArr = ["dog", "wolf", "by", "family", "eaten", "camping"]

// const result = arr.filter(function(str){
//     if (str.length <= 5){
//         return true
//     }
// })
// console.log(result)

// const people = [
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]

// const result = people.filter(function(person){
//     if (person.member === true){
//         return true
//     }
// })
// console.log(result)

const people = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

const result = people.filter(function(person){
    if (person.age >= 18){
        return true
    }
})
console.log(result)