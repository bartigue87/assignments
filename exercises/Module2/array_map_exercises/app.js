// arr = [1,2,3,4,5,6,7,8,9,10]

// const result = arr.map(num => num*2)
const result = arr.map(function(num) {
  return num * 2;
});

// console.log(result)

// const result = arr.map(num => JSON.stringify(num))

// console.log(result)

// arr = ["john", "JACOB", "jinGleHeimer", "schmidt"]

// const result = arr.map(function(str){
//     return str.toUpperCase()
// })
// console.log(result)

const people = [
  {
    name: "Angelina Jolie",
    age: 80
  },
  {
    name: "Eric Jones",
    age: 2
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kayne West",
    age: 16
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
];

//   const result = people.map(function(names){
//         return names.name
//   })
//   console.log(result)

// const result = people.map(function(names){
//     if (names.age > 16) {
//         return names.name + " can go to The Matrix!!"
//     } else {
//         return names.name + " is under age!!"
//     }
// })
// console.log(result)

const result = people.map(function(obj) {
  return "<h1>" + obj.name + "</h1>" + "<h2>" + obj.age + "</h2>";
});
console.log(result);
