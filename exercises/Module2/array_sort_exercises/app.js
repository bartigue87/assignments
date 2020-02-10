const arr = [1, 3, 5, 2, 90, 20];

// smallest to largest
// arr.sort(function(a,b){
//     return a-b
// })
// console.log(arr)

//largest to smallest
// arr.sort(function(a,b){
//     return b-a
// })
// console.log(arr)

const strArr = ["dog", "wolf", "by", "family", "eaten"];

//shortest string to longest
// strArr.sort(function(a,b){
//     return a.length -b.length
// })
// console.log(strArr)

//alphabetically
// strArr.sort()
// console.log(strArr)

const people = [
  { name: "Quiet Samurai", age: 22 },
  { name: "Arrogant Ambassador", age: 100 },
  { name: "Misunderstood Observer", age: 2 },
  { name: "Unlucky Swami", age: 77 }
];

//by age
people.sort(function(a, b) {
  return a.age - b.age;
});
console.log(people);
