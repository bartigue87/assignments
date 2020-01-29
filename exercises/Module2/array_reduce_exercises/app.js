// total of all numbers
arr = [1,2,3]
// const total = arr.reduce(function(final, num){
//     final += num
//     return final
// })

// console.log(total)

// turn an array of numbers into a long string of all those numbers
// const string = arr.reduce(function(final, str){
//     final = final + str.toString()
//     return final
// })

// console.log(string)

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]

//Turn an array of voter objects into a count of how many people voted
// const totalVotes = voters.reduce(function(final,voter){
//     if (voter.voted){
//         final++
//     }
//     return final
// },0)
// console.log(totalVotes)

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]

//Given an array of all your wishlist items, figure out how much it would 
//cost to just buy everything at once

// const total = wishlist.reduce(function(final, totalPrice){
//     final = final + totalPrice.price
//     return final
// },0)
// console.log(total)

//Given an array of arrays, flatten them into a single array
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

// const flatten = arrays.reduce(function(final, array){
//     final = final.concat(array)
//     return final
// },[])
// console.log(flatten)

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

// Given an array of potential voters, return an object representing the results of the vote
// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many
// from 36-55, and how many of each of those age ranges actually voted. The resulting object containing 
// this data should have 6 properties. See the example output at the bottom.

const voterResults = voters.reduce(function(final, vote){
    if (vote.age >= 18 && vote.age <=25){
        final.youth++
        if (final.voted){
            return final.youngVotes++
        }
    } else if (vote.age >= 26 && vote.age <=35){
        final.mids++
        if (final.voted){
            return final.midVotes++
        }
    } else if (vote.age >= 36 && vote.age <=55){
        final.olds++
        if (final.voted){
            return final.oldVotes++
        }
    }
},{youngVotes: 0, youth: 0, midVotes: 0, mids: 0, oldVotes: 0, olds: 0})
console.log(voterResults)