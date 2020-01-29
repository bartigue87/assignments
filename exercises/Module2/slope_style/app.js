// function collectAnimals(...animals) {  
//     console.log(animals)
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// // ["dog", "cat", "mouse", "jackolope", "platypus"]

// const fruit = ["apple", "pear"]
// const sweets = ["cake", "pie"]
// const vegetables = ["carrot"]

// function combineFruit(fruit, sweets, vegetables){
//     return {fruit, sweets, vegetables}
// }
// console.log(combineFruit(fruit, sweets, vegetables))

// combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"])

// const vacation = {  
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   };
  
//   function parseSentence({location, duration}){
//     return `We're going to have a good time in ${location} for ${duration}`
//   }
//   console.log(parseSentence(vacation))

// function returnFirst(items){
//     const {firstItem} = items[0]; /*change this line to be es6*/
//     return firstItem
// }

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     const [firstFav, secondFav, thirdFav] = arr
//     return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav
// }

// console.log(returnFavorites(favoriteActivities))
// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// function combineAnimals(...arr) {  
//     return [...arr]
// }
// console.log(combineAnimals(...realAnimals, ...magicalAnimals, ...mysteriousAnimals))

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))

// // ["dog", "cat", "mouse", "jackolope", "platypus"]

function product(a, b, c, d, e) {  
    var numbers = [a,b,c,d,e];
  
    return numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
  }