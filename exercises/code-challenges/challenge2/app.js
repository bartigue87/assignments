// 1. understand the problem
// 2. pseudo code/ make a plan
// 3. carry out the plan
//4. look back / refactor

function noDups(str) {
  let result = "";
  // loop through the data so we can access each character individually
  for (let i = 0; i < str.length; i++) {
    //check if the current character is a duplicate
    if (result.indexOf(str[i]) === -1) {
      result += str[i]; // same as: result = result + str[i]
    }
  }
  // return the result
  return result;
}
// or
const noDupsCool = str => Array.from(new Set(str)).join("");

console.log(noDups("bookkeeper larry")); // "bokepr lay"
console.log(noDupsCool("bookkeeper larry"));
