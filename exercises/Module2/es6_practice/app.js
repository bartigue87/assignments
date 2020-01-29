// let names = "John"
// let age = 101

// function runForLoop(pets) {
//     const petObjects = []
//     let name
//     for (let i = 0; i < pets.length; i++) {
//         const pet = { type: pets[i] }
//         name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", names)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(carrot => vegetable.type = "carrot", vegetable.name = carrot)
// }
// console.log(carrot)

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter(person => person.friendly)
// }
// console.log(people)

// var doMathSum = (a, b) => a + b

// var produceProduct = (a, b) => a * b

// const printString = (firstName = "Jane", lastName = "Doe", age= 100) => `Hi ${firstName} ${lastName}, how does it feel to be ${age} `

// console.log(printString("Kat", "Stark", 40))

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 const filterForDogs = (arr) => arr.filter(animal => {
         if (animal.type === "dog") {
             return true
         } else {
             return false
         }
     })
 
// const hello = (location, name) =>`Hi ${name}! 
// Welcome to ${location}. 
// I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`


// console.log(hello("Hawaii", "Janice"))
