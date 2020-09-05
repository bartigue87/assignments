// const data = [
//   { state: "UT", city: "Salt Lake City" },
//   { state: "CA", city: "San Diego" },
//   { state: "CA", city: "San Francisco" },
//   { state: "CO", city: "Denver" }
// ];

// function makeStateObj(arr) {
//   const result = {};
//   for (let i = 0; i < arr.length; i++) {
//     const { state, city } = arr[i];
//     // if result doesn't have a .arr[i].state
//     // result.arr[i].state = []
//     // ex: if result doesnt have a .UT
//     if (!result[arr[i].state]) {
//       result[state] = [city];
//     }
//     // result.UT = ["salt lake city"]
//     //else
//     else {
//       result[state].push(city);
//     }
//     // result.push(city)
//   }
//   return result;
// }

// console.log(makeStateObj(data));

// const answer = {
//   UT: ["Salt Lake City"],
//   CA: ["San Diego", "San Francisco"],
//   CO: ["Denver"]
// };

// Project Euler #1
// let total = 0;

// for (i = 0; i < 1000; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     total += i;
//   }
//   console.log(total);
// }

// // Project euler #2
// var fib = [0, 1];
// var i = 0;
// var sum = 0;
// while (fib[0] + fib[1] < 4000000) {
//   i = fib[0] + fib[1];
//   fib[0] = fib[1];
//   fib[1] = i;

//   if (i % 2 === 0) {
//     sum += i;
//   }
// }

// console.log(sum);

//project euler #3

function getPrime(number) {
  let factor = 2;
  while (number != factor) {
    if (number % factor === 0) {
      number = number / factor;
    } else {
      factor++;
    }
  }
  return factor;
}

getPrime(600851475143);

console.log(getPrime(600851475143));
