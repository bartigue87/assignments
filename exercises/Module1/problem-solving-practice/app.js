// Write a function that takes an array of numbers and returns the largest (without using Math.max())

function largest(arr) {
    for (let i = 0; i < arr.length - 1; i++){
        if(arr[i] > arr[i+1])
            return arr[i]
    }

}

// var result = largest([12,234,34,43,1])
// console.log(result)

function lettersWithStrings(arr, str){
    for (let i = 0; i < arr.length; i++){
        if(arr[i].includes(str)){
            return arr[i];
        }
    }
}
// var result = lettersWithStrings(["hello", "world","crazy","night","train"], "i")
// console.log(result)

function isDivisible(num1, num2){
    if (num1 % num2 === 0){
        return "true"
    } else return "false"
}
var result = isDivisible(16,5)
console.log(result)